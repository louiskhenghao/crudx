import { UseRowSelectionProps } from '../../hooks/useRowSelectionHook';

import { CrudComponentProps } from './components/component';
import { CrudDetailProps } from './detail';
import { CrudMutationProps } from './mutation';
import { CrudPaginationProps } from './pagination';
import { CrudPagingProps } from './paging';
import { CrudSchemataResult, CrudSchemataTypes } from './schema';

// ==== EXPORTS
export * from './action';
export * from './components';
export * from './api';
export * from './detail';
export * from './pagination';
export * from './paging';
export * from './schema';
export * from './mutation';

// ========== CRUD
export type CrudProps<TSchema extends CrudSchemataTypes = any> = {
  pagination: CrudPaginationProps;
  rowSelection: UseRowSelectionProps;

  // the result from crud schema
  result: CrudSchemataResult<TSchema>;
  // the detail resource
  detail: CrudDetailProps<TSchema>;
  // list paging resources
  pagingProps: CrudPagingProps<TSchema>;
  // mutation resources
  mutation: CrudMutationProps<TSchema>;
  // components props
  components: CrudComponentProps<TSchema>;
};
