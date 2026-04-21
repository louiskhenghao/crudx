import { ReactNode } from 'react';
import type * as TabsPrimitive from '@radix-ui/react-tabs';

import { TabType } from '../../@types';

import { TabLabelProps } from './components/TabLabel';

type RootProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;
type ListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TabViewProps = Pick<
  RootProps,
  'value' | 'defaultValue' | 'orientation' | 'className'
> & {
  /**
   * tab items
   */
  items: TabType[];
  /**
   * whether have original styling
   * @default false
   */
  unstyled?: boolean;
  /**
   * display variant — `scrollable` enables horizontal scroll
   * @default 'scrollable'
   */
  variant?: 'scrollable' | 'standard' | 'fullWidth';
  /**
   * scroll buttons, currently informational only (kept for API compat)
   */
  scrollButtons?: 'auto' | 'on' | 'off' | false | true;
  /**
   * whether content is centered
   */
  centered?: boolean;
  /**
   * tab icon position
   * @default start
   */
  iconPosition?: 'start' | 'end' | 'top' | 'bottom';
  /**
   * on tab change callback
   */
  onChange?: (item: string) => void;
  /**
   * render content for current tab
   */
  renderContent?: (item: string) => ReactNode;

  /**
   * CUSTOM PROPS
   * ===========================
   */
  tabsProps?: Omit<ListProps, 'className' | 'children'>;
  tabLabelProps?: Omit<TabLabelProps, 'label' | 'count'>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TabViewProps;
