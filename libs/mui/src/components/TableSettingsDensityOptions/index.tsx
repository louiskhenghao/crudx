import React, { memo } from 'react';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';

import { ButtonDropdown } from '../ButtonDropdown';

import { TableSettingsDensityOptionsProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TableSettingsDensityOptions: React.FC<TableSettingsDensityOptionsProps> =
  memo((props) => {
    const {
      items,
      size = 'medium',
      variant = 'text',
      icon,
      text = { default: 'Default', small: 'Small', medium: 'Medium' },
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
        items={
          items ?? [
            {
              key: 'middle',
              title: text?.default ?? 'Default',
            },
            {
              key: 'small',
              title: text?.small ?? 'Small',
            },
            {
              key: 'middle',
              title: text?.medium ?? 'Medium',
            },
          ]
        }
        {...restProps}
        onItemClick={(e) => onChange?.(e)}
      >
        {icon ?? <TableRowsOutlinedIcon />}
      </ButtonDropdown>
    );
  });

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSettingsDensityOptions;
