import { useState } from 'react';
import { Table } from '@crudx/{{UI_PACKAGE}}';

type Row = { id: number; name: string; role: string };

// TODO: replace SAMPLE_ROWS with real data and SAMPLE_COLUMNS with the
// fields you want shown. `dataIndex` reads the value from each row.
const SAMPLE_ROWS: Row[] = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer' },
  { id: 2, name: 'Alan Turing', role: 'Researcher' },
];

const SAMPLE_COLUMNS = [
  { key: 'id', title: 'ID', width: 60, dataIndex: 'id' as const },
  { key: 'name', title: 'Name', dataIndex: 'name' as const, sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' as const },
];

export function TableExample() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  return (
    <Table<Row>
      data={SAMPLE_ROWS}
      columns={SAMPLE_COLUMNS}
      striped
      bordered
      page={page}
      pageSize={pageSize}
      total={SAMPLE_ROWS.length}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
}
