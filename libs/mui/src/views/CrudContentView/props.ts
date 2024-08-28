import { ReactNode } from 'react';
import {
  CrudCommonActionNodeProps,
  CrudComponentActionProps,
} from '@crudx/core';
import { ButtonProps } from '@mui/material/Button';
import { PaginationProps } from '@mui/material/Pagination';

import {
  CrudRowItemActionType,
  TableCheckboxConfig,
  TableDataIndex,
} from '../../@types';
import { ButtonDropdownItemType } from '../../components/ButtonDropdown';
import { TabViewProps } from '../../components/TabView';
import {
  CrudContentHeaderActionType,
  CrudContentHeaderInfoType,
  CrudContentHeaderTab,
} from '../CrudContentHeaderView';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudContentViewProps<TData = any> = {
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
   * data for table
   */
  data?: TData[];
  /**
   * whether show loading
   */
  loading?: boolean;

  /**
   * CHECKBOX
   * ===========================
   */
  /**
   * checked items
   */
  checked?: TableDataIndex<TData>[];
  /**
   * checkbox configuration
   */
  checkbox?: Omit<TableCheckboxConfig<TData>, 'sticky'>;
  /**
   * checkbox on change event handler
   */
  onCheck?: (checked: TableDataIndex<TData>[]) => void;
  /**
   * HEADER VIEW
   * ===========================
   */
  /**
   * header info configuration
   * NOTE: the sequence is adjustable based on position
   * @default ['title','total','bulk']
   */
  headerInfos?: CrudContentHeaderInfoType[];
  /**
   * header actions to be enabled
   * NOTE: the sequence is adjustable based on position
   * @default []
   */
  headerActions?: CrudContentHeaderActionType[];
  /**
   * custom header view
   * NOTE: By providing this will replace existing header + expanded + extra node
   */
  headerCustomView?: (() => ReactNode) | ReactNode;
  /**
   * custom header expanded view
   */
  headerExpandView?: (() => ReactNode) | ReactNode;
  /**
   * custom header extra view (which below tab view)
   */
  headerExtraView?: (() => ReactNode) | ReactNode;
  /**
   * HEADER TABS
   * ===========================
   */
  /**
   * header tabs configuration
   */
  headerTabs?: CrudContentHeaderTab[];
  /**
   * header tabs current state
   */
  headerTabState?: any;
  /**
   * custom header tabs props
   */
  headerTabsProps?: Omit<TabViewProps, 'items' | 'onChange' | 'renderContent'>;

  /**
   * HEADER CONFIGURATION
   * ===========================
   */
  /**
   * header action button size
   * @default medium
   */
  headerActionSize?: ButtonProps['size'];
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
   * ROW ACTION
   * ===========================
   */
  /**
   * whether enabled row item actions
   * @default true
   */
  enableItemAction?: boolean;
  /**
   * the action will be show on each row
   * @default ['view']
   */
  itemActions?: CrudRowItemActionType[];
  /**
   * whether to group table column actions into a menu
   * @default false
   */
  enableItemGroupAction?: boolean;
  /**
   * custom column actions group icon
   */
  itemActionGroupIcon?: ReactNode;
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
   * VIEWS
   * ===========================
   */
  /**
   * Added 0.0.19
   *
   * Render empty view for content
   */
  emptyView?: React.ReactNode;
  /**
   * Added 0.0.19
   *
   * Render no data view for content
   *  NOTE: by providing `emptyView`, this will be overwritten
   *
   * @default "No Data"
   */
  noDataView?: React.ReactNode;
  /**
   * custom loading view
   */
  loadingView?: ReactNode;
  /**
   * function to render item view
   */
  renderItemView?: (
    record: TData,
    views: {
      // to render item actions
      action: () => ReactNode;
      // to render checkbox
      checkbox: () => ReactNode;
    },
    state: {
      // the current state of selection
      checked: boolean;
      // the function to trigger check
      onCheck: (state: boolean) => void;
    }
  ) => ReactNode;

  /**
   * PAGINATION
   * ===========================
   */
  /**
   * current page
   * if defined will overwrite component state
   * if not defined will use component state
   */
  page?: number;
  /**
   * row to show per page
   * @default 10
   */
  pageSize?: number;
  /**
   * On page change handler
   */
  onPageChange?: (page: number) => void;
  /**
   * custom pagination rendering, this will overwrite existing pagination view
   */
  renderPagination?: (
    context: Pick<
      CrudContentViewProps<TData>,
      'page' | 'data' | 'pageSize' | 'onPageChange'
    > & {
      total: number;
    }
  ) => ReactNode;

  paginationProps?: PaginationProps;

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
export default CrudContentViewProps;
