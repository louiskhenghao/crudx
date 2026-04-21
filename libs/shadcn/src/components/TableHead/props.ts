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
export type TableHeadProps<TData = any> = React.HTMLAttributes<HTMLTableSectionElement> & {
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
   * <tr> props
   */
  tableRowProps?: React.HTMLAttributes<HTMLTableRowElement>;
  /**
   * whether is sticky header
   * @default false
   */
  sticky?: boolean;
  /**
   * The table head background color
   */
  backgroundColor?: string;
  /**
   * Whether has border top on table head row
   */
  borderTop?: boolean;
  /**
   * Whether has border bottom on table head row
   */
  borderBottom?: boolean;
  /**
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
