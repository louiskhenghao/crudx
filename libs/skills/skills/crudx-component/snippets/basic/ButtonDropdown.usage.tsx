import { useState } from 'react';
import { ButtonDropdown } from '@crudx/{{UI_PACKAGE}}';

// TODO: replace items with your real menu options. `key` is what gets
// passed to onItemClick.
export function ButtonDropdownExample() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <ButtonDropdown
      type="button"
      items={[
        { key: 'edit', title: 'Edit' },
        { key: 'duplicate', title: 'Duplicate' },
        { key: 'archive', title: 'Archive' },
      ]}
      onItemClick={setLast}
    >
      Actions
    </ButtonDropdown>
  );
}
