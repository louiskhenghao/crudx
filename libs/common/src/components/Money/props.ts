import { ReactNode } from 'react';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type MoneyProps = {
  /**
   * amount to display
   * default to `0`
   */
  amount: number | string;
  /**
   * price format
   * default to `0,0.00`
   */
  format?: string;
  /**
   * currency of price
   * default to `MYR`
   */
  currency?: string;
  /**
   * prefix of component
   */
  prefix?: ReactNode;
  /**
   * postfix of component
   */
  postfix?: ReactNode;
  /**
   * whether show gap between currency and amount
   * default to `true`
   */
  enableGap?: boolean;
  /**
   * whether show currency symbol
   * default to `true`,
   * example: if falsy show "MYR" instead of "RM"
   */
  enableSymbol?: boolean;
  /**
   * whether show currency
   * default to `true`
   */
  enableCurrency?: boolean;
};

/**
 * ===========================
 * EXPORT
 * ===========================
 */
export default MoneyProps;
