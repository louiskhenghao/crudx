/**
 * ===========================
 * MAIN
 * ===========================
 */

/**
 * MUI Grid used 12-column math; we keep the same `xs/sm/md/lg/xl` numeric
 * spans (1..12) and translate them to Tailwind col-span-* at render time.
 */
export type GridBreakpointSpan = number | true | 'auto' | false;

export type GridFlexItemType = {
  className?: string;
  children?: React.ReactNode;
  xs?: GridBreakpointSpan;
  sm?: GridBreakpointSpan;
  md?: GridBreakpointSpan;
  lg?: GridBreakpointSpan;
  xl?: GridBreakpointSpan;
  style?: React.CSSProperties;
  /**
   * escape hatch for additional div props
   */
  itemProps?: React.HTMLAttributes<HTMLDivElement>;
};

export type GridFlexRowType = {
  className?: string;
  /**
   * gap between columns (Tailwind gap scale); default 2
   */
  spacing?: number;
  style?: React.CSSProperties;
  /**
   * escape hatch for additional div props
   */
  rowProps?: React.HTMLAttributes<HTMLDivElement>;
};

export type RenderFlexViewProps = {
  className?: string;
  items?: (
    | { props?: GridFlexRowType; items: GridFlexItemType[] }
    | GridFlexItemType[]
  )[];
  containerProps?: GridFlexRowType;
  itemProps?: GridFlexItemType;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default RenderFlexViewProps;
