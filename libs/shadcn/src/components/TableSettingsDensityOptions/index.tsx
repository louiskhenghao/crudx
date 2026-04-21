import React, { memo } from 'react';
import { Rows } from 'lucide-react';

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
      size = 'md',
      variant = 'ghost',
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
            { key: 'middle', title: text?.default ?? 'Default' },
            { key: 'small', title: text?.small ?? 'Small' },
            { key: 'middle', title: text?.medium ?? 'Medium' },
          ]
        }
        {...restProps}
        onItemClick={(e) => onChange?.(e)}
      >
        {icon ?? <Rows className="h-4 w-4" />}
      </ButtonDropdown>
    );
  });
TableSettingsDensityOptions.displayName = 'TableSettingsDensityOptions';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableSettingsDensityOptions;
