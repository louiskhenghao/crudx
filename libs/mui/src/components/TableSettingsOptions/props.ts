import { ReactNode } from 'react';

import { ButtonDropdownProps } from '../ButtonDropdown';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TableSettingsOptionsProps = Omit<
  ButtonDropdownProps,
  'children' | 'onItemClick'
> & {
  /**
   * size of button
   * @default medium
   */
  size?: ButtonDropdownProps['size'];
  /**
   * icon
   */
  icon?: ReactNode;
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
export default TableSettingsOptionsProps;
