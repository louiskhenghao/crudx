import { ReactNode } from 'react';

import { CrudTableViewProps } from '../../props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudTableRowActionsProps<TData = any> = Pick<
  CrudTableViewProps<TData>,
  'renderActionButtons' | 'renderExtraActionButtons'
> & {
  /**
   * whether put action into a dropdown group
   * @default icon
   */
  type?: 'icon' | 'menu';
  /**
   * table row data
   */
  data?: TData;
  /**
   * custom node
   */
  node?: ReactNode;
  /**
   * columns action
   */
  actions?: CrudTableViewProps['columnActions'];
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableRowActionsProps;
