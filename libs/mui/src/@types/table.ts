import { ReactNode } from 'react';
import { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';

// table check all state
export type TableCheckAllState = 'all' | 'partial' | 'none';

// table primitive types
type TableDataPrimitiveTypes = string | number;

// This will determine the keys or fallback to the original type for primitives
export type TableDataIndex<TData> = TData extends TableDataPrimitiveTypes
  ? TData
  : keyof TData;

// type for row data column
export type TableColumnDataIndex<TData> = TData extends TableDataPrimitiveTypes
  ? null
  : keyof TData;

export type InferDataColumnType<TData = any> =
  TData extends TableDataPrimitiveTypes ? TData : TData;

// the checkbox config
export type TableCheckboxConfig<TData> = {
  // default `false`
  enabled: boolean;
  // the data index
  dataIndex?: TableColumnDataIndex<TData>;
  /**
   * Added 0.0.21
   * whether should fixed column for checkbox
   * NOTE: this will be ignored if is not table view
   */
  sticky?: boolean;
};

export type TableColumnType<TData = any> = {
  /**
   * Added 0.0.21
   * custom class name for table row column
   */
  className?: ((value: any, record: TData, index: number) => string) | string;
  /**
   * unique key for column
   */
  key: string;
  /**
   * title for the column
   */
  title?: string | ReactNode;
  /**
   * Added 0.0.19
   *
   * title alignment on column
   * NOTE: if not provided will fallback to `align` otherwise `left`
   * @default 'left'
   */
  alignTitle?: 'left' | 'center' | 'right';
  /**
   * content alignment for column
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * vertical alignment for column content
   * @default 'middle'
   */
  valign?: 'top' | 'middle' | 'bottom' | 'baseline' | undefined;
  /**
   * column width
   */
  width?: string | number;
  /**
   * Added 0.0.19
   *
   * column minimum width
   */
  minWidth?: string | number;
  /**
   * whether show title in uppercase form
   */
  uppercase?: boolean;
  /**
   * indicate whether column sortable
   * @default false
   */
  sortable?: boolean;
  /**
   * MUI TableCell props for header
   */
  headerColumnProps?: MuiTableCellProps;
  /**
   * MUI TableCell props for data cell
   */
  dataColumnProps?: MuiTableCellProps;
  /**
   * field to read data
   */
  dataIndex?: TableColumnDataIndex<TData>;
  /**
   * Render function for column
   */
  render?: (
    value: any,
    record: TData,
    rowIndex: number,
    columnIndex: number
  ) => ReactNode;
  /**
   * Added 0.0.16
   *
   * Group Header
   * Only first group setting will take effect
   */
  group?: Omit<
    TableColumnType<TData>,
    'render' | 'group' | 'sortable' | 'type' | 'dataIndex' | 'dataColumnProps'
  >;
  /**
   * Sticky Column
   * not allow with group exist
   * @default false
   */
  sticky?: boolean;
};
