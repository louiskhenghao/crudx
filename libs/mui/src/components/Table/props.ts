import { ReactNode } from 'react';
import { TableTypeMap } from '@mui/material/Table';
import { TableBodyTypeMap } from '@mui/material/TableBody';
import { TableCellProps } from '@mui/material/TableCell';
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
export type TableProps<TData = any> = Omit<
  TableTypeMap['props'],
  'stickyHeader'
> &
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
     * Added 0.0.21
     *
     * the border style of the table
     * `default`: have border on every row + column
     * `preset`: header have divider, row + column no border
     */
    borderStyle?: 'default' | 'preset';
    /**
     * Added 0.0.21
     *
     * the custom border style
     */
    borderStyleOptions?: {
      color?: string;
      width?: number | string;
      height?: number | string;
    };
    /**
     * whether enable pagination
     * @default true
     */
    pagination?: boolean;

    /**
     * TABLE HEAD
     * ===========================
     */
    /**
     * Added 0.0.19
     *
     * whether should have sticky header
     *
     * NOTE: if provided boolean, default max height set to 1000
     * to override please pass object to this props or use `tableContainerProps.sx` instead
     */
    stickyHeader?: boolean | { tableMaxHeight: number };
    /**
     * table head props
     * override with this props or use it separately with exposed props
     */
    tableHeadProps?: Omit<TableHeadProps<TData>, 'columns' | 'checkbox'>;
    /**
     * Added 0.0.21
     *
     * The table head background color
     * @default theme.palette.background.default
     */
    tableHeadBackgroundColor?: string;

    /**
     * TABLE ROW
     * ===========================
     */
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
    // table content v-align
    tableRowContentVAlign?: TableCellProps['valign'];

    /**
     * CUSTOM PROPS
     * ===========================
     */
    /**
     * MUI TableContainer props
     */
    tableContainerProps?: TableContainerProps;

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
     * Render empty view for table
     */
    emptyView?: React.ReactNode;
    /**
     * Added 0.0.19
     *
     * Render no data view for table
     * NOTE: by providing `emptyView`, this will be overwrite
     *
     * @default "No Data"
     */
    noDataView?: React.ReactNode;
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
  };

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TableProps;
