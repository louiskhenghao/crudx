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

export type InferDataColumnType<TData> = any;

// the checkbox config
export type TableCheckboxConfig<TData> = {
  // default `false`
  enabled: boolean;
  // the data index
  dataIndex?: TableColumnDataIndex<TData>;
};

export type TableColumnType<TData = any> = {
  /**
   * unique key for column
   */
  key: string;
  /**
   * title for the column
   */
  title?: string | ReactNode;
  /**
   * content alignment for column
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * column width
   */
  width?: string | number;
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
   * MUI TableCell props for date cell
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
    value: InferDataColumnType<TData>,
    record: TData,
    index: number
  ) => ReactNode;
};
