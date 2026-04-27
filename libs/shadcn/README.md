# @crudx/shadcn

Tailwind + Radix implementation of the `@crudx/core` CRUD surface, with an
identical public API to [`@crudx/mui`](https://github.com/louiskhenghao/crudx/blob/main/libs/mui/README.md).
Drop-in replacement for consumers who prefer a shadcn-style UI over MUI. Uses
[`@tanstack/react-table`](https://tanstack.com/table) as the internal table
engine.

## Install

```sh
yarn add @crudx/shadcn @crudx/core @crudx/common

# plus a transport adapter — choose one:
yarn add @crudx/graphql-apollo-adapter @apollo/client graphql
# or:
yarn add @crudx/rest-tanstack-adapter @tanstack/react-query
```

Peer runtime: `react`, `react-dom`, `@tanstack/react-table`, `@radix-ui/*`,
`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`.

The transport choice only affects the schema slots fed into `CrudPanelView`;
the component surface itself is transport-neutral. See the [main README](https://github.com/louiskhenghao/crudx#available-packages)
for end-to-end live demos.

## Tailwind setup (required)

This library ships classnames only; Tailwind runs on the consumer side. Two steps:

### 1. Scan the compiled output

In `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@crudx/shadcn/**/*.{js,mjs}',
  ],
  // ...
};
```

### 2. CSS variables (shadcn theme)

Paste this block into your `globals.css` (or equivalent):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;
    --ring: 215 20.2% 65.1%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;
    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;
    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;
    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;
    --border: 216 34% 17%;
    --input: 216 34% 17%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;
    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;
    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --ring: 216 34% 17%;
  }
}
```

### 3. Optional: use the bundled preset

```js
const preset = require('@crudx/shadcn/lib/tailwind-preset').default;

module.exports = {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}', './node_modules/@crudx/shadcn/**/*.{js,mjs}'],
};
```

## Usage

```tsx
import { Table } from '@crudx/shadcn';

<Table
  data={rows}
  columns={[
    { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
    { key: 'name', title: 'Name', dataIndex: 'name' },
  ]}
  page={page}
  pageSize={pageSize}
  total={total}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
/>
```

The prop surface mirrors `@crudx/mui` — if you know one, you know the other.
