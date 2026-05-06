import { useState } from 'react';
import { SortingOptionType, TableSettingsSortingOptions } from '@crudx/{{UI_PACKAGE}}';

// TODO: drive `selected` from the same state your Table uses for sorting.
export function TableSettingsSortingOptionsExample() {
  const [selected, setSelected] = useState<SortingOptionType>('DEFAULT');
  return (
    <TableSettingsSortingOptions
      selected={selected}
      onChange={(key: string) => setSelected(key as SortingOptionType)}
    />
  );
}
