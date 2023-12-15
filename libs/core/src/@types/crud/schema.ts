import {
  BaseMutationOptions,
  LazyQueryHookOptions,
  LazyQueryResult,
  MutationResult,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';

import {
  UseLazyQueryAction,
  UseMutationAction,
  UseQueryAction,
} from '../apollo';

/**
 * Crud schema definition
 */
export type CrudSchemata<TSchema extends CrudSchemataTypes = any> = {
  get?: {
    key: string;
    query: UseLazyQueryAction<TSchema['get'][0], TSchema['get'][1]>;
    options?: LazyQueryHookOptions<TSchema['get'][0], TSchema['get'][1]>;
  };
  list?: {
    key: string;
    query: UseQueryAction<TSchema['list'][0], TSchema['list'][1]>;
    options?: QueryHookOptions<TSchema['list'][0], TSchema['list'][1]>;
  };
  create?: {
    key: string;
    query: UseMutationAction<TSchema['create'][0], TSchema['create'][1]>;
    options?: BaseMutationOptions<TSchema['create'][0], TSchema['create'][1]>;
  };
  update?: {
    key: string;
    query: UseMutationAction<TSchema['update'][0], TSchema['update'][1]>;
    options?: BaseMutationOptions<TSchema['update'][0], TSchema['update'][1]>;
  };
  delete?: {
    key: string;
    query: UseMutationAction<TSchema['delete'][0], TSchema['delete'][1]>;
    options?: BaseMutationOptions<TSchema['delete'][0], TSchema['delete'][1]>;
  };
  exports?: {
    key: string;
    query: UseMutationAction<TSchema['exports'][0], TSchema['exports'][1]>;
    options?: BaseMutationOptions<TSchema['exports'][0], TSchema['exports'][1]>;
  };
};

/**
 * Crud schema types
 */
export type CrudSchemataTypes = {
  get?: [any, OperationVariables, any] | any;
  list?: [any, OperationVariables, any] | any;
  create?: [any, OperationVariables, any] | any;
  update?: [any, OperationVariables, any] | any;
  delete?: [any, OperationVariables, any] | any;
  exports?: [any, OperationVariables, any] | any;
};

/**
 * Crud schema result types
 */
export type CrudSchemataResult<TSchema extends CrudSchemataTypes = any> = {
  get?: LazyQueryResult<TSchema['get'][0], TSchema['get'][1]>;
  list?: QueryResult<TSchema['list'][0], TSchema['list'][1]>;
  create?: MutationResult<TSchema['create'][0]>;
  update?: MutationResult<TSchema['update'][0]>;
  delete?: MutationResult<TSchema['delete'][0]>;
  exports?: MutationResult<TSchema['exports'][0]>;
};
