import { ReactNode } from 'react';
import { TabProps } from '@mui/material/Tab';
import { TabsProps } from '@mui/material/Tabs';

import { TabType } from '../../@types';

import { TabLabelProps } from './components/TabLabel';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TabViewProps = Pick<
  TabsProps,
  | 'sx'
  | 'value'
  | 'variant'
  | 'centered'
  | 'orientation'
  | 'className'
  | 'scrollButtons'
> & {
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
  tabsProps?: Omit<
    TabsProps,
    | 'sx'
    | 'value'
    | 'variant'
    | 'centered'
    | 'orientation'
    | 'className'
    | 'scrollButtons'
  >;
  // tab label
  tabLabelProps?: Omit<TabLabelProps, 'label' | 'count'>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TabViewProps;
