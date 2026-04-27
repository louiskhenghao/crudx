/**
 * ===========================
 * LEGACY APOLLO ALIASES
 * ===========================
 *
 * Historic public type names — kept as thin aliases over the new
 * transport-agnostic contracts in `./transport`.
 *
 * Prefer `Transport*` types in new code; the GraphQL-flavoured names
 * here remain exported so existing consumers (and
 * `@crudx/graphql-apollo-adapter`) keep compiling.
 */

import {
  TransportLazyQueryHook,
  TransportLazyQueryHookOptions,
  TransportLazyQueryResult,
  TransportMutationHook,
  TransportMutationHookOptions,
  TransportMutationTuple,
  TransportOperationVariables,
  TransportQueryHook,
  TransportQueryHookOptions,
  TransportQueryResult,
} from './transport';

// use graphql operation variable
export type UseOperationVariables<V = any> = V | TransportOperationVariables;

/**
 * ------------------------
 * LAZY QUERY
 * ------------------------
 */
export type UseLazyQueryHookOptions<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportLazyQueryHookOptions<Q, V>;

export type UseLazyQueryAction<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportLazyQueryHook<Q, V>;

/**
 * ------------------------
 * QUERY
 * ------------------------
 */
export type UseQueryHookOptions<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportQueryHookOptions<Q, V>;

export type UseQueryAction<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportQueryHook<Q, V>;

/**
 * ------------------------
 * MUTATION
 * ------------------------
 */
export type UseMutationHookOptions<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportMutationHookOptions<Q, V>;

export type UseMutationAction<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportMutationHook<Q, V>;

/**
 * ------------------------
 * RESULT TUPLES
 * ------------------------
 */
export type UseQueryResult<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportQueryResult<Q, V>;

export type UseLazyQueryResult<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportLazyQueryResult<Q, V>;

export type UseMutationTuple<
  Q = any,
  V extends TransportOperationVariables = TransportOperationVariables
> = TransportMutationTuple<Q, V>;
