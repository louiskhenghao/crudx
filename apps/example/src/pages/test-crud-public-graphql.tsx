/**
 * test-crud-public-graphql.tsx
 * --------------------------------
 *
 * Full-feature CRUD demo of `@crudx/core` + `@crudx/graphql-apollo-adapter`
 * rendered through `@crudx/mui` against the public GraphQLZero API
 * (https://graphqlzero.almansi.me/api), a free GraphQL mirror of
 * JSONPlaceholder.
 *
 * Demonstrates the breadth of `<CrudPanelView>` in one page: page
 * header + page actions, filter view, table tabs, sticky checkbox +
 * action columns, sorting, density, expand slot, custom header
 * actions, modal forms, detail drawer, row selection + bulk actions,
 * and a live `contentViewType` toggle that swaps the table grid for
 * a card view via `renderItemView`. The exact source for the page
 * is rendered via the `<SourceView>` panel.
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
import { createGraphqlApolloAdapter } from '@crudx/graphql-apollo-adapter';
import { CrudPanelView, Dialog } from '@crudx/mui';
import GridViewIcon from '@mui/icons-material/GridView';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ViewListIcon from '@mui/icons-material/ViewList';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { GetStaticProps } from 'next';

import { AppBar, JsonView, SourceView } from '../components';
import { readPageSource } from '../lib/pageSource';

const PAGE_SOURCE_PATH = 'apps/example/src/pages/test-crud-public-graphql.tsx';

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
 * shape `@crudx/graphql-apollo-adapter` expects.
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
 * --------------------------
 * Adapter + schema (builder path)
 * --------------------------
 */
const graphqlAdapter = createGraphqlApolloAdapter();

const postsSchema = graphqlAdapter.schema<PostSchemata>({
  list: { key: 'posts', hook: usePostsListQuery },
  get: { key: 'post', hook: usePostDetailLazyQuery },
  create: { key: 'createPost', hook: usePostCreateMutation },
  update: { key: 'updatePost', hook: usePostUpdateMutation },
  delete: { key: 'deletePost', hook: usePostDeleteMutation },
});

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

/**
 * Card item used when contentViewType === 'view' (renderItemView).
 */
function PostCard(props: {
  post: Post;
  index: number;
  checkbox: () => React.ReactNode;
  action: () => React.ReactNode;
}) {
  const { post, index, checkbox, action } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 150ms ease',
        '&:hover': { boxShadow: 4 },
      }}
    >
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={1}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            {checkbox()}
            <Typography
              variant="caption"
              sx={{ fontFamily: 'monospace', color: 'text.disabled' }}
            >
              #{post.id}
            </Typography>
          </Stack>
          <Box sx={{ flexShrink: 0 }}>{action()}</Box>
        </Stack>
        <Typography
          variant="subtitle2"
          sx={{
            mt: 1,
            fontWeight: 600,
            textTransform: 'capitalize',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.body}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mt: 'auto', pt: 1.5, color: 'text.disabled' }}
        >
          <Typography variant="caption">row {index + 1}</Typography>
          <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
            id:{post.id}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

function PostsPanel({ source }: { source: string }) {
  // Local UI state layered on top of the panel's data.
  const [contentViewType, setContentViewType] = useState<'table' | 'view'>(
    'table'
  );
  const [tab, setTab] = useState<'all' | 'short' | 'long'>('all');
  const [search, setSearch] = useState('');
  const [sortDir, setSortDir] = useState<'DEFAULT' | 'ASC' | 'DESC'>('DEFAULT');
  const [expanded, setExpanded] = useState(true);

  const hasActiveFilters =
    tab !== 'all' || sortDir !== 'DEFAULT' || search.trim() !== '';

  const resetFilters = () => {
    setSearch('');
    setTab('all');
    setSortDir('DEFAULT');
  };

  const transform = (rows: Post[] | undefined): Post[] => {
    let next = rows ?? [];
    if (tab === 'short') next = next.filter((r) => r.title.length <= 30);
    if (tab === 'long') next = next.filter((r) => r.title.length > 30);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      next = next.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.body.toLowerCase().includes(q)
      );
    }
    if (sortDir === 'ASC') {
      next = [...next].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortDir === 'DESC') {
      next = [...next].sort((a, b) => b.title.localeCompare(a.title));
    }
    return next;
  };

  return (
    <Stack spacing={2}>
      <Paper
        variant="outlined"
        sx={{
          px: 1.5,
          py: 1,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'text.secondary',
          }}
        >
          Status
        </Typography>
        <Chip size="small" label={`view: ${contentViewType}`} />
        <Chip size="small" label={`tab: ${tab}`} />
        <Chip size="small" label={`sort: ${sortDir.toLowerCase()}`} />
        {search ? <Chip size="small" label={`q: ${search}`} /> : null}
        {!hasActiveFilters ? (
          <Typography variant="caption" color="text.disabled">
            no filters applied
          </Typography>
        ) : null}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ ml: 'auto' }}
        >
          {hasActiveFilters ? (
            <Button
              size="small"
              variant="outlined"
              startIcon={<RestartAltIcon />}
              onClick={resetFilters}
            >
              Reset filters
            </Button>
          ) : null}
          <SourceView
            source={source}
            filename={PAGE_SOURCE_PATH}
            repoPath={PAGE_SOURCE_PATH}
            trigger={(open) => (
              <Button size="small" variant="outlined" onClick={open}>
                View source
              </Button>
            )}
          />
        </Stack>
      </Paper>

      <CrudPanelView<PostSchemata>
        name="post"
        schema={postsSchema}
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
        pageActions={[
          {
            key: 'view-toggle',
            content: (
              <Button
                size="small"
                variant="outlined"
                sx={{
                  minWidth: 0,
                  px: { xs: 1, sm: 1.5 },
                  '& .MuiButton-startIcon': {
                    mr: { xs: 0, sm: 1 },
                  },
                }}
                startIcon={
                  contentViewType === 'table' ? (
                    <GridViewIcon />
                  ) : (
                    <ViewListIcon />
                  )
                }
                onClick={() =>
                  setContentViewType((v) => (v === 'table' ? 'view' : 'table'))
                }
              >
                <Box
                  component="span"
                  sx={{ display: { xs: 'none', sm: 'inline' } }}
                >
                  {contentViewType === 'table' ? 'Card view' : 'Table view'}
                </Box>
              </Button>
            ),
          },
        ]}
        filterTitle="Search"
        filterNode={
          <TextField
            fullWidth
            size="small"
            label="Search title or body"
            placeholder="e.g. qui, dolore, voluptatem…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        contentViewType={contentViewType}
        tableTitle="Posts"
        tableTabState={tab}
        tableTabs={[
          { key: 'all', label: 'All' },
          { key: 'short', label: 'Short titles' },
          { key: 'long', label: 'Long titles' },
        ]}
        onTableTabChange={(next) => setTab(next as typeof tab)}
        tableInfos={[
          { type: 'title' },
          { type: 'total', text: '{count} posts' },
          { type: 'bulk', text: '{count} selected' },
        ]}
        tableActions={[
          { action: 'create' },
          { action: 'refresh' },
          { action: 'sorting' },
          { action: 'density' },
          { action: 'expand' },
          {
            action: 'settings',
            items: [
              { key: 'columns', title: 'Columns…' },
              { key: 'export', title: 'Export CSV' },
            ],
          },
          {
            key: 'view-mode',
            action: 'custom',
            tooltip: 'Toggle table / card view',
            render: () => (
              <Tooltip title="Toggle table / card view">
                <IconButton
                  size="small"
                  onClick={() =>
                    setContentViewType((v) =>
                      v === 'table' ? 'view' : 'table'
                    )
                  }
                >
                  {contentViewType === 'table' ? (
                    <GridViewIcon fontSize="small" />
                  ) : (
                    <ViewListIcon fontSize="small" />
                  )}
                </IconButton>
              </Tooltip>
            ),
          },
        ]}
        tableExpandState={expanded}
        tableExpandView={
          <Paper
            variant="outlined"
            sx={{
              p: 1.5,
              borderStyle: 'dashed',
              backgroundColor: 'action.hover',
            }}
          >
            <Typography variant="caption" color="text.secondary">
              <strong>Header expand slot —</strong> use it for inline filters,
              charts, or contextual help. Toggle via the chevron in the table
              actions row.
            </Typography>
          </Paper>
        }
        tableCheckboxColumnSticky
        tableActionColumnSticky
        columnDataIndex="id"
        columns={[
          { key: 'id', title: 'ID', width: 80, dataIndex: 'id' },
          {
            key: 'title',
            title: 'Title',
            width: 320,
            dataIndex: 'title',
            render: (value) => (
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, textTransform: 'capitalize' }}
              >
                {String(value ?? '')}
              </Typography>
            ),
          },
          {
            key: 'body',
            title: 'Body',
            dataIndex: 'body',
            render: (value) => (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {String(value ?? '')}
              </Typography>
            ),
          },
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
        enableRowSelection
        prepareTableViewProps={(nodeProps) => ({
          data: transform(nodeProps.data as Post[] | undefined) as any,
          onTriggerSorting: (next) => setSortDir(next),
          onTriggerExpand: (_current, nextState) => setExpanded(nextState),
          onTriggerBulkAction: (action) => {
            toast(`Bulk action: ${action}`);
          },
        })}
        prepareContentViewProps={(nodeProps) => ({
          data: transform(nodeProps.data as Post[] | undefined) as any,
          onTriggerSorting: (next) => setSortDir(next),
          onTriggerExpand: (_current, nextState) => setExpanded(nextState),
          onTriggerBulkAction: (action) => {
            toast(`Bulk action: ${action}`);
          },
          paginateType: 'pagination',
        })}
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
        detailsViewType="drawer"
        renderDetailsView={(nodeProps) => (
          <Stack spacing={1.5} sx={{ p: 2, height: '100%' }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'text.secondary',
                  }}
                >
                  Detail
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, textTransform: 'capitalize' }}
                >
                  {nodeProps?.data?.title ?? 'Post'}
                </Typography>
              </Box>
              <Chip
                size="small"
                label={`id: ${nodeProps?.data?.id ?? '—'}`}
              />
            </Stack>
            <JsonView
              data={nodeProps?.data ?? {}}
              loading={nodeProps.loading}
              title="Post payload"
            />
          </Stack>
        )}
        renderItemView={(record, views, state) => (
          <PostCard
            key={record.id}
            post={record}
            index={state.index}
            checkbox={views.checkbox}
            action={views.action}
          />
        )}
      />
    </Stack>
  );
}

type IndexProps = { source: string };

export function Index({ source }: IndexProps) {
  const client = useMemo(createPublicClient, []);

  return (
    <ApolloProvider client={client}>
      <AppBar context="GraphQL CRUD" />
      <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 1.5, md: 4 } }}>
        <Stack spacing={{ xs: 2, md: 3 }} sx={{ mx: 'auto', maxWidth: 1600 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 1.5,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'action.hover',
            }}
          >
            <Chip size="small" label="page header + actions" />
            <Chip size="small" label="filter view" />
            <Chip size="small" label="tabs · sticky cols" />
            <Chip size="small" label="row selection + bulk" />
            <Chip size="small" label="sorting · density · expand" />
            <Chip size="small" label="modal forms" />
            <Chip size="small" label="detail drawer" />
            <Chip size="small" label="contentViewType toggle" />
          </Paper>
          <PostsPanel source={source} />
        </Stack>
      </Box>
    </ApolloProvider>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => ({
  props: { source: readPageSource(PAGE_SOURCE_PATH) },
});

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _PostsCrudProps = CrudProps<PostSchemata>;
