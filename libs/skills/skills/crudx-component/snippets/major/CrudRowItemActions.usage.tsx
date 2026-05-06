import { CrudRowItemActions } from '@crudx/{{UI_PACKAGE}}';

// CrudRowItemActions renders the per-row action buttons (view / edit /
// delete / custom). Normally consumed by CrudPanelView via columnActions,
// but you can drop it inline if you're rolling your own table.

type Row = { id: number; name: string };

// TODO: hook each handler to your real mutation triggers.
export function RowActions({ row }: { row: Row }) {
  return (
    <CrudRowItemActions
      name="post"
      identifier="name"
      data={row}
      enableView
      enableUpdate
      enableDelete
      enableAlert={['delete']}
      deleteAction={async () => {
        /* TODO: call delete mutation and refresh */
      }}
    />
  );
}
