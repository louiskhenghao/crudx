# CrudTableView

Crud table view

---

## Props

```TypeScript
import { ReactNode } from 'react';
import {
  CrudCommonActionNodeProps,
  CrudComponentActionProps,
} from '@crudx/core';

import { CrudRowItemActionType, TableColumnType } from '../../@types';
import { TableProps } from '../../components/Table';
import { CrudContentHeaderViewProps } from '../CrudContentHeaderView';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudTableViewProps<TData = any> = Pick<
  TableProps<TData>,
  | 'size'
  | 'data'
  | 'checked'
  | 'columns'
  | 'loading'
  | 'page'
  | 'pageSize'
  | 'pageSizeOptions'
  | 'onCheck'
  | 'onColumnSort' // added 0.0.16
  | 'onPageChange'
  | 'onPageSizeChange'
  | 'renderPagination'
> &
  Pick<
    CrudContentHeaderViewProps,
    | 'headerInfos'
    | 'headerActions'
    | 'headerCustomView'
    | 'headerExpandView'
    | 'headerExtraView'
    | 'headerTabs'
    | 'headerTabState'
    | 'headerTabsProps'
    | 'headerActionSize'
    | 'headerBulkOptions'
  > & {
    /**
     * custom class name for table
     */
    className?: string;
    /**
     * custom title view
     */
    title?: (() => ReactNode) | ReactNode;
    /**
     * the pagination type
     * - button: next & previous button
     * - pagination: pagination component
     * - none: no pagination
     * @default pagination
     */
    paginateType?: 'button' | 'pagination' | 'none';
    /**
     * total records
     */
    totalRecord?: number;
    /**
     * total selected row
     */
    totalSelected?: number;

    /**
     * CONFIGURATION
     * ===========================
     */
    /**
     * custom text to be display
     */
    text?: {
      nextText?: string;
      previousText?: string;
      columnActionText?: string;
      createText?: string;
      expandText?: string;
      collapseText?: string;
      sorting?: { default: string; asc: string; desc: string };
      density?: { default: string; small: string; medium: string };
    };

    /**
     * CONFIGURATION
     * ===========================
     */
    /**
     * whether to have unstyled view
     */
    unstyled?: boolean;
    /**
     * spacing multiplier for padding & margin
     * @default null
     */
    spacingMultiplier?: number;
    /**
     * whether table header view should expand by default
     */
    expanded?: boolean;
    /**
     * whether enabled pagination next button
     * NOTE: only applicable for paginationType === 'button'
     */
    enableNext?: boolean;
    /**
     * whether enabled pagination previous button
     * NOTE: only applicable for paginationType === 'button'
     */
    enablePrevious?: boolean;

    /**
     * TABLE ACTION COLUMN
     * ===========================
     */
    /**
     * whether enabled table column action
     */
    enableActionColumn?: boolean;
    /**
     * Updated at 0.0.7
     * the action will be show on each table row
     * @default ['view']
     */
    columnActions?: CrudRowItemActionType[];
    /**
     * custom column actions group icon
     */
    columnActionsGroupIcon?: ReactNode;
    /**
     * whether have extra width for column action
     */
    actionColumnExtraWidth?: number;
    /**
     * column action position
     * @default "last"
     */
    actionColumnPosition?: 'last' | 'first' | number;
    /**
     * custom action column props
     */
    actionColumnProps?: Omit<TableColumnType<TData>, 'render'>;
    /**
     * whether to group table column actions into a menu
     */
    enableItemGroupAction?: boolean;
    /**
     * custom render action column buttons
     */
    renderActionButtons?: (context?: {
      data: TData;
    }) => CrudComponentActionProps;
    /**
     * extra action columns button
     */
    renderExtraActionButtons?: (context?: { data: TData }) => {
      views: ReactNode[];
      nodes: CrudCommonActionNodeProps['1'][];
    };

    /**
     * custom table props
     */
    tableProps?: Omit<
      TableProps<TData>,
      | 'size'
      | 'data'
      | 'columns'
      | 'loading'
      | 'page'
      | 'pageSize'
      | 'total'
      | 'pagination'
      | 'topView'
      | 'onCheck'
      | 'onColumnSort'
      | 'onPageChange'
      | 'onPageSizeChange'
      | 'renderPagination'
    >;

    /**
     * EVENTS
     * ===========================
     */
    // event callback on create button clicked
    onTriggerCreate?: () => void;
    // event callback on refresh button clicked
    onTriggerRefresh?: () => void;
    // event callback on pagination next button clicked
    onPaginateNext?: () => void;
    // event callback on pagination previous button clicked
    onPaginatePrevious?: () => void;
    // selected event callback from settings dropdown options
    onTriggerSettings?: (action: string) => void;
    // selected event callback from density dropdown options
    onTriggerDensity?: (density: string) => void;
    // selected event callback from sorting dropdown options
    onTriggerSorting?: (sort: 'DEFAULT' | 'ASC' | 'DESC') => void;
    // selected event callback from bulk action dropdown options
    onTriggerBulkAction?: (action: 'delete' | 'export' | string) => void;
    // event callback for selected header tab
    onTabChange?: (item: string) => void;
    // event callback on expand button clicked
    onTriggerExpand?: (current: boolean, next: boolean) => void;
  };
```

---

## Reference

Below it how the structure of layout (css class name)

```
└── .crud-table-wrapper
  └── .crud-content-header-wrapper
       ├── .crud-content-header-primary
       │    ├──.crud-content-header-infos
       │    └──.crud-content-header-actions
       ├── .crud-content-header-expanded-content
       ├── .crud-content-header-tabview
       └── .crud-content-header-extra-content
```

---

---

## Example

```tsx
import { CrudTableView } from '@crudx/mui';

// ====== VIEWS
<CrudTableView
  title="TITLE"
  data={[]}
  onTriggerCreate={() => {
    // do something
  }}
/>;
```
