import { CrudPagingOptions } from '../../@types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const fallbackCustomPagingOptions: NonNullable<
  CrudPagingOptions['custom']
> = {
  extract: {
    paging: () => {
      console.warn('This function is not implemented!');
      return { pageSize: 25 };
    },
    pagination: () => {
      console.warn('This function is not implemented!');
      return {
        list: [],
        total: 0,
        page: {
          next: null,
          previous: null,
          canPaginateToPage: false,
        },
      };
    },
  },
  compose: {
    variables: () => {
      console.warn('This function is not implemented!');
      return {};
    },
    sorting: () => {
      console.warn('This function is not implemented!');
      return {};
    },
    pagination: () => {
      console.warn('This function is not implemented!');
      return {};
    },
  },
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default fallbackCustomPagingOptions;
