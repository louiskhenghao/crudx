import { ReactElement } from 'react';

import { TabCountColor } from '../../../../@types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TabLabelProps = {
  /**
   * the label to be display
   */
  label: string;
  /**
   * whether show count on right side on the label
   */
  count?: number | string | ReactElement;
  /**
   * the chip color
   * @default default
   */
  chipColor?: TabCountColor;
  /**
   * the default count props
   */
  chipProps?: React.HTMLAttributes<HTMLSpanElement>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TabLabelProps;
