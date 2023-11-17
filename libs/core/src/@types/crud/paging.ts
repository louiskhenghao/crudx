import { ApolloQueryResult, QueryResult } from '@apollo/client';

import { UseOperationVariables } from '../apollo';

import { CrudGraphApiListType } from './api';
import { CrudSchemataTypes } from './schema';

export type CrudPagingStrategy = 'CURSOR' | 'OFFSET' | 'NONE' | 'CUSTOM';

export type CrudPagingKeyType = 'sorting' | 'filter' | 'totalCount' | 'paging';

export type CrudPagingNavigateValue = number | string | null;

export type CrudPagingKey = {
  totalCount?: string | null;
  sorting?: string | null;
  filter?: string | null;
  paging?: string | null;
};

export type CrudPagingOptions<TSchema extends CrudSchemataTypes = any> = {
  strategy?: CrudPagingStrategy;
  pageSize?: number;
  pageNumber?: number;
  keys?: CrudPagingKey;
  custom?: {
    extract: {
      // extract paging information from API response variables
      paging: (
        context: { pageNumber: number; pageSize: number },
        variables: UseOperationVariables<TSchema['list'][1]>
      ) => CrudPagingPageInfo;
      // extract pagination data from API results, (eg: whether can paginate)
      pagination: (
        context: { pageNumber: number; pageSize: number },
        options: {
          data?: QueryResult<TSchema['list'][0], TSchema['list'][1]>['data'];
          intentNext: number;
          intentPrev: number;
        }
      ) => CrudPagingData<CrudGraphApiListType<TSchema>>;
    };
    compose: {
      variables: (
        context: { pageNumber: number; pageSize: number },
        variables: UseOperationVariables<TSchema['list'][1]>
      ) => UseOperationVariables<TSchema['list'][1]>;
      sorting: (
        context:
          | { reset: true }
          | { direction?: 'ASC' | 'DESC'; field?: string },
        variables: UseOperationVariables<TSchema['list'][1]>
      ) => UseOperationVariables<TSchema['list'][1]>;
      pagination: (context: {
        pageNumber: number;
        pageSize: number;
      }) => UseOperationVariables<TSchema['list'][1]>;
    };
  };
};

export type CrudPagingPageInfo = { pageSize: number };

export type CrudPagingData<TData = any> = {
  list: TData[];
  total?: number;
  page: {
    next: CrudPagingNavigateValue;
    previous: CrudPagingNavigateValue;
    canPaginateToPage: boolean;
  };
};

export type CrudPagingExtractInfo<TData = any> = {
  data: CrudPagingData<TData>;
  paging: CrudPagingPageInfo;
  variables: CrudPagingQueryVariableTypes;
};

export type CrudPagingPaginateProps = {
  onPaginateNext: () => void;
  onPaginatePrevious: () => void;
  onPaginateTo: (target: number) => void;
};

export type CrudPagingProps<TSchema extends CrudSchemataTypes> =
  CrudPagingPaginateProps &
    CrudPagingExtractInfo<CrudGraphApiListType<TSchema>> & {
      loading: boolean;
      fetch: (
        variables?: UseOperationVariables<TSchema['list'][1]>
      ) => Promise<ApolloQueryResult<TSchema['list'][0]>>;
      nativeFetch: (
        variables?: UseOperationVariables<TSchema['list'][1]>
      ) => Promise<ApolloQueryResult<TSchema['list'][0]>>;
      refresh: () => void;
      clearAndRefresh: () => void;
      onUpdatePageSize: (size: number) => void;
      onUpdateSorting: (direction: 'ASC' | 'DESC', field?: string) => void;
      onResetSorting: () => void;
    };

// ======== PAGING OPTIONS FOR DIFFERENT STRATEGY
export type CrudPagingQueryOptionsCursor = {
  before?: string;
  after?: string;
  first?: number;
  last?: number;
};

export type CrudPagingQueryOptionsOffset = {
  limit?: number;
  offset?: number;
};

export type CrudPagingQueryOptionsPage = {
  page?: number;
  size?: number;
  [key: string]: any;
};

export type CrudPagingQueryOptionsCustom = {
  [key: string]: any;
};

// ======== QUERY VARIABLES
export type CrudPagingQueryVariablesPaging =
  | CrudPagingQueryVariablesPagingCursor
  | CrudPagingQueryVariablesPagingOffset;

export type CrudPagingQueryVariablesPagingCursor =
  CrudPagingQueryOptionsCursor & {
    [key: string]: any;
  };

export type CrudPagingQueryVariablesPagingOffset =
  CrudPagingQueryOptionsOffset & {
    [key: string]: any;
  };

export type CrudPagingQueryVariablesOthers = {
  [key: string]: any;
};

export type CrudPagingQueryVariablesFilter = {
  [key: string]: any;
};

export type CrudPagingQueryVariablesSorting = {
  [key: string]: any;
};

export type CrudPagingQueryVariableTypes = {
  sorting?: CrudPagingQueryVariablesSorting;
  filter?: CrudPagingQueryVariablesFilter;
  paging?: CrudPagingQueryVariablesPaging;
  others?: CrudPagingQueryVariablesOthers;
};

export type CrudPagingQueryVariables = {
  [key: string]: any;
};
