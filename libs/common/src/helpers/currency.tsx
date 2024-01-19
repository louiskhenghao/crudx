import getSymbolFromCurrency from 'currency-symbol-map';
import numeral from 'numeral';

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * Get currency symbol by providing symbol
 * If provided currency is not valid will return undefined
 * @example
```ts
  toCurrencySymbol('myr')
  toCurrencySymbol('MYR')
```
 */
export const toCurrencySymbol = (currency = 'MYR') => {
  return getSymbolFromCurrency(currency);
};

/**
 * format input amount with currency
 * @example
```ts
  formatCurrency(100, { showSymbol: true }) // RM100
  formatCurrency(100, { currency: "MYR" }) // MYR100
```
 */
export const formatCurrency = (
  amount: string | number = 0,
  options: {
    // the format of the number
    format?: string;
    // the currency to be display
    currency?: string;
    // whether to have gap between currency + amount
    showGap?: boolean;
    // whether show currency symbol rather than currency
    showSymbol?: boolean;
    // whether to show currency + amount
    showCurrency?: boolean;
  }
): string | number => {
  const {
    currency = 'MYR',
    format = '0,0.00',
    showSymbol = false,
    showCurrency = true,
    showGap = true,
  } = options;
  const price = numeral(amount).format(format);
  const symbol = showSymbol ? toCurrencySymbol(currency) : currency;
  if (symbol && showCurrency) {
    return `${symbol}${showGap ? ' ' : ''}${price}`;
  }
  return price;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  toCurrencySymbol,
  formatCurrency,
};
