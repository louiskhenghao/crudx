import { TableSelectedBulkOptions } from '@crudx/{{UI_PACKAGE}}';

// TODO: items are the available bulk actions. `total` is the number of
// currently selected rows. onChange fires with the chosen item.key.
export function TableSelectedBulkOptionsExample() {
  return (
    <TableSelectedBulkOptions
      total={3}
      items={[
        { key: 'delete', title: 'Delete selected' },
        { key: 'export', title: 'Export selected' },
      ]}
      onChange={(key: string) => {
        /* TODO: handle bulk action */
      }}
    />
  );
}
