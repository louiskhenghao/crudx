import { PropsWithChildren, ReactNode } from 'react';
import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { ButtonProps } from '../../primitives/button';
import { TooltipViewProps } from '../TooltipView';

type DropdownItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
  'onClick' | 'children'
>;

type DropdownContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

/**
 * ===========================
 * MAIN
 * ===========================
 */

// button dropdown item type
export type ButtonDropdownItemType = {
  key: string;
  title: ReactNode;
  props?: DropdownItemProps;
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
   * @default sm
   */
  size?: ButtonProps['size'];
  /**
   * selected item
   */
  selected?: string;
  /**
   * button variant
   * @default ghost
   */
  variant?: ButtonProps['variant'];
  /**
   * menu items configuration
   */
  items?: ButtonDropdownItemType[];
  /**
   * tooltip configuration
   */
  tooltip?:
    | string
    | Omit<TooltipViewProps, 'children' | 'enabled'>;

  /**
   * CUSTOM PROPS
   * ===========================
   */
  // custom button props
  buttonProps?: Omit<ButtonProps, 'size' | 'variant'>;
  // custom menu props
  menuProps?: Omit<DropdownContentProps, 'onClick'>;
  // menu item props
  menuItemProps?: DropdownItemProps;

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
