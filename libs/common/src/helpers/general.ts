import numeral from 'numeral';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const isPrimitive = (val: any) => val !== Object(val);

/**
 * number formatting
 */
export const formatNumbering = (
  amount: string | number = 0,
  format = '0,0'
): string | number => {
  return numeral(amount).format(format);
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  isPrimitive,
  formatNumbering,
};
