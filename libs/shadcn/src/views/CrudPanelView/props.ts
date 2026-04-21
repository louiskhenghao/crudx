import { ReactNode, RefAttributes } from 'react';
import {
  CrudComponentAlertNodeProps,
  CrudComponentContentNodeProps,
  CrudComponentDetailNodeProps,
  CrudComponentFilterModalNodeProps,
  CrudComponentFilterNodeProps,
  CrudComponentPageHeaderNodeProps,
  CrudComponentTableNodeProps,
  CrudGraphApiListType,
  CrudMutationResourceEvents,
  CrudPagingOptions,
  CrudSchemata,
  CrudSchemataTypes,
  IfTypeAny,
  UseOperationVariables,
} from '@crudx/core';

import { TableDataIndex } from '../../@types';
import { DialogProps, DialogRefProps } from '../../components/Dialog';
import { SheetContentProps } from '../../primitives/sheet';
import { CrudContentViewProps } from '../CrudContentView';
import { CrudFilterViewProps } from '../CrudFilterView';
import { CrudPageHeaderViewProps } from '../CrudPageHeaderView';
import { CrudTableViewProps } from '../CrudTableView';

import { UseCrudModalFormProps } from './hooks/useCrudModalForm';
import { CrudTableItemActionProps } from './hooks/useCrudTableItemAction';

/**
 * Shape for a side-anchored panel (replaces MUI's SwipeableDrawerProps).
 */
export type DrawerProps = Omit<SheetContentProps, 'open' | 'onOpenChange'> & {
  /**
   * panel anchor side
   * @default 'right'
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * pixel/CSS width of the panel when side = left/right
   */
  width?: number | string;
};

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudPanelViewProps<
  TSchema extends CrudSchemataTypes = any,
  TColumnData = any
> = {
  /**
   * css class name to be display
   */
  className?: string;
  /**
   * CRUD configuration
   * ===========================
   */
  name: string;
  schema: CrudSchemata<TSchema>;
  paging?: CrudPagingOptions;
  variables?: UseOperationVariables<TSchema['list'][1]>;
  events?: CrudMutationResourceEvents<TSchema>;

  checked?: CrudTableViewProps['checked'];

  /**
   * PAGE HEADER PROPS
   * ===========================
   */
  pageTitle?: CrudPageHeaderViewProps['title'];
  pageBackPath?: CrudPageHeaderViewProps['backPath'];
  pageBreadcrumbs?: CrudPageHeaderViewProps['items'];
  pageActions?: CrudPageHeaderViewProps['actions'];

  /**
   * FILTER VIEW PROPS
   * ===========================
   */
  filterTitle?: CrudFilterViewProps['title'];
  filterNode?: CrudFilterViewProps['children'];
  filterActions?: CrudFilterViewProps['actions'];

  /**
   * TABLE PROPS
   * ===========================
   */
  tableTitle?: CrudTableViewProps['title'];
  tableTabState?: CrudTableViewProps['headerTabState'];
  tableTabs?: CrudTableViewProps['headerTabs'];
  tableInfos?: CrudTableViewProps['headerInfos'];
  tableActions?: CrudTableViewProps['headerActions'];
  tableExpandState?: CrudTableViewProps['expanded'];
  tableExpandView?: CrudTableViewProps['headerExpandView'];
  tableExtraView?: CrudTableViewProps['headerExtraView'];
  tableCheckboxColumnSticky?: boolean;
  tableActionColumnSticky?: boolean;
  onTableTabChange?: CrudTableViewProps['onTabChange'];
  onTableItemCheck?: CrudTableViewProps['onCheck'];
  onTableColumnSort?: CrudTableViewProps['onColumnSort'];

  /**
   * TABLE COLUMN PROPS
   * ===========================
   */
  columns?: CrudTableViewProps<
    IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
  >['columns'];
  columnActions?: Partial<
    CrudTableItemActionProps<
      TSchema,
      IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
    >
  >;
  columnExtraActions?: CrudTableItemActionProps<
    TSchema,
    IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
  >['extraActions'];
  columnDataIndex?: TableDataIndex<
    IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
  >;
  columnActionSequence?: CrudTableViewProps['columnActions'];

  /**
   * ALERT PROPS
   * ===========================
   */
  alertProps?: Omit<
    DialogProps,
    'ref' | 'visible' | 'title' | 'message' | 'onClickAction'
  > &
    RefAttributes<DialogRefProps>;

  /**
   * MODAL PROPS
   * ===========================
   */
  modalForms?: Partial<UseCrudModalFormProps<TSchema>>;

  /**
   * VIEW PROPS
   * ===========================
   */
  contentViewType?: 'table' | 'view';
  detailsViewType?: 'drawer' | 'modal';
  filterModalViewType?: 'drawer' | 'modal';
  emptyView?: ReactNode;
  noDataView?: ReactNode;
  unstyled?: boolean;
  spacingMultiplier?: number;
  enablePageHeader?: boolean;
  enableFilterView?: boolean;
  enableDetailView?: boolean;
  enableFilterModalView?: boolean;
  enableNotification?: boolean;
  enableRowSelection?: boolean;
  enableActionColumn?: boolean;
  enableItemGroupAction?: boolean;

  /**
   * CUSTOM PROPS
   * ===========================
   */
  prepareAlertProps?: (
    nodeProps: CrudComponentAlertNodeProps<TSchema>
  ) => Omit<
    DialogProps,
    'ref' | 'visible' | 'title' | 'message' | 'onClickAction'
  > &
    RefAttributes<DialogRefProps>;
  prepareHeaderViewProps?: (
    nodeProps: CrudComponentPageHeaderNodeProps<TSchema>
  ) => CrudPageHeaderViewProps;
  prepareFilterViewProps?: (
    nodeProps: CrudComponentFilterNodeProps<TSchema>
  ) => CrudFilterViewProps;
  prepareTableViewProps?: (
    nodeProps: CrudComponentTableNodeProps<TSchema>
  ) => Omit<
    CrudTableViewProps,
    'renderActionButtons' | 'onPaginateTo' | 'columns'
  >;
  prepareContentViewProps?: (
    nodeProps: CrudComponentContentNodeProps<TSchema>
  ) => Omit<CrudContentViewProps, 'renderActionButtons' | 'onPaginateTo'>;
  prepareDetailViewProps?: (
    nodeProps: CrudComponentDetailNodeProps<TSchema>
  ) => {
    modalProps?: DialogProps;
    drawerProps?: DrawerProps;
  };
  prepareFilterModalViewProps?: (
    nodeProps: CrudComponentFilterModalNodeProps<TSchema>
  ) => CrudFilterViewProps & {
    modalProps?: DialogProps;
    drawerProps?: DrawerProps;
  };

  /**
   * CUSTOM VIEW RENDER
   * ===========================
   */
  renderNotificationView?: (options: {
    type: 'success' | 'error';
    message: string;
  }) => void | ReactNode;
  renderDetailsView?: (
    nodeProps: CrudComponentDetailNodeProps<TSchema>
  ) => ReactNode;
  renderFilterModalView?: (
    nodeProps: CrudComponentFilterModalNodeProps<TSchema>
  ) => ReactNode;
  renderItemView?: CrudContentViewProps<
    CrudGraphApiListType<TSchema>
  >['renderItemView'];
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudPanelViewProps;
