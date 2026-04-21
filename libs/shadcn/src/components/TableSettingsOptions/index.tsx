import React, { memo } from 'react';
import { Settings } from 'lucide-react';

import { ButtonDropdown } from '../ButtonDropdown';

import { TableSettingsOptionsProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TableSettingsOptions: React.FC<TableSettingsOptionsProps> = memo(
  (props) => {
    const {
      items,
      size = 'md',
      variant = 'ghost',
      icon,
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
        items={items}
        {...restProps}
        onItemClick={(e) => onChange?.(e)}
      >
        {icon ?? <Settings className="h-4 w-4" />}
      </ButtonDropdown>
    );
  }
);
TableSettingsOptions.displayName = 'TableSettingsOptions';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSettingsOptions;
