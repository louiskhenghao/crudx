import { ReactNode } from 'react';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type NumberFormatViewProps = {
  /**
   * prefix for number
   */
  prefix?: ReactNode;
  /**
   * postfix for number
   */
  postfix?: ReactNode;
  /**
   * the amount to be display,
   * @default 0
   */
  amount?: string | number;
  /**
   * the number formatting
   * @default 0,0
   */
  format?: string;
};
