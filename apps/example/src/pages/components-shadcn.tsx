/**
 * components-shadcn.tsx
 * --------------------------------
 *
 * Live showcase of every component exported by `@crudx/shadcn`. Mirror
 * of `components-mui.tsx` against the Tailwind / Radix surface.
 *
 * The code snippet under each section is *extracted* from the live
 * demo function via `readDemoSnippets()` at build time, so what you
 * see in the `<pre>` is exactly the JSX that's rendered above it.
 * Every demo is tagged with `// @demo:KEY` and the snippet helper
 * pulls out the body of its `return ( ... )`.
 */

import { ReactNode, useRef, useState } from 'react';
import {
  BreadcrumbView,
  ButtonDropdown,
  Dialog,
  DialogRefProps,
  NumberFormatView,
  RenderFlexView,
  RenderNodeView,
  SortingOptionType,
  Table,
  TableHead,
  TablePagination,
  TableRow,
  TableSelectedBulkOptions,
  TableSettingsDensityOptions,
  TableSettingsOptions,
  TableSettingsSortingOptions,
  TabView,
  TooltipView,
} from '@crudx/shadcn';
import { Edit, Heart, Home, Trash2 } from 'lucide-react';
import { GetStaticProps } from 'next';

import { AppBar, CodeBlock } from '../components';
import { readDemoSnippets } from '../lib/pageSnippets';

const PAGE_SOURCE_PATH = 'apps/example/src/pages/components-shadcn.tsx';

type Row = { id: number; name: string; role: string; salary: number };

const SAMPLE_ROWS: Row[] = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer', salary: 95000 },
  { id: 2, name: 'Alan Turing', role: 'Researcher', salary: 110000 },
  { id: 3, name: 'Grace Hopper', role: 'Architect', salary: 120000 },
];

const SAMPLE_COLUMNS = [
  { key: 'id', title: 'ID', width: 60, dataIndex: 'id' as const },
  { key: 'name', title: 'Name', dataIndex: 'name' as const, sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' as const },
  {
    key: 'salary',
    title: 'Salary',
    align: 'right' as const,
    render: (_: unknown, record: Row) => (
      <NumberFormatView amount={record.salary} format="0,0" prefix="$" />
    ),
  },
];

/**
 * Section wrapper — Tailwind twin of the MUI showcase Section.
 */
function Section(props: {
  name: string;
  importLine: string;
  description: string;
  code: string;
  children: ReactNode;
}) {
  const { name, importLine, description, code, children } = props;
  return (
    <section className="rounded-lg border border-border bg-card p-5 md:p-6">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* meta column */}
        <div className="md:w-[30%] md:shrink-0">
          <h2 className="font-mono text-lg font-bold text-foreground">
            {name}
          </h2>
          <code className="mt-1.5 inline-block break-words rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
            {importLine}
          </code>
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        </div>

        {/* demo column */}
        <div className="min-w-0 flex-1">
          <div className="rounded-md border border-border bg-background p-4">
            {children}
          </div>
          <CodeBlock className="mt-3" code={code} language="tsx" />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* Per-component demos                                             */
/*                                                                 */
/* Each demo is annotated with `// @demo:KEY` so its `return (...)` */
/* body is auto-extracted as the snippet shown under it.           */
/* --------------------------------------------------------------- */

// @demo:breadcrumb-view
function BreadcrumbViewDemo() {
  return (
    <BreadcrumbView
      items={[
        { label: 'Home', url: '/', icon: <Home className="h-3.5 w-3.5" /> },
        { label: 'Team', url: '/team' },
        { label: 'Ada Lovelace' },
      ]}
      current="/team/ada"
      separator="/"
    />
  );
}

// @demo:button-dropdown
function ButtonDropdownDemo() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <div className="flex items-center gap-3">
      <ButtonDropdown
        type="button"
        items={[
          { key: 'edit', title: 'Edit' },
          { key: 'duplicate', title: 'Duplicate' },
          { key: 'archive', title: 'Archive' },
        ]}
        onItemClick={setLast}
      >
        Actions
      </ButtonDropdown>
      <span className="text-xs text-muted-foreground">
        Last: <code>{last ?? '—'}</code>
      </span>
    </div>
  );
}

// @demo:dialog
function DialogDemo() {
  const ref = useRef<DialogRefProps>(null);
  const [result, setResult] = useState<string>('—');
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm font-medium text-foreground hover:bg-accent"
        onClick={() => ref.current?.open()}
      >
        Open dialog
      </button>
      <span className="text-xs text-muted-foreground">
        Last action: <code>{result}</code>
      </span>
      <Dialog
        ref={ref}
        type="confirmation"
        title="Delete this record?"
        message="This action can't be undone. Are you sure you want to continue?"
        primaryText="Delete"
        secondaryText="Cancel"
        onClickPrimaryAction={() => setResult('confirmed')}
        onClickSecondaryAction={() => setResult('cancelled')}
      />
    </div>
  );
}

// @demo:number-format-view
function NumberFormatViewDemo() {
  return (
    <div className="flex items-center gap-6">
      <NumberFormatView
        amount={1234567.89}
        format="0,0.00"
        prefix="$"
        postfix=" USD"
      />
      <NumberFormatView amount={0.7421} format="0.0%" />
      <NumberFormatView amount={2_500_000} format="0.0a" prefix="≈ " />
    </div>
  );
}

// @demo:render-flex-view
function RenderFlexViewDemo() {
  return (
    <RenderFlexView
      containerProps={{ spacing: 2 }}
      items={[
        [
          {
            xs: 12,
            sm: 6,
            children: (
              <div className="rounded-md border border-border bg-card p-3 text-sm">
                Cell A
              </div>
            ),
          },
          {
            xs: 12,
            sm: 6,
            children: (
              <div className="rounded-md border border-border bg-card p-3 text-sm">
                Cell B
              </div>
            ),
          },
        ],
        [
          {
            xs: 12,
            children: (
              <div className="rounded-md border border-border bg-card p-3 text-sm">
                Full-width row
              </div>
            ),
          },
        ],
      ]}
    />
  );
}

// @demo:render-node-view
function RenderNodeViewDemo() {
  return (
    <RenderNodeView
      direction="row"
      alignItems="center"
      gap={2}
      items={[
        {
          key: 'icon',
          content: <Heart className="h-4 w-4 text-red-500" />,
        },
        { key: 'label', content: <span>23 favourites</span> },
      ]}
    />
  );
}

// @demo:table
function TableDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <Table<Row>
      data={SAMPLE_ROWS}
      columns={SAMPLE_COLUMNS}
      striped
      bordered
      page={page}
      pageSize={pageSize}
      total={SAMPLE_ROWS.length}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
}

type StickyRow = {
  id: number;
  name: string;
  email: string;
  team: string;
  role: string;
  city: string;
  country: string;
  joined: string;
  salary: number;
  status: string;
};

const STICKY_ROWS: StickyRow[] = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@analytical.engine', team: 'Engineering', role: 'Principal Engineer', city: 'London', country: 'United Kingdom', joined: '1843-12-10', salary: 215000, status: 'Active' },
  { id: 2, name: 'Alan Turing', email: 'alan@bletchley.uk', team: 'Research', role: 'Cryptographer', city: 'Manchester', country: 'United Kingdom', joined: '1936-06-12', salary: 198000, status: 'Active' },
  { id: 3, name: 'Grace Hopper', email: 'grace@navy.mil', team: 'Compilers', role: 'Rear Admiral', city: 'Arlington', country: 'United States', joined: '1944-07-02', salary: 184000, status: 'Active' },
  { id: 4, name: 'Katherine Johnson', email: 'katherine@nasa.gov', team: 'Trajectory', role: 'Mathematician', city: 'Hampton', country: 'United States', joined: '1953-06-18', salary: 172000, status: 'Active' },
  { id: 5, name: 'Hedy Lamarr', email: 'hedy@spread.spectrum', team: 'Comms', role: 'Inventor', city: 'Vienna', country: 'Austria', joined: '1942-08-11', salary: 165000, status: 'Pending' },
  { id: 6, name: 'Tim Berners-Lee', email: 'timbl@cern.ch', team: 'Web Platform', role: 'Director', city: 'Geneva', country: 'Switzerland', joined: '1989-03-12', salary: 240000, status: 'Active' },
  { id: 7, name: 'Margaret Hamilton', email: 'margaret@mit.edu', team: 'Apollo', role: 'Software Lead', city: 'Cambridge', country: 'United States', joined: '1965-09-01', salary: 202000, status: 'On leave' },
];

const STICKY_COLUMNS = [
  { key: 'id', title: '#', width: 60, dataIndex: 'id' as const, align: 'center' as const },
  { key: 'name', title: 'Name', width: 180, dataIndex: 'name' as const, sortable: true },
  { key: 'email', title: 'Email', width: 240, dataIndex: 'email' as const },
  { key: 'team', title: 'Team', width: 140, dataIndex: 'team' as const },
  { key: 'role', title: 'Role', width: 200, dataIndex: 'role' as const },
  { key: 'city', title: 'City', width: 150, dataIndex: 'city' as const },
  { key: 'country', title: 'Country', width: 180, dataIndex: 'country' as const },
  { key: 'joined', title: 'Joined', width: 130, dataIndex: 'joined' as const },
  {
    key: 'salary',
    title: 'Salary',
    width: 130,
    align: 'right' as const,
    render: (_: unknown, record: StickyRow) => (
      <NumberFormatView amount={record.salary} format="0,0" prefix="$" />
    ),
  },
  { key: 'status', title: 'Status', width: 120, dataIndex: 'status' as const },
  {
    key: 'action',
    title: 'Action',
    width: 110,
    sticky: true,
    align: 'center' as const,
    render: () => (
      <div className="flex items-center justify-center gap-1">
        <button
          type="button"
          aria-label="Edit"
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <Edit className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          aria-label="Delete"
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    ),
  },
];

// @demo:table-sticky
function TableStickyDemo() {
  return (
    <div className="max-w-full">
      <p className="mb-2 text-xs text-muted-foreground">
        Scroll horizontally — the checkbox column stays pinned to the left and
        the action column stays pinned to the right. Inset shadows mark the
        sticky boundaries.
      </p>
      <Table<StickyRow>
        data={STICKY_ROWS}
        columns={STICKY_COLUMNS}
        bordered
        pagination={false}
        checkbox={{
          enabled: true,
          sticky: true,
          dataIndex: 'id',
        }}
      />
    </div>
  );
}

// @demo:table-head
function TableHeadDemo() {
  return (
    <table className="w-full border-collapse">
      <TableHead<Row>
        columns={SAMPLE_COLUMNS}
        checkbox={{ enabled: true }}
        checked="partial"
        sorting={{ defaultOrder: 'name', defaultDirection: 'asc' }}
      />
    </table>
  );
}

// @demo:table-row
function TableRowDemo() {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {SAMPLE_ROWS.map((row, idx) => (
          <TableRow<Row>
            key={row.id}
            position={idx}
            data={row}
            columns={SAMPLE_COLUMNS}
          />
        ))}
      </tbody>
    </table>
  );
}

// @demo:table-pagination
function TablePaginationDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <TablePagination
      page={page}
      pageSize={pageSize}
      total={142}
      pageSizeOptions={[10, 25, 50]}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
}

// @demo:table-selected-bulk-options
function TableSelectedBulkOptionsDemo() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <div className="flex items-center gap-3">
      <TableSelectedBulkOptions
        total={3}
        items={[
          { key: 'delete', title: 'Delete selected' },
          { key: 'export', title: 'Export selected' },
        ]}
        onChange={(key: string) => setLast(key)}
      />
      <span className="text-xs text-muted-foreground">
        Last: <code>{last ?? '—'}</code>
      </span>
    </div>
  );
}

// @demo:table-settings-density-options
function TableSettingsDensityOptionsDemo() {
  const [density, setDensity] = useState<string>('default');
  return (
    <div className="flex items-center gap-3">
      <TableSettingsDensityOptions
        onChange={(key: string) => setDensity(key)}
      />
      <span className="text-xs text-muted-foreground">
        Density: <code>{density}</code>
      </span>
    </div>
  );
}

// @demo:table-settings-options
function TableSettingsOptionsDemo() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <div className="flex items-center gap-3">
      <TableSettingsOptions
        items={[
          { key: 'columns', title: 'Manage columns' },
          { key: 'export', title: 'Export CSV' },
          { key: 'reset', title: 'Reset view' },
        ]}
        onChange={(key: string) => setLast(key)}
      />
      <span className="text-xs text-muted-foreground">
        Last: <code>{last ?? '—'}</code>
      </span>
    </div>
  );
}

// @demo:table-settings-sorting-options
function TableSettingsSortingOptionsDemo() {
  const [selected, setSelected] = useState<SortingOptionType>('DEFAULT');
  return (
    <div className="flex items-center gap-3">
      <TableSettingsSortingOptions
        selected={selected}
        onChange={(key: string) => setSelected(key as SortingOptionType)}
      />
      <span className="text-xs text-muted-foreground">
        Sort: <code>{selected}</code>
      </span>
    </div>
  );
}

// @demo:tab-view
function TabViewDemo() {
  return (
    <TabView
      items={[
        {
          key: 'overview',
          label: 'Overview',
          content: (
            <div className="p-3 text-sm">
              Overview content rendered for the active tab.
            </div>
          ),
        },
        {
          key: 'activity',
          label: 'Activity',
          content: <div className="p-3 text-sm">No recent activity.</div>,
        },
        {
          key: 'settings',
          label: 'Settings',
          content: <div className="p-3 text-sm">Settings tab content.</div>,
        },
      ]}
    />
  );
}

// @demo:tooltip-view
function TooltipViewDemo() {
  return (
    <div className="flex items-center gap-3">
      <TooltipView title="Edit this record" delayDuration={200}>
        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium text-foreground hover:bg-accent"
        >
          <Edit className="h-4 w-4" /> Edit
        </button>
      </TooltipView>
      <TooltipView title="Disabled — no permission">
        <span>
          <button
            type="button"
            disabled
            className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm font-medium text-foreground opacity-50"
          >
            Save
          </button>
        </span>
      </TooltipView>
    </div>
  );
}

/* --------------------------------------------------------------- */
/* Page                                                            */
/* --------------------------------------------------------------- */

type PageProps = { snippets: Record<string, string> };

export function ComponentsShadcnPage({ snippets }: PageProps) {
  const code = (key: string) => snippets[key] ?? `// missing snippet: ${key}`;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppBar context="@crudx/shadcn · Components" />
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="mb-10 flex flex-col gap-3">
          <span className="self-start rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            @crudx/shadcn
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            shadcn/ui component reference
          </h1>
          <p className="text-base text-muted-foreground">
            Every component exported by{' '}
            <code className="rounded bg-muted px-1">@crudx/shadcn</code>,
            rendered live with a copy-pasteable snippet. API-compatible
            with{' '}
            <code className="rounded bg-muted px-1">@crudx/mui</code> — same
            props, same names, same callback shapes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Section
            name="BreadcrumbView"
            importLine={`import { BreadcrumbView } from '@crudx/shadcn';`}
            description="Navigation trail with optional icon + custom separator. Pass `current` to mark the active path."
            code={code('breadcrumb-view')}
          >
            <BreadcrumbViewDemo />
          </Section>

          <Section
            name="ButtonDropdown"
            importLine={`import { ButtonDropdown } from '@crudx/shadcn';`}
            description="Menu-style dropdown with either button or icon trigger. Each item dispatches its `key` through `onItemClick`."
            code={code('button-dropdown')}
          >
            <ButtonDropdownDemo />
          </Section>

          <Section
            name="Dialog"
            importLine={`import { Dialog, DialogRefProps } from '@crudx/shadcn';`}
            description="Imperative dialog driven by ref (`open()`, `close()`, `toggle()`). Built-in `confirmation`, `info`, `success`, `error`, `warning`, and `custom` variants."
            code={code('dialog')}
          >
            <DialogDemo />
          </Section>

          <Section
            name="NumberFormatView"
            importLine={`import { NumberFormatView } from '@crudx/shadcn';`}
            description="Number formatter wrapper. Uses numeral.js format strings and supports prefix / postfix slots."
            code={code('number-format-view')}
          >
            <NumberFormatViewDemo />
          </Section>

          <Section
            name="RenderFlexView"
            importLine={`import { RenderFlexView } from '@crudx/shadcn';`}
            description="Declarative grid layout. The shadcn variant uses Tailwind col-span classes under the hood, but keeps the `xs/sm/md` API of the MUI variant."
            code={code('render-flex-view')}
          >
            <RenderFlexViewDemo />
          </Section>

          <Section
            name="RenderNodeView"
            importLine={`import { RenderNodeView } from '@crudx/shadcn';`}
            description="Inline horizontal stack with a keyed list of nodes. Exposes `direction`, `alignItems`, and `gap` as first-class props."
            code={code('render-node-view')}
          >
            <RenderNodeViewDemo />
          </Section>

          <Section
            name="Table"
            importLine={`import { Table } from '@crudx/shadcn';`}
            description="The full table primitive — head, rows and pagination wired up. Use this when you want a turnkey table without going through CrudTableView."
            code={code('table')}
          >
            <TableDemo />
          </Section>

          <Section
            name="Table — sticky columns"
            importLine={`import { Table } from '@crudx/shadcn';`}
            description="Pin the checkbox column to the left edge with `checkbox.sticky` and pin a column (e.g. an action column) to the right edge with `sticky: true`. Cumulative offsets and inset boundary shadows are applied automatically."
            code={code('table-sticky')}
          >
            <TableStickyDemo />
          </Section>

          <Section
            name="TableHead"
            importLine={`import { TableHead } from '@crudx/shadcn';`}
            description="Standalone table header — use it when composing your own `<table>` instead of using `Table`. Drives sort indicators and the bulk-checkbox state."
            code={code('table-head')}
          >
            <TableHeadDemo />
          </Section>

          <Section
            name="TableRow"
            importLine={`import { TableRow } from '@crudx/shadcn';`}
            description="Standalone table row — pair with TableHead when you need a custom shell. Renders cells from the same column config as Table."
            code={code('table-row')}
          >
            <TableRowDemo />
          </Section>

          <Section
            name="TablePagination"
            importLine={`import { TablePagination } from '@crudx/shadcn';`}
            description="Page controls. Note that the shadcn variant is 1-indexed (the MUI variant is 0-indexed) and exposes label slots for i18n."
            code={code('table-pagination')}
          >
            <TablePaginationDemo />
          </Section>

          <Section
            name="TableSelectedBulkOptions"
            importLine={`import { TableSelectedBulkOptions } from '@crudx/shadcn';`}
            description="Bulk-action menu shown above a table when rows are selected. Defaults to a `{count} Item(s) Selected` label."
            code={code('table-selected-bulk-options')}
          >
            <TableSelectedBulkOptionsDemo />
          </Section>

          <Section
            name="TableSettingsDensityOptions"
            importLine={`import { TableSettingsDensityOptions } from '@crudx/shadcn';`}
            description="Density picker. Three preset rows — default / small / medium — with a localisable label per option."
            code={code('table-settings-density-options')}
          >
            <TableSettingsDensityOptionsDemo />
          </Section>

          <Section
            name="TableSettingsOptions"
            importLine={`import { TableSettingsOptions } from '@crudx/shadcn';`}
            description="Generic settings dropdown for table-level actions (column toggles, exports, …). Same item shape as ButtonDropdown."
            code={code('table-settings-options')}
          >
            <TableSettingsOptionsDemo />
          </Section>

          <Section
            name="TableSettingsSortingOptions"
            importLine={`import { TableSettingsSortingOptions, SortingOptionType } from '@crudx/shadcn';`}
            description="Three-state global sort toggle (DEFAULT / ASC / DESC). Pair with a sortable list view that doesn't pin sort to a single column."
            code={code('table-settings-sorting-options')}
          >
            <TableSettingsSortingOptionsDemo />
          </Section>

          <Section
            name="TabView"
            importLine={`import { TabView } from '@crudx/shadcn';`}
            description="Tab list with content slots. Pass `content` per item, or use `renderContent` for fully controlled rendering."
            code={code('tab-view')}
          >
            <TabViewDemo />
          </Section>

          <Section
            name="TooltipView"
            importLine={`import { TooltipView } from '@crudx/shadcn';`}
            description="Tooltip wrapper around an arbitrary trigger. Disabled automatically when `title` is empty unless you force `enabled`. Provider is included internally."
            code={code('tooltip-view')}
          >
            <TooltipViewDemo />
          </Section>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
  props: { snippets: readDemoSnippets(PAGE_SOURCE_PATH) },
});

export default ComponentsShadcnPage;
