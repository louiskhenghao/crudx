/**
 * test-crud-public-rest-shadcn.tsx
 * --------------------------------
 *
 * Full-feature CRUD demo of `@crudx/core` + `@crudx/rest-tanstack-adapter`
 * rendered through `@crudx/shadcn` (Tailwind + Radix UI). Wired live
 * against JSONPlaceholder.
 *
 * Demonstrates the breadth of `<CrudPanelView>` in one page: page
 * header + page actions, filter view, table tabs with counts, sticky
 * checkbox + action columns, sorting, density, expand slots, custom
 * header actions, modal forms, detail drawer, row selection + bulk
 * actions, and a live `contentViewType` toggle that swaps the table
 * grid for a card view via `renderItemView`. The exact source for
 * the page is rendered at the bottom via the `<SourceView>` panel.
 */

import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { CrudProps } from '@crudx/core';
import {
  restGet,
  restList,
  restMutation,
  restOffsetPagination,
} from '@crudx/rest-tanstack-adapter';
import { CrudPanelView, Dialog } from '@crudx/shadcn';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LayoutGrid, List, RotateCcw } from 'lucide-react';
import { GetStaticProps } from 'next';

import { AppBar, JsonView, SourceView } from '../components';
import { readPageSource } from '../lib/pageSource';

const PAGE_SOURCE_PATH =
  'apps/example/src/pages/test-crud-public-rest-shadcn.tsx';

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
 * REST hooks built via @crudx/rest-tanstack-adapter
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

const btnOutlineClass =
  'inline-flex h-8 items-center justify-center gap-1 rounded-md border border-zinc-300 bg-white px-2.5 text-xs font-medium text-zinc-800 shadow-sm hover:bg-zinc-50';

const chipClass =
  'inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-700';

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
    <div className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {checkbox()}
          <span className="font-mono text-[11px] text-zinc-500">
            #{post.id}
          </span>
          <span className={chipClass}>user {post.userId ?? '—'}</span>
        </div>
        <div className="shrink-0">{action()}</div>
      </div>
      <h3 className="mt-2 line-clamp-2 text-sm font-semibold capitalize text-zinc-900">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-xs text-zinc-600">{post.body}</p>
      <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400">
        <span>row {index + 1}</span>
        <span className="font-mono">id:{post.id}</span>
      </div>
    </div>
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
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-600 shadow-sm">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
          Status
        </span>
        <span className={chipClass}>view: {contentViewType}</span>
        <span className={chipClass}>tab: {tab}</span>
        <span className={chipClass}>sort: {sortDir.toLowerCase()}</span>
        {search ? <span className={chipClass}>q: {search}</span> : null}
        {!hasActiveFilters ? (
          <span className="text-[11px] text-zinc-400">no filters applied</span>
        ) : null}
        <div className="ml-auto flex items-center gap-2">
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex h-7 items-center gap-1 rounded-md border border-zinc-300 bg-white px-2 text-[11px] font-medium text-zinc-700 hover:bg-zinc-50"
            >
              <RotateCcw className="h-3 w-3" />
              Reset filters
            </button>
          ) : null}
          <SourceView
            source={source}
            filename={PAGE_SOURCE_PATH}
            repoPath={PAGE_SOURCE_PATH}
          />
        </div>
      </div>

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
        pageActions={[
          {
            key: 'view-toggle',
            content: (
              <button
                type="button"
                className={btnOutlineClass}
                onClick={() =>
                  setContentViewType((v) => (v === 'table' ? 'view' : 'table'))
                }
                title="Toggle contentViewType (table ↔ cards)"
              >
                {contentViewType === 'table' ? (
                  <LayoutGrid className="h-3.5 w-3.5" />
                ) : (
                  <List className="h-3.5 w-3.5" />
                )}
                <span className="hidden sm:inline">
                  {contentViewType === 'table' ? 'Card view' : 'Table view'}
                </span>
              </button>
            ),
          },
        ]}
        filterTitle="Search"
        filterNode={
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Search title or body
            </span>
            <input
              className={inputClass}
              placeholder="e.g. qui, dolore, voluptatem…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
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
              <button
                type="button"
                className={btnOutlineClass}
                onClick={() =>
                  setContentViewType((v) => (v === 'table' ? 'view' : 'table'))
                }
              >
                {contentViewType === 'table' ? (
                  <LayoutGrid className="h-3.5 w-3.5" />
                ) : (
                  <List className="h-3.5 w-3.5" />
                )}
                <span className="hidden sm:inline">
                  {contentViewType === 'table' ? 'Cards' : 'Table'}
                </span>
              </button>
            ),
          },
        ]}
        tableExpandState={expanded}
        tableExpandView={
          <div className="rounded-md border border-dashed border-zinc-300 bg-zinc-50 p-3 text-xs text-zinc-600">
            <strong className="font-semibold">Header expand slot —</strong>{' '}
            use it for inline filters, charts, or contextual help. Toggle via
            the chevron in the table actions row.
          </div>
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
              <span className={chipClass}>user {String(value ?? '—')}</span>
            ),
          },
          {
            key: 'title',
            title: 'Title',
            width: 320,
            dataIndex: 'title',
            render: (value) => (
              <span className="font-medium capitalize text-zinc-900">
                {String(value ?? '')}
              </span>
            ),
          },
          {
            key: 'body',
            title: 'Body',
            dataIndex: 'body',
            render: (value) => (
              <span className="line-clamp-2 text-xs text-zinc-600">
                {String(value ?? '')}
              </span>
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
          <div className="flex h-full flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">
                  Detail
                </div>
                <h2 className="text-base font-bold capitalize">
                  {nodeProps?.data?.title ?? 'Post'}
                </h2>
              </div>
              <span className={chipClass}>
                id: {nodeProps?.data?.id ?? '—'}
              </span>
            </div>
            <JsonView
              data={nodeProps?.data ?? {}}
              loading={nodeProps.loading}
              title="Post payload"
            />
          </div>
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
    </div>
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
      <AppBar context="REST CRUD · shadcn" />
      <div className="px-3 py-4 md:px-8 md:py-6">
        <div className="mx-auto max-w-screen-2xl space-y-4 md:space-y-6">
          <div className="flex flex-wrap items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600">
            <span className={chipClass}>page header + actions</span>
            <span className={chipClass}>filter view</span>
            <span className={chipClass}>tabs · sticky cols</span>
            <span className={chipClass}>row selection + bulk</span>
            <span className={chipClass}>sorting · density · expand</span>
            <span className={chipClass}>modal forms</span>
            <span className={chipClass}>detail drawer</span>
            <span className={chipClass}>contentViewType toggle</span>
          </div>
          <PostsPanel source={source} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => ({
  props: { source: readPageSource(PAGE_SOURCE_PATH) },
});

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _PostsCrudProps = CrudProps<PostSchemata>;
