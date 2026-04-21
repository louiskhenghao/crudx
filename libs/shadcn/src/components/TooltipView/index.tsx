import React, { useMemo } from 'react';
import isNil from 'lodash/isNil';

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from '../../primitives/tooltip';

import { TooltipViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TooltipView: React.FC<TooltipViewProps> = (props) => {
  const {
    enabled,
    title,
    children,
    defaultOpen,
    open,
    onOpenChange,
    delayDuration,
    ...contentProps
  } = props;

  // =============== VARIABLES
  const isEnabled = useMemo(() => {
    if (isNil(enabled)) return !!title;
    return enabled;
  }, [title, enabled]);

  // =============== VIEWS
  if (!isEnabled) return children;

  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipRoot
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
      >
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent {...contentProps}>{title}</TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TooltipView;
