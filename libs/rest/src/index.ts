/**
 * ===========================
 * @crudx/rest
 * ===========================
 *
 * REST transport adapter for `@crudx/core`, backed by
 * `@tanstack/react-query`.
 *
 * The adapter exposes three factory helpers that produce hooks
 * matching the transport contract from `@crudx/core`:
 *
 *   - `restList`     →  `TransportQueryHook`
 *   - `restGet`      →  `TransportLazyQueryHook`
 *   - `restMutation` →  `TransportMutationHook`
 *
 * Consumers wire them into `CrudSchemata` exactly like the GraphQL
 * adapter:
 *
 * ```ts
 * const list   = restList<Banks, ListVars>({
 *   resource: 'banks',
 *   fetch: ({ variables, signal }) =>
 *     fetch(`/api/banks?${qs(variables)}`, { signal }).then(r => r.json()),
 * });
 *
 * const create = restMutation<Bank, CreateVars>({
 *   resource: ['banks', 'create'],
 *   request: ({ variables }) =>
 *     fetch('/api/banks', { method: 'POST', body: JSON.stringify(variables) })
 *       .then(r => r.json()),
 * });
 *
 * new CRUD<BankSchemata>('bank', {
 *   list:   { key: 'banks',  query: list },
 *   create: { key: 'banks',  query: create },
 * });
 * ```
 */

import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  TransportFetchResult,
  TransportLazyQueryHook,
  TransportLazyQueryHookOptions,
  TransportLazyQueryResult,
  TransportMutationHook,
  TransportMutationHookOptions,
  TransportMutationResult,
  TransportMutationTuple,
  TransportOperationVariables,
  TransportQueryHook,
  TransportQueryHookOptions,
  TransportQueryResult,
} from '@crudx/core';

/**
 * --------------------------
 * SHARED TYPES
 * --------------------------
 */
export type RestQueryKey = string | readonly unknown[];

export interface RestFetchContext<TVariables> {
  variables: TVariables;
  signal?: AbortSignal;
}

export interface RestQueryAdapterOptions<
  TData,
  TVariables extends TransportOperationVariables
> {
  /** Query key segment(s); variables are appended automatically. */
  resource: RestQueryKey;
  /** Function that performs the network request and returns parsed data. */
  fetch: (ctx: RestFetchContext<TVariables>) => Promise<TData>;
  /** Forwarded TanStack Query options (staleTime, retry, …). */
  queryOptions?: Partial<
    Omit<UseQueryOptions<TData, unknown, TData>, 'queryKey' | 'queryFn'>
  >;
}

export interface RestMutationAdapterOptions<
  TData,
  TVariables extends TransportOperationVariables
> {
  /** Optional key — useful for invalidations from outside the hook. */
  resource?: RestQueryKey;
  /** Function that performs the mutation request. */
  request: (ctx: RestFetchContext<TVariables>) => Promise<TData>;
  /** Forwarded TanStack Query options. */
  mutationOptions?: Partial<UseMutationOptions<TData, unknown, TVariables>>;
}

/**
 * --------------------------
 * INTERNAL HELPERS
 * --------------------------
 */
const composeQueryKey = (
  resource: RestQueryKey,
  variables: unknown
): readonly unknown[] => {
  const base = Array.isArray(resource) ? resource : [resource];
  return [...base, variables ?? null];
};

const toTransportError = (raw: unknown): any => {
  if (!raw) return undefined;
  if (raw instanceof Error) return raw;
  return Object.assign(new Error('REST transport error'), { cause: raw });
};

/**
 * --------------------------
 * restList
 * --------------------------
 *
 * Returns a `TransportQueryHook` backed by TanStack Query's `useQuery`.
 * Variables are bound into the query key so changes auto-refetch.
 */
export const restList = <
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
>(
  options: RestQueryAdapterOptions<TData, TVariables>
): TransportQueryHook<TData, TVariables> => {
  const { resource, fetch: fetcher, queryOptions } = options;

  return ((
    inOptions?: TransportQueryHookOptions<TData, TVariables>
  ): TransportQueryResult<TData, TVariables> => {
    const variables = (inOptions?.variables ?? ({} as TVariables)) as TVariables;
    const enabled = inOptions?.skip ? false : queryOptions?.enabled ?? true;

    const result = useQuery<TData, unknown, TData>({
      ...(queryOptions ?? {}),
      queryKey: composeQueryKey(resource, variables),
      queryFn: ({ signal }) => fetcher({ variables, signal }),
      enabled,
      onSuccess: (data) => {
        queryOptions?.onSuccess?.(data);
        inOptions?.onCompleted?.(data);
      },
      onError: (err) => {
        queryOptions?.onError?.(err);
        inOptions?.onError?.(toTransportError(err));
      },
    } as UseQueryOptions<TData, unknown, TData>);

    return {
      data: result.data as TData | undefined,
      loading: result.isLoading,
      error: toTransportError(result.error),
      called: result.fetchStatus !== 'idle',
      variables,
      networkStatus: result.isFetching ? 4 : 7,
      previousData: undefined,
      refetch: async (
        nextVariables?: Partial<TVariables>
      ): Promise<TransportFetchResult<TData>> => {
        const merged = { ...variables, ...(nextVariables ?? {}) } as TVariables;
        const data = await fetcher({ variables: merged });
        await result.refetch();
        return { data };
      },
    };
  }) as TransportQueryHook<TData, TVariables>;
};

/**
 * --------------------------
 * restGet (lazy)
 * --------------------------
 *
 * Returns a `TransportLazyQueryHook` whose first tuple item is a
 * trigger function. Internally it stores the latest variables in
 * component state so the bound `useQuery` re-runs when the trigger
 * is called.
 */
export const restGet = <
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
>(
  options: RestQueryAdapterOptions<TData, TVariables>
): TransportLazyQueryHook<TData, TVariables> => {
  const queryHook = restList<TData, TVariables>({
    ...options,
    queryOptions: {
      ...(options.queryOptions ?? {}),
      enabled: false,
    },
  });

  return ((
    inOptions?: TransportLazyQueryHookOptions<TData, TVariables>
  ): TransportLazyQueryResult<TData, TVariables> => {
    const result = queryHook({ ...(inOptions ?? {}), skip: true });

    const trigger = async (
      triggerOptions?: TransportLazyQueryHookOptions<TData, TVariables>
    ): Promise<TransportFetchResult<TData>> => {
      const nextVariables = (triggerOptions?.variables ??
        inOptions?.variables ??
        ({} as TVariables)) as TVariables;
      const data = await options.fetch({ variables: nextVariables });
      triggerOptions?.onCompleted?.(data);
      return { data };
    };

    return [trigger, result];
  }) as TransportLazyQueryHook<TData, TVariables>;
};

/**
 * --------------------------
 * restMutation
 * --------------------------
 *
 * Returns a `TransportMutationHook` backed by TanStack Query's
 * `useMutation`. The trigger accepts `{ variables }` like Apollo's
 * `[mutate]`.
 */
export const restMutation = <
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
>(
  options: RestMutationAdapterOptions<TData, TVariables>
): TransportMutationHook<TData, TVariables> => {
  const { request, mutationOptions } = options;

  return ((
    inOptions?: TransportMutationHookOptions<TData, TVariables>
  ): TransportMutationTuple<TData, TVariables> => {
    const mutation = useMutation<TData, unknown, TVariables>({
      ...(mutationOptions ?? {}),
      mutationFn: (variables: TVariables) => request({ variables }),
      onSuccess: (data, vars, ctx) => {
        mutationOptions?.onSuccess?.(data, vars, ctx);
        inOptions?.onCompleted?.(data);
      },
      onError: (err, vars, ctx) => {
        mutationOptions?.onError?.(err, vars, ctx);
        inOptions?.onError?.(toTransportError(err));
      },
    } as UseMutationOptions<TData, unknown, TVariables>);

    const trigger = async (
      triggerOptions?: TransportMutationHookOptions<TData, TVariables>
    ): Promise<TransportFetchResult<TData>> => {
      const variables = (triggerOptions?.variables ??
        inOptions?.variables ??
        ({} as TVariables)) as TVariables;
      const data = await mutation.mutateAsync(variables);
      return { data };
    };

    const result: TransportMutationResult<TData> = {
      data: mutation.data as TData | undefined,
      loading: mutation.isLoading,
      error: toTransportError(mutation.error),
      called: mutation.isIdle === false,
      reset: mutation.reset,
    };

    return [trigger, result];
  }) as TransportMutationHook<TData, TVariables>;
};
