/**
 * test-crud-public-graphql.tsx
 * --------------------------------
 *
 * Self-contained CRUD demo of `@crudx/core` + `@crudx/graphql` against
 * the public GraphQLZero API (https://graphqlzero.almansi.me/api), a
 * free GraphQL mirror of JSONPlaceholder.
 *
 * Demonstrates the full Read / Create / Update / Delete surface end-
 * to-end with no auth and no local backend. GraphQLZero accepts the
 * mutations and returns success payloads — they don't persist on the
 * server, but the round-trip and UI flow are fully exercised.
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
import { CrudPanelView, Dialog } from '@crudx/mui';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { DemoAppBar, JsonView } from '../components';

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
type Post = {
  id: string;
  title: string;
  body: string;
};

type PostsListResponse = {
  posts: { data: Post[]; meta: { totalCount: number } };
};
type PostsListVariables = {
  options?: {
    paginate?: { page?: number; limit?: number };
    search?: { q?: string };
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
 *
 * No codegen — `gql` + `useQuery`/`useMutation` produce the exact
 * shape `@crudx/graphql` expects.
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

/**
 * Inline form used by both create and update modals. Updating
 * pre-fills from `initial`; submit fires the relevant mutation and
 * closes the modal on success.
 */
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
        GraphQLZero accepts the {mode} mutation and echoes the new
        record, but does not persist server-side — refreshes will
        return the original 100 posts.
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
        { label: 'GraphQL CRUD' },
      ]}
      filterNode={
        <Box>
          <Typography variant="body2" color="text.secondary">
            Read, create, update, and delete are all wired live against{' '}
            <code>graphqlzero.almansi.me/api</code>. Mutations succeed
            but the server never persists, so refreshes return the
            original 100 posts.
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
  const client = useMemo(createPublicClient, []);

  return (
    <ApolloProvider client={client}>
      <DemoAppBar context="GraphQL CRUD" />
      <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
        <PostsPanel />
      </Box>
    </ApolloProvider>
  );
}

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _PostsCrudProps = CrudProps<PostSchemata>;
