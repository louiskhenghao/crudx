import {
  LazyQueryHookOptions,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  QueryTuple,
} from '@apollo/client';

/**
 * ===========================
 * MAIN
 * ===========================
 */

// use graphql operation variable
export type UseOperationVariables<V = any> = V | OperationVariables;

/**
 * ------------------------
 * LAZY QUERY
 * ------------------------
 */
export type UseLazyQueryHookOptions<
  Q = any,
  V extends OperationVariables = OperationVariables
> = LazyQueryHookOptions<Q, V>;

export type UseLazyQueryAction<
  Q = any,
  V extends OperationVariables = OperationVariables
> = (options: LazyQueryHookOptions<Q, V>) => QueryTuple<Q, V>;

/**
 * ------------------------
 * QUERY
 * ------------------------
 */
export type UseQueryHookOptions<
  Q = any,
  V extends OperationVariables = OperationVariables
> = QueryHookOptions<Q, V>;

export type UseQueryAction<
  Q = any,
  V extends OperationVariables = OperationVariables
> = (options: QueryHookOptions<Q, V>) => QueryResult<Q, V>;

/**
 * ------------------------
 * MUTATION
 * ------------------------
 */
export type UseMutationHookOptions<
  Q = any,
  V extends OperationVariables = OperationVariables
> = MutationHookOptions<Q, V>;

export type UseMutationAction<
  Q = any,
  V extends OperationVariables = OperationVariables
> = (options: MutationHookOptions<Q, V>) => MutationTuple<Q, V>;
