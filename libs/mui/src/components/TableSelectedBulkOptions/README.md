# TableSelectedBulkOptions

Table bulk actions dropdown

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
export type TableSelectedBulkOptionsProps = Omit<ButtonDropdownProps, 'children' | 'onItemClick'> & {
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
```

---

# Example

```ts
import { TableSelectedBulkOptions } from '@crudx/mui';

<TableSelectedBulkOptions
  items={[]}
  text={'Total Selected: {count}'}
  total={10}
  onChange={() => {
    // do something
  }}
/>;
```
