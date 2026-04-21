import React, { useState } from 'react';
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

  // =============== VARIABLES
  const triggerContent = render?.({ open, element: null }) ??
    children ?? <MoreHorizontal className="h-4 w-4" />;

  // =============== VIEWS
  const triggerNode = (
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
  );

  const wrappedTrigger = tooltip ? (
    typeof tooltip === 'string' ? (
      <TooltipView title={tooltip}>{triggerNode}</TooltipView>
    ) : (
      <TooltipView {...tooltip}>{triggerNode}</TooltipView>
    )
  ) : (
    triggerNode
  );

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{wrappedTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="button-dropdown-menu"
        align="start"
        {...menuProps}
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
