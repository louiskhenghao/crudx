import React, { memo } from 'react';
import { ArrowUpDown } from 'lucide-react';

import { ButtonDropdown } from '../ButtonDropdown';

import { TableSettingsSortingOptionsProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TableSettingsSortingOptions: React.FC<TableSettingsSortingOptionsProps> =
  memo((props) => {
    const {
      size = 'md',
      icon,
      variant = 'ghost',
      selected = 'DEFAULT',
      text = { default: 'Default', asc: 'Ascending', desc: 'Descending' },
      tooltip,
      onChange,
      ...restProps
    } = props;

    // =============== VIEW
    return (
      <ButtonDropdown
        type="icon"
        size={size}
        variant={variant}
        tooltip={tooltip}
        selected={selected}
        items={[
          { key: 'DEFAULT', title: text?.default ?? 'Default' },
          { key: 'ASC', title: text?.asc ?? 'Ascending' },
          { key: 'DESC', title: text?.desc ?? 'Descending' },
        ]}
        {...restProps}
        onItemClick={(e) => onChange?.(e)}
      >
        {icon ?? <ArrowUpDown className="h-4 w-4" />}
      </ButtonDropdown>
    );
  });
TableSettingsSortingOptions.displayName = 'TableSettingsSortingOptions';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSettingsSortingOptions;
