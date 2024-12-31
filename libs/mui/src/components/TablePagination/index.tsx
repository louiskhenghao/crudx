import { useEffect, useState } from 'react';
import MUITablePagination from '@mui/material/TablePagination';
import cn from 'classnames';

import { TablePaginationProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TablePagination = <TData,>(props: TablePaginationProps<TData>) => {
  const {
    className,
    data = [],
    page = 0,
    total,
    pageSize = 10,
    pageSizeOptions = [10, 25, 50],
    onPageChange,
    onPageSizeChange,
    ...restProps
  } = props;

  // =============== STATE
  const [pageState, setPageState] = useState<number>(0);
  const [rowsPerPageState, setRowsPerPageState] = useState(pageSize);

  // =============== VARIABLES
  const intendPage = pageState - 1;

  // =============== API
  useEffect(() => {
    setPageState(page);
  }, [page]);

  useEffect(() => {
    setRowsPerPageState(pageSize);
  }, [pageSize]);

  // =============== EVENTS
  const onHandlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageState(newPage);
    onPageChange?.(newPage + 1);
  };

  const onHandlePageSizeChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const perPage = parseInt(event.target.value, 10);
    setRowsPerPageState(perPage);
    onPageSizeChange?.(perPage);
  };

  // =============== VIEWS
  return (
    <MUITablePagination
      className={cn('table-pagination', className)}
      component="div"
      {...restProps}
      count={total ?? data.length}
      page={intendPage < 0 ? 0 : intendPage}
      rowsPerPage={rowsPerPageState}
      rowsPerPageOptions={pageSizeOptions}
      onPageChange={onHandlePageChange}
      onRowsPerPageChange={onHandlePageSizeChange}
    />
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TablePagination;
