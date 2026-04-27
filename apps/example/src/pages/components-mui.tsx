/**
 * components-mui.tsx
 * --------------------------------
 *
 * Live showcase of every component exported by `@crudx/mui`. Each
 * section renders a working example next to the JSX snippet that
 * produced it, so visitors can copy/paste straight into their own app.
 *
 * The CRUD demo pages (`test-crud-public-*`) cover the high-level
 * `CrudPanelView` surface; this page covers the lower-level building
 * blocks underneath it.
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
} from '@crudx/mui';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';

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
 * Section wrapper — each component example lives inside one of these.
 * Keeps the layout consistent: title + import line + description on
 * the left, the rendered component + JSX snippet on the right.
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
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          alignItems="stretch"
        >
          {/* meta column */}
          <Box sx={{ flex: '0 0 30%', minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontFamily: 'monospace' }}
            >
              {name}
            </Typography>
            <Box
              component="code"
              sx={{
                display: 'inline-block',
                mt: 0.75,
                px: 0.75,
                py: 0.25,
                borderRadius: 0.5,
                bgcolor: '#F4F4F5',
                color: 'text.secondary',
                fontFamily: 'monospace',
                fontSize: 11,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {importLine}
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1.5 }}
            >
              {description}
            </Typography>
          </Box>

          {/* demo column */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                border: 1,
                borderColor: 'divider',
                bgcolor: '#FAFAFA',
              }}
            >
              {children}
            </Box>
            <Box
              component="pre"
              sx={{
                m: 0,
                mt: 1.5,
                p: 1.5,
                borderRadius: 2,
                border: 1,
                borderColor: 'divider',
                bgcolor: '#0F172A',
                color: '#E2E8F0',
                fontFamily:
                  '"JetBrains Mono", "Fira Code", "SF Mono", Menlo, Consolas, monospace',
                fontSize: 12,
                lineHeight: 1.55,
                overflow: 'auto',
              }}
            >
              <code>{code}</code>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

/* --------------------------------------------------------------- */
/* Per-component demo wrappers                                     */
/* --------------------------------------------------------------- */

function ButtonDropdownDemo() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <Stack direction="row" spacing={2} alignItems="center">
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
      <Typography variant="caption" color="text.secondary">
        Last: <code>{last ?? '—'}</code>
      </Typography>
    </Stack>
  );
}

function DialogDemo() {
  const ref = useRef<DialogRefProps>(null);
  const [result, setResult] = useState<string>('—');
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="outlined" onClick={() => ref.current?.open()}>
        Open dialog
      </Button>
      <Typography variant="caption" color="text.secondary">
        Last action: <code>{result}</code>
      </Typography>
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
    </Stack>
  );
}

function TableDemo() {
  const [page, setPage] = useState(0);
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
    <Box
      component="table"
      sx={{ width: '100%', borderCollapse: 'collapse' }}
    >
      <TableHead<Row>
        columns={SAMPLE_COLUMNS}
        checkbox={{ enabled: true }}
        checked="partial"
        sorting={{ defaultOrder: 'name', defaultDirection: 'asc' }}
      />
    </Box>
  );
}

function TableRowDemo() {
  return (
    <Box
      component="table"
      sx={{ width: '100%', borderCollapse: 'collapse' }}
    >
      <Box component="tbody">
        {SAMPLE_ROWS.map((row, idx) => (
          <TableRow<Row>
            key={row.id}
            position={idx}
            data={row}
            columns={SAMPLE_COLUMNS}
          />
        ))}
      </Box>
    </Box>
  );
}

function TablePaginationDemo() {
  const [page, setPage] = useState(0);
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
    <Stack direction="row" spacing={2} alignItems="center">
      <TableSelectedBulkOptions
        total={3}
        items={[
          { key: 'delete', title: 'Delete selected' },
          { key: 'export', title: 'Export selected' },
        ]}
        onChange={(key: string) => setLast(key)}
      />
      <Typography variant="caption" color="text.secondary">
        Last: <code>{last ?? '—'}</code>
      </Typography>
    </Stack>
  );
}

function TableSettingsDensityOptionsDemo() {
  const [density, setDensity] = useState<string>('default');
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TableSettingsDensityOptions
        onChange={(key: string) => setDensity(key)}
      />
      <Typography variant="caption" color="text.secondary">
        Density: <code>{density}</code>
      </Typography>
    </Stack>
  );
}

function TableSettingsOptionsDemo() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TableSettingsOptions
        items={[
          { key: 'columns', title: 'Manage columns' },
          { key: 'export', title: 'Export CSV' },
          { key: 'reset', title: 'Reset view' },
        ]}
        onChange={(key: string) => setLast(key)}
      />
      <Typography variant="caption" color="text.secondary">
        Last: <code>{last ?? '—'}</code>
      </Typography>
    </Stack>
  );
}

function TableSettingsSortingOptionsDemo() {
  const [selected, setSelected] = useState<SortingOptionType>('DEFAULT');
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TableSettingsSortingOptions
        selected={selected}
        onChange={(key: string) => setSelected(key as SortingOptionType)}
      />
      <Typography variant="caption" color="text.secondary">
        Sort: <code>{selected}</code>
      </Typography>
    </Stack>
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
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">
                Overview content rendered for the active tab.
              </Typography>
            </Box>
          ),
        },
        {
          key: 'activity',
          label: 'Activity',
          content: (
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">No recent activity.</Typography>
            </Box>
          ),
        },
        {
          key: 'settings',
          label: 'Settings',
          content: (
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">Settings tab content.</Typography>
            </Box>
          ),
        },
      ]}
    />
  );
}

/* --------------------------------------------------------------- */
/* Page                                                            */
/* --------------------------------------------------------------- */

export function ComponentsMuiPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar context="@crudx/mui · Components" />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={1.5} sx={{ mb: 5 }}>
          <Chip
            label="@crudx/mui"
            color="primary"
            variant="outlined"
            sx={{ alignSelf: 'flex-start' }}
          />
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Material UI component reference
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Every component exported by{' '}
            <code>@crudx/mui</code>, rendered live with a copy-pasteable
            snippet. These are the building blocks that the higher-level{' '}
            <code>CrudPanelView</code> composes.
          </Typography>
        </Stack>

        <Stack spacing={3}>
          <Section
            name="BreadcrumbView"
            importLine={`import { BreadcrumbView } from '@crudx/mui';`}
            description="Navigation trail. Items can be plain links or chips, with an optional icon per crumb. Pass `current` to mark the active path."
            code={`<BreadcrumbView
  items={[
    { label: 'Home', url: '/', icon: <HomeIcon fontSize="small" /> },
    { label: 'Team', url: '/team' },
    { label: 'Ada Lovelace' },
  ]}
  current="/team/ada"
/>`}
          >
            <BreadcrumbView
              items={[
                {
                  label: 'Home',
                  url: '/',
                  icon: <HomeIcon fontSize="small" />,
                },
                { label: 'Team', url: '/team' },
                { label: 'Ada Lovelace' },
              ]}
              current="/team/ada"
            />
          </Section>

          <Section
            name="ButtonDropdown"
            importLine={`import { ButtonDropdown } from '@crudx/mui';`}
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
            importLine={`import { Dialog, DialogRefProps } from '@crudx/mui';`}
            description="Imperative dialog driven by ref (`open()`, `close()`, `toggle()`). Built-in `confirmation`, `info`, `success`, `error`, `warning`, and `custom` variants."
            code={`const ref = useRef<DialogRefProps>(null);
<Button onClick={() => ref.current?.open()}>Open</Button>
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
            importLine={`import { NumberFormatView } from '@crudx/mui';`}
            description="Number formatter wrapper. Uses numeral.js format strings and supports prefix / postfix slots."
            code={`<NumberFormatView
  amount={1234567.89}
  format="0,0.00"
  prefix="$"
  postfix=" USD"
/>`}
          >
            <Stack direction="row" spacing={3} alignItems="center">
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
            </Stack>
          </Section>

          <Section
            name="RenderFlexView"
            importLine={`import { RenderFlexView } from '@crudx/mui';`}
            description="Declarative MUI Grid layout. Each row is an array of `xs/sm/md`-sized cells. Useful when you want layout to live in data rather than JSX."
            code={`<RenderFlexView
  containerProps={{ spacing: 2 }}
  items={[
    [
      { xs: 12, sm: 6, children: <Card>...</Card> },
      { xs: 12, sm: 6, children: <Card>...</Card> },
    ],
    [{ xs: 12, children: <Card>...</Card> }],
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
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="body2">Cell A</Typography>
                        </CardContent>
                      </Card>
                    ),
                  },
                  {
                    xs: 12,
                    sm: 6,
                    children: (
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="body2">Cell B</Typography>
                        </CardContent>
                      </Card>
                    ),
                  },
                ],
                [
                  {
                    xs: 12,
                    children: (
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="body2">
                            Full-width row
                          </Typography>
                        </CardContent>
                      </Card>
                    ),
                  },
                ],
              ]}
            />
          </Section>

          <Section
            name="RenderNodeView"
            importLine={`import { RenderNodeView } from '@crudx/mui';`}
            description="Inline horizontal stack with a keyed list of nodes — handy for icon + label combos that need stable keys."
            code={`<RenderNodeView
  spacing={1}
  items={[
    { key: 'icon', content: <FavoriteIcon color="error" /> },
    { key: 'label', content: <span>23 favourites</span> },
  ]}
/>`}
          >
            <RenderNodeView
              spacing={1}
              items={[
                {
                  key: 'icon',
                  content: <FavoriteIcon color="error" fontSize="small" />,
                },
                { key: 'label', content: <span>23 favourites</span> },
              ]}
            />
          </Section>

          <Section
            name="Table"
            importLine={`import { Table } from '@crudx/mui';`}
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
  page={page}
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
            importLine={`import { TableHead } from '@crudx/mui';`}
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
            importLine={`import { TableRow } from '@crudx/mui';`}
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
            importLine={`import { TablePagination } from '@crudx/mui';`}
            description="Page controls. Note that MUI's variant is 0-indexed — `page=0` is the first page."
            code={`<TablePagination
  page={page}              // 0-indexed
  pageSize={pageSize}
  total={142}
  pageSizeOptions={[10, 25, 50]}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
/>`}
          >
            <TablePaginationDemo />
          </Section>

          <Section
            name="TableSelectedBulkOptions"
            importLine={`import { TableSelectedBulkOptions } from '@crudx/mui';`}
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
            importLine={`import { TableSettingsDensityOptions } from '@crudx/mui';`}
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
            importLine={`import { TableSettingsOptions } from '@crudx/mui';`}
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
            importLine={`import { TableSettingsSortingOptions, SortingOptionType } from '@crudx/mui';`}
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
            importLine={`import { TabView } from '@crudx/mui';`}
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
            importLine={`import { TooltipView } from '@crudx/mui';`}
            description="Tooltip wrapper around an arbitrary trigger. Disabled automatically when `title` is empty unless you force `enabled`."
            code={`<TooltipView title="Edit this record" arrow>
  <Button startIcon={<EditIcon />}>Edit</Button>
</TooltipView>`}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <TooltipView title="Edit this record" arrow>
                <Button startIcon={<EditIcon />}>Edit</Button>
              </TooltipView>
              <TooltipView title="Disabled — no permission" arrow>
                <span>
                  <Button disabled>Save</Button>
                </span>
              </TooltipView>
            </Stack>
          </Section>
        </Stack>
      </Container>
    </Box>
  );
}

export default ComponentsMuiPage;
