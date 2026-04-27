# RenderFlexView

Render rows of flex items from a flat config. Originally a thin wrapper
around MUI v5's `Grid container/item` API; since v5 `Grid` was
deprecated upstream (renamed `Grid2` in v6, breaking prop API), this
component now renders through `Box` + flexbox so it works on
`@mui/material` v5, v6, v7, v8, and v9.

The `xs`/`sm`/`md`/`lg`/`xl` numeric props are still accepted as 1–12
column counts and translated into a responsive `width` value, so
existing call sites keep working.

> New code should compose `Box` / `Stack` directly. `RenderFlexView` is
> retained for back-compat with consumers built on the v5 `Grid` API.

---

## Props

```ts
import { BoxProps } from '@mui/material/Box';

type Breakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type GridFlexRowType = Omit<BoxProps, 'children'> &
  Breakpoints & {
    /** Spacing in MUI theme units between items in this row. Default: 2. */
    spacing?: number;
  };

export type GridFlexItemType = BoxProps & Breakpoints;

export type RenderFlexViewProps = {
  className?: string;
  items?: ({ props?: GridFlexRowType; items: GridFlexItemType[] } | GridFlexItemType[])[];
  containerProps?: GridFlexRowType;
  itemProps?: GridFlexItemType;
};
```

---

# Example

```tsx
import { RenderFlexView } from '@crudx/mui';

<RenderFlexView
  items={[
    [
      { children: '1-1', xs: 12, md: 6 },
      { children: '1-2' },
      { children: '1-3' },
      { children: '1-4' },
    ],
    [{ children: '2-1' }, { children: '2-2' }],
    [{ children: '3-1' }, { children: '3-2' }],
  ]}
/>

<RenderFlexView
  items={[
    {
      items: [
        { children: '1-1' },
        { children: '1-2' },
        { children: '1-3' },
      ],
    },
    { items: [{ children: '2-1' }, { children: '2-2' }] },
    { items: [{ children: '3-1' }, { children: '3-2' }] },
  ]}
/>
```
