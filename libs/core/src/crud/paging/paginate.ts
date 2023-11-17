import isNil from 'lodash/isNil';
import toNumber from 'lodash/toNumber';

import { CrudPaginationProps } from '../../@types/crud/pagination';
import {
  CrudPagingExtractInfo,
  CrudPagingPaginateProps,
} from '../../@types/crud/paging';
import { CrudSchemataTypes } from '../../@types/crud/schema';

import { computeOffset } from './helpers';
import CrudPagingResource from './resource';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export class CrudPagingPaginateResource<
  TSchema extends CrudSchemataTypes = any
> {
  private resource: CrudPagingResource<TSchema>;

  constructor(resource: CrudPagingResource<TSchema>) {
    this.resource = resource;
  }

  // =============== USE
  public use = (
    info: CrudPagingExtractInfo,
    pagination: CrudPaginationProps
  ): CrudPagingPaginateProps => {
    const resource = this.resource;
    const custom = resource.custom;
    const compose = custom.compose;
    const pageSize = resource.pageSize;

    return {
      // --- paginate to specific page
      onPaginateTo: (target: number): void => {
        const page = info.data.page;
        if (!page?.canPaginateToPage || resource.isCursor || resource.isNone) {
          console.error("Paging strategy doesn't support page pagination");
          return;
        }
        // offset strategy
        if (resource.isOffset) {
          const offset = computeOffset(target, pageSize);
          resource.fetch({ paging: { offset } });
        }
        // custom strategy
        if (resource.isCustom && compose.pagination) {
          const variables = compose.pagination({
            pageSize,
            pageNumber: target,
          });
          resource.fetch(variables);
        }
        pagination.paginateTo(target);
      },
      // --- paginate to next page
      onPaginateNext: (): void => {
        const page = info.data.page;
        const target = page?.next;
        if (isNil(target)) return;
        // cursor strategy
        if (resource.isCursor) {
          resource.fetch({
            paging: {
              before: null,
              after: target,
              first: info.paging.pageSize,
              last: null,
            },
          });
          return;
        }
        const intendedTarget = toNumber(target);
        // offset strategy
        if (resource.isOffset) {
          resource.fetch({
            paging: {
              offset: computeOffset(intendedTarget, pageSize),
            },
          });
        }
        // custom strategy
        if (resource.isCustom && compose.pagination) {
          const variables = compose.pagination({
            pageSize,
            pageNumber: intendedTarget,
          });
          resource.fetch(variables);
        }
        pagination.paginateTo(intendedTarget);
      },
      // --- paginate to previous page
      onPaginatePrevious: (): void => {
        const page = info.data.page;
        const target = page?.previous;
        if (isNil(target)) return;
        // cursor strategy
        if (resource.isCursor) {
          resource.fetch({
            paging: {
              before: target,
              after: null,
              first: null,
              last: info.paging.pageSize,
            },
          });
          return;
        }
        const intendedTarget = toNumber(target);
        // offset strategy
        if (resource.isOffset) {
          resource.fetch({
            paging: {
              offset: computeOffset(intendedTarget, pageSize),
            },
          });
        }
        // custom strategy
        if (resource.isCustom && compose.pagination) {
          const variables = compose.pagination({
            pageSize,
            pageNumber: intendedTarget,
          });
          resource.fetch(variables);
        }
        pagination.paginateTo(intendedTarget);
      },
    };
  };
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudPagingPaginateResource;
