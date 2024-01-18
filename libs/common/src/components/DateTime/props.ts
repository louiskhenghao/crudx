import { ReactNode } from 'react';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type DateTimeProps = {
  /**
   * date object or date string
   */
  date?: any;
  /**
   * display format, `date`, `datetime` is preset, otherwise custom format
   * default to `datetime`
   */
  kind?: 'date' | 'date2' | 'datetime' | string;
  /**
   * the date format, will take place if provided
   */
  format?: string;
  /**
   * whether should display relative time
   * default `false`
   */
  relative?: boolean;
  /**
   * set locale time
   */
  locale?: string;
  /**
   * prefix of time
   */
  prefix?: ReactNode;
  /**
   * postfix of time
   */
  postfix?: ReactNode;
};

/**
 * ===========================
 * EXPORT
 * ===========================
 */
export default DateTimeProps;
