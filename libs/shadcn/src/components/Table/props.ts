import { ReactNode } from 'react';

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
  React.TableHTMLAttributes<HTMLTableElement>,
  'onClick'
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
     * table density — accepts MUI-style strings for drop-in compat
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'small' | 'medium';
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
     * the border style of the table
     * `default`: have border on every row + column
     * `preset`: header have divider, row + column no border
     */
    borderStyle?: 'default' | 'preset';
    /**
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
     * whether should have sticky header
     *
     * NOTE: if provided boolean, default max height set to 1000
     * to override please pass object to this props or use `tableContainerProps.style` instead
     */
    stickyHeader?: boolean | { tableMaxHeight: number };
    /**
     * table head props
     */
    tableHeadProps?: Omit<TableHeadProps<TData>, 'columns' | 'checkbox'>;
    /**
     * The table head background color
     */
    tableHeadBackgroundColor?: string;
    /**
     * Whether has border top on table head row
     */
    tableHeadBorderTop?: boolean;
    /**
     * Whether has border top on table head row
     */
    tableHeadBorderBottom?: boolean;

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
    /**
     * Table cell content vertical align
     */
    tableRowContentVAlign?: 'top' | 'middle' | 'bottom' | 'baseline';
    /**
     * Table cell checkbox content vertical align
     */
    tableRowCheckboxVAlign?: 'top' | 'middle' | 'bottom' | 'baseline';

    /**
     * CUSTOM PROPS
     * ===========================
     */
    /**
     * Scroll container props
     */
    tableContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * <tbody> props
     */
    tableBodyProps?: React.HTMLAttributes<HTMLTableSectionElement>;
    /**
     * <tfoot> props
     */
    tableFooterProps?: React.HTMLAttributes<HTMLTableSectionElement>;
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
