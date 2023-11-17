import { TooltipProps } from '@mui/material/Tooltip';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// button dropdown props
export type TooltipViewProps = TooltipProps & {
  /**
   * whether enabled tooltip, by default will see if title is provided
   * by providing will hard force applied
   */
  enabled?: boolean;
};
