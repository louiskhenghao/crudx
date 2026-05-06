import { CrudTableView } from '@crudx/{{UI_PACKAGE}}';

// CrudTableView renders just the table grid (no header, no filter, no
// modals). Useful when you want the data grid but compose the surrounding
// chrome yourself.

// TODO: pass in real `data`, `columns`, and pagination props.
export function MyTable() {
  return (
    <CrudTableView<any>
      data={[]}
      columns={[
        { key: 'id', title: 'ID', width: 80, dataIndex: 'id' },
        { key: 'name', title: 'Name', dataIndex: 'name' },
      ]}
      columnDataIndex="id"
      page={0}
      pageSize={10}
      total={0}
      onPageChange={(p) => {
        /* TODO */
      }}
      onPageSizeChange={(s) => {
        /* TODO */
      }}
    />
  );
}
