import {
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
} from '@apollo/client';

import { CrudCallbackComposer } from '../../crud';
import { CrudPagingResource } from '../../crud/paging/resource';
import { UseRowSelectionProps } from '../../hooks/useRowSelectionHook';

import { CrudComponents } from './components';
import { CrudDetailProps } from './detail';
import { CrudPaginationProps } from './pagination';
import { CrudPagingProps } from './paging';
import { CrudSchemata, CrudSchemataTypes } from './schema';

/**
 * Crud mutation resource options
 */
export type CrudMutationResourceOptions<
  TSchema extends CrudSchemataTypes = any
> = {
  schema: CrudSchemata<TSchema>;
  nodes: CrudComponents<TSchema>;
  composer: CrudCallbackComposer<TSchema>;
  callbacks: CrudMutationResourceEvents<TSchema>;
};

/**
 * Crud mutation compose options
 */
export type CrudMutationComposeOptions<
  TSchema extends CrudSchemataTypes = any
> = {
  detail: CrudDetailProps<TSchema>;
  paging: CrudPagingResource<TSchema>;
  pagingProps: CrudPagingProps<TSchema>;
  enableNotification?: boolean;
  pagination: CrudPaginationProps;
  rowSelection: UseRowSelectionProps;
};

/**
 * Crud mutation resource types
 */
export type CrudMutationProps<TSchema extends CrudSchemataTypes = any> = {
  create?: MutationTuple<TSchema['create'][0], TSchema['create'][1]>;
  update?: MutationTuple<TSchema['update'][0], TSchema['update'][1]>;
  delete?: MutationTuple<TSchema['delete'][0], TSchema['delete'][1]>;
  exports?: MutationTuple<TSchema['exports'][0], TSchema['exports'][1]>;
};

/**
 * Crud mutation resource event callbacks
 */
export type CrudMutationResourceEvents<
  TSchema extends CrudSchemataTypes = any
> = {
  create?:
    | CrudMutateEventCallback<TSchema['create'][0], TSchema['create'][1]>
    | CrudMutateEventCallback<TSchema['create'][0], TSchema['create'][1]>[];
  update?:
    | CrudMutateEventCallback<TSchema['update'][0], TSchema['update'][1]>
    | CrudMutateEventCallback<TSchema['update'][0], TSchema['update'][1]>[];
  delete?:
    | CrudMutateEventCallback<TSchema['delete'][0], TSchema['delete'][1]>
    | CrudMutateEventCallback<TSchema['delete'][0], TSchema['delete'][1]>[];
  exports?:
    | CrudMutateEventCallback<TSchema['exports'][0], TSchema['exports'][1]>
    | CrudMutateEventCallback<TSchema['exports'][0], TSchema['exports'][1]>[];
};

/**
 * Crud mutation resource event callback listener
 */
export type CrudMutateEventCallback<Q = any, V = OperationVariables> = Pick<
  MutationHookOptions<Q, V>,
  'onCompleted' | 'onError'
>;
