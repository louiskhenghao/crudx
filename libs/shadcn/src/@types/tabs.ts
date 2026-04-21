import { ReactElement, ReactNode } from 'react';

export type TabCountColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

// tab item configuration
export type TabType = {
  /**
   * the unique key for tab
   */
  key: string;
  /**
   * whether to show tab
   * @default true
   */
  enabled?: boolean;
  /**
   * whether to disable tab (dimmed & un-clickable)
   * @default true
   */
  disabled?: boolean;
  /**
   * icon for the  tab
   */
  icon?: ReactElement;
  /**
   * the label for the tab
   */
  label: string;
  /**
   * whether to wrapped the text into multi line if too long
   * @default false
   */
  wrapped?: boolean;
  /**
   * to show count on the right of the label
   */
  count?: number | string | ReactElement;
  /**
   * chip color for count, only applicable to default chip component
   */
  countColor?: TabCountColor;
  /**
   * the content for tab
   */
  content?: (() => ReactNode) | ReactNode;
};
