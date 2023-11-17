# Table

---

## Props

```ts
import { ReactNode } from 'react';
import { TabProps } from '@mui/material/Tab';
import { TabsProps } from '@mui/material/Tabs';

import { TabType } from '../../@types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TabViewProps = Pick<TabsProps, 'value' | 'variant' | 'centered' | 'sx' | 'orientation' | 'className'> & {
  /**
   * tab items
   */
  items: TabType[];
  /**
   * tab icon position
   * @default start
   */
  iconPosition?: TabProps['iconPosition'];
  /**
   * on tab change callback
   */
  onChange?: (item: string) => void;

  /**
   * on tab change callback
   */
  renderContent?: (item: string) => ReactNode;

  /**
   * CUSTOM PROPS
   * ===========================
   */
  // custom tabs props
  tabsProps?: Omit<TabsProps, 'value' | 'variant' | 'centered' | 'sx' | 'orientation' | 'className'>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TabViewProps;
```

---

## Example

```ts
import { Table } from '@crudx/mui';

<Table
  size="small"
  data={[]}
  page={1}
  total={100}
  columns={[]}
  pageSize={10}
  onCheck={() => {
    // do something when check
  }}
  onPageChange={() => {
    // do something on page change
  }}
  onPageSizeChange={() => {
    // do something on page change
  }}
/>;
```
