import { ReactNode } from 'react';

import { CrudMutationResource } from '../../../crud/mutation/resource';
import { CrudPagingResource } from '../../../crud/paging/resource';
import { CrudCommonActionNodeProps } from '../action';
import { CrudGraphApiGetType } from '../api';
import { CrudDetailProps } from '../detail';
import { CrudPagingPaginateProps, CrudPagingProps } from '../paging';
import { CrudSchemataTypes } from '../schema';

export type CrudComponentContext<TSchema extends CrudSchemataTypes = any> = {
  paging: CrudPagingResource<TSchema>;
  pagingProps: CrudPagingProps<TSchema>;
  mutation: CrudMutationResource<TSchema>;
  detail?: CrudDetailProps<TSchema>;
  controllers: CrudComponentVisibilityController;
};

export type CrudComponentAccessibilityProps = CrudPagingPaginateProps & {
  enableNext: boolean;
  enablePrevious: boolean;
  enableBulkAction: boolean;
  totalSelected?: number;
  onTriggerCreate: () => void;
  onTriggerFiltering: () => void;
  onTriggerRefresh: () => void;
  onTriggerSelection: () => void;
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
  details?: CrudCommonVisibilityController<TSchema>;
  filter?: CrudCommonVisibilityController<TSchema>;
  create?: CrudCommonVisibilityProps<TSchema>;
  update?: CrudCommonVisibilityProps<TSchema>;
  delete?: CrudCommonVisibilityProps<TSchema>;
  exports?: CrudCommonVisibilityProps<TSchema>;
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