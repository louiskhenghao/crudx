import { UseRowSelectionProps } from '@crudx/common';

import { TransportLazyQueryHookOptions } from '../transport';

import { CrudPaginationProps } from './pagination';
import { CrudPagingProps } from './paging';
import { CrudSchemata, CrudSchemataTypes } from './schema';

// crud details option
export type CrudDetailOptions<TSchema extends CrudSchemataTypes = any> = {
  query: (
    options?: TransportLazyQueryHookOptions<TSchema['get'][0], TSchema['get'][1]>
  ) => void;
  schema: CrudSchemata<TSchema>;
  pagination: CrudPaginationProps;
  rowSelection: UseRowSelectionProps;
  pagingProps: CrudPagingProps<TSchema>;
};

// crud details props
export type CrudDetailProps<TSchema extends CrudSchemataTypes = any> = Pick<
  CrudDetailOptions<TSchema>,
  'query'
>;
