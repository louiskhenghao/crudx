import { ReactNode } from 'react';

import { CrudMutationResource } from '../../../crud/mutation/resource';
import { UseRowSelectionProps } from '../../../hooks/useRowSelectionHook';
import { CrudCommonActions } from '../action';
import { CrudGraphApiListType } from '../api';
import { CrudDetailProps } from '../detail';
import { CrudPaginationProps } from '../pagination';
import { CrudPagingProps } from '../paging';
import { CrudSchemata, CrudSchemataResult, CrudSchemataTypes } from '../schema';

import {
  CrudComponentActionProps,
  CrudComponentExtraActionProps,
} from './common';
import { CrudComponentDetailNodeProps } from './details';
import { CrudComponentFilterNodeProps } from './filter';
import { CrudComponentFilterModalNodeProps } from './filter-modal';
import { CrudComponentModalsFormProps, CrudModalFormOptions } from './modal';
import { CrudComponentPageHeaderNodeProps } from './page-header';
import { CrudComponentTableNodeProps } from './table';

export type CrudComponents<TSchema extends CrudSchemataTypes = any> = {
  notification?: (options: {
    type: 'success' | 'error';
    message: string;
  }) => void | ReactNode;
  table?: (props: CrudComponentTableNodeProps<TSchema>) => ReactNode;
  filter?: (props: CrudComponentFilterNodeProps<TSchema>) => ReactNode;
  details?: (props: CrudComponentDetailNodeProps<TSchema>) => ReactNode;
  pageHeader?: (props: CrudComponentPageHeaderNodeProps<TSchema>) => ReactNode;
  filterModal?: (
    props: CrudComponentFilterModalNodeProps<TSchema>
  ) => ReactNode;
  // TODO: add more nodes function in future
};

export type CrudComponentProps<TSchema extends CrudSchemataTypes = any> = {
  tableProps: CrudComponentTableNodeProps<TSchema>;
  filterProps: CrudComponentFilterNodeProps<TSchema>;
  detailsProps: CrudComponentDetailNodeProps<TSchema>;
  pageHeaderProps: CrudComponentPageHeaderNodeProps<TSchema>;
  modalFormProps: CrudComponentModalsFormProps<TSchema>;
  filterModalProps: CrudComponentFilterModalNodeProps<TSchema>;
  renderTable?: () => ReactNode;
  renderFilter?: () => ReactNode;
  renderDetails?: () => ReactNode;
  renderPageHeader?: () => ReactNode;
  renderModalForms?: () => ReactNode;
  renderFilterModal?: () => ReactNode;
};

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
