/**
 * test-crud-public-rest.tsx
 * --------------------------------
 *
 * Full-feature CRUD demo of `@crudx/core` + `@crudx/rest-tanstack-adapter`
 * rendered through `@crudx/mui`. Wired live against JSONPlaceholder
 * (https://jsonplaceholder.typicode.com).
 *
 * Demonstrates the breadth of `<CrudPanelView>` in one page: page
 * header + page actions, filter view, table tabs with counts, sticky
 * checkbox + action columns, sorting, density, expand slot, custom
 * header actions, modal forms, detail drawer, row selection + bulk
 * actions, and a live `contentViewType` toggle that swaps the table
 * grid for a card view via `renderItemView`. The exact source for
 * the page is rendered via the `<SourceView>` panel.
 */

import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { CrudProps } from '@crudx/core';
import { CrudPanelView, Dialog } from '@crudx/mui';
import { createRestTanstackAdapter } from '@crudx/rest-tanstack-adapter';
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

import { AppBar, JsonView, SourceView } from '../components';
import { readPageSource } from '../lib/pageSource';

const PAGE_SOURCE_PATH = 'apps/example/src/pages/test-crud-public-rest.tsx';

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

/**
 * --------------------------
 * Adapter + schema (builder path)
 * --------------------------
 *
 * `createRestTanstackAdapter().schema()` collapses the per-slot
 * `restList` / `restGet` / `restMutation` factories into a single
 * config block per CRUD operation and returns a fully-typed
 * `CrudSchemata` ready to drop into `<CrudPanelView />`.
 */
const restAdapter = createRestTanstackAdapter();

const postsSchema = restAdapter.schema<PostSchemata>({
  list: {
    key: 'posts',
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
  },
  get: {
    key: 'post',
    resource: ['posts', 'detail'],
    fetch: async ({ variables, signal }) => {
      const res = await fetch(`${BASE}/posts/${variables.id}`, { signal });
      return (await res.json()) as Post;
    },
  },
  create: {
    key: 'post',
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
  },
  update: {
    key: 'post',
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
  },
  delete: {
    key: 'post',
    resource: ['posts', 'delete'],
    invalidates: 'posts',
    request: async ({ variables }) => {
      await fetch(`${BASE}/posts/${variables.id}`, { method: 'DELETE' });
      return { id: variables.id };
    },
  },
});

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
            <Chip
              size="small"
              label={`user ${post.userId ?? '—'}`}
              sx={{ height: 20, fontSize: 11 }}
            />
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
  const [tab, setTab] = useState<'all' | 'even' | 'odd'>('all');
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

  // Apply tab + search + sort client-side on top of the fetched page.
  const transform = (rows: Post[] | undefined): Post[] => {
    let next = rows ?? [];
    if (tab === 'even') next = next.filter((r) => r.id % 2 === 0);
    if (tab === 'odd') next = next.filter((r) => r.id % 2 === 1);
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
          custom: restAdapter.offsetPagination({
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
        pageActions={[
          {
            key: 'view-toggle',
            content: (
              <Button
                size="small"
                variant="outlined"
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
                {contentViewType === 'table' ? 'Card view' : 'Table view'}
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
          { key: 'even', label: 'Even IDs' },
          { key: 'odd', label: 'Odd IDs' },
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
          { key: 'id', title: 'ID', width: 70, dataIndex: 'id' },
          {
            key: 'userId',
            title: 'User',
            width: 90,
            dataIndex: 'userId',
            render: (value) => (
              <Chip
                size="small"
                label={`user ${String(value ?? '—')}`}
                sx={{ height: 20, fontSize: 11 }}
              />
            ),
          },
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
        <Stack spacing={3} sx={{ mx: 'auto', maxWidth: 1600 }}>
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
    </QueryClientProvider>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => ({
  props: { source: readPageSource(PAGE_SOURCE_PATH) },
});

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _PostsCrudProps = CrudProps<PostSchemata>;
