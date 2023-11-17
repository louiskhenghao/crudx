import { TablePaginationProps as MUITablePaginationProps } from '@mui/material/TablePagination';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TablePaginationProps<TData = any> = Omit<
  MUITablePaginationProps,
  | 'sx'
  | 'page'
  | 'count'
  | 'rowsPerPage'
  | 'rowsPerPageOptions'
  | 'onPageChange'
  | 'onPageSizeChange'
> & {
  /**
   * class name
   */
  className?: string;
  /**
   * Table data
   */
  data?: TData[];
  /**
   * current page
   * if defined will overwrite component state
   * if not defined will use component state
   */
  page?: number;
  /**
   * total records number
   */
  total?: number;
  /**
   * row to show per page
   * @default 10
   */
  pageSize?: number;
  /**
   * row per page options
   * @default [10, 25, 50, 75, 100]
   */
  pageSizeOptions?: MUITablePaginationProps['rowsPerPageOptions'];
  /**
   * On page change handler
   */
  onPageChange?: (page: number) => void;
  /**
   * On rows per page change handler
   */
  onPageSizeChange?: (pageSize: number) => void;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TablePaginationProps;
