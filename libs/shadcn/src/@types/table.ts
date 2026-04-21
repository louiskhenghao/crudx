import { ReactNode } from 'react';
import type { RowData } from '@tanstack/react-table';

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
   * whether should fixed column for checkbox
   * NOTE: this will be ignored if is not table view
   */
  sticky?: boolean;
};

export type TableColumnType<TData = any> = {
  /**
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
   * HTML <th> attributes for header cell
   */
  headerColumnProps?: React.ThHTMLAttributes<HTMLTableCellElement>;
  /**
   * HTML <td> attributes for data cell
   */
  dataColumnProps?: React.TdHTMLAttributes<HTMLTableCellElement>;
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
   * Group Header
   * Only first group setting will take effect
   */
  group?: Omit<
    TableColumnType<TData>,
    'render' | 'group' | 'sortable' | 'dataIndex' | 'dataColumnProps'
  >;
  /**
   * Sticky Column
   * not allow with group exist
   * @default false
   */
  sticky?: boolean;
};

/**
 * TanStack ColumnMeta augmentation. Every layout-only field from
 * `TableColumnType` is carried through under a namespaced `crudx` key so we
 * don't collide with consumer augmentations.
 */
declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    crudx?: {
      align?: 'left' | 'center' | 'right';
      alignTitle?: 'left' | 'center' | 'right';
      valign?: 'top' | 'middle' | 'bottom' | 'baseline';
      width?: string | number;
      minWidth?: string | number;
      uppercase?: boolean;
      sticky?: boolean;
      className?: TableColumnType['className'];
      headerProps?: React.ThHTMLAttributes<HTMLTableCellElement>;
      dataProps?: React.TdHTMLAttributes<HTMLTableCellElement>;
      originalColumn?: TableColumnType<TData>;
      groupKey?: string;
      isGroupParent?: boolean;
    };
  }
}
