import { QueryResult } from '@apollo/client';
import includes from 'lodash/includes';
import merge from 'lodash/merge';
import reduce from 'lodash/reduce';

import { CrudSchemataTypes } from '../../@types';
import {
  CrudPagingData,
  CrudPagingPageInfo,
  CrudPagingQueryVariableTypes,
} from '../../@types/crud/paging';

import CrudPagingResource from './resource';

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * CRUD Paging Resource Result
 * -----------------------------
 * Meta Extraction for list query result
 */
export class CrudPagingResultResource<TSchema extends CrudSchemataTypes = any> {
  private resource: CrudPagingResource<TSchema>;

  constructor(resource: CrudPagingResource<TSchema>) {
    this.resource = resource;
  }

  /**
   * HELPERS - Extract Paging Data
   */
  extract = (
    results: QueryResult<TSchema['list'][0], TSchema['list'][1]>['data']
  ): CrudPagingData<TSchema> => {
    // variables
    const resource = this.resource;
    const dataKey = resource.resultKey;
    const pageSize = resource.pageSize ?? 1;
    const pageNumber = resource.pageNumber ?? 1;
    const custom = resource.custom;
    const data = results?.[dataKey];
    const intentNext = pageNumber + 1;
    const intentPrev = pageNumber - 1 < 0 ? 0 : pageNumber - 1;
    const totalCountKey = resource.keys.totalCount ?? 'totalCount';

    // assignable variables
    let list = [];
    let next: number | null = null;
    let previous: number | null = null;
    let canPaginateToPage = false; // used to enable paginate to page number
    let total = data?.[totalCountKey ?? 'total'] ?? 0;

    // --- cursor strategy
    if (resource.isCursor) {
      const pageInfo = data?.pageInfo;
      list = (data?.edges || []).map((e) => e?.node);
      total = data?.[totalCountKey] ?? list.length ?? 0;
      next = pageInfo?.hasNextPage ? pageInfo?.endCursor : null;
      previous = pageInfo?.hasPreviousPage ? pageInfo?.startCursor : null;
    }
    // --- offset strategy
    if (resource.isOffset) {
      const pageInfo = data?.pageInfo;
      list = data?.nodes || [];
      total = data?.[totalCountKey] ?? list.length ?? 0;
      next = pageInfo?.hasNextPage ? intentNext : null;
      previous = pageInfo?.hasPreviousPage ? intentPrev : null;
      canPaginateToPage = true;
    }

    // --- none strategy
    if (resource.isNone) {
      list = data ?? [];
      total = list.length;
      next = null;
      previous = null;
    }

    // --- custom strategy
    if (resource.isCustom && custom?.extract?.pagination) {
      return custom.extract.pagination(
        { pageNumber, pageSize },
        {
          data: results,
          intentNext,
          intentPrev,
        }
      );
    }

    // return
    return {
      total,
      list,
      page: {
        next,
        previous,
        canPaginateToPage,
      },
    };
  };

  /**
   * HELPERS - Construct variables for paging query
   */
  variables = (input: TSchema['list'][1]): CrudPagingQueryVariableTypes => {
    const resource = this.resource;

    // helpers
    const outcome = reduce(
      input,
      (outcome, value, valueKey) => {
        // TODO: is custom strategy
        if (resource.isCustom) {
          merge(outcome, { [`${valueKey}`]: value });
        } else if (includes(resource.variableKeys, valueKey)) {
          merge(outcome, { [`${valueKey}`]: value });
        } else {
          merge(outcome, { others: value });
        }
        return outcome;
      },
      {}
    );

    // return
    return outcome;
  };

  /**
   * HELPERS - Construct variables for paging query
   */
  paging = (variables: TSchema['list'][1]): CrudPagingPageInfo => {
    // variables
    const resource = this.resource;
    const custom = resource.custom;
    const pageSize = resource.pageSize ?? 25;
    const pageNumber = resource.pageNumber ?? 1;

    // --- cursor strategy
    if (resource.isCursor) {
      return {
        pageSize:
          variables?.paging?.first || variables?.paging?.last || pageSize,
      };
    }
    // --- offset strategy
    if (resource.isOffset) {
      const currentLimit = variables?.paging?.limit || pageSize;
      // const totalItems = variables?.paging?.offset || currentLimit;
      return {
        pageSize: currentLimit,
        // pageNumber: Math.ceil(totalItems / currentLimit)
      };
    }
    // --- custom strategy
    if (resource.isCustom) {
      if (!custom?.extract?.paging) {
        return { pageSize };
      }
      return custom.extract.paging({ pageNumber, pageSize }, variables);
    }

    return {
      pageSize: variables?.option?.size || pageSize,
      // pageNumber: variables?.option?.page || 1
    };
  };
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudPagingResultResource;
