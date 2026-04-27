/**
 * components-shadcn.tsx
 * --------------------------------
 *
 * Live showcase of every component exported by `@crudx/shadcn`. Mirror
 * of `components-mui.tsx` against the Tailwind / Radix surface.
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
import { Edit, Heart, Home } from 'lucide-react';

import { AppBar } from '../components';

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
          <pre className="mt-3 overflow-auto rounded-md border border-border bg-slate-900 p-3 text-xs leading-relaxed text-slate-200">
            <code className="font-mono">{code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* Per-component demos                                             */
/* --------------------------------------------------------------- */

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
          content: (
            <div className="p-3 text-sm">No recent activity.</div>
          ),
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

/* --------------------------------------------------------------- */
/* Page                                                            */
/* --------------------------------------------------------------- */

export function ComponentsShadcnPage() {
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
            code={`<BreadcrumbView
  items={[
    { label: 'Home', url: '/', icon: <Home className="h-3.5 w-3.5" /> },
    { label: 'Team', url: '/team' },
    { label: 'Ada Lovelace' },
  ]}
  current="/team/ada"
  separator="/"
/>`}
          >
            <BreadcrumbView
              items={[
                {
                  label: 'Home',
                  url: '/',
                  icon: <Home className="h-3.5 w-3.5" />,
                },
                { label: 'Team', url: '/team' },
                { label: 'Ada Lovelace' },
              ]}
              current="/team/ada"
              separator="/"
            />
          </Section>

          <Section
            name="ButtonDropdown"
            importLine={`import { ButtonDropdown } from '@crudx/shadcn';`}
            description="Menu-style dropdown with either button or icon trigger. Each item dispatches its `key` through `onItemClick`."
            code={`<ButtonDropdown
  type="button"
  items={[
    { key: 'edit', title: 'Edit' },
    { key: 'duplicate', title: 'Duplicate' },
    { key: 'archive', title: 'Archive' },
  ]}
  onItemClick={(key) => console.log(key)}
>
  Actions
</ButtonDropdown>`}
          >
            <ButtonDropdownDemo />
          </Section>

          <Section
            name="Dialog"
            importLine={`import { Dialog, DialogRefProps } from '@crudx/shadcn';`}
            description="Imperative dialog driven by ref (`open()`, `close()`, `toggle()`). Built-in `confirmation`, `info`, `success`, `error`, `warning`, and `custom` variants."
            code={`const ref = useRef<DialogRefProps>(null);
<button onClick={() => ref.current?.open()}>Open</button>
<Dialog
  ref={ref}
  type="confirmation"
  title="Delete this record?"
  message="This action can't be undone."
  primaryText="Delete"
  secondaryText="Cancel"
  onClickPrimaryAction={() => {/* ... */}}
/>`}
          >
            <DialogDemo />
          </Section>

          <Section
            name="NumberFormatView"
            importLine={`import { NumberFormatView } from '@crudx/shadcn';`}
            description="Number formatter wrapper. Uses numeral.js format strings and supports prefix / postfix slots."
            code={`<NumberFormatView
  amount={1234567.89}
  format="0,0.00"
  prefix="$"
  postfix=" USD"
/>`}
          >
            <div className="flex items-center gap-6">
              <NumberFormatView
                amount={1234567.89}
                format="0,0.00"
                prefix="$"
                postfix=" USD"
              />
              <NumberFormatView amount={0.7421} format="0.0%" />
              <NumberFormatView
                amount={2_500_000}
                format="0.0a"
                prefix="≈ "
              />
            </div>
          </Section>

          <Section
            name="RenderFlexView"
            importLine={`import { RenderFlexView } from '@crudx/shadcn';`}
            description="Declarative grid layout. The shadcn variant uses Tailwind col-span classes under the hood, but keeps the `xs/sm/md` API of the MUI variant."
            code={`<RenderFlexView
  containerProps={{ spacing: 2 }}
  items={[
    [
      { xs: 12, sm: 6, children: <div>Cell A</div> },
      { xs: 12, sm: 6, children: <div>Cell B</div> },
    ],
    [{ xs: 12, children: <div>Full-width row</div> }],
  ]}
/>`}
          >
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
          </Section>

          <Section
            name="RenderNodeView"
            importLine={`import { RenderNodeView } from '@crudx/shadcn';`}
            description="Inline horizontal stack with a keyed list of nodes. Exposes `direction`, `alignItems`, and `gap` as first-class props."
            code={`<RenderNodeView
  direction="row"
  alignItems="center"
  gap={2}
  items={[
    { key: 'icon', content: <Heart className="h-4 w-4 text-red-500" /> },
    { key: 'label', content: <span>23 favourites</span> },
  ]}
/>`}
          >
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
          </Section>

          <Section
            name="Table"
            importLine={`import { Table } from '@crudx/shadcn';`}
            description="The full table primitive — head, rows and pagination wired up. Use this when you want a turnkey table without going through CrudTableView."
            code={`<Table<Row>
  data={rows}
  columns={[
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'role', title: 'Role', dataIndex: 'role' },
    { key: 'salary', title: 'Salary', align: 'right',
      render: (_, r) => <NumberFormatView amount={r.salary} prefix="$" />,
    },
  ]}
  striped
  bordered
  page={page}            /* 1-indexed in shadcn */
  pageSize={pageSize}
  total={rows.length}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
/>`}
          >
            <TableDemo />
          </Section>

          <Section
            name="TableHead"
            importLine={`import { TableHead } from '@crudx/shadcn';`}
            description="Standalone table header — use it when composing your own `<table>` instead of using `Table`. Drives sort indicators and the bulk-checkbox state."
            code={`<table>
  <TableHead<Row>
    columns={columns}
    checkbox={{ enabled: true }}
    checked="partial"
    sorting={{ defaultOrder: 'name', defaultDirection: 'asc' }}
    onSort={(key, direction) => {/* ... */}}
  />
</table>`}
          >
            <TableHeadDemo />
          </Section>

          <Section
            name="TableRow"
            importLine={`import { TableRow } from '@crudx/shadcn';`}
            description="Standalone table row — pair with TableHead when you need a custom shell. Renders cells from the same column config as Table."
            code={`<tbody>
  {rows.map((row, idx) => (
    <TableRow<Row>
      key={row.id}
      position={idx}
      data={row}
      columns={columns}
    />
  ))}
</tbody>`}
          >
            <TableRowDemo />
          </Section>

          <Section
            name="TablePagination"
            importLine={`import { TablePagination } from '@crudx/shadcn';`}
            description="Page controls. Note that the shadcn variant is 1-indexed (the MUI variant is 0-indexed) and exposes label slots for i18n."
            code={`<TablePagination
  page={page}              /* 1-indexed */
  pageSize={pageSize}
  total={142}
  pageSizeOptions={[10, 25, 50]}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
  rowsPerPageLabel="Rows per page"
  displayedRowsLabel={({ from, to, count }) =>
    \`\${from}-\${to} of \${count}\`
  }
/>`}
          >
            <TablePaginationDemo />
          </Section>

          <Section
            name="TableSelectedBulkOptions"
            importLine={`import { TableSelectedBulkOptions } from '@crudx/shadcn';`}
            description="Bulk-action menu shown above a table when rows are selected. Defaults to a `{count} Item(s) Selected` label."
            code={`<TableSelectedBulkOptions
  total={selected.length}
  items={[
    { key: 'delete', title: 'Delete selected' },
    { key: 'export', title: 'Export selected' },
  ]}
  onChange={(key) => handleBulk(key)}
/>`}
          >
            <TableSelectedBulkOptionsDemo />
          </Section>

          <Section
            name="TableSettingsDensityOptions"
            importLine={`import { TableSettingsDensityOptions } from '@crudx/shadcn';`}
            description="Density picker. Three preset rows — default / small / medium — with a localisable label per option."
            code={`<TableSettingsDensityOptions
  text={{ default: 'Default', small: 'Small', medium: 'Medium' }}
  onChange={(key) => setDensity(key)}
/>`}
          >
            <TableSettingsDensityOptionsDemo />
          </Section>

          <Section
            name="TableSettingsOptions"
            importLine={`import { TableSettingsOptions } from '@crudx/shadcn';`}
            description="Generic settings dropdown for table-level actions (column toggles, exports, …). Same item shape as ButtonDropdown."
            code={`<TableSettingsOptions
  items={[
    { key: 'columns', title: 'Manage columns' },
    { key: 'export', title: 'Export CSV' },
    { key: 'reset', title: 'Reset view' },
  ]}
  onChange={(key) => handle(key)}
/>`}
          >
            <TableSettingsOptionsDemo />
          </Section>

          <Section
            name="TableSettingsSortingOptions"
            importLine={`import { TableSettingsSortingOptions, SortingOptionType } from '@crudx/shadcn';`}
            description="Three-state global sort toggle (DEFAULT / ASC / DESC). Pair with a sortable list view that doesn't pin sort to a single column."
            code={`const [sort, setSort] = useState<SortingOptionType>('DEFAULT');
<TableSettingsSortingOptions
  selected={sort}
  onChange={(key) => setSort(key as SortingOptionType)}
/>`}
          >
            <TableSettingsSortingOptionsDemo />
          </Section>

          <Section
            name="TabView"
            importLine={`import { TabView } from '@crudx/shadcn';`}
            description="Tab list with content slots. Pass `content` per item, or use `renderContent` for fully controlled rendering."
            code={`<TabView
  items={[
    { key: 'overview', label: 'Overview', content: <Overview /> },
    { key: 'activity', label: 'Activity', content: <Activity /> },
    { key: 'settings', label: 'Settings', content: <Settings /> },
  ]}
/>`}
          >
            <TabViewDemo />
          </Section>

          <Section
            name="TooltipView"
            importLine={`import { TooltipView } from '@crudx/shadcn';`}
            description="Tooltip wrapper around an arbitrary trigger. Disabled automatically when `title` is empty unless you force `enabled`. Provider is included internally."
            code={`<TooltipView title="Edit this record" delayDuration={200}>
  <button>
    <Edit className="h-4 w-4" /> Edit
  </button>
</TooltipView>`}
          >
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
          </Section>
        </div>
      </main>
    </div>
  );
}

export default ComponentsShadcnPage;
