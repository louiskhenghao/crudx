/**
 * test-crud-public-rest-shadcn.tsx
 * --------------------------------
 *
 * Self-contained CRUD demo of `@crudx/core` + `@crudx/rest` rendered
 * through `@crudx/shadcn` (Tailwind + Radix UI). Mirror of
 * `test-crud-public-rest.tsx` against the same JSONPlaceholder
 * endpoint, just on a different UI surface.
 */

import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { CrudProps } from '@crudx/core';
import {
  restGet,
  restList,
  restMutation,
  restOffsetPagination,
} from '@crudx/rest';
import { CrudPanelView, Dialog } from '@crudx/shadcn';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ShadcnAppBar, ShadcnJsonView } from '../components';

/**
 * --------------------------
 * Schema typings
 * --------------------------
 */
type Post = {
  id: number;
  title: string;
  body: string;
  userId?: number;
};

type PostsListResponse = { data: Post[]; total: number };
type PostsListVariables = {
  _page?: number;
  _limit?: number;
};

type PostDetailVariables = { id: number };
type PostCreateVariables = { title: string; body: string; userId?: number };
type PostUpdateVariables = {
  id: number;
  title?: string;
  body?: string;
};
type PostDeleteVariables = { id: number };

const BASE = 'https://jsonplaceholder.typicode.com';

/**
 * --------------------------
 * REST hooks built via @crudx/rest
 * --------------------------
 */
const useListPostsQuery = restList<PostsListResponse, PostsListVariables>({
  resource: 'posts',
  fetch: async ({ variables, signal }) => {
    const params = new URLSearchParams();
    if (variables._page) params.set('_page', String(variables._page));
    if (variables._limit) params.set('_limit', String(variables._limit));
    const res = await fetch(`${BASE}/posts?${params.toString()}`, { signal });
    const data = (await res.json()) as Post[];
    const total = parseInt(res.headers.get('x-total-count') ?? '0', 10);
    return { data, total };
  },
});

const useGetPostQuery = restGet<Post, PostDetailVariables>({
  resource: ['posts', 'detail'],
  fetch: async ({ variables, signal }) => {
    const res = await fetch(`${BASE}/posts/${variables.id}`, { signal });
    return (await res.json()) as Post;
  },
});

const useCreatePostMutation = restMutation<Post, PostCreateVariables>({
  resource: ['posts', 'create'],
  invalidates: 'posts',
  request: async ({ variables }) => {
    const res = await fetch(`${BASE}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 1, ...variables }),
    });
    return (await res.json()) as Post;
  },
});

const useUpdatePostMutation = restMutation<Post, PostUpdateVariables>({
  resource: ['posts', 'update'],
  invalidates: 'posts',
  request: async ({ variables }) => {
    const { id, ...body } = variables;
    const res = await fetch(`${BASE}/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return (await res.json()) as Post;
  },
});

const useDeletePostMutation = restMutation<{ id: number }, PostDeleteVariables>({
  resource: ['posts', 'delete'],
  invalidates: 'posts',
  request: async ({ variables }) => {
    await fetch(`${BASE}/posts/${variables.id}`, { method: 'DELETE' });
    return { id: variables.id };
  },
});

/**
 * --------------------------
 * The CRUD page
 * --------------------------
 */
type PostSchemata = {
  get: [Post, PostDetailVariables, Post];
  list: [PostsListResponse, PostsListVariables, Post];
  create: [Post, PostCreateVariables];
  update: [Post, PostUpdateVariables];
  delete: [{ id: number }, PostDeleteVariables];
};

const inputClass =
  'h-9 w-full rounded-md border border-border bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';

const textareaClass =
  'min-h-[96px] w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';

const btnPrimaryClass =
  'inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50';

const btnGhostClass =
  'inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50';

function PostForm(props: {
  mode: 'create' | 'update';
  initial?: Partial<Post>;
  onSubmit: (values: { title: string; body: string }) => Promise<unknown>;
  onCancel: () => void;
}) {
  const { mode, initial, onSubmit, onCancel } = props;
  const [title, setTitle] = useState(initial?.title ?? '');
  const [body, setBody] = useState(initial?.body ?? '');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !body.trim()) {
      toast.error('Title and body are required');
      return;
    }
    setSubmitting(true);
    try {
      await onSubmit({ title, body });
      onCancel();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-w-[360px] flex-col gap-3 px-1 py-2">
      <p className="text-sm text-muted-foreground">
        JSONPlaceholder accepts the {mode} call and echoes the post
        back, but does not persist server-side — the list refetches
        anyway thanks to <code className="rounded bg-muted px-1">invalidates: &apos;posts&apos;</code>{' '}
        on the mutation.
      </p>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium">Title</span>
        <input
          className={inputClass}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium">Body</span>
        <textarea
          className={textareaClass}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          className={btnGhostClass}
          onClick={onCancel}
          disabled={submitting}
        >
          Cancel
        </button>
        <button
          type="button"
          className={btnPrimaryClass}
          onClick={handleSubmit}
          disabled={submitting}
        >
          {mode === 'create' ? 'Create post' : 'Save changes'}
        </button>
      </div>
    </div>
  );
}

function PostsPanel() {
  return (
    <CrudPanelView<PostSchemata>
      name="post"
      schema={{
        list: { key: 'posts', query: useListPostsQuery },
        get: { key: 'post', query: useGetPostQuery },
        create: { key: 'post', query: useCreatePostMutation },
        update: { key: 'post', query: useUpdatePostMutation },
        delete: { key: 'post', query: useDeletePostMutation },
      }}
      paging={{
        strategy: 'CUSTOM',
        pageSize: 10,
        custom: restOffsetPagination({
          pageKey: '_page',
          pageSizeKey: '_limit',
        }),
      }}
      pageTitle="Posts"
      pageBackPath="/"
      pageBreadcrumbs={[
        { label: 'Demos', url: '/' },
        { label: 'REST CRUD (shadcn)' },
      ]}
      filterNode={
        <p className="text-sm text-muted-foreground">
          Read, create, update, and delete are all wired live against{' '}
          <code className="rounded bg-muted px-1">jsonplaceholder.typicode.com</code>{' '}
          through TanStack Query. Mutations declare{' '}
          <code className="rounded bg-muted px-1">invalidates: &apos;posts&apos;</code>{' '}
          so the list refetches after every mutation succeeds.
        </p>
      }
      tableActions={[{ action: 'create' }, { action: 'refresh' }]}
      columnDataIndex="id"
      columns={[
        { key: 'id', title: 'ID', width: 80, dataIndex: 'id' },
        { key: 'title', title: 'Title', width: 300, dataIndex: 'title' },
        { key: 'body', title: 'Body', dataIndex: 'body' },
      ]}
      columnActions={{
        name: 'post',
        identifier: 'title',
        enableView: true,
        enableUpdate: true,
        enableDelete: true,
        enableExport: false,
        enableAlert: ['delete'],
      }}
      enableRowSelection={false}
      modalForms={{
        create: {
          title: 'Create post',
          render: (options) => (
            <Dialog
              type="custom"
              title={options.title}
              visible={options.visible}
              onClose={() => options.onHide()}
            >
              <PostForm
                mode="create"
                onCancel={() => options.onHide()}
                onSubmit={async ({ title, body }) => {
                  const trigger = options.mutation?.create?.[0];
                  if (!trigger) return;
                  await trigger({ variables: { title, body } });
                  toast.success('Post created');
                }}
              />
            </Dialog>
          ),
        },
        update: {
          title: 'Edit post',
          render: (options) => (
            <Dialog
              type="custom"
              title={options.title}
              visible={options.visible}
              onClose={() => options.onHide()}
            >
              <PostForm
                mode="update"
                initial={options.data ?? undefined}
                onCancel={() => options.onHide()}
                onSubmit={async ({ title, body }) => {
                  const trigger = options.mutation?.update?.[0];
                  const id = options.data?.id;
                  if (!trigger || !id) return;
                  await trigger({ variables: { id, title, body } });
                  toast.success('Post updated');
                }}
              />
            </Dialog>
          ),
        },
      }}
      detailsViewType="drawer"
      renderDetailsView={(nodeProps) => (
        <div className="p-4">
          <ShadcnJsonView
            data={nodeProps.data}
            loading={nodeProps.loading}
            title="Post"
          />
        </div>
      )}
    />
  );
}

export function Index() {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, retry: 1 },
        },
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ShadcnAppBar context="REST CRUD · shadcn" />
      <div className="px-4 py-6 md:px-8">
        <PostsPanel />
      </div>
    </QueryClientProvider>
  );
}

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _PostsCrudProps = CrudProps<PostSchemata>;
