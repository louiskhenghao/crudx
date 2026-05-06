import { useState } from 'react';
import { CrudFilterView } from '@crudx/{{UI_PACKAGE}}';

// CrudFilterView is the filter section above the table. Replace
// `filterNode` with whatever inputs you want (text, selects, date pickers).
export function MyFilter() {
  const [search, setSearch] = useState('');
  return (
    <CrudFilterView
      title="Search"
      filterNode={
        <input
          placeholder="search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      }
      onApply={() => {
        /* TODO: fire query refetch with current filter values */
      }}
      onReset={() => setSearch('')}
    />
  );
}
