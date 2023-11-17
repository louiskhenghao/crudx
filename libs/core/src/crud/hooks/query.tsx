import {
  BaseQueryOptions,
  LazyQueryHookOptions,
  LazyQueryResult,
  OperationVariables,
  QueryResult,
} from '@apollo/client';

import { CrudSchemata } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */

/**
 * useListQuery
 * ---------------------------
 */
export const useListQuery = <
  Q,
  Variables extends OperationVariables = OperationVariables
>(
  actions: CrudSchemata['list'],
  options: BaseQueryOptions<Variables> = {},
  skipCheck = true
): {
  query: (options?: LazyQueryHookOptions<Q, Variables>) => void;
  action?: CrudSchemata['list'];
  result: QueryResult<Q, Variables>;
} => {
  let result: QueryResult<Q, Variables> | any = {};
  const query = (): void => {
    console.warn(
      `This method is not available, please provide valid "list" actions in constructor`
    );
  };
  const action = actions;
  if (!action && !skipCheck) {
    throw new Error(
      `Please make sure "list" actions is provided in constructor`
    );
  }
  const actionOptions = action?.options ?? {};
  const variables = {
    ...(actionOptions?.variables ?? {}),
    ...(options?.variables ?? {}),
  };
  result = action?.query({
    ...actionOptions,
    ...options,
    variables,
  });
  return {
    query: result?.refetch ?? query,
    action,
    result,
  };
};

/**
 * useGetQuery
 * ---------------------------
 */
export const useGetQuery = <
  Q,
  Variables extends OperationVariables = OperationVariables
>(
  actions: CrudSchemata['get'],
  options: BaseQueryOptions<Variables> = {},
  skipCheck = true
): {
  query: (options?: LazyQueryHookOptions<Q, Variables>) => void;
  action?: CrudSchemata['get'];
  result: LazyQueryResult<Q, Variables>;
} => {
  let result: LazyQueryResult<Q, Variables> | any = null;
  let query = (): void => {
    console.warn(
      `This method is not available, please provide valid "get" actions in constructor`
    );
  };
  const action = actions;
  if (!action && !skipCheck) {
    throw new Error(
      `Please make sure "get" actions is provided in constructor`
    );
  }

  const actionOptions = action?.options ?? {};
  const variables = {
    ...(actionOptions?.variables ?? {}),
    ...(options?.variables ?? {}),
  };
  const lazyResult = action?.query({
    ...actionOptions,
    ...options,
    variables,
  });
  query = lazyResult?.[0] ?? query;
  result = lazyResult?.[1] ?? null;
  return {
    query,
    action,
    result,
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  useListQuery,
  useGetQuery,
};
