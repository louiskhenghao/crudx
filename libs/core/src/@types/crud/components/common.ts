import { ReactNode } from 'react';

import { CrudMutationResource } from '../../../crud/mutation/resource';
import { UseRowSelectionProps } from '../../../hooks/useRowSelectionHook';
import {
  CrudCommonActionNodeAlertOptions,
  CrudCommonActionNodeProps,
} from '../action';
import { CrudGraphApiGetType } from '../api';
import { CrudDetailProps } from '../detail';
import { CrudHookProps } from '../hooks';
import { CrudPaginationProps } from '../pagination';
import { CrudPagingPaginateProps, CrudPagingProps } from '../paging';
import { CrudSchemataTypes } from '../schema';

import { CrudComponentModalsFormProps } from './modal';

export type CrudComponentContext<TSchema extends CrudSchemataTypes = any> = {
  pagingProps: CrudPagingProps<TSchema>;
  mutation: CrudMutationResource<TSchema>;
  detail: CrudDetailProps<TSchema>;
  controllers: CrudComponentVisibilityController;
  hooks: CrudHookProps;
};

/**
 * accessibility props for crud components
 */
export type CrudComponentAccessibilityProps = CrudPagingPaginateProps & {
  // whether enable next button
  enableNext: boolean;
  // whether enable previous button
  enablePrevious: boolean;
  // whether should enable bulk action
  enableBulkAction: boolean;
  // total selections
  totalSelected: number;
  // to get existing selections
  selections: UseRowSelectionProps['selections'];
  // pagination props for easy access
  pagination: CrudPaginationProps;
  // to set selection
  setSelections: UseRowSelectionProps['setSelections'];
  // trigger to show create modal
  onTriggerCreate: () => void;
  // trigger to show filter
  onTriggerFiltering: () => void;
  // trigger to re-query
  onTriggerRefresh: () => void;
  // toggle to show selections
  onTriggerSelection: () => void;
  // trigger to clear selections
  onTriggerSelectionClear: () => void;
  // to trigger sorting
  onTriggerSorting: (sort: 'DEFAULT' | 'ASC' | 'DESC') => void;
};

export type CrudComponentCommonProps<TSchema extends CrudSchemataTypes = any> =
  {
    context: CrudComponentContext<TSchema>;
    accessibility: CrudComponentAccessibilityProps;
  };

// ====== COMMON VISIBILITY CONTROLLER
export type CrudCommonVisibilityController<
  TSchema extends CrudSchemataTypes = any
> = {
  visible: boolean;
  onShow: (args?: CrudGraphApiGetType<TSchema>) => void;
  onHide: () => void;
};

export type CrudCommonVisibilityProps<TData = any> = {
  visible: boolean;
  onHide: () => void;
  onShow: (data?: TData | null) => void;
};

export type CrudComponentVisibilityController<
  TSchema extends CrudSchemataTypes = any
> = {
  details: CrudCommonVisibilityController<TSchema>;
  filter: CrudCommonVisibilityController<TSchema>;
  create: CrudCommonVisibilityProps<TSchema>;
  update: CrudCommonVisibilityProps<TSchema>;
  delete: CrudCommonVisibilityProps<TSchema>;
  exports: CrudCommonVisibilityProps<TSchema>;
  alert: {
    visible: boolean;
    props: CrudCommonActionNodeAlertOptions;
    onHide: () => void;
    onShow: (options: CrudCommonActionNodeAlertOptions) => void;
  };
  extraModal: CrudComponentModalsFormProps<TSchema>['extra'];
};

export type CrudComponentActionProps = {
  viewButton?: ReactNode;
  updateButton?: ReactNode;
  deleteButton?: ReactNode;
  exportButton?: ReactNode;
  viewButtonNode?: CrudCommonActionNodeProps['1'];
  updateButtonNode?: CrudCommonActionNodeProps['1'];
  deleteButtonNode?: CrudCommonActionNodeProps['1'];
  exportButtonNode?: CrudCommonActionNodeProps['1'];
};

export type CrudComponentExtraActionProps = {
  views: ReactNode[];
  nodes: CrudCommonActionNodeProps['1'][];
};
