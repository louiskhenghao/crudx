import { CrudPageHeaderView } from '@crudx/{{UI_PACKAGE}}';

// CrudPageHeaderView is the top of the page — title, breadcrumbs, back
// button, and page-level actions.
export function MyPageHeader() {
  return (
    <CrudPageHeaderView
      title="Posts"
      backPath="/"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Posts' },
      ]}
      actions={[
        {
          key: 'export',
          content: <button>Export CSV</button>,
        },
      ]}
    />
  );
}
