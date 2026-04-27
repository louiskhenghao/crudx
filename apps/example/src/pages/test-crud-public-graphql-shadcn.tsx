/**
 * test-crud-public-graphql-shadcn.tsx
 * --------------------------------
 *
 * Self-contained CRUD demo of `@crudx/core` + `@crudx/graphql`
 * rendered through `@crudx/shadcn` (Tailwind + Radix UI).
 *
 * Mirror of `test-crud-public-graphql.tsx` — same GraphQLZero
 * endpoint, same hooks, same paging strategy, just a different UI
 * surface so you can compare the MUI and shadcn implementations
 * side-by-side.
 */

import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
  useLazyQuery,
  useMutation,
  useQuery,
} from '@apollo/client';
import { CrudProps } from '@crudx/core';
import {
  graphqlGet,
  graphqlList,
  graphqlMutation,
} from '@crudx/graphql';
import { CrudPanelView, Dialog } from '@crudx/shadcn';

import { AppBar, JsonView } from '../components';

/**
 * --------------------------
 * Public Apollo client
 * --------------------------
 */
const PUBLIC_ENDPOINT = 'https://graphqlzero.almansi.me/api';

const createPublicClient = () =>
  new ApolloClient({
    link: new HttpLink({ uri: PUBLIC_ENDPOINT }),
    cache: new InMemoryCache(),
  });

/**
 * --------------------------
 * Schema typings
 * --------------------------
 */
type Post = { id: string; title: string; body: string };

type PostsListResponse = {
  posts: { data: Post[]; meta: { totalCount: number } };
};
type PostsListVariables = {
  options?: {
    paginate?: { page?: number; limit?: number };
  };
};

type PostDetailResponse = { post: Post };
type PostDetailVariables = { id: string };

type PostCreateResponse = { createPost: Post };
type PostCreateVariables = { input: { title: string; body: string } };

type PostUpdateResponse = { updatePost: Post };
type PostUpdateVariables = {
  id: string;
  input: { title?: string; body?: string };
};

type PostDeleteResponse = { deletePost: boolean };
type PostDeleteVariables = { id: string };

/**
 * --------------------------
 * Hand-rolled Apollo hooks
 * --------------------------
 */
const POSTS_LIST = gql`
  query PostsList($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

const POST_DETAIL = gql`
  query PostDetail($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

const POST_CREATE = gql`
  mutation PostCreate($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const POST_UPDATE = gql`
  mutation PostUpdate($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

const POST_DELETE = gql`
  mutation PostDelete($id: ID!) {
    deletePost(id: $id)
  }
`;

const usePostsListQuery = (
  options?: Parameters<
    typeof useQuery<PostsListResponse, PostsListVariables>
  >[1]
) => useQuery<PostsListResponse, PostsListVariables>(POSTS_LIST, options);

const usePostDetailLazyQuery = (
  options?: Parameters<
    typeof useLazyQuery<PostDetailResponse, PostDetailVariables>
  >[1]
) => useLazyQuery<PostDetailResponse, PostDetailVariables>(POST_DETAIL, options);

const usePostCreateMutation = (
  options?: Parameters<
    typeof useMutation<PostCreateResponse, PostCreateVariables>
  >[1]
) =>
  useMutation<PostCreateResponse, PostCreateVariables>(POST_CREATE, options);

const usePostUpdateMutation = (
  options?: Parameters<
    typeof useMutation<PostUpdateResponse, PostUpdateVariables>
  >[1]
) =>
  useMutation<PostUpdateResponse, PostUpdateVariables>(POST_UPDATE, options);

const usePostDeleteMutation = (
  options?: Parameters<
    typeof useMutation<PostDeleteResponse, PostDeleteVariables>
  >[1]
) =>
  useMutation<PostDeleteResponse, PostDeleteVariables>(POST_DELETE, options);

/**
 * --------------------------
 * The CRUD page
 * --------------------------
 */
type PostSchemata = {
  get: [PostDetailResponse, PostDetailVariables, Post];
  list: [PostsListResponse, PostsListVariables, Post];
  create: [PostCreateResponse, PostCreateVariables];
  update: [PostUpdateResponse, PostUpdateVariables];
  delete: [PostDeleteResponse, PostDeleteVariables];
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
        GraphQLZero accepts the {mode} mutation and echoes the new
        record, but does not persist server-side — refreshes will
        return the original 100 posts.
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
        list: { key: 'posts', query: graphqlList(usePostsListQuery) },
        get: { key: 'post', query: graphqlGet(usePostDetailLazyQuery) },
        create: {
          key: 'createPost',
          query: graphqlMutation(usePostCreateMutation),
        },
        update: {
          key: 'updatePost',
          query: graphqlMutation(usePostUpdateMutation),
        },
        delete: {
          key: 'deletePost',
          query: graphqlMutation(usePostDeleteMutation),
        },
      }}
      paging={{
        strategy: 'CUSTOM',
        pageSize: 10,
        custom: {
          extract: {
            paging: (_ctx, variables) => ({
              pageSize: variables?.options?.paginate?.limit ?? 10,
            }),
            pagination: (context, options) => {
              const result = options.data?.posts;
              const total = result?.meta?.totalCount ?? 0;
              const lastPage = Math.max(
                1,
                Math.ceil(total / Math.max(1, context.pageSize))
              );
              return {
                list: result?.data ?? [],
                total,
                page: {
                  next:
                    context.pageNumber < lastPage ? options.intentNext : null,
                  previous:
                    context.pageNumber > 1 && options.intentPrev > 0
                      ? options.intentPrev
                      : null,
                  canPaginateToPage: true,
                },
              };
            },
          },
          compose: {
            variables: (context, variables) => ({
              ...(variables ?? {}),
              options: {
                ...((variables as any)?.options ?? {}),
                paginate: {
                  page: context.pageNumber,
                  limit: context.pageSize,
                },
              },
            }),
            sorting: (_ctx, variables) => variables ?? {},
            pagination: (context) => ({
              options: {
                paginate: {
                  page: context.pageNumber,
                  limit: context.pageSize,
                },
              },
            }),
          },
        },
      }}
      pageTitle="Posts"
      pageBackPath="/"
      pageBreadcrumbs={[
        { label: 'Demos', url: '/' },
        { label: 'GraphQL CRUD (shadcn)' },
      ]}
      filterNode={
        <p className="text-sm text-muted-foreground">
          Read, create, update, and delete are all wired live against{' '}
          <code className="rounded bg-muted px-1">graphqlzero.almansi.me/api</code>
          . Mutations succeed but the server never persists, so refreshes
          return the original 100 posts.
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
        deleteAction: async (_e, ctx) => {
          const id = ctx?.data?.id;
          const trigger = ctx?.mutation?.delete?.[0];
          if (!id || !trigger) return;
          try {
            await trigger({ variables: { id } });
            toast.success('Post deleted');
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
                  await trigger({ variables: { input: { title, body } } });
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
                  await trigger({
                    variables: { id, input: { title, body } },
                  });
                  toast.success('Post updated');
                }}
              />
            </Dialog>
          ),
        },
      }}
      renderDetailsView={(nodeProps) => (
        <div className="p-4">
          <JsonView
            data={nodeProps?.data ?? {}}
            loading={nodeProps.loading}
            title="Post"
          />
        </div>
      )}
    />
  );
}

export function Index() {
  const client = useMemo(createPublicClient, []);

  return (
    <ApolloProvider client={client}>
      <AppBar context="GraphQL CRUD · shadcn" />
      <div className="px-4 py-6 md:px-8">
        <PostsPanel />
      </div>
    </ApolloProvider>
  );
}

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _PostsCrudProps = CrudProps<PostSchemata>;
