import { ReactNode } from 'react';

import { CrudMutationResource } from '../../../crud/mutation/resource';
import { UseRowSelectionProps } from '../../../hooks/useRowSelectionHook';
import { CrudCommonActions } from '../action';
import { CrudGraphApiListType } from '../api';
import { CrudDetailProps } from '../detail';
import { CrudHookProps } from '../hooks';
import { CrudPaginationProps } from '../pagination';
import { CrudPagingProps } from '../paging';
import { CrudSchemata, CrudSchemataResult, CrudSchemataTypes } from '../schema';

import {
  CrudComponentAlertHookProps,
  CrudComponentAlertNodeProps,
} from './alert';
import {
  CrudComponentActionProps,
  CrudComponentExtraActionProps,
} from './common';
import {
  CrudComponentContentHookProps,
  CrudComponentContentNodeProps,
} from './content';
import {
  CrudComponentDetailNodeProps,
  CrudComponentDetailsHookProps,
} from './details';
import {
  CrudComponentFilterHookProps,
  CrudComponentFilterNodeProps,
} from './filter';
import {
  CrudComponentFilterModalHookProps,
  CrudComponentFilterModalNodeProps,
} from './filter-modal';
import { CrudComponentModalFormHookProps, CrudModalFormOptions } from './modal';
import {
  CrudComponentPageHeaderHookProps,
  CrudComponentPageHeaderNodeProps,
} from './page-header';
import {
  CrudComponentTableHookProps,
  CrudComponentTableNodeProps,
} from './table';

// crud components configuration
export type CrudComponents<TSchema extends CrudSchemataTypes = any> = {
  notification?: (options: {
    type: 'success' | 'error';
    message: string;
  }) => void | ReactNode;
  alert?: (props: CrudComponentAlertNodeProps<TSchema>) => ReactNode;
  table?: (props: CrudComponentTableNodeProps<TSchema>) => ReactNode;
  content?: (props: CrudComponentContentNodeProps<TSchema>) => ReactNode;
  filter?: (props: CrudComponentFilterNodeProps<TSchema>) => ReactNode;
  details?: (props: CrudComponentDetailNodeProps<TSchema>) => ReactNode;
  pageHeader?: (props: CrudComponentPageHeaderNodeProps<TSchema>) => ReactNode;
  filterModal?: (
    props: CrudComponentFilterModalNodeProps<TSchema>
  ) => ReactNode;
};

// returning component props
export type CrudComponentProps<TSchema extends CrudSchemataTypes = any> =
  CrudComponentAlertHookProps &
    CrudComponentTableHookProps<TSchema> &
    CrudComponentContentHookProps<TSchema> &
    CrudComponentFilterHookProps<TSchema> &
    CrudComponentDetailsHookProps<TSchema> &
    CrudComponentModalFormHookProps<TSchema> &
    CrudComponentPageHeaderHookProps<TSchema> &
    CrudComponentFilterModalHookProps<TSchema>;

// options for crud components
export type CrudComponentOptions<TSchema extends CrudSchemataTypes = any> = {
  name: string;
  result: CrudSchemataResult<TSchema>;
  nodes: CrudComponents<TSchema>;
  schema: CrudSchemata<TSchema>;
  detail: CrudDetailProps<TSchema>;
  pagingProps: CrudPagingProps<TSchema>;
  mutation: CrudMutationResource<TSchema>;
  itemActions?: CrudCommonActions<TSchema>;
  modalForms?: CrudModalFormOptions<TSchema>;
  pagination: CrudPaginationProps;
  rowSelection: UseRowSelectionProps;
  hooks: CrudHookProps;
};

export type CrudComponentActionHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  renderActionButtons: (context?: {
    data: CrudGraphApiListType<TSchema>;
  }) => CrudComponentActionProps;
  renderExtraActionButtons: (context?: {
    data: CrudGraphApiListType<TSchema>;
  }) => CrudComponentExtraActionProps;
};
