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
   * MUI TableRow props
   */
  tableRowProps?: MuiTableRowProps;
  /**
   * Added 0.0.16
   *
   * * Updates 0.0.21
   * rename from `stickyHeader` to `sticky`
   *
   * whether is sticky header
   * @default false
   */
  sticky?: boolean;
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
