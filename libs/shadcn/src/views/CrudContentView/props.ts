import { ReactNode } from 'react';
import {
  CrudCommonActionNodeProps,
  CrudComponentActionProps,
} from '@crudx/core';

import {
  CrudRowItemActionType,
  TableCheckboxConfig,
  TableDataIndex,
} from '../../@types';
import { ButtonProps } from '../../primitives/button';
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
  headerTabs?: CrudContentHeaderTab[];
  headerTabState?: any;
  headerTabsProps?: Omit<TabViewProps, 'items' | 'onChange' | 'renderContent'>;

  /**
   * HEADER CONFIGURATION
   * ===========================
   */
  headerActionSize?: ButtonProps['size'];
  headerBulkOptions?: Omit<ButtonDropdownItemType, 'onClick'>[];

  /**
   * CONFIGURATION
   * ===========================
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

  unstyled?: boolean;
  spacingMultiplier?: number;
  expanded?: boolean;
  enableNext?: boolean;
  enablePrevious?: boolean;

  /**
   * ROW ACTION
   * ===========================
   */
  enableItemAction?: boolean;
  itemActions?: CrudRowItemActionType[];
  enableItemGroupAction?: boolean;
  itemActionGroupIcon?: ReactNode;
  renderActionButtons?: (context?: { data: TData }) => CrudComponentActionProps;
  renderExtraActionButtons?: (context?: { data: TData }) => {
    views: ReactNode[];
    nodes: CrudCommonActionNodeProps['1'][];
  };

  /**
   * VIEWS
   * ===========================
   */
  emptyView?: React.ReactNode;
  noDataView?: React.ReactNode;
  loadingView?: ReactNode;
  renderItemView?: (
    record: TData,
    views: {
      action: () => ReactNode;
      checkbox: () => ReactNode;
    },
    state: {
      index: number;
      checked: boolean;
      onCheck: (state: boolean) => void;
    }
  ) => ReactNode;

  /**
   * PAGINATION
   * ===========================
   */
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
  renderPagination?: (
    context: Pick<
      CrudContentViewProps<TData>,
      'page' | 'data' | 'pageSize' | 'onPageChange'
    > & { total: number }
  ) => ReactNode;

  paginationProps?: React.HTMLAttributes<HTMLDivElement>;

  /**
   * EVENTS
   * ===========================
   */
  onTriggerCreate?: () => void;
  onTriggerRefresh?: () => void;
  onPaginateNext?: () => void;
  onPaginatePrevious?: () => void;
  onTriggerSettings?: (action: string) => void;
  onTriggerDensity?: (density: string) => void;
  onTriggerSorting?: (sort: 'DEFAULT' | 'ASC' | 'DESC') => void;
  onTriggerBulkAction?: (action: 'delete' | 'export' | string) => void;
  onTabChange?: (item: string) => void;
  onTriggerExpand?: (current: boolean, next: boolean) => void;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudContentViewProps;
