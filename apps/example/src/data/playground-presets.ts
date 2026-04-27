/**
 * Sandpack presets for the playground. Each preset is a self-contained
 * React snippet whose `dependencies` map references `@crudx/*` from
 * npm — so when the user opens the playground, Sandpack fetches the
 * actually-published artifacts. This is what makes the playground a
 * smoke test for the released libs (not just the workspace source).
 */

export type UiKind = 'mui' | 'shadcn';
export type DemoKind = 'component' | 'crud';

export type PresetSlug =
  | 'mui-table'
  | 'shadcn-table'
  | 'mui-crud'
  | 'shadcn-crud';

export type Preset = {
  slug: PresetSlug;
  title: string;
  description: string;
  ui: UiKind;
  kind: DemoKind;
  /** File map handed to Sandpack. `/App.tsx` is the entry. */
  files: Record<string, string>;
  /** Runtime deps installed from npm by Sandpack. */
  dependencies: Record<string, string>;
};

const CRUDX_VERSION = '^1.0.0';

/**
 * Inline `<style>` block holding the shadcn theme variables. Pasted
 * straight into the Sandpack `index.html` for the shadcn presets. We
 * also load Tailwind via the Play CDN so the classnames the lib emits
 * actually render — Tailwind normally runs on the consumer side.
 */
const SHADCN_TAILWIND_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Crudx playground</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      @layer base {
        :root {
          --background: 0 0% 100%;
          --foreground: 222.2 47.4% 11.2%;
          --muted: 210 40% 96.1%;
          --muted-foreground: 215.4 16.3% 46.9%;
          --popover: 0 0% 100%;
          --popover-foreground: 222.2 47.4% 11.2%;
          --card: 0 0% 100%;
          --card-foreground: 222.2 47.4% 11.2%;
          --border: 214.3 31.8% 91.4%;
          --input: 214.3 31.8% 91.4%;
          --primary: 222.2 47.4% 11.2%;
          --primary-foreground: 210 40% 98%;
          --secondary: 210 40% 96.1%;
          --secondary-foreground: 222.2 47.4% 11.2%;
          --accent: 210 40% 96.1%;
          --accent-foreground: 222.2 47.4% 11.2%;
          --destructive: 0 100% 50%;
          --destructive-foreground: 210 40% 98%;
          --ring: 215 20.2% 65.1%;
          --radius: 0.5rem;
        }
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

const MUI_INDEX_TSX = `import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
`;

const SHADCN_INDEX_TSX = MUI_INDEX_TSX;

const MUI_TABLE_APP = `import { useState } from 'react';
import { Table } from '@crudx/mui';

type Row = { id: number; name: string; role: string };

const data: Row[] = [
  { id: 1, name: 'Alice',   role: 'Admin'  },
  { id: 2, name: 'Bob',     role: 'Editor' },
  { id: 3, name: 'Carol',   role: 'Viewer' },
  { id: 4, name: 'David',   role: 'Editor' },
  { id: 5, name: 'Eve',     role: 'Admin'  },
];

export default function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 12 }}>@crudx/mui · Table</h2>
      <Table
        data={data}
        columns={[
          { key: 'id',   title: 'ID',   dataIndex: 'id',   width: 80, sortable: true },
          { key: 'name', title: 'Name', dataIndex: 'name' },
          { key: 'role', title: 'Role', dataIndex: 'role' },
        ]}
        page={page}
        pageSize={pageSize}
        total={data.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
`;

const SHADCN_TABLE_APP = `import { useState } from 'react';
import { Table } from '@crudx/shadcn';

type Row = { id: number; name: string; role: string };

const data: Row[] = [
  { id: 1, name: 'Alice',   role: 'Admin'  },
  { id: 2, name: 'Bob',     role: 'Editor' },
  { id: 3, name: 'Carol',   role: 'Viewer' },
  { id: 4, name: 'David',   role: 'Editor' },
  { id: 5, name: 'Eve',     role: 'Admin'  },
];

export default function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  return (
    <div className="p-6">
      <h2 className="mb-3 text-xl font-semibold">@crudx/shadcn · Table</h2>
      <Table
        data={data}
        columns={[
          { key: 'id',   title: 'ID',   dataIndex: 'id',   width: 80, sortable: true },
          { key: 'name', title: 'Name', dataIndex: 'name' },
          { key: 'role', title: 'Role', dataIndex: 'role' },
        ]}
        page={page}
        pageSize={pageSize}
        total={data.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
`;

const CRUD_REST_HOOK = `import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRestTanstackAdapter } from '@crudx/rest-tanstack-adapter';

type Post = { id: number; title: string; body: string };

type PostSchemata = {
  list:   [{ data: Post[]; total: number }, { _page?: number; _limit?: number }, Post];
  get:    [Post, { id: number }, Post];
  create: [Post, { title: string; body: string }];
  update: [Post, { id: number; title?: string; body?: string }];
  delete: [{ id: number }, { id: number }];
};

const BASE = 'https://jsonplaceholder.typicode.com';
const rest = createRestTanstackAdapter();

export const postsSchema = rest.schema<PostSchemata>({
  list: {
    key: 'posts',
    resource: 'posts',
    fetch: async ({ variables, signal }) => {
      const params = new URLSearchParams();
      if (variables._page)  params.set('_page',  String(variables._page));
      if (variables._limit) params.set('_limit', String(variables._limit));
      const res = await fetch(\`\${BASE}/posts?\${params}\`, { signal });
      const data = await res.json();
      const total = Number(res.headers.get('x-total-count') ?? data.length);
      return { data, total };
    },
  },
  get: {
    key: 'post',
    resource: ['posts', 'detail'],
    fetch: async ({ variables, signal }) => {
      const res = await fetch(\`\${BASE}/posts/\${variables.id}\`, { signal });
      return res.json();
    },
  },
  create: {
    key: 'post',
    resource: ['posts', 'create'],
    invalidates: 'posts',
    request: async ({ variables }) => {
      const res = await fetch(\`\${BASE}/posts\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 1, ...variables }),
      });
      return res.json();
    },
  },
  update: {
    key: 'post',
    resource: ['posts', 'update'],
    invalidates: 'posts',
    request: async ({ variables }) => {
      const { id, ...body } = variables;
      const res = await fetch(\`\${BASE}/posts/\${id}\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      return res.json();
    },
  },
  delete: {
    key: 'post',
    resource: ['posts', 'delete'],
    invalidates: 'posts',
    request: async ({ variables }) => {
      await fetch(\`\${BASE}/posts/\${variables.id}\`, { method: 'DELETE' });
      return { id: variables.id };
    },
  },
});

export type { PostSchemata };
export { rest };

export function withQuery(Inner: React.ComponentType) {
  return function Wrapped() {
    const qc = useMemo(() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }), []);
    return (
      <QueryClientProvider client={qc}>
        <Inner />
      </QueryClientProvider>
    );
  };
}
`;

const MUI_CRUD_APP = `import { CrudPanelView } from '@crudx/mui';
import { postsSchema, rest, withQuery, PostSchemata } from './crud';

function PostsPanel() {
  return (
    <CrudPanelView<PostSchemata>
      name="post"
      schema={postsSchema}
      pageTitle="Posts"
      columnDataIndex="id"
      columns={[
        { key: 'id',    title: 'ID',    width: 80,  dataIndex: 'id'    },
        { key: 'title', title: 'Title', width: 280, dataIndex: 'title' },
        { key: 'body',  title: 'Body',  dataIndex: 'body' },
      ]}
      tableActions={[{ action: 'refresh' }]}
      paging={{
        strategy: 'CUSTOM',
        pageSize: 5,
        custom: rest.offsetPagination({ pageKey: '_page', pageSizeKey: '_limit' }),
      }}
    />
  );
}

export default withQuery(PostsPanel);
`;

const SHADCN_CRUD_APP = `import { CrudPanelView } from '@crudx/shadcn';
import { postsSchema, rest, withQuery, PostSchemata } from './crud';

function PostsPanel() {
  return (
    <CrudPanelView<PostSchemata>
      name="post"
      schema={postsSchema}
      pageTitle="Posts"
      columnDataIndex="id"
      columns={[
        { key: 'id',    title: 'ID',    width: 80,  dataIndex: 'id'    },
        { key: 'title', title: 'Title', width: 280, dataIndex: 'title' },
        { key: 'body',  title: 'Body',  dataIndex: 'body' },
      ]}
      tableActions={[{ action: 'refresh' }]}
      paging={{
        strategy: 'CUSTOM',
        pageSize: 5,
        custom: rest.offsetPagination({ pageKey: '_page', pageSizeKey: '_limit' }),
      }}
    />
  );
}

export default withQuery(PostsPanel);
`;

/**
 * Transitive deps the published `@crudx/*` bundles need at runtime.
 * Sandpack's React template doesn't auto-install peer deps, so we
 * spread these into every preset.
 *
 * From `@crudx/common`'s rollup `external` list (so they're not
 * bundled into common.esm.js):
 *
 *   currency-symbol-map, dayjs, lodash, numeral
 *
 * Plus `next` — the currently-published 1.0.0 bundles of `@crudx/mui`
 * and `@crudx/shadcn` still import `next/link`. The LinkProvider
 * refactor on `main` removes that, so once the libs ship 1.0.1+ you
 * can drop `next` from this list.
 */
const TRANSITIVE_PEERS = {
  'currency-symbol-map': '^5.1.0',
  dayjs: '^1.11.0',
  lodash: '^4.17.0',
  next: '^13.4.0',
  numeral: '^2.0.0',
};

const MUI_TABLE_DEPS = {
  ...TRANSITIVE_PEERS,
  '@crudx/common': CRUDX_VERSION,
  '@crudx/core': CRUDX_VERSION,
  '@crudx/mui': CRUDX_VERSION,
  '@mui/material': '^5.14.0',
  '@mui/icons-material': '^5.14.0',
  '@emotion/react': '^11.11.0',
  '@emotion/styled': '^11.11.0',
  classnames: '^2.3.0',
  'react-hot-toast': '^2.4.0',
};

const SHADCN_TABLE_DEPS = {
  ...TRANSITIVE_PEERS,
  '@crudx/common': CRUDX_VERSION,
  '@crudx/core': CRUDX_VERSION,
  '@crudx/shadcn': CRUDX_VERSION,
  '@tanstack/react-table': '^8.11.0',
  '@radix-ui/react-checkbox': '^1.0.4',
  '@radix-ui/react-collapsible': '^1.0.3',
  '@radix-ui/react-dialog': '^1.0.5',
  '@radix-ui/react-dropdown-menu': '^2.0.6',
  '@radix-ui/react-label': '^2.0.2',
  '@radix-ui/react-popover': '^1.0.7',
  '@radix-ui/react-select': '^2.0.0',
  '@radix-ui/react-separator': '^1.0.3',
  '@radix-ui/react-slot': '^1.0.2',
  '@radix-ui/react-tabs': '^1.0.4',
  '@radix-ui/react-tooltip': '^1.0.7',
  'class-variance-authority': '^0.7.0',
  classnames: '^2.3.0',
  clsx: '^2.0.0',
  'lucide-react': '^0.294.0',
  'react-hot-toast': '^2.4.0',
  'tailwind-merge': '^2.1.0',
};

const MUI_CRUD_DEPS = {
  ...MUI_TABLE_DEPS,
  '@crudx/rest-tanstack-adapter': CRUDX_VERSION,
  '@tanstack/react-query': '^4.36.0',
};

const SHADCN_CRUD_DEPS = {
  ...SHADCN_TABLE_DEPS,
  '@crudx/rest-tanstack-adapter': CRUDX_VERSION,
  '@tanstack/react-query': '^4.36.0',
};

export const PRESETS: Record<PresetSlug, Preset> = {
  'mui-table': {
    slug: 'mui-table',
    title: 'MUI · Table',
    description:
      'Standalone Table component from @crudx/mui with hard-coded rows + pagination. Smallest possible smoke test for the published MUI bundle.',
    ui: 'mui',
    kind: 'component',
    files: {
      '/index.tsx': MUI_INDEX_TSX,
      '/App.tsx': MUI_TABLE_APP,
    },
    dependencies: MUI_TABLE_DEPS,
  },
  'shadcn-table': {
    slug: 'shadcn-table',
    title: 'shadcn · Table',
    description:
      'Standalone Table component from @crudx/shadcn. Tailwind via the Play CDN, shadcn theme variables inlined into index.html.',
    ui: 'shadcn',
    kind: 'component',
    files: {
      '/public/index.html': SHADCN_TAILWIND_HTML,
      '/index.tsx': SHADCN_INDEX_TSX,
      '/App.tsx': SHADCN_TABLE_APP,
    },
    dependencies: SHADCN_TABLE_DEPS,
  },
  'mui-crud': {
    slug: 'mui-crud',
    title: 'MUI · CrudPanelView',
    description:
      'Full CrudPanelView wired through @crudx/rest-tanstack-adapter against JSONPlaceholder. Exercises the cross-package surface in one snippet.',
    ui: 'mui',
    kind: 'crud',
    files: {
      '/index.tsx': MUI_INDEX_TSX,
      '/crud.tsx': CRUD_REST_HOOK,
      '/App.tsx': MUI_CRUD_APP,
    },
    dependencies: MUI_CRUD_DEPS,
  },
  'shadcn-crud': {
    slug: 'shadcn-crud',
    title: 'shadcn · CrudPanelView',
    description:
      'Same JSONPlaceholder CRUD flow rendered through @crudx/shadcn. Drop-in alternative to the MUI variant; same prop surface.',
    ui: 'shadcn',
    kind: 'crud',
    files: {
      '/public/index.html': SHADCN_TAILWIND_HTML,
      '/index.tsx': SHADCN_INDEX_TSX,
      '/crud.tsx': CRUD_REST_HOOK,
      '/App.tsx': SHADCN_CRUD_APP,
    },
    dependencies: SHADCN_CRUD_DEPS,
  },
};

export const PRESET_ORDER: PresetSlug[] = [
  'mui-table',
  'shadcn-table',
  'mui-crud',
  'shadcn-crud',
];
