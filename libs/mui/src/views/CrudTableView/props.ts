import { ReactNode } from 'react';
import {
  CrudCommonActionNodeProps,
  CrudComponentActionProps,
} from '@crudx/core';
import { ButtonProps } from '@mui/material/Button';

import { TableColumnType } from '../../@types';
import { ButtonDropdownItemType } from '../../components/ButtonDropdown';
import { TableProps } from '../../components/Table';
import { TabViewProps } from '../../components/TabView';

import {
  CrudTableColumnActionType,
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
  | 'pageSizeOptions'
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
   * header info configuration
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
   * @default medium
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
  headerExpandView?: (() => ReactNode) | ReactNode;
  /**
   * bulk options for selected item
   * NOTE: it having same type for `headerInfos` props, with type = `bulk`->`items`
   */
  headerBulkOptions?: Omit<ButtonDropdownItemType, 'onClick'>[];

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
   * the action will be show on each table row
   * @default ['view']
   */
  columnActions?: CrudTableColumnActionType[];
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
  renderActionButtons?: (context?: { data: TData }) => CrudComponentActionProps;
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

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableViewProps;
