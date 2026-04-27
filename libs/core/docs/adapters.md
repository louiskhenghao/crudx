# Building a transport adapter for `@crudx/core`

This is the reference doc for adapter authors. The high-level orientation
(naming, available adapters, how to contribute) lives in the root
[`ADAPTERS.md`](../../../ADAPTERS.md).

## 1. The transport contract

`@crudx/core` is fully transport-agnostic. It consumes hooks that match the
shapes in [`libs/core/src/@types/transport.ts`](../src/@types/transport.ts).
There are three of them, mirroring Apollo's `useQuery` / `useLazyQuery` /
`useMutation`:

```ts
// non-lazy query — refetches automatically when variables change
type TransportQueryHook<TData, TVariables> = (
  options?: TransportQueryHookOptions<TData, TVariables>
) => TransportQueryResult<TData, TVariables>;

// lazy query — returns a [trigger, result] tuple, like useLazyQuery
type TransportLazyQueryHook<TData, TVariables> = (
  options?: TransportLazyQueryHookOptions<TData, TVariables>
) => TransportLazyQueryResult<TData, TVariables>;

// mutation — returns a [trigger, result] tuple, like useMutation
type TransportMutationHook<TData, TVariables> = (
  options?: TransportMutationHookOptions<TData, TVariables>
) => TransportMutationTuple<TData, TVariables>;
```

The result/option shapes are intentionally permissive supersets — Apollo's
own types satisfy them out of the box, and a thin REST/TanStack/SWR adapter
can map onto them with very little code. Look at the actual definitions in
`transport.ts` for the full surface; the highlights are:

- `TransportQueryResult` — `{ data, loading, error, called, variables, refetch, … }`.
- `TransportLazyQueryResult` — `[trigger, TransportQueryResult]`.
- `TransportMutationTuple` — `[trigger, { data, loading, error, called, reset }]`.
- `onCompleted` / `onError` — caller callbacks the adapter must invoke on
  success / failure so `CRUD`'s mutation pipeline (toast, refetch, close
  modal) fires correctly.

## 2. Where the contract is consumed

Each `CrudSchemata` slot holds a transport hook in `query`:

```ts
type CrudSchemata<TSchema> = {
  list?:    { key: string; query: TransportQueryHook<...>;     options?: ... };
  get?:     { key: string; query: TransportLazyQueryHook<...>; options?: ... };
  create?:  { key: string; query: TransportMutationHook<...>;  options?: ... };
  update?:  { key: string; query: TransportMutationHook<...>;  options?: ... };
  delete?:  { key: string; query: TransportMutationHook<...>;  options?: ... };
  exports?: { key: string; query: TransportMutationHook<...>;  options?: ... };
};
```

At runtime, `@crudx/core` calls `slot.query(merged)` where `merged` is
`{ ...slot.options, ...callerOptions, variables: { ...slot.options.variables, ...callerOptions.variables } }`.
**Order matters**: caller options win on top-level keys, slot-level options
provide defaults, and `variables` are deep-merged. Your adapter should not
fight this — accept whatever options you receive and forward to your client.

See `libs/core/src/crud/hooks/query.tsx` and
`libs/core/src/crud/mutation/resource.ts` for the consumer code.

## 3. Step-by-step: writing an adapter

Below is a sketch for an SWR-based REST adapter (`@crudx/rest-swr-adapter`).
Replace SWR with whatever client you're wrapping.

### 3.1 Package layout

```
libs/rest-swr-adapter/
  package.json        # name: "@crudx/rest-swr-adapter"
  project.json        # name: "rest-swr-adapter"
  src/
    index.ts          # raw factories + types + adapter export
    adapter.ts        # createRestSwrAdapter (the .schema() builder)
  README.md
  jest.config.ts
  tsconfig.json
  tsconfig.lib.json
  tsconfig.spec.json
```

The Nx `project.json` template can be copy-pasted from
`libs/rest-tanstack-adapter/project.json` and search-replaced. Don't forget
the `tsconfig.base.json` `paths` entry pointing at your new `src/index.ts`.

### 3.2 Peer dependencies

```json
{
  "name": "@crudx/rest-swr-adapter",
  "peerDependencies": {
    "@crudx/core": "^0.0.27",
    "swr": ">=2",
    "react": ">=17"
  }
}
```

The client library is **always** a peer dep. Adapters share the consumer's
client instance — they don't ship their own.

### 3.3 The raw factories

Match the surface of an existing adapter so consumers get a consistent feel
across packages. For REST/SWR, that means:

```ts
// libs/rest-swr-adapter/src/index.ts
import useSWR, { useSWRConfig } from 'swr';
import type {
  TransportQueryHook,
  TransportLazyQueryHook,
  TransportMutationHook,
  TransportOperationVariables,
} from '@crudx/core';

export const restList = <TData, TVariables extends TransportOperationVariables>(
  options: { resource: string; fetch: (ctx: { variables: TVariables }) => Promise<TData> }
): TransportQueryHook<TData, TVariables> => {
  return (inOptions) => {
    const variables = (inOptions?.variables ?? {}) as TVariables;
    const swr = useSWR(
      inOptions?.skip ? null : [options.resource, variables],
      () => options.fetch({ variables }),
    );

    // map SWR's shape onto the transport contract:
    return {
      data: swr.data,
      loading: swr.isLoading,
      error: swr.error,
      called: swr.data !== undefined || swr.error !== undefined,
      variables,
      refetch: async () => {
        const data = await swr.mutate();
        return { data };
      },
    };
  };
};
```

Repeat the same pattern for `restGet` (lazy, returns a tuple) and
`restMutation` (returns a tuple, supports `invalidates`).

**Wire `onCompleted` / `onError`.** `@crudx/core` relies on them to drive
mutation toasts and list refetches. If your client has `onSuccess` /
`onError` callbacks, chain them; otherwise call the user-supplied
`onCompleted(data)` after a successful resolve and `onError(err)` after a
rejection.

### 3.4 The `.schema()` builder (recommended)

After the raw factories work, expose them through a `createRestSwrAdapter`
function that mirrors the pattern in
[`libs/rest-tanstack-adapter/src/adapter.ts`](../../rest-tanstack-adapter/src/adapter.ts):

```ts
const swr = createRestSwrAdapter({ /* shared defaults */ });

const postsSchema = swr.schema<PostSchemata>({
  list:   { key: 'posts', resource: 'posts', fetch: ... },
  get:    { key: 'post',  resource: 'post',  fetch: ... },
  create: { key: 'post',  resource: 'post',  invalidates: 'posts', request: ... },
});

<CrudPanelView schema={postsSchema} />
```

The builder's value isn't the syntax — it's the **shared config slot**.
Adapter-level defaults (default headers, default retry policy, default
auth token resolver) live on the adapter instance, where they can be set
once and forgotten. New shared concerns can be added to
`<Adapter>Config` later without breaking the call sites.

Keep the raw factories exported alongside the builder. Consumers with
partial schemas, mixed transports per resource, or unusual lifecycle
requirements need them.

### 3.5 Pagination / cache invalidation helpers

Optional but appreciated. Look at `restOffsetPagination` and
`restCursorPagination` in
[`libs/rest-tanstack-adapter/src/index.ts`](../../rest-tanstack-adapter/src/index.ts)
for the shape — they pre-fill the `extract`/`compose` callbacks the
core's `'CUSTOM'` paging strategy expects.

If your client has a cache, add a way to invalidate keys after mutations
(the TanStack adapter's `invalidates` option is the reference).

## 4. Testing your adapter

Write a smoke demo under `apps/example/src/pages/test-crud-public-<your-adapter>.tsx`
mirroring the existing four demos. It should:

- Hit a public, no-auth API (JSONPlaceholder, GraphQLZero, dummyjson, …).
- Wire all six slots (`list` / `get` / `create` / `update` / `delete` plus
  optionally `exports`).
- Use `<CrudPanelView />` so the full Crud surface is exercised.
- Run inside `pnpm nx run example:serve`.

Run through list paging, detail open, create, update, and delete by hand.
The four existing demos catch every hook shape; if yours behaves
identically, the contract is satisfied.

Unit tests are welcome but not required for a v0 — the smoke demo plus
TypeScript catching contract drift covers most of what matters.

## 5. Release & versioning

`@jscutlery/semver` reads conventional-commit scopes that match the
project name in `project.json`. The scope **is** the lib's directory name:

```
feat(rest-swr-adapter): support useSWRInfinite for cursor APIs
fix(rest-swr-adapter): forward onError from request callback
```

Each adapter is versioned independently. The root `package.json` ships a
`release:<adapter>` script per package; copy the existing
`release:rest-tanstack-adapter` line and rename. See the
[release section in the root README](../../../README.md#release) for details.

## 6. Naming, again

Adapter packages must be named:

```
@crudx/<transport>-<client>-adapter
```

A PR introducing `@crudx/rest-swr` (no `-adapter` suffix) or `@crudx/swr`
(no transport segment) will be asked to rename before merge. The convention
is small but load-bearing: it's the first thing a new user sees on `yarn add`,
and a consistent scheme lets them pick correctly without reading READMEs.
