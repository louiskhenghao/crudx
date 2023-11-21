# TabView

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
   * whether have mui original styling
   * @default false
   */
  unstyled?: boolean;
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
import { TabView } from '@crudx/mui';

<TabView
  items={[
    { key: 'one', label: 'One' },
    { key: 'one', label: 'One' },
  ]}
  onChange={(item) => {
    // do something
  }}
/>;
```
