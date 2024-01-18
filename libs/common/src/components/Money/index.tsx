import React, { useMemo } from 'react';
import toNumber from 'lodash/toNumber';

import { formatCurrency } from '../../helpers/currency';

import { MoneyProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Money: React.FC<MoneyProps> = (props) => {
  const {
    amount = 0,
    format = '0,0',
    currency,
    prefix,
    postfix,
    enableGap = true,
    enableSymbol = true,
    enableCurrency = true,
  } = props;

  // =============== HOOKS
  const actual = useMemo(() => {
    if (typeof amount === 'number') return amount;
    if (typeof amount === 'string') return toNumber(amount);
    return 0;
  }, [amount]);

  const final = useMemo(() => {
    return formatCurrency(actual, {
      format,
      currency,
      showGap: enableGap,
      showSymbol: enableSymbol,
      showCurrency: enableCurrency,
    });
  }, [actual, format, currency, enableGap, enableSymbol, enableCurrency]);

  // =============== VARIABLES
  return (
    <>
      {prefix}
      {final}
      {postfix}
    </>
  );
};

/**
 * ===========================
 * EXPORT
 * ===========================
 */
export * from './props';
export default Money;
