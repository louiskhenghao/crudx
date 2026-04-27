# Crudx Packages

`@crudx` is a small set of React packages that orchestrate **Create / Read /
Update / Delete** flows on top of any data-fetching client. The core is
transport-agnostic; GraphQL and REST adapters live as siblings, and two UI
packages (Material UI + shadcn/ui) render the same surface so you can pick the
look that matches your app.

## Available Packages

| Package | Layer | Description |
| --- | --- | --- |
| [`@crudx/core`](https://github.com/louiskhenghao/crudx/blob/main/libs/core/README.md) | Foundation | The `CRUD` class, schema types, paging strategies, and the `Transport*` adapter contract. No transport dependency. |
| [`@crudx/common`](https://github.com/louiskhenghao/crudx/blob/main/libs/common/README.md) | Foundation | Shared hooks and utilities (`usePaginationHook`, `useRowSelectionHook`, `formatNumbering`, …) consumed by the UI packages. |
| [`@crudx/graphql-apollo-adapter`](https://github.com/louiskhenghao/crudx/blob/main/libs/graphql-apollo-adapter/README.md) | Transport | GraphQL adapter on top of [Apollo Client](https://www.apollographql.com/docs/react/). Identity helpers (`graphqlList`, `graphqlGet`, `graphqlMutation`) + `createGraphqlApolloAdapter().schema()` builder. |
| [`@crudx/rest-tanstack-adapter`](https://github.com/louiskhenghao/crudx/blob/main/libs/rest-tanstack-adapter/README.md) | Transport | REST adapter on top of [TanStack Query](https://tanstack.com/query/latest). Cache-invalidation, offset / cursor pagination presets, and `createRestTanstackAdapter().schema()` builder. |
| [`@crudx/mui`](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/README.md) | UI | Material UI + Emotion implementation of the CRUD surface. |
| [`@crudx/shadcn`](https://github.com/louiskhenghao/crudx/blob/main/libs/shadcn/README.md) | UI | Tailwind + Radix (shadcn-style) implementation, backed by [`@tanstack/react-table`](https://tanstack.com/table). API-compatible with `@crudx/mui` so imports can be swapped without relearning the surface. |

A typical app picks one **transport adapter** (`graphql-apollo-adapter` or
`rest-tanstack-adapter`) and one **UI package** (`mui` or `shadcn`); the core +
common packages are shared by all combinations. Adapter packages are named
`@crudx/<transport>-<client>-adapter` so the underlying client (Apollo,
TanStack, future SWR, …) is visible at install time — see
[`ADAPTERS.md`](./ADAPTERS.md) for the convention and the adapter-author guide.

## Picking a stack

**Transport adapter — pick one:**

- `@crudx/graphql-apollo-adapter` — if your backend speaks GraphQL or you already have an Apollo Client running.
- `@crudx/rest-tanstack-adapter` — for REST APIs (or anywhere TanStack Query already fits). Comes with `restOffsetPagination` / `restCursorPagination` presets and built-in mutation cache invalidation.

**UI package — pick one:**

- `@crudx/mui` — if your app is already on Material UI + Emotion.
- `@crudx/shadcn` — if your app uses Tailwind (or is greenfield) and you prefer Radix primitives + shadcn-style theming.

Mixing both UI packages in one app works (they don't share runtime state) but typically isn't recommended — the MUI `Preflight` / Emotion and Tailwind `@tailwind base` reset can compete on the same page.

## Getting started

```bash
yarn install

# run the example app
yarn example:dev   # http://localhost:3333
```

The example app (`apps/example`) ships a polished landing page at `/` and
covers the full **transport × UI matrix** with live, public-API CRUD demos:

|            | GraphQL (Apollo)                   | REST (TanStack Query)           |
| ---------- | ---------------------------------- | ------------------------------- |
| **MUI**    | `/test-crud-public-graphql`        | `/test-crud-public-rest`        |
| **shadcn** | `/test-crud-public-graphql-shadcn` | `/test-crud-public-rest-shadcn` |

The GraphQL demos hit [GraphQLZero](https://graphqlzero.almansi.me/api); the
REST demos hit [JSONPlaceholder](https://jsonplaceholder.typicode.com). No
auth, no local backend, no codegen — Create / Read / Update / Delete all
wired live. Both adapters share the same `@crudx/core` orchestration; both UI
packages share the same surface, so the four demos are just different
combinations of the same primitives.

Two component-reference pages render every lower-level export next to its JSX
snippet:

- `/components-mui` — every primitive in `@crudx/mui`.
- `/components-shadcn` — the same surface in `@crudx/shadcn`.

The shadcn demos require the Tailwind setup documented below.

## Tailwind setup (for `@crudx/shadcn` consumers)

The shadcn package ships classnames only; Tailwind runs on the consumer side.

1. Install Tailwind:

   ```bash
   yarn add -D tailwindcss postcss autoprefixer
   ```

2. In `tailwind.config.js`, add `@crudx/shadcn`'s compiled output to `content`:

   ```js
   module.exports = {
     content: ['./src/**/*.{ts,tsx}', './node_modules/@crudx/shadcn/**/*.{js,mjs}'],
     // ...
   };
   ```

3. Paste the shadcn CSS-variable block into your global stylesheet (see [`libs/shadcn/README.md`](https://github.com/louiskhenghao/crudx/blob/main/libs/shadcn/README.md) for the full snippet).

`apps/example/tailwind.config.js` + `apps/example/src/pages/shadcn.css` are a working reference.

---

# Release

Each library in this repository is versioned **independently**. `@crudx/mui` /
`@crudx/shadcn` are alternative UI adapters and `@crudx/graphql-apollo-adapter`
/ `@crudx/rest-tanstack-adapter` are alternative transport adapters — a change
in one shouldn't force a republish
of the others. `@crudx/common` and `@crudx/core` are the foundation layer; bumps
there cascade into the UI packages automatically via [`@jscutlery/semver`](https://github.com/jscutlery/semver)'s `trackDeps`.

## Per-package release

```bash
yarn release:common                  # bumps @crudx/common
yarn release:core                    # bumps @crudx/core (cascades to mui + shadcn)
yarn release:graphql-apollo-adapter  # bumps @crudx/graphql-apollo-adapter
yarn release:rest-tanstack-adapter   # bumps @crudx/rest-tanstack-adapter
yarn release:mui                     # bumps @crudx/mui
yarn release:shadcn                  # bumps @crudx/shadcn
yarn release:all                     # bumps every lib that has unreleased commits in its scope
```

Each command runs the version bump, updates the lib's `package.json` + `CHANGELOG.md`, creates a git tag (`<project>@<version>` — e.g. `shadcn@0.1.0`), commits the change, and finally builds the lib into `dist/libs/<project>/`.

## Release type (patch / minor / major)

By default bumps are derived from conventional-commit messages (`fix:` → patch, `feat:` → minor, `BREAKING CHANGE:` → major). Force a specific bump level with:

```bash
yarn release:shadcn --releaseAs=minor
yarn release:shadcn --releaseAs=major
yarn release:shadcn --releaseAs=0.3.0   # any explicit version
```

## Commit convention

Only commits **scoped to the project being released** contribute to its changelog and version bump. Use conventional-commit scopes that match the lib name:

```
feat(shadcn): add data-table column resizing
fix(core): null guard in useCrudQuery
feat(rest-tanstack-adapter): add cursor pagination preset
chore(graphql-apollo-adapter): tidy exports
```

A bump in `@crudx/core` will auto-bump `@crudx/mui` and `@crudx/shadcn` (via `trackDeps`) because they declare `@crudx/core` as a `peerDependency`.

## First-time setup notes

- Tags are prefixed per project (`common@*`, `core@*`, `graphql-apollo-adapter@*`, `rest-tanstack-adapter@*`, `mui@*`, `shadcn@*`). Legacy `workspace@*` tags from the old sync-versioning scheme remain for history.
- The `version` Nx target lives on each lib's `project.json`; the root `project.json` no longer owns a workspace-wide version target.
