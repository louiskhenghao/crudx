import React, { useMemo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import isNil from 'lodash/isNil';

import { TooltipViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TooltipView: React.FC<TooltipViewProps> = (props) => {
  const { enabled, title, children, ...restProps } = props;

  // =============== VARIABLES
  const isEnabled = useMemo(() => {
    if (isNil(enabled)) return !!title;
    return enabled;
  }, [title, enabled]);

  // =============== VIEWS
  // if tooltip  or title not defined then return children
  if (!isEnabled) return children;

  return (
    <Tooltip title={title} {...restProps}>
      {children as any}
    </Tooltip>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TooltipView;
