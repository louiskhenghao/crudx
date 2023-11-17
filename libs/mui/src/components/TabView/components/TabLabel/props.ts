import { ReactElement } from 'react';
import { ChipProps } from '@mui/material/Chip';

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
   * @default error
   */
  chipColor?: ChipProps['color'];
  /**
   * the default count props
   */
  chipProps?: Omit<ChipProps, 'label'>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TabLabelProps;
