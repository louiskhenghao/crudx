import { TableHeadTypeMap } from '@mui/material/TableHead';
import { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';

import {
  TableCheckAllState,
  TableCheckboxConfig,
  TableColumnType,
} from '../../@types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TableHeadProps<TData = any> = TableHeadTypeMap['props'] & {
  /**
   * css class name
   */
  className?: string;
  /**
   * Columns of table
   */
  columns: TableColumnType<TData>[];
  /**
   * checkbox configuration
   */
  checkbox?: TableCheckboxConfig<TData>;
  /**
   * sorting options
   */
  sorting?: {
    /**
     * Column default sort order
     */
    defaultOrder?: string;
    /**
     * Column default sort direction
     */
    defaultDirection?: 'asc' | 'desc';
  };

  /**
   * checkbox state,
   * @default none
   */
  checked?: TableCheckAllState;
  /**
   * whether show divider between header cells
   * @default false
   */
  divider?: boolean;
  /**
   * divider props for customizing color, width & height
   */
  dividerProps?: {
    color?: string;
    width?: number | string;
    height?: number | string;
  };
  /**
   * MUI TableRow props
   */
  tableRowProps?: MuiTableRowProps;
  /**
   * Added 0.0.16
   *
   * Custom sticky header
   * @default false
   */
  stickyHeader?: boolean;
  /**
   * Added 0.0.16
   * * updated 0.0.19
   * rename from `tableHeadColumnBorder` to `columnBorder`
   *
   * Table border style with mui or preset,
   * only applied when `divider` is true
   * when column has group setting will forced to `default` even this props presented
   *
   * @default preset
   */
  columnBorder?: 'default' | 'preset';
  /**
   * Added 0.0.19
   *
   * The table head background color
   * @default #eeeeee
   */
  backgroundColor?: string;
  /**
   * Added 0.0.16
   *
   * On column sort event handler
   */
  onSort?: (
    key: string,
    direction: 'asc' | 'desc',
    event: React.MouseEvent
  ) => void;
  /**
   * On check rows all event handler
   */
  onCheckAll?: (checked: boolean, state: TableCheckAllState) => void;
};
