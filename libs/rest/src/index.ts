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
  useQueryClient,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  CrudPagingOptions,
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
  /**
   * Query keys to invalidate after a successful mutation. Strings are
   * matched as prefix segments (TanStack Query default behaviour), so
   * `'banks'` will invalidate every list/get registered under that
   * resource. Pass an array for multiple keys.
   */
  invalidates?: RestQueryKey | RestQueryKey[];
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
  const { request, invalidates, mutationOptions } = options;

  // Normalise invalidate targets into an array of TanStack Query keys.
  const invalidateTargets: readonly unknown[][] = (() => {
    if (!invalidates) return [];
    const list = Array.isArray(invalidates) ? invalidates : [invalidates];
    return list.map((key) => (Array.isArray(key) ? key : [key]));
  })();

  return ((
    inOptions?: TransportMutationHookOptions<TData, TVariables>
  ): TransportMutationTuple<TData, TVariables> => {
    const queryClient = useQueryClient();

    const mutation = useMutation<TData, unknown, TVariables>({
      ...(mutationOptions ?? {}),
      mutationFn: (variables: TVariables) => request({ variables }),
      onSuccess: (data, vars, ctx) => {
        if (invalidateTargets.length > 0) {
          invalidateTargets.forEach((queryKey) => {
            void queryClient.invalidateQueries({ queryKey });
          });
        }
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

/**
 * --------------------------
 * PAGINATION PRESETS
 * --------------------------
 *
 * `@crudx/core`'s pagination engine supports a `'CUSTOM'` strategy
 * with consumer-supplied `extract` / `compose` callbacks. The two
 * helpers below pre-fill those callbacks for the page shapes that
 * appear in the vast majority of REST APIs:
 *
 *   - `restOffsetPagination` — `{ data, total, page, pageSize }` /
 *     `?page=N&pageSize=M` query params.
 *   - `restCursorPagination` — `{ data, nextCursor, prevCursor }` /
 *     `?cursor=…&limit=…` query params.
 *
 * Drop the result into `new CRUD(name, schema, { paging: <preset> })`
 * — no need to hand-roll the four extract/compose functions.
 */
export interface RestOffsetPaginationPreset {
  /** Variable key used to carry the page number. Default: `page`. */
  pageKey?: string;
  /** Variable key used to carry the page size. Default: `pageSize`. */
  pageSizeKey?: string;
  /**
   * How to read the list, total, and page metadata out of the API
   * response. Defaults assume `{ data, total, page, pageSize }`.
   */
  extract?: {
    list?: (response: any) => any[];
    total?: (response: any) => number;
  };
}

export interface RestCursorPaginationPreset {
  /** Variable key used to carry the cursor. Default: `cursor`. */
  cursorKey?: string;
  /** Variable key used to carry the page size. Default: `limit`. */
  limitKey?: string;
  extract?: {
    list?: (response: any) => any[];
    nextCursor?: (response: any) => string | null;
    prevCursor?: (response: any) => string | null;
  };
}

export const restOffsetPagination = (
  preset: RestOffsetPaginationPreset = {}
): NonNullable<CrudPagingOptions['custom']> => {
  const pageKey = preset.pageKey ?? 'page';
  const pageSizeKey = preset.pageSizeKey ?? 'pageSize';
  const readList =
    preset.extract?.list ?? ((response: any) => response?.data ?? []);
  const readTotal =
    preset.extract?.total ?? ((response: any) => response?.total ?? 0);

  return {
    extract: {
      paging: (context, variables) => ({
        pageSize: variables?.[pageSizeKey] ?? context.pageSize,
      }),
      pagination: (context, options) => {
        const list = readList(options.data);
        const total = readTotal(options.data);
        const lastPage = Math.max(
          1,
          Math.ceil(total / Math.max(1, context.pageSize))
        );
        return {
          list,
          total,
          page: {
            next: context.pageNumber < lastPage ? options.intentNext : null,
            previous:
              context.pageNumber > 1 && options.intentPrev > 0
                ? options.intentPrev
                : null,
            canPaginateToPage: true,
          },
        };
      },
    },
    compose: {
      variables: (context, variables) => ({
        ...variables,
        [pageKey]: context.pageNumber,
        [pageSizeKey]: context.pageSize,
      }),
      sorting: (sortContext, variables) => {
        if ('reset' in sortContext) {
          const { sort: _omit, sortBy: _omitBy, ...rest } = variables ?? {};
          return rest;
        }
        return {
          ...(variables ?? {}),
          sort: sortContext.direction,
          sortBy: sortContext.field,
        };
      },
      pagination: (context) => ({
        [pageKey]: context.pageNumber,
        [pageSizeKey]: context.pageSize,
      }),
    },
  };
};

export const restCursorPagination = (
  preset: RestCursorPaginationPreset = {}
): NonNullable<CrudPagingOptions['custom']> => {
  const cursorKey = preset.cursorKey ?? 'cursor';
  const limitKey = preset.limitKey ?? 'limit';
  const readList =
    preset.extract?.list ?? ((response: any) => response?.data ?? []);
  const readNext =
    preset.extract?.nextCursor ??
    ((response: any) => response?.nextCursor ?? null);
  const readPrev =
    preset.extract?.prevCursor ??
    ((response: any) => response?.prevCursor ?? null);

  return {
    extract: {
      paging: (context, variables) => ({
        pageSize: variables?.[limitKey] ?? context.pageSize,
      }),
      pagination: (_context, options) => {
        const list = readList(options.data);
        return {
          list,
          total: list.length,
          page: {
            next: readNext(options.data),
            previous: readPrev(options.data),
            // cursor pagination doesn't support jump-to-page
            canPaginateToPage: false,
          },
        };
      },
    },
    compose: {
      variables: (context, variables) => ({
        ...variables,
        [limitKey]: context.pageSize,
      }),
      sorting: (sortContext, variables) => {
        if ('reset' in sortContext) {
          const { sort: _omit, sortBy: _omitBy, ...rest } = variables ?? {};
          return rest;
        }
        return {
          ...(variables ?? {}),
          sort: sortContext.direction,
          sortBy: sortContext.field,
        };
      },
      pagination: (context) => ({
        [cursorKey]: null,
        [limitKey]: context.pageSize,
      }),
    },
  };
};
