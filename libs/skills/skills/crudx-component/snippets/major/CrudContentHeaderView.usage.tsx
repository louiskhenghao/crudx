import { CrudContentHeaderView } from '@crudx/{{UI_PACKAGE}}';

// CrudContentHeaderView is the bar above the table — title, info chips,
// tabs, and table action buttons (create, refresh, sorting, density…).
export function MyContentHeader() {
  return (
    <CrudContentHeaderView
      title="Posts"
      infos={[
        { type: 'title' },
        { type: 'total', text: '{count} posts' },
      ]}
      actions={[
        { action: 'create' },
        { action: 'refresh' },
        { action: 'sorting' },
        { action: 'density' },
      ]}
      tabs={[
        { key: 'all', label: 'All' },
        { key: 'published', label: 'Published' },
      ]}
      tabState="all"
      onTabChange={(next) => {
        /* TODO: filter list by tab */
      }}
    />
  );
}
