# ButtonDropdown

Button that trigger dropdown menu

---

## Props

```ts
import { PropsWithChildren, ReactNode } from 'react';
import { ButtonProps, MenuItemProps, MenuProps, TooltipProps } from '@mui/material';

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
};

// button dropdown props
export type ButtonDropdownProps = PropsWithChildren<{
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
  tooltip?: string | TooltipProps;

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
  render?: (options: { open: boolean; element: HTMLElement | null }) => ReactNode;
}>;
```

---

# Example

```ts
import { ButtonDropdown } from '@crudx/mui';

<ButtonDropdown
  items={[
    {
      key: '1',
      title: 'One',
      onClick: () => {
        // do something
      },
    },
  ]}
/>;
```
