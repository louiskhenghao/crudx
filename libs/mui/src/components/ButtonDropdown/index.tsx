import { ComponentProps, useMemo, useState } from 'react';
import { CloneElement } from '@crudx/common';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cn from 'classnames';

import { TooltipView } from '../TooltipView';

import { ButtonDropdownProps } from './props';

// Define a type that includes all the props that Button and IconButton accept
type ButtonProps = ComponentProps<typeof Button>;
type IconButtonProps = ComponentProps<typeof IconButton>;
// Create a type that represents a component that can receive all the props of Button and IconButton
type ComponentType = React.ComponentType<ButtonProps & IconButtonProps>;

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const ButtonDropdown: React.FC<ButtonDropdownProps> = (props) => {
  const {
    className,
    type = 'button',
    size = 'small',
    variant = 'text',
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // =============== EVENTS
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // =============== VARIABLES
  const open = Boolean(anchorEl);
  const Elem = useMemo<ComponentType>(() => {
    return type === 'button' ? Button : IconButton;
  }, [type]);

  // =============== VIEWS
  const renderButton = (node) => {
    if (!tooltip) return node;
    if (typeof tooltip === 'string') {
      return <TooltipView title={tooltip}>{node}</TooltipView>;
    }
    return <TooltipView {...tooltip}>{node}</TooltipView>;
  };

  return (
    <>
      {renderButton(
        <Elem
          size={size}
          variant={variant}
          className={cn('button-dropdown-view', className)}
          aria-controls={open ? 'button-dropdown-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          {...buttonProps}
        >
          {render?.({ open, element: anchorEl }) ?? children ?? (
            <MoreHorizIcon />
          )}
        </Elem>
      )}

      {/* =============== MENU */}
      <Menu
        className="button-dropdown-menu"
        aria-labelledby="button-dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        {...menuProps}
      >
        {/* =============== MENU ITEM */}
        {items.map((e) => {
          if (e.as) {
            return (
              <CloneElement
                key={e.key}
                {...menuItemProps}
                {...e.props}
                selected={e.key === selected}
                onClick={(event) => {
                  event.stopPropagation();
                  handleClose();
                  e.onClick?.();
                  onItemClick?.(e.key);
                }}
              >
                {e.as}
              </CloneElement>
            );
          }

          return (
            <MenuItem
              key={e.key}
              {...menuItemProps}
              {...e.props}
              selected={e.key === selected}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                handleClose();
                e.onClick?.();
                onItemClick?.(e.key);
              }}
            >
              {e.title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default ButtonDropdown;
