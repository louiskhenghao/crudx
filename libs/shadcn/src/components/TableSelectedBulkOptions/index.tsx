import React, { memo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
      size = 'md',
      variant = 'ghost',
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
              {open && (icon?.collapse ?? <ChevronUp className="h-4 w-4" />)}
              {!open && (icon?.expand ?? <ChevronDown className="h-4 w-4" />)}
            </>
          );
        }}
      />
    );
  });
TableSelectedBulkOptions.displayName = 'TableSelectedBulkOptions';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSelectedBulkOptions;
