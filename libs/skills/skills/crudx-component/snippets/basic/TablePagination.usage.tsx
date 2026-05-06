import { useState } from 'react';
import { TablePagination } from '@crudx/{{UI_PACKAGE}}';

// TODO: wire `page`, `pageSize`, and `total` to your data source.
export function TablePaginationExample() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  return (
    <TablePagination
      page={page}
      pageSize={pageSize}
      total={142}
      pageSizeOptions={[10, 25, 50]}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
}
