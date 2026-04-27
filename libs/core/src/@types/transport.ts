/**
 * ===========================
 * TRANSPORT ADAPTER CONTRACT
 * ===========================
 *
 * The transport layer is the boundary between `@crudx/core` and any
 * data-fetching client (Apollo, urql, TanStack Query, SWR, fetch, …).
 *
 * Adapters expose hooks that match these shapes; core consumes them
 * generically so swapping transports is a per-schema concern, not a
 * core rewrite.
 *
 * Shapes are intentionally permissive supersets — Apollo's
 * `QueryResult` / `MutationTuple` already satisfy them, and a thin
 * REST adapter on top of TanStack Query / SWR can map onto them too.
 */

/**
 * --------------------------
 * VARIABLES & ERRORS
 * --------------------------
 */
export type TransportOperationVariables = Record<string, any>;

export interface TransportError {
  message: string;
  name?: string;
  cause?: unknown;
  // adapter-specific extensions: graphQLErrors, networkError, status, etc.
  [key: string]: any;
}

/**
 * --------------------------
 * RESULTS
 * --------------------------
 */
export interface TransportFetchResult<TData = any> {
  data?: TData | null;
  errors?: ReadonlyArray<TransportError>;
  [key: string]: any;
}

export interface TransportQueryResult<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> {
  data?: TData;
  loading: boolean;
  error?: TransportError | any;
  variables?: TVariables;
  called?: boolean;
  refetch?: (
    variables?: Partial<TVariables>
  ) => Promise<TransportFetchResult<TData>>;
  // optional advanced fields a transport may surface
  networkStatus?: number;
  previousData?: TData;
  [key: string]: any;
}

export interface TransportMutationResult<TData = any> {
  data?: TData | null;
  loading: boolean;
  error?: TransportError | any;
  called: boolean;
  reset?: () => void;
  [key: string]: any;
}

/**
 * --------------------------
 * HOOK OPTIONS
 * --------------------------
 */
export interface TransportQueryHookOptions<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> {
  variables?: TVariables;
  skip?: boolean;
  /**
   * NOTE: callback parameters are loosely typed so adapter-specific
   * signatures (Apollo passes `clientOptions`, TanStack passes context,
   * etc.) remain assignable to a single transport contract.
   */
  onCompleted?: (data: TData, ...args: any[]) => void;
  onError?: (error: any, ...args: any[]) => void;
  [key: string]: any;
}

export type TransportLazyQueryHookOptions<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = TransportQueryHookOptions<TData, TVariables>;

export interface TransportMutationHookOptions<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> extends TransportQueryHookOptions<TData, TVariables> {
  refetchQueries?: any;
}

export type TransportBaseQueryOptions<
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = {
  variables?: TVariables;
  [key: string]: any;
};

export type TransportBaseMutationOptions<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = TransportMutationHookOptions<TData, TVariables>;

/**
 * --------------------------
 * TUPLES
 * --------------------------
 */
export type TransportLazyQueryResult<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = [
  (
    options?: TransportLazyQueryHookOptions<TData, TVariables>
  ) => Promise<TransportFetchResult<TData>> | void,
  TransportQueryResult<TData, TVariables>
];

export type TransportMutationTuple<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = [
  (
    options?: TransportMutationHookOptions<TData, TVariables>
  ) => Promise<TransportFetchResult<TData>>,
  TransportMutationResult<TData>
];

/**
 * --------------------------
 * HOOK CONTRACTS
 * --------------------------
 *
 * Adapter authors implement these signatures. Apollo's generated
 * `useXyzQuery` / `useXyzMutation` hooks already match, so they can
 * be passed directly to a `CrudSchemata` slot.
 */
export type TransportQueryHook<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = (
  options?: TransportQueryHookOptions<TData, TVariables>
) => TransportQueryResult<TData, TVariables>;

export type TransportLazyQueryHook<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = (
  options?: TransportLazyQueryHookOptions<TData, TVariables>
) => TransportLazyQueryResult<TData, TVariables>;

export type TransportMutationHook<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = (
  options?: TransportMutationHookOptions<TData, TVariables>
) => TransportMutationTuple<TData, TVariables>;
