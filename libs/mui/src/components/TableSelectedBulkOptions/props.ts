import { ReactNode } from 'react';

import { ButtonDropdownProps } from '../ButtonDropdown';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TableSelectedBulkOptionsProps = Omit<
  ButtonDropdownProps,
  'children' | 'onItemClick'
> & {
  className?: string;
  /**
   * size of button
   * @default medium
   */
  size?: ButtonDropdownProps['size'];

  /**
   * the total number of selected item
   */
  total?: number;
  /**
   * custom text to be displayed
   * @default "{count} Item(s) Selected"
   */
  text?: string;
  /**
   * custom icon
   */
  icon?: {
    expand?: ReactNode;
    collapse?: ReactNode;
  };
  /**
   * callback function for selecting density
   */
  onChange?: (item: any) => void;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TableSelectedBulkOptionsProps;
