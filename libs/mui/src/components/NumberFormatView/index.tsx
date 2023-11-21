import React, { useMemo } from 'react';
import { formatNumbering } from '@crudx/core';

import { NumberFormatViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const NumberFormatView: React.FC<NumberFormatViewProps> = (props) => {
  const { prefix, postfix, amount = 0, format = '0,0' } = props;

  // =============== EVENTS
  const display = useMemo(() => {
    return formatNumbering(amount, format);
  }, [amount, format]);

  // =============== VIEWS
  return (
    <>
      {prefix}
      {display}
      {postfix}
    </>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default NumberFormatView;
