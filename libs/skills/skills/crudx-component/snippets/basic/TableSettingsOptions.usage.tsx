import { TableSettingsOptions } from '@crudx/{{UI_PACKAGE}}';

// TODO: items are the available settings actions (manage columns, export, …).
export function TableSettingsOptionsExample() {
  return (
    <TableSettingsOptions
      items={[
        { key: 'columns', title: 'Manage columns' },
        { key: 'export', title: 'Export CSV' },
        { key: 'reset', title: 'Reset view' },
      ]}
      onChange={(key: string) => {
        /* TODO: handle setting action */
      }}
    />
  );
}
