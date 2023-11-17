import { TableCellProps } from '@mui/material/TableCell';
import { TableRowProps as MUITableRowProps } from '@mui/material/TableRow';

import {
  InferDataColumnType,
  TableCheckboxConfig,
  TableColumnType,
} from '../../@types';

export type TableRowProps<TData = any> = Omit<MUITableRowProps, 'onClick'> & {
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
  expandableProps?: TableCellProps;
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
