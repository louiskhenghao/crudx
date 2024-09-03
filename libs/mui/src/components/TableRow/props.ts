import { TableCellProps as MUITableCellProps } from '@mui/material/TableCell';
import { TableRowProps as MUITableRowProps } from '@mui/material/TableRow';

import {
  InferDataColumnType,
  TableCheckboxConfig,
  TableColumnType,
} from '../../@types';

export type TableRowProps<TData = any> = Omit<MUITableRowProps, 'onClick'> & {
  /**
   * Added 0.0.25
   *
   * the index position of the row
   */
  position?: number;
  /**
   * data for row
   */
  data: TData;
  /**
   * columns configuration
   */
  columns: TableColumnType<TData>[];
  /**
   * whether row is checked
   */
  checked?: boolean;
  /**
   * checkbox configuration
   */
  checkbox?: TableCheckboxConfig<TData>;
  /**
   * whether row expandable
   * @default false
   */
  expandable?: boolean;
  /**
   * expandable table cell props
   */
  expandableProps?: MUITableCellProps;
  /**
   * Added 0.0.23
   * Table cell content vertical align
   */
  valign?: MUITableCellProps['valign'];
  /**
   * Added 0.0.23
   * Table cell checkbox vertical align
   */
  valignCheckbox?: MUITableCellProps['valign'];
  /**
   * checkbox on change event handler
   */
  onCheck?: (
    checked: boolean,
    value: InferDataColumnType<TData>,
    meta: {
      data: TData;
    }
  ) => void;
  /**
   * row click event handler
   */
  onClick?: (record: TData, event: React.MouseEvent<HTMLElement>) => void;
  /**
   * row expand event handler
   */
  onExpand?: (record: TData, expanded: boolean) => void;
  /**
   * custom expanded view rendering
   */
  renderExpandedView?: (record: TData, expanded: boolean) => React.ReactNode;
};
