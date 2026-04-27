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
  @mui/material @mui/icons-material @emotion/react @emotion/styled \
  react react-dom react-hot-toast lodash classnames

# plus a transport adapter — choose one:
yarn add @crudx/graphql @apollo/client graphql
# or:
yarn add @crudx/rest @tanstack/react-query
```

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
