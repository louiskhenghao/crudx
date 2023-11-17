import React, { memo } from 'react';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

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
      size = 'medium',
      icon,
      variant = 'text',
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
          {
            key: 'DEFAULT',
            title: text?.default ?? 'Default',
          },
          {
            key: 'ASC',
            title: text?.asc ?? 'Ascending',
          },
          {
            key: 'DESC',
            title: text?.desc ?? 'Descending',
          },
        ]}
        {...restProps}
        onItemClick={(e) => onChange?.(e)}
      >
        {icon ?? <SortOutlinedIcon />}
      </ButtonDropdown>
    );
  });

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSettingsSortingOptions;
