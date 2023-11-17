import React, { memo } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
      size = 'medium',
      variant = 'text',
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
        {icon ?? <SettingsOutlinedIcon />}
      </ButtonDropdown>
    );
  }
);

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSettingsOptions;
