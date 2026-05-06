import { TableSettingsDensityOptions } from '@crudx/{{UI_PACKAGE}}';

// TODO: hook onChange to a state setter that drives Table's `density`
// (or pass it to <CrudPanelView density=… />).
export function TableSettingsDensityOptionsExample() {
  return (
    <TableSettingsDensityOptions
      onChange={(key: string) => {
        /* TODO: store density key */
      }}
    />
  );
}
