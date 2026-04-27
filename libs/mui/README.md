# @crudx/mui

Material UI + Emotion implementation of the `@crudx/core` CRUD surface. Drop
`CrudPanelView` into a page and you get list, detail, create, update, delete,
filtering, paging, and bulk actions out of the box — all driven by whatever
transport adapter you wire into the schema.

API-compatible with [`@crudx/shadcn`](https://github.com/louiskhenghao/crudx/blob/main/libs/shadcn/README.md);
swap the import to switch UI stacks.

---

## Installation

```bash
yarn add @crudx/mui @crudx/core @crudx/common \
  react react-dom \
  axios currency-symbol-map dayjs lodash numeral \
  @mui/material @mui/icons-material @emotion/react @emotion/styled \
  classnames react-hot-toast

# plus a transport adapter — choose one:
yarn add @crudx/graphql-apollo-adapter @apollo/client graphql
# or:
yarn add @crudx/rest-tanstack-adapter @tanstack/react-query
```

Everything in the first command is a peer dependency. The first row is
the `@crudx/*` packages; the second row covers `@crudx/{core,common}`'s
helpers (date / currency / numeric formatters, axios, lodash); the
third is the MUI + Emotion stack; the fourth is the small utilities
this package uses directly. Yarn 1 doesn't auto-install peer deps, so
install them explicitly.

`@crudx/mui` no longer pulls in `next/link` directly — to keep
client-side routing under Next.js, React Router, etc. wrap your app
once with `<LinkProvider Link={...} />` from `@crudx/common`.
See [`@crudx/common`](../common#readme) for usage.

The transport choice only affects the schema slots fed into `CrudPanelView`;
the component surface itself is transport-neutral.

See the [main README](https://github.com/louiskhenghao/crudx#available-packages)
for end-to-end live demos.

---

## Core Component

| Name                  | Link                                                |
| --------------------- | --------------------------------------------------- |
| CrudPanelView         | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/views/CrudPanelView/README.md)         |
| CrudFilterView        | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/views/CrudFilterView/README.md)        |
| CrudPageHeaderView    | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/views/CrudPageHeaderView/README.md)    |
| CrudTableView         | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/views/CrudTableView/README.md)         |
| CrudContentView       | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/views/CrudContentView/README.md)       |
| CrudRowItemActions    | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/views/CrudRowItemActions/README.md)    |
| CrudContentHeaderView | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/views/CrudContentHeaderView/README.md) |

## General Component

| Name             | Link                                                |
| ---------------- | --------------------------------------------------- |
| BreadcrumbView   | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/BreadcrumbView/README.md)   |
| ButtonDropdown   | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/ButtonDropdown/README.md)   |
| Dialog           | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/Dialog/README.md)           |
| NumberFormatView | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/NumberFormatView/README.md) |
| RenderFlexView   | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/RenderFlexView/README.md)   |
| RenderNodeView   | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/RenderNodeView/README.md)   |
| TabView          | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/TabView/README.md)          |
| TooltipView      | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/TooltipView/README.md)      |

## Table Component

| Name                        | Link                                                           |
| --------------------------- | -------------------------------------------------------------- |
| Table                       | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/Table/README.md)                       |
| TableSelectedBulkOptions    | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/TableSelectedBulkOptions/README.md)    |
| TableSettingsDensityOptions | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/TableSettingsDensityOptions/README.md) |
| TableSettingsOptions        | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/TableSettingsOptions/README.md)        |
| TableSettingsSortingOptions | [link](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/src/components/TableSettingsSortingOptions/README.md) |
