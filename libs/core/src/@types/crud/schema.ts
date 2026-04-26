import {
  TransportBaseMutationOptions,
  TransportLazyQueryHook,
  TransportLazyQueryHookOptions,
  TransportLazyQueryResult,
  TransportMutationHook,
  TransportMutationResult,
  TransportOperationVariables,
  TransportQueryHook,
  TransportQueryHookOptions,
  TransportQueryResult,
} from '../transport';

/**
 * Crud schema definition
 */
export type CrudSchemata<TSchema extends CrudSchemataTypes = any> = {
  get?: {
    key: string;
    query: TransportLazyQueryHook<TSchema['get'][0], TSchema['get'][1]>;
    options?: TransportLazyQueryHookOptions<
      TSchema['get'][0],
      TSchema['get'][1]
    >;
  };
  list?: {
    key: string;
    query: TransportQueryHook<TSchema['list'][0], TSchema['list'][1]>;
    options?: TransportQueryHookOptions<
      TSchema['list'][0],
      TSchema['list'][1]
    >;
  };
  create?: {
    key: string;
    query: TransportMutationHook<TSchema['create'][0], TSchema['create'][1]>;
    options?: TransportBaseMutationOptions<
      TSchema['create'][0],
      TSchema['create'][1]
    >;
  };
  update?: {
    key: string;
    query: TransportMutationHook<TSchema['update'][0], TSchema['update'][1]>;
    options?: TransportBaseMutationOptions<
      TSchema['update'][0],
      TSchema['update'][1]
    >;
  };
  delete?: {
    key: string;
    query: TransportMutationHook<TSchema['delete'][0], TSchema['delete'][1]>;
    options?: TransportBaseMutationOptions<
      TSchema['delete'][0],
      TSchema['delete'][1]
    >;
  };
  exports?: {
    key: string;
    query: TransportMutationHook<TSchema['exports'][0], TSchema['exports'][1]>;
    options?: TransportBaseMutationOptions<
      TSchema['exports'][0],
      TSchema['exports'][1]
    >;
  };
};

/**
 * Crud schema types
 */
export type CrudSchemataTypes = {
  get?: [any, TransportOperationVariables, any] | any;
  list?: [any, TransportOperationVariables, any] | any;
  create?: [any, TransportOperationVariables, any] | any;
  update?: [any, TransportOperationVariables, any] | any;
  delete?: [any, TransportOperationVariables, any] | any;
  exports?: [any, TransportOperationVariables, any] | any;
};

/**
 * Crud schema result types
 */
export type CrudSchemataResult<TSchema extends CrudSchemataTypes = any> = {
  get?: TransportLazyQueryResult<TSchema['get'][0], TSchema['get'][1]>[1];
  list?: TransportQueryResult<TSchema['list'][0], TSchema['list'][1]>;
  create?: TransportMutationResult<TSchema['create'][0]>;
  update?: TransportMutationResult<TSchema['update'][0]>;
  delete?: TransportMutationResult<TSchema['delete'][0]>;
  exports?: TransportMutationResult<TSchema['exports'][0]>;
};
