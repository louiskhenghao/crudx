import { TableProps } from '@mui/material/Table';

import { SortingOptionType } from '../../../../components/TableSettingsSortingOptions';
import { CrudTableViewProps } from '../../props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// CRUD table header view props
export type CrudTableHeaderViewProps<TData = any> = Pick<
  CrudTableViewProps<TData>,
  | 'text'
  | 'title'
  | 'expanded'
  | 'headerViewNode'
  | 'headerExpandNode'
  | 'headerExpandNode'
  | 'headerTabs'
  | 'headerTabsProps'
  | 'headerInfos'
  | 'headerActions'
  | 'headerActionSize'
  | 'headerBulkOptions'
  | 'totalRecord'
  | 'totalSelected'
  | 'onTriggerBulkAction'
  | 'onTriggerCreate'
  | 'onTriggerRefresh'
  | 'onTriggerSettings'
  | 'onTriggerSorting'
  | 'onTriggerDensity'
  | 'onTriggerTab'
  | 'onTriggerExpand'
> & {
  tableSize: TableProps['size'];
  sortingType: SortingOptionType;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableHeaderViewProps;
