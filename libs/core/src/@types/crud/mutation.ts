import { UseRowSelectionProps } from '@crudx/common';

import {
  TransportMutationHookOptions,
  TransportMutationTuple,
  TransportOperationVariables,
} from '../transport';

import { CrudCallbackComposer } from '../../crud';

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
  callback: CrudCallbackComposer<TSchema>;
  events: CrudMutationResourceEvents<TSchema>;
};

/**
 * Crud mutation compose options
 */
export type CrudMutationComposeOptions<
  TSchema extends CrudSchemataTypes = any
> = {
  detail: CrudDetailProps<TSchema>;
  pagingProps: CrudPagingProps<TSchema>;
  enableNotification?: boolean;
  pagination: CrudPaginationProps;
  rowSelection: UseRowSelectionProps;
};

/**
 * Crud mutation resource types
 */
export type CrudMutationProps<TSchema extends CrudSchemataTypes = any> = {
  create?: TransportMutationTuple<TSchema['create'][0], TSchema['create'][1]>;
  update?: TransportMutationTuple<TSchema['update'][0], TSchema['update'][1]>;
  delete?: TransportMutationTuple<TSchema['delete'][0], TSchema['delete'][1]>;
  exports?: TransportMutationTuple<TSchema['exports'][0], TSchema['exports'][1]>;
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
export type CrudMutateEventCallback<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = Pick<TransportMutationHookOptions<Q, V>, 'onCompleted' | 'onError'>;
