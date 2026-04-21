import { ReactNode } from 'react';
import type * as TooltipPrimitive from '@radix-ui/react-tooltip';

type RootProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;
type ContentProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
>;

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type TooltipViewProps = Omit<ContentProps, 'content' | 'title'> &
  Pick<RootProps, 'defaultOpen' | 'open' | 'onOpenChange' | 'delayDuration'> & {
    /**
     * whether enabled tooltip, by default will see if title is provided
     * by providing will hard force applied
     */
    enabled?: boolean;
    /**
     * the tooltip title / content
     */
    title?: ReactNode;
    /**
     * the element that will trigger the tooltip
     */
    children: React.ReactElement;
  };

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default TooltipViewProps;
