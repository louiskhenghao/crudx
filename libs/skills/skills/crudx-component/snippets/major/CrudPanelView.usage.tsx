import { CrudPanelView, Dialog } from '@crudx/{{UI_PACKAGE}}';

// TODO: import your real schema and types from src/resources/<resource>/.
// If you don't have one yet, run /crudx-resource first.
// import { postsSchema, postsPaging } from '../resources/post/schema';
// import type { PostSchemata } from '../resources/post/types';

// `CrudPanelView` is the orchestrator. It composes header + filter +
// table/content + modals into one view driven by your schema.
export function PostsPanel() {
  return (
    <CrudPanelView<any>
      name="post"
      // schema={postsSchema}
      // paging={{ strategy: 'CUSTOM', pageSize: 10, custom: postsPaging }}
      pageTitle="Posts"
      tableTitle="Posts"
      tableActions={[
        { action: 'create' },
        { action: 'refresh' },
        { action: 'sorting' },
        { action: 'density' },
      ]}
      columnDataIndex="id"
      columns={[
        { key: 'id', title: 'ID', width: 80, dataIndex: 'id' },
        { key: 'title', title: 'Title', dataIndex: 'title' },
      ]}
      columnActions={{
        name: 'post',
        identifier: 'title',
        enableView: true,
        enableUpdate: true,
        enableDelete: true,
        enableAlert: ['delete'],
      }}
      modalForms={{
        create: {
          title: 'Create post',
          render: (options) => (
            <Dialog type="custom" title={options.title} visible={options.visible} onClose={() => options.onHide()}>
              {/* TODO: render your form */}
            </Dialog>
          ),
        },
      }}
    />
  );
}
