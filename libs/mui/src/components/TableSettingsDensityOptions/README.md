# TableSettingsDensityOptions

Table density dropdown action

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
export type TableSettingsDensityOptionsProps = Omit<ButtonDropdownProps, 'children' | 'onItemClick'> & {
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
   * custom text to be display
   */
  text?: { default: string; small: string; medium: string };
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
export default TableSettingsDensityOptionsProps;
```

---

# Example

```ts
import { TableSettingsDensityOptions } from '@crudx/mui';

<TableSettingsDensityOptions
  size="small"
  tooltip="Density"
  onChange={(item) => {
    // do something
  }}
/>;
```
