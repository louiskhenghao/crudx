# Crudx Packages

This repository is the main repository that hosted code that will be used to build crud application.

## Available Packages

| Package                                                                                   | Description                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@crudx/common`](https://github.com/louiskhenghao/crudx/blob/main/libs/common/README.md) | Shared hooks and utilities (`useDeepCompareEffect`, `usePaginationHook`, `formatNumbering`, …) consumed by the UI packages.                                                                                 |
| [`@crudx/core`](https://github.com/louiskhenghao/crudx/blob/main/libs/core/README.md)     | The `CRUD` class, schema types, and framework-agnostic CRUD orchestration. Drives both UI packages.                                                                                                         |
| [`@crudx/mui`](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/README.md)       | Material-UI + Emotion implementation.                                                                                                                                                                       |
| [`@crudx/shadcn`](https://github.com/louiskhenghao/crudx/blob/main/libs/shadcn/README.md) | Tailwind + Radix (shadcn-style) implementation, backed by [`@tanstack/react-table`](https://tanstack.com/table). API-compatible with `@crudx/mui` so imports can be swapped without relearning the surface. |

Choose one of the UI packages (`@crudx/mui` **or** `@crudx/shadcn`) based on your styling stack — both expose the same `Table`, `CrudTableView`, `CrudPanelView`, `CrudFilterView`, `CrudPageHeaderView`, `CrudContentView` surface.

## Picking a UI package

- **Use `@crudx/mui`** if your app is already on Material-UI + Emotion.
- **Use `@crudx/shadcn`** if your app uses Tailwind (or is a greenfield project) and you prefer Radix primitives + shadcn-style theming.

Mixing both in one app works (they don't share runtime state) but typically isn't recommended — the MUI `Preflight`/Emotion and Tailwind `@tailwind base` reset can compete on the same page.

## Getting started

```bash
yarn install

# run the example app
yarn example:dev   # http://localhost:3333
```

The example app (`apps/example`) ships four reference pages:

- `/test-crud-api-component` — `@crudx/mui` against the internal API
- `/test-crud-shadcn` — `@crudx/shadcn` (requires the Tailwind setup documented below)
- `/test-crud-public-graphql` — full **CRUD** demo via `@crudx/mui` + `@crudx/graphql` against the public [GraphQLZero API](https://graphqlzero.almansi.me/api). No auth, no local backend, no codegen — Create / Read / Update / Delete all wired live.
- `/test-crud-public-rest` — full **CRUD** demo via `@crudx/mui` + `@crudx/rest` against the public [JSONPlaceholder API](https://jsonplaceholder.typicode.com), backed by TanStack Query. Mutations use the adapter's `invalidates` option to refetch the list automatically.

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

Each library in this repository is versioned **independently**. `@crudx/mui` and `@crudx/shadcn` are alternative UI adapters — a change in one shouldn't force a republish of the other. `@crudx/common` and `@crudx/core` are the foundation layer; bumps there cascade into the UI packages automatically via [`@jscutlery/semver`](https://github.com/jscutlery/semver)'s `trackDeps`.

## Per-package release

```bash
yarn release:common   # bumps @crudx/common
yarn release:core     # bumps @crudx/core    (cascades to mui + shadcn)
yarn release:mui      # bumps @crudx/mui
yarn release:shadcn   # bumps @crudx/shadcn
yarn release:all      # bumps every lib that has unreleased commits in its scope
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
chore(common): tidy exports
```

A bump in `@crudx/core` will auto-bump `@crudx/mui` and `@crudx/shadcn` (via `trackDeps`) because they declare `@crudx/core` as a `peerDependency`.

## First-time setup notes

- Tags are prefixed per project (`common@*`, `core@*`, `mui@*`, `shadcn@*`). Legacy `workspace@*` tags from the old sync-versioning scheme remain for history.
- The `version` Nx target lives on each lib's `project.json`; the root `project.json` no longer owns a workspace-wide version target.
