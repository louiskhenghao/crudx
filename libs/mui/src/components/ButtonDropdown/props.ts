import { PropsWithChildren, ReactNode } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { MenuProps } from '@mui/material/Menu';
import { MenuItemProps } from '@mui/material/MenuItem';
import { TooltipProps } from '@mui/material/Tooltip';

/**
 * ===========================
 * MAIN
 * ===========================
 */

// button dropdown item type
export type ButtonDropdownItemType = {
  key: string;
  title: ReactNode;
  props?: Omit<MenuItemProps, 'onClick'>;
  onClick?: (...args: any) => void;
  // if presented will render this
  as?: ReactNode;
};

// button dropdown props
export type ButtonDropdownProps = PropsWithChildren<{
  /**
   * class name for trigger node
   */
  className?: string;
  /**
   * the button type
   * @default button
   */
  type?: 'button' | 'icon';
  /**
   * size of button
   * @default small
   */
  size?: ButtonProps['size'];
  /**
   * selected item
   */
  selected?: string;
  /**
   * button variant
   * @default text
   */
  variant?: ButtonProps['variant'];
  /**
   * menu items configuration
   */
  items?: ButtonDropdownItemType[];
  /**
   * tooltip configuration
   */
  tooltip?: string | Omit<TooltipProps, 'children'>;

  /**
   * CUSTOM PROPS
   * ===========================
   */
  // custom button props
  buttonProps?: Omit<ButtonProps, 'size' | 'variant'>;
  // custom menu props
  menuProps?: Omit<MenuProps, 'onClick'>;
  // menu item props
  menuItemProps?: Omit<MenuItemProps, 'onClick'>;

  /**
   * EVENTS
   * ===========================
   */
  onItemClick?: (item: string) => void;

  /**
   * VIEWS
   * ===========================
   */
  // custom view rendering
  render?: (options: {
    open: boolean;
    element: HTMLElement | null;
  }) => ReactNode;
}>;
