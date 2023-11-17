# TableSettingsSortingOptions

Table sorting dropdown action

---

## Props

```ts
import { ReactNode } from 'react';
import { TooltipProps } from '@mui/material';

import { ButtonDropdownProps } from '../ButtonDropdown';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type SortingOptionType = 'DEFAULT' | 'ASC' | 'DESC';

export type TableSettingsSortingOptionsProps = Omit<ButtonDropdownProps, 'children' | 'onItemClick' | 'items'> & {
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
   * @default { default: 'Default', asc: 'Ascending', desc: 'Descending' }
   */
  text?: { default: string; asc: string; desc: string };
  /**
   * icon
   */
  icon?: ReactNode;
  /**
   * selected option
   */
  selected: SortingOptionType;
  /**
   * tooltip configuration
   */
  tooltip?: string | TooltipProps;
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
export default TableSettingsSortingOptionsProps;
```

---

# Example

```ts
import { TableSettingsSortingOptions } from '@crudx/mui';

<TableSettingsSortingOptions
  size="small"
  tooltip="Sorting"
  onChange={(item) => {
    // do something
  }}
/>;
```
