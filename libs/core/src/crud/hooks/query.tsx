import {
  TransportBaseQueryOptions,
  TransportLazyQueryHookOptions,
  TransportLazyQueryResult,
  TransportOperationVariables,
  TransportQueryResult,
} from '../../@types/transport';
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
  Variables extends TransportOperationVariables = TransportOperationVariables
>(
  actions: CrudSchemata['list'],
  options: TransportBaseQueryOptions<Variables> = {},
  skipCheck = true
): {
  query: (options?: TransportLazyQueryHookOptions<Q, Variables>) => void;
  action?: CrudSchemata['list'];
  result: TransportQueryResult<Q, Variables>;
} => {
  let result: TransportQueryResult<Q, Variables> | any = {};
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
  Variables extends TransportOperationVariables = TransportOperationVariables
>(
  actions: CrudSchemata['get'],
  options: TransportBaseQueryOptions<Variables> = {},
  skipCheck = true
): {
  query: (options?: TransportLazyQueryHookOptions<Q, Variables>) => void;
  action?: CrudSchemata['get'];
  result: TransportLazyQueryResult<Q, Variables>[1];
} => {
  let result: TransportLazyQueryResult<Q, Variables>[1] | any = null;
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
