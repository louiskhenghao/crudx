import { CrudContentView } from '@crudx/{{UI_PACKAGE}}';

// CrudContentView wraps the main content area below the page header. It
// handles loading/empty states and composes the table or list view.
export function MyContent() {
  return (
    <CrudContentView
      data={[]}
      isLoading={false}
      // TODO: pass `renderItemView` to switch from table to card layout.
      renderItemView={(record, _views, _state) => (
        <div>{(record as any).id}</div>
      )}
    />
  );
}
