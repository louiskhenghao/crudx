import React, { memo } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import replace from 'lodash/replace';

import { ButtonDropdown } from '../ButtonDropdown';

import TableSelectedBulkOptionsProps from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TableSelectedBulkOptions: React.FC<TableSelectedBulkOptionsProps> =
  memo((props) => {
    const {
      className,
      size = 'medium',
      variant = 'text',
      icon,
      total = 0,
      text = '{count} Item(s) Selected',
      items = [
        { key: 'delete', title: 'Delete' },
        { key: 'export', title: 'Export' },
      ],
      tooltip,
      onChange,
      ...restProps
    } = props;

    // =============== VIEW
    return (
      <ButtonDropdown
        className={className}
        type="button"
        size={size}
        variant={variant}
        tooltip={tooltip}
        items={items}
        {...restProps}
        onItemClick={(e) => onChange?.(e)}
        render={({ open }) => {
          return (
            <>
              {replace(text, '{count}', `${total}`)}{' '}
              {open && (icon?.collapse ?? <ArrowDropUpOutlinedIcon />)}
              {!open && (icon?.expand ?? <ArrowDropDownOutlinedIcon />)}
            </>
          );
        }}
      />
    );
  });

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSelectedBulkOptions;
