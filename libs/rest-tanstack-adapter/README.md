# `@crudx/rest-tanstack-adapter`

REST transport adapter for [`@crudx/core`](../core/README.md), backed
by [`@tanstack/react-query`](https://tanstack.com/query/latest).

## Install

```bash
yarn add @crudx/rest-tanstack-adapter @crudx/core @tanstack/react-query
```

`@tanstack/react-query` is a peer dependency — wrap your app in a
`QueryClientProvider` as you would for any TanStack Query usage.

## Usage

```ts
import { CRUD } from '@crudx/core';
import { restGet, restList, restMutation } from '@crudx/rest-tanstack-adapter';

const list = restList<BankList, ListVars>({
  resource: 'banks',
  fetch: ({ variables, signal }) =>
    fetch(`/api/banks?${qs(variables)}`, { signal }).then((r) => r.json()),
});

const get = restGet<Bank, GetVars>({
  resource: ['banks', 'detail'],
  fetch: ({ variables }) =>
    fetch(`/api/banks/${variables.id}`).then((r) => r.json()),
});

const create = restMutation<Bank, CreateVars>({
  resource: ['banks', 'create'],
  request: ({ variables }) =>
    fetch('/api/banks', {
      method: 'POST',
      body: JSON.stringify(variables),
    }).then((r) => r.json()),
});

new CRUD<BankSchemata>('bank', {
  list:   { key: 'banks', query: list },
  get:    { key: 'banks', query: get },
  create: { key: 'banks', query: create },
});
```

## Cache invalidation

Pass `invalidates` to `restMutation` and the adapter will call
`queryClient.invalidateQueries` for each key on success — the bound
list/get queries refetch automatically.

```ts
const create = restMutation<Bank, CreateVars>({
  resource: ['banks', 'create'],
  request: ({ variables }) =>
    fetch('/api/banks', { method: 'POST', body: JSON.stringify(variables) })
      .then((r) => r.json()),
  invalidates: 'banks', // or [['banks'], ['analytics', 'banks']]
});
```

String keys are matched as prefix segments by TanStack Query, so the
example above invalidates every list/get registered under `'banks'`.

## Pagination presets

Wire either preset into `CRUD`'s `paging` option to skip the manual
extract / compose plumbing for the two common REST page shapes.

```ts
import { CRUD } from '@crudx/core';
import { restOffsetPagination, restCursorPagination } from '@crudx/rest-tanstack-adapter';

new CRUD<BankSchemata>('bank', schema, {
  paging: {
    strategy: 'CUSTOM',
    pageSize: 25,
    custom: restOffsetPagination(),
    // or, with a non-default response shape:
    //   custom: restOffsetPagination({
    //     pageKey: 'p',
    //     pageSizeKey: 'limit',
    //     extract: { list: (r) => r.results, total: (r) => r.count },
    //   }),
  },
});
```

`restOffsetPagination` defaults assume a `{ data, total }` response
with `?page=N&pageSize=M` query variables. `restCursorPagination`
defaults assume `{ data, nextCursor, prevCursor }` with `?cursor=…&limit=…`.

## Status

The core wiring (transport contract, mutation invalidation, pagination
presets) is in place. Roadmap:

- An optional SWR-backed sibling (`@crudx/rest-swr-adapter`) that
  mirrors the same surface.
- `useInfiniteQuery`-based "load more" mode for cursor APIs that
  prefer infinite scroll over discrete pages.

Contributions welcome.
