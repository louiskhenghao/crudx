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
  | 'onColumnSort'
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

    emptyView?: React.ReactNode;
    noDataView?: React.ReactNode;

    unstyled?: boolean;
    spacingMultiplier?: number;
    expanded?: boolean;
    enableNext?: boolean;
    enablePrevious?: boolean;

    /**
     * TABLE ACTION COLUMN
     * ===========================
     */
    enableActionColumn?: boolean;
    columnActions?: CrudRowItemActionType[];
    columnActionsGroupIcon?: ReactNode;
    actionColumnExtraWidth?: number;
    actionColumnPosition?: 'last' | 'first' | number;
    actionColumnSticky?: boolean;
    actionColumnProps?: Pick<
      TableColumnType<TData>,
      | 'align'
      | 'alignTitle'
      | 'className'
      | 'width'
      | 'valign'
      | 'minWidth'
      | 'sticky'
      | 'uppercase'
      | 'headerColumnProps'
      | 'dataColumnProps'
    >;
    enableItemGroupAction?: boolean;
    renderActionButtons?: (context?: {
      data: TData;
    }) => CrudComponentActionProps;
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
export default CrudTableViewProps;
