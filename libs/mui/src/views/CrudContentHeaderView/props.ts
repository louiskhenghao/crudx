import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material/Button';

import { ButtonDropdownItemType } from '../../components/ButtonDropdown';
import { SortingOptionType } from '../../components/TableSettingsSortingOptions';
import { TabViewProps } from '../../components/TabView';

import {
  CrudContentHeaderActionType,
  CrudContentHeaderInfoType,
  CrudContentHeaderTab,
} from './types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// CRUD content header view props
export type CrudContentHeaderViewProps = {
  /**
   * custom title view
   */
  title?: (() => ReactNode) | ReactNode;
  /**
   * whether table header view should expand by default
   */
  expanded?: boolean;
  /**
   * total records
   */
  totalRecord?: number;
  /**
   * total selected row
   */
  totalSelected?: number;

  /**
   * CONFIGURATION
   * ===========================
   */
  /**
   * header action button size
   * @default medium
   */
  headerActionSize?: ButtonProps['size'];
  /**
   * bulk options for selected item
   * NOTE: it having same type for `headerInfos` props, with type = `bulk`->`items`
   */
  headerBulkOptions?: Omit<ButtonDropdownItemType, 'onClick'>[];

  sortingType: SortingOptionType;
  text?: {
    createText?: string;
    expandText?: string;
    collapseText?: string;
    sorting: { default: 'Default'; asc: 'Ascending'; desc: 'Descending' };
    density: { default: 'Default'; small: 'Small'; medium: 'Medium' };
  };
  /**
   * HEADER TABS
   * ===========================
   */
  /**
   * header tabs configuration
   */
  headerTabs?: CrudContentHeaderTab[];
  /**
   * header tabs current state
   */
  headerTabState?: any;
  /**
   * custom header tabs props
   */
  headerTabsProps?: Omit<TabViewProps, 'items' | 'onChange' | 'renderContent'>;

  /**
   * VIEWS
   * ===========================
   */
  /**
   * header info configuration
   * NOTE: the sequence is adjustable based on position
   * @default ['title','total','bulk']
   */
  headerInfos?: CrudContentHeaderInfoType[];
  /**
   * header actions to be enabled
   * NOTE: the sequence is adjustable based on position
   * @default []
   */
  headerActions?: CrudContentHeaderActionType[];
  /**
   * custom header view
   * NOTE: By providing this will replace existing header + expanded + extra node
   */
  headerCustomView?: (() => ReactNode) | ReactNode;
  /**
   * custom header expanded view
   */
  headerExpandView?: (() => ReactNode) | ReactNode;
  /**
   * custom header extra view (which below tab view)
   */
  headerExtraView?: (() => ReactNode) | ReactNode;

  /**
   * EVENTS
   * ===========================
   */
  // event callback on create button clicked
  onTriggerCreate?: () => void;
  // event callback on refresh button clicked
  onTriggerRefresh?: () => void;
  // event callback on pagination next button clicked
  onPaginateNext?: () => void;
  // event callback on pagination previous button clicked
  onPaginatePrevious?: () => void;
  // selected event callback from settings dropdown options
  onTriggerSettings?: (action: string) => void;
  // selected event callback from density dropdown options
  onTriggerDensity?: (density: string) => void;
  // selected event callback from sorting dropdown options
  onTriggerSorting?: (sort: 'DEFAULT' | 'ASC' | 'DESC') => void;
  // selected event callback from bulk action dropdown options
  onTriggerBulkAction?: (action: 'delete' | 'export' | string) => void;
  // event callback for selected header tab
  onTabChange?: (item: string) => void;
  // event callback on expand button clicked
  onTriggerExpand?: (current: boolean, next: boolean) => void;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudContentHeaderViewProps;