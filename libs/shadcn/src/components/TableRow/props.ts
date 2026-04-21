import {
  InferDataColumnType,
  TableCheckboxConfig,
  TableColumnType,
} from '../../@types';

export type TableRowProps<TData = any> = Omit<
  React.HTMLAttributes<HTMLTableRowElement>,
  'onClick'
> & {
  /**
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
   * expandable <td> props
   */
  expandableProps?: React.TdHTMLAttributes<HTMLTableCellElement>;
  /**
   * Table cell content vertical align
   */
  valign?: 'top' | 'middle' | 'bottom' | 'baseline';
  /**
   * Table cell checkbox vertical align
   */
  valignCheckbox?: 'top' | 'middle' | 'bottom' | 'baseline';
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
