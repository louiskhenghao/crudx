import { TooltipProps } from '@mui/material/Tooltip';
import capitalize from 'lodash/capitalize';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';

import { CrudTableViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const isActionEnable = (
  inAction: 'view' | 'update' | 'delete' | 'export' | 'extra',
  actions: CrudTableViewProps['columnActions'] = []
) => {
  return includes(actions || [], inAction);
};

export const getTooltipText = (
  key:
    | 'expand'
    | 'refresh'
    | 'density'
    | 'sorting'
    | 'settings'
    | 'create'
    | 'filter'
    | string,
  options?: {
    tooltip?: boolean | string | Omit<TooltipProps, 'children'>;
    createText?: string;
  }
): { enabled: boolean } & Omit<TooltipProps, 'children'> => {
  const tooltip = options?.tooltip;
  const enabled = isNil(tooltip) ? true : !!tooltip;

  // default tooltip mapping
  const mapping = {
    expand: 'Expand',
    refresh: 'Refresh',
    density: 'Density',
    sorting: 'Sort',
    settings: 'Settings',
    create: options?.createText ?? 'Create',
    filter: 'Filter',
  };

  if (!tooltip || typeof tooltip === 'boolean') {
    return { enabled, title: mapping[key] ?? capitalize(key) };
  }
  if (typeof tooltip === 'string') {
    return { enabled, title: tooltip };
  }
  return { enabled, ...tooltip };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  isActionEnable,
  getTooltipText,
};
