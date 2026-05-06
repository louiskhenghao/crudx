import { TableRow } from '@crudx/{{UI_PACKAGE}}';

type Row = { id: number; name: string };

// TODO: TableRow is normally rendered inside a <tbody>. `position` is
// the row index, `data` is the record object.
const COLUMNS = [
  { key: 'id', title: 'ID', width: 60, dataIndex: 'id' as const },
  { key: 'name', title: 'Name', dataIndex: 'name' as const },
];

const ROWS: Row[] = [
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Alan Turing' },
];

export function TableRowExample() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {ROWS.map((row, idx) => (
          <TableRow<Row> key={row.id} position={idx} data={row} columns={COLUMNS} />
        ))}
      </tbody>
    </table>
  );
}
