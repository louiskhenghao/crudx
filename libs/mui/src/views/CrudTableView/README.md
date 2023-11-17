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
import { ButtonProps } from '@mui/material';

import { TableColumnType } from '../../@types';
import { TableProps } from '../../components/Table';
import { SortingOptionType } from '../../components/TableSettingsSortingOptions';
import { TabViewProps } from '../../components/TabView';

import {
  CrudTableHeaderAction,
  CrudTableHeaderInfo,
  CrudTableHeaderTab,
} from './types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudTableViewProps<TData = any> = Pick<
  TableProps<TData>,
  | 'size'
  | 'data'
  | 'columns'
  | 'loading'
  | 'page'
  | 'pageSize'
  | 'onCheck'
  | 'onPageChange'
  | 'onPageSizeChange'
  | 'renderPagination'
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
   * HEADER VIEW
   * ===========================
   */
  /**
   * header info sequence configuration
   */
  headerInfos?: CrudTableHeaderInfo[];
  /**
   * header actions to be enabled
   * NOTE: the sequence is adjustable based on position
   * @default []
   */
  headerActions?: CrudTableHeaderAction[];
  /**
   * header tabs configuration
   */
  headerTabs?: CrudTableHeaderTab[];
  /**
   * custom header tabs props
   */
  headerTabsProps?: Omit<TabViewProps, 'items' | 'onChange' | 'renderContent'>;

  /**
   * header action button size
   * @default small
   */
  headerActionSize?: ButtonProps['size'];
  /**
   * custom header view
   * NOTE: By providing this will replace existing header + expanded node
   */
  headerViewNode?: (() => ReactNode) | ReactNode;
  /**
   * custom header expanded view
   */
  headerExpandNode?: (() => ReactNode) | ReactNode;

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
    createText?: string;
    columnActionText?: string;
    expandText?: string;
    collapseText?: string;
    sorting: { default: 'Default'; asc: 'Ascending'; desc: 'Descending' };
    density: { default: 'Default'; small: 'Small'; medium: 'Medium' };
  };

  /**
   * CONFIGURATION
   * ===========================
   */
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
   * whether table header view should expand by default
   */
  expanded?: boolean;

  /**
   * TABLE ACTION COLUMN
   * ===========================
   */
  /**
   * whether enabled table column action
   */
  enableActionColumn?: boolean;
  /**
   * the action will be show on each table row
   * @default ['view']
   */
  columnActions?: ('view' | 'update' | 'delete' | 'export' | 'extra')[];
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
  enableGroupColumnAction?: boolean;
  /**
   * custom render action column buttons
   */
  renderActionButtons?: (context?: { data: any }) => CrudComponentActionProps;
  /**
   * extra action columns button
   */
  renderExtraActionButtons?: (context?: {
    data: any;
  }) => ReactNode | CrudCommonActionNodeProps['1'][];

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
  // selected event callback for selecting header tab
  onTriggerTab?: (item: string) => void;
  // event callback on expand button clicked
  onTriggerExpand?: (current: boolean, next: boolean) => void;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableViewProps;

```

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
