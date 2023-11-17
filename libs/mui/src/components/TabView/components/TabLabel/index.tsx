import { isValidElement, memo } from 'react';
import Chip from '@mui/material/Chip';
import isNil from 'lodash/isNil';

import { TabLabelProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TabLabel = memo((props: TabLabelProps) => {
  const { label, count, chipColor = 'error', chipProps } = props;

  // =============== VARIABLES
  const hasCount = !isNil(count);
  const isElement = isValidElement(count);

  // =============== VIEWS
  return (
    <>
      {label}
      {!hasCount ? null : isElement ? (
        count
      ) : (
        <Chip
          sx={{ marginLeft: 0.5 }}
          color={chipColor}
          label={count}
          {...chipProps}
        />
      )}
    </>
  );
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TabLabel;
