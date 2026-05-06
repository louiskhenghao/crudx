import { TableHead } from '@crudx/{{UI_PACKAGE}}';

type Row = { id: number; name: string };

// TODO: TableHead is normally rendered inside a custom <table>. `checked`
// can be 'partial' | true | false. Sorting is keyed off column.dataIndex.
const COLUMNS = [
  { key: 'id', title: 'ID', width: 60, dataIndex: 'id' as const },
  { key: 'name', title: 'Name', dataIndex: 'name' as const, sortable: true },
];

export function TableHeadExample() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <TableHead<Row>
        columns={COLUMNS}
        checkbox={{ enabled: true }}
        checked="partial"
        sorting={{ defaultOrder: 'name', defaultDirection: 'asc' }}
      />
    </table>
  );
}
