import React, { useCallback, useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

import { cn } from '../../lib/cn';
import { Button } from '../../primitives/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../primitives/dropdown-menu';
import { TooltipView } from '../TooltipView';

import { ButtonDropdownProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const ButtonDropdown: React.FC<ButtonDropdownProps> = (props) => {
  const {
    className,
    type = 'button',
    size = 'sm',
    variant = 'ghost',
    tooltip,
    items = [],
    selected,
    buttonProps,
    menuProps,
    menuItemProps,
    children,
    render,
    onItemClick,
  } = props;

  // =============== STATE
  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // =============== HANDLERS
  // Force the tooltip closed whenever the dropdown is opened or closed.
  // Combined with `onCloseAutoFocus.preventDefault()` on the menu, this
  // stops the focus-restore from re-triggering the tooltip on close.
  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    setTooltipOpen(false);
  }, []);

  const handleTooltipOpenChange = useCallback(
    (next: boolean) => {
      if (open) {
        setTooltipOpen(false);
        return;
      }
      setTooltipOpen(next);
    },
    [open]
  );

  // =============== VARIABLES
  const triggerContent = render?.({ open, element: null }) ??
    children ?? <MoreHorizontal className="h-4 w-4" />;

  // =============== VIEWS
  const triggerNode = (
    <DropdownMenuTrigger asChild>
      <Button
        size={type === 'icon' ? 'icon' : size}
        variant={variant}
        className={cn('button-dropdown-view', className)}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        {...buttonProps}
      >
        {triggerContent}
      </Button>
    </DropdownMenuTrigger>
  );

  const tooltipBaseProps =
    typeof tooltip === 'string' ? { title: tooltip } : tooltip;

  const wrappedTrigger = tooltip ? (
    <TooltipView
      {...tooltipBaseProps}
      open={tooltipOpen}
      onOpenChange={handleTooltipOpenChange}
    >
      {triggerNode}
    </TooltipView>
  ) : (
    triggerNode
  );

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      {wrappedTrigger}
      <DropdownMenuContent
        className="button-dropdown-menu"
        align="start"
        {...menuProps}
        onCloseAutoFocus={(event) => {
          // Prevent Radix from restoring focus to the trigger on close;
          // the focus restore re-opens the tooltip-on-focus and leaves
          // it stuck visible until the user clicks elsewhere.
          event.preventDefault();
          menuProps?.onCloseAutoFocus?.(event);
        }}
      >
        {items.map((e) => {
          const isSelected = e.key === selected;
          const handleSelect = (event: Event) => {
            event.stopPropagation();
            e.onClick?.();
            onItemClick?.(e.key);
          };

          if (e.as) {
            return (
              <DropdownMenuItem
                key={e.key}
                {...menuItemProps}
                {...e.props}
                data-state={isSelected ? 'selected' : undefined}
                onSelect={handleSelect}
                className={cn(
                  isSelected && 'bg-[hsl(var(--accent))]',
                  menuItemProps?.className,
                  e.props?.className
                )}
              >
                {e.as}
              </DropdownMenuItem>
            );
          }

          return (
            <DropdownMenuItem
              key={e.key}
              {...menuItemProps}
              {...e.props}
              data-state={isSelected ? 'selected' : undefined}
              onSelect={handleSelect}
              className={cn(
                isSelected && 'bg-[hsl(var(--accent))]',
                menuItemProps?.className,
                e.props?.className
              )}
            >
              {e.title}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default ButtonDropdown;
