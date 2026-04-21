/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TablePaginationProps<TData = any> = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
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
   * current page (1-based)
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
   * @default [10, 25, 50]
   */
  pageSizeOptions?: number[];
  /**
   * "Rows per page" label
   * @default 'Rows per page'
   */
  rowsPerPageLabel?: React.ReactNode;
  /**
   * Text shown between page controls (from, to, count).
   * @default ({ from, to, count }) => `${from}-${to} of ${count}`
   */
  displayedRowsLabel?: (info: {
    from: number;
    to: number;
    count: number;
    page: number;
  }) => React.ReactNode;
  /**
   * Next button label
   */
  nextLabel?: React.ReactNode;
  /**
   * Previous button label
   */
  prevLabel?: React.ReactNode;
  /**
   * On page change handler (1-based)
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
