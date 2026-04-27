# Getting started

This guide walks through using `@crudx` in your own app: pick a stack,
install the packages, define a schema, and drop a CRUD panel onto a
page. End-to-end in ~50 lines.

## 1. Pick a stack

You'll combine three pieces:

| Layer                   | Choices                                                         |
| ----------------------- | --------------------------------------------------------------- |
| Core (always)           | `@crudx/core`, `@crudx/common`                                  |
| Transport adapter (one) | `@crudx/graphql-apollo-adapter`, `@crudx/rest-tanstack-adapter` |
| UI (one)                | `@crudx/mui`, `@crudx/shadcn`                                   |

If you already use Apollo or Material UI somewhere, picking the matching
adapter / UI package is the cheapest way in.

## 2. Install

REST + shadcn:

```bash
yarn add @crudx/core @crudx/common \
         @crudx/rest-tanstack-adapter @tanstack/react-query \
         @crudx/shadcn react-hot-toast lodash classnames
```

GraphQL + MUI:

```bash
yarn add @crudx/core @crudx/common \
         @crudx/graphql-apollo-adapter @apollo/client graphql \
         @crudx/mui @mui/material @mui/icons-material \
         @emotion/react @emotion/styled react-hot-toast lodash classnames
```

The transport adapter and the UI library are both consumer-driven peer
deps — `@crudx/*` won't bundle Apollo, TanStack Query, MUI, or Radix.

## 3. Provide the transport context

Wrap your app with the provider your transport adapter expects.

REST (TanStack Query):

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
```

GraphQL (Apollo):

```tsx
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
});

export default function App({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
```

## 4. Type your schema

Each CRUD slot is a `[ResponseType, VariablesType, RowType?]` tuple.

```ts
type Post = { id: number; title: string; body: string };

type PostSchemata = {
  list: [{ data: Post[]; total: number }, { _page?: number; _limit?: number }, Post];
  get: [Post, { id: number }, Post];
  create: [Post, { title: string; body: string }];
  update: [Post, { id: number; title?: string; body?: string }];
  delete: [{ id: number }, { id: number }];
};
```

## 5. Build the schema with the adapter

REST adapter:

```ts
import { createRestTanstackAdapter } from '@crudx/rest-tanstack-adapter';

const rest = createRestTanstackAdapter();

const postsSchema = rest.schema<PostSchemata>({
  list: {
    key: 'posts',
    resource: 'posts',
    fetch: async ({ variables, signal }) => {
      const params = new URLSearchParams();
      if (variables._page) params.set('_page', String(variables._page));
      if (variables._limit) params.set('_limit', String(variables._limit));
      const res = await fetch(`/api/posts?${params}`, { signal });
      return { data: await res.json(), total: Number(res.headers.get('x-total-count') ?? 0) };
    },
  },
  get: {
    key: 'post',
    resource: ['posts', 'detail'],
    fetch: async ({ variables, signal }) => {
      const res = await fetch(`/api/posts/${variables.id}`, { signal });
      return res.json();
    },
  },
  create: {
    key: 'post',
    resource: ['posts', 'create'],
    invalidates: 'posts',
    request: async ({ variables }) => {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(variables),
      });
      return res.json();
    },
  },
  // …update, delete: same shape with PATCH / DELETE
});
```

GraphQL adapter (already-defined Apollo hooks):

```ts
import { createGraphqlApolloAdapter } from '@crudx/graphql-apollo-adapter';

const graphql = createGraphqlApolloAdapter();

const postsSchema = graphql.schema<PostSchemata>({
  list: { key: 'posts', hook: usePostsListQuery },
  get: { key: 'post', hook: usePostDetailLazyQuery },
  create: { key: 'createPost', hook: usePostCreateMutation },
  update: { key: 'updatePost', hook: usePostUpdateMutation },
  delete: { key: 'deletePost', hook: usePostDeleteMutation },
});
```

## 6. Render the panel

Drop `CrudPanelView` onto a page. Same prop surface for both UI libs —
swap the import to swap stacks.

```tsx
import { CrudPanelView } from '@crudx/mui'; // or @crudx/shadcn

export default function PostsPage() {
  return (
    <CrudPanelView<PostSchemata>
      name="post"
      schema={postsSchema}
      pageTitle="Posts"
      columnDataIndex="id"
      columns={[
        { key: 'id', title: 'ID', width: 80, dataIndex: 'id' },
        { key: 'title', title: 'Title', width: 300, dataIndex: 'title' },
        { key: 'body', title: 'Body', dataIndex: 'body' },
      ]}
      tableActions={[{ action: 'create' }, { action: 'refresh' }]}
      paging={{
        strategy: 'CUSTOM',
        pageSize: 10,
        custom: rest.offsetPagination({ pageKey: '_page', pageSizeKey: '_limit' }),
      }}
    />
  );
}
```

That's it — list, detail drawer, paging, refresh. Add `columnActions` to
wire view/update/delete row actions, and `modalForms` for inline create
/ update dialogs. The four `apps/example/src/pages/test-crud-public-*`
demos in this repo are the live reference.

## Next reads

- **Adapter author guide** → [adapters.md](./adapters.md). Build your
  own transport adapter (SWR, urql, fetch-only, …) on top of the same
  contract.
- **Scaffolding a new lib** → [library-setup.md](./library-setup.md).
  Spin up a new package under `@crudx/*` in this monorepo.
- **Contributing** → [`CONTRIBUTING.md`](../../../CONTRIBUTING.md).
  Branch / commit conventions, PR flow, releases.
