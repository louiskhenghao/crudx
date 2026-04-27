import { BoxProps } from '@mui/material/Box';

/**
 * ===========================
 * MAIN
 * ===========================
 *
 * The original surface mirrored MUI v5 `GridProps`. Since v5 `Grid` was
 * deprecated upstream (renamed `Grid2` in v6, breaking prop API), this
 * lib's flex rows now render through `Box` + flexbox instead.
 *
 * The breakpoint props (`xs`/`sm`/`md`/`lg`/`xl`) are still accepted as
 * 1–12 column counts and translated into responsive `width` values, so
 * existing consumers keep working.
 */
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
  /**
   * css class name for all row
   */
  className?: string;
  /**
   * the grid row configuration
   */
  items?: (
    | { props?: GridFlexRowType; items: GridFlexItemType[] }
    | GridFlexItemType[]
  )[];

  /**
   * CUSTOM PROPS
   * ===========================
   */

  /**
   * the grid container props for all rows
   */
  containerProps?: GridFlexRowType;
  /**
   * the grid item props for all items
   */
  itemProps?: GridFlexItemType;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default RenderFlexViewProps;
