import { ReactNode } from 'react';
import capitalize from 'lodash/capitalize';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';

import { CrudRowItemActionType } from '../@types';

export type TooltipLike = {
  title?: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  disableHoverableContent?: boolean;
};

/**
 * ===========================
 * MAIN
 * ===========================
 */
// check is action enabled
export const isActionEnable = (
  action: CrudRowItemActionType,
  checking: CrudRowItemActionType[] = []
) => {
  return includes(checking || [], action);
};

// get tooltip text
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
    tooltip?: boolean | string | TooltipLike;
    createText?: string;
  }
): { enabled: boolean } & TooltipLike => {
  const tooltip = options?.tooltip;
  const enabled = isNil(tooltip) ? true : !!tooltip;

  // default tooltip mapping
  const mapping: Record<string, string> = {
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
