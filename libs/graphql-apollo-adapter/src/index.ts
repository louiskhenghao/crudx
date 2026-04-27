/**
 * ===========================
 * @crudx/graphql-apollo-adapter
 * ===========================
 *
 * Apollo-flavoured transport adapter for `@crudx/core`.
 *
 * Apollo's hook return types (`QueryResult`, `LazyQueryResult`,
 * `MutationTuple`) already structurally satisfy the transport contract
 * defined in `@crudx/core`, so most of this package is a typing layer:
 *
 *   - identity helpers (`graphqlList`, `graphqlGet`, `graphqlMutation`)
 *     that brand a generated Apollo hook as a transport adapter,
 *     producing better autocomplete and surfacing intent at the call
 *     site;
 *   - re-exports of the generic adapter types narrowed to Apollo so
 *     consumers can keep using `@apollo/client` types when they need
 *     to.
 */

import {
  LazyQueryHookOptions,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  QueryTuple,
} from '@apollo/client';
import {
  TransportLazyQueryHook,
  TransportMutationHook,
  TransportOperationVariables,
  TransportQueryHook,
} from '@crudx/core';

/**
 * --------------------------
 * APOLLO-FLAVOURED HOOK ALIASES
 * --------------------------
 *
 * These narrow the generic transport contracts down to the exact shape
 * that `graphql-codegen --plugin typescript-react-apollo` emits.
 */
export type GraphqlQueryHook<
  TData = any,
  TVariables extends OperationVariables = OperationVariables
> = (options?: QueryHookOptions<TData, TVariables>) => QueryResult<TData, TVariables>;

export type GraphqlLazyQueryHook<
  TData = any,
  TVariables extends OperationVariables = OperationVariables
> = (
  options?: LazyQueryHookOptions<TData, TVariables>
) => QueryTuple<TData, TVariables>;

export type GraphqlMutationHook<
  TData = any,
  TVariables extends OperationVariables = OperationVariables
> = (
  options?: MutationHookOptions<TData, TVariables>
) => MutationTuple<TData, TVariables>;

/**
 * --------------------------
 * IDENTITY HELPERS
 * --------------------------
 *
 * These helpers don't transform the hook — they only assert at the
 * type level that the supplied Apollo hook satisfies the corresponding
 * transport contract. Useful when wiring `CrudSchemata`:
 *
 * ```ts
 * new CRUD<BankSchemata>('bank', {
 *   list: { key: 'BankListing', query: graphqlList(useBankListingQuery) },
 *   create: { key: 'BankCreate', query: graphqlMutation(useBankCreateMutation) },
 * });
 * ```
 *
 * Passing raw Apollo hooks works too (they already satisfy the
 * structural transport types), but going through these helpers makes
 * the intent — and the transport choice — explicit.
 */
export const graphqlList = <
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
>(
  hook: GraphqlQueryHook<TData, TVariables>
): TransportQueryHook<TData, TVariables> =>
  hook as unknown as TransportQueryHook<TData, TVariables>;

export const graphqlGet = <
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
>(
  hook: GraphqlLazyQueryHook<TData, TVariables>
): TransportLazyQueryHook<TData, TVariables> =>
  hook as unknown as TransportLazyQueryHook<TData, TVariables>;

export const graphqlMutation = <
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
>(
  hook: GraphqlMutationHook<TData, TVariables>
): TransportMutationHook<TData, TVariables> =>
  hook as unknown as TransportMutationHook<TData, TVariables>;

export * from './adapter';
