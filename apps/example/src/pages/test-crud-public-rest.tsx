/**
 * test-crud-public-rest.tsx
 * --------------------------------
 *
 * Self-contained CRUD demo of `@crudx/core` + `@crudx/rest` against
 * the public JSONPlaceholder API (https://jsonplaceholder.typicode.com).
 *
 * Demonstrates Read / Create / Update / Delete via TanStack Query
 * under the hood. JSONPlaceholder echoes mutations but does not
 * persist server-side, so the round-trip + cache-invalidation flow
 * works end-to-end (the list refetches after each mutation, the
 * server just keeps returning the original 100 posts).
 */

import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { CrudProps } from '@crudx/core';
import { CrudPanelView, Dialog } from '@crudx/mui';
import {
  restGet,
  restList,
  restMutation,
  restOffsetPagination,
} from '@crudx/rest';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppBar, JsonView } from '../components';

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
 *
 * The fetch / request closures are the only consumer-supplied bits;
 * `restList` / `restGet` / `restMutation` shape the result into the
 * transport contract that `@crudx/core` consumes.
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
    // Reshape into { data, total } so `restOffsetPagination`'s default
    // extractors find what they need.
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
    <Stack spacing={2} sx={{ minWidth: 360, p: 2 }}>
      <Typography variant="body2" color="text.secondary">
        JSONPlaceholder accepts the {mode} call and echoes the post
        back, but does not persist server-side — the list refetches
        anyway thanks to <code>invalidates: &apos;posts&apos;</code> on
        the mutation.
      </Typography>
      <TextField
        label="Title"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Body"
        size="small"
        multiline
        minRows={3}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        fullWidth
      />
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button variant="text" onClick={onCancel} disabled={submitting}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {mode === 'create' ? 'Create post' : 'Save changes'}
        </Button>
      </Stack>
    </Stack>
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
        { label: 'REST CRUD' },
      ]}
      filterNode={
        <Box>
          <Typography variant="body2" color="text.secondary">
            Read, create, update, and delete are all wired live against{' '}
            <code>jsonplaceholder.typicode.com</code> through TanStack
            Query. Mutations declare <code>invalidates: &apos;posts&apos;</code>{' '}
            so the list refetches after every mutation succeeds.
          </Typography>
        </Box>
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
        deleteAction: async (_e, ctx) => {
          const id = ctx?.data?.id;
          const trigger = ctx?.mutation?.delete?.[0];
          if (!id || !trigger) return;
          try {
            await trigger({ variables: { id } });
            toast.success('Post deleted');
            // The mutation declares `invalidates: 'posts'`, so the
            // list cache is already busted by the adapter — calling
            // refresh here is belt-and-braces.
            ctx?.context?.pagingProps?.refresh?.();
          } catch {
            toast.error('Failed to delete post');
          }
        },
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
        <Box sx={{ p: 2 }}>
          <JsonView
            data={nodeProps.data}
            loading={nodeProps.loading}
            title="Post"
          />
        </Box>
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
      <AppBar context="REST CRUD" />
      <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
        <PostsPanel />
      </Box>
    </QueryClientProvider>
  );
}

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _PostsCrudProps = CrudProps<PostSchemata>;
