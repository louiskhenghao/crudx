import { ReactNode } from 'react';
import { TableTypeMap } from '@mui/material/Table';
import { TableBodyTypeMap } from '@mui/material/TableBody';
import { TableContainerProps } from '@mui/material/TableContainer';
import { TableFooterTypeMap } from '@mui/material/TableFooter';

import {
  InferDataColumnType,
  TableCheckboxConfig,
  TableColumnType,
} from '../../@types';
import { TableHeadProps } from '../TableHead';
import { TablePaginationProps } from '../TablePagination';
import { TableRowProps } from '../TableRow';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TableProps<TData = any> = Omit<TableTypeMap['props'], 'stickyHeader'> &
  Pick<TableRowProps<TData>, 'expandable' | 'expandableProps'> &
  Pick<
    TablePaginationProps<TData>,
    | 'page'
    | 'pageSize'
    | 'pageSizeOptions'
    | 'onPageChange'
    | 'onPageSizeChange'
  > & {
    /**
     * the total number of items
     * if not defined will use "data" length as reference
     */
    total?: number;
    /**
     * data for table
     */
    data?: TData[];
    /**
     * columns configuration
     */
    columns?: TableColumnType<TData>[];
    /**
     * whether show loading
     */
    loading?: boolean;
    /**
     * checked items
     */
    checked?: InferDataColumnType<TData>[];
    /**
     * checkbox configuration
     */
    checkbox?: TableCheckboxConfig<TData>;
    /**
     * number of rows of loading skeleton
     * @default 10
     */
    loadingRows?: number;
    /**
     * striped table row
     * @default false
     */
    striped?: boolean;
    /**
     * whether to have row border
     * @default true
     */
    bordered?: boolean;
    /**
     * whether enable pagination
     * @default true
     */
    pagination?: boolean;
    /**
     * table head divider
     */
    enableTableHeadDivider?: TableHeadProps['divider'];

    /**
     * CUSTOM PROPS
     * ===========================
     */
    /**
     * MUI TableContainer props
     */
    tableContainerProps?: TableContainerProps;
    /**
     * table head props
     */
    tableHeadProps?: Omit<TableHeadProps<TData>, 'columns' | 'checkbox'>;
    /**
     * table row props
     */
    tableRowProps?: Omit<
      TableRowProps<TData>,
      | 'columns'
      | 'data'
      | 'checkbox'
      | 'onCheck'
      | 'onClick'
      | 'onExpand'
      | 'renderExpandedView'
    >;
    /**
     * MUI TableBody props
     */
    tableBodyProps?: TableBodyTypeMap['props'];
    /**
     * MUI TableFooter props
     */
    tableFooterProps?: TableFooterTypeMap['props'];
    /**
     * Custom table pagination props
     */
    tablePaginationProps?: Omit<
      TablePaginationProps<TData>,
      'data' | 'onPageChange' | 'onPageSizeChange'
    >;

    /**
     * VIEWS
     * ===========================
     */
    /**
     * Render extra top view
     */
    topView?: React.ReactNode;
    /**
     * Render empty view
     */
    emptyView?: React.ReactNode;
    /**
     * custom loading view
     */
    loadingView?: React.ReactNode;
    /**
     * Render extra footer view
     */
    footerView?: React.ReactNode;

    /**
     * EVENTS
     * ===========================
     */
    /**
     * On table rows check event handler
     */
    onCheck?: (checked: InferDataColumnType<TData>[]) => void;
    /**
     * table row click event handler
     */
    onRowClick?: (
      record: TData,
      event: React.MouseEvent<HTMLElement>,
      index: number
    ) => void;
    /**
     * table row expand event handler
     */
    onRowExpand?: (record: TData, expanded: boolean, index: number) => void;
    /**
     * Added 0.0.16
     * on table column sort
     */
    onColumnSort?: TableHeadProps['onSort'];
    /**
     * custom function render expanded view
     */
    renderExpandedView?: (
      record: TData,
      expanded: boolean,
      index: number
    ) => React.ReactNode;
    /**
     * custom pagination rendering, this will overwrite existing table pagination view
     */
    renderPagination?: (
      context: Pick<
        TableProps<TData>,
        | 'page'
        | 'total'
        | 'data'
        | 'pageSize'
        | 'pageSizeOptions'
        | 'onPageChange'
        | 'onPageSizeChange'
      >
    ) => ReactNode;
    /**
     * sticky header
     */
    stickyHeader?: boolean;
  };

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TableProps;
