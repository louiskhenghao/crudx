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

The example app (`apps/example`) ships two reference pages:

- `/test-crud-api-component` — `@crudx/mui`
- `/test-crud-shadcn` — `@crudx/shadcn` (requires the Tailwind setup documented below)

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

To release sync version for all packages under this repository

```bash
# sync version for all projects in workspace
yarn release # to publish patch updates (x.x.<version>)
yarn release:minor # to publish minor updates (x.<version>.x)
yarn release:major # to publish major updates (<version>.x.x)
```
