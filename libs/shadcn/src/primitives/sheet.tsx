import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '../lib/cn';
import { DialogTitle } from './dialog';

/**
 * Side-anchored modal panel (aka Drawer / Sheet). Built on Radix Dialog.
 */
export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...rest }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...rest}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-[hsl(var(--background))] p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b border-[hsl(var(--border))]',
        bottom: 'inset-x-0 bottom-0 border-t border-[hsl(var(--border))]',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r border-[hsl(var(--border))] sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l border-[hsl(var(--border))] sm:max-w-sm',
      },
    },
    defaultVariants: { side: 'right' },
  }
);

export interface SheetContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
      'title'
    >,
    VariantProps<typeof sheetVariants> {
  showCloseButton?: boolean;
  width?: number | string;
  /**
   * Optional accessible title. Rendered visually when provided, or as
   * a screen-reader-only label otherwise. Always emitted so Radix's
   * required `DialogTitle` accessibility contract is satisfied — it
   * complains loudly via `console.error` in v1.1+ if a `DialogContent`
   * opens without one.
   */
  title?: React.ReactNode;
}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = 'right',
      className,
      children,
      showCloseButton = true,
      width,
      style,
      title,
      ...rest
    },
    ref
  ) => (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        style={{
          width:
            side === 'left' || side === 'right' ? width ?? undefined : undefined,
          maxWidth:
            side === 'left' || side === 'right' ? width ?? undefined : undefined,
          ...style,
        }}
        {...rest}
      >
        {title ? (
          <DialogTitle>{title}</DialogTitle>
        ) : (
          <DialogTitle className="sr-only">Sheet</DialogTitle>
        )}
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = DialogPrimitive.Content.displayName;
