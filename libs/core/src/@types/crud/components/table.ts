import { ReactNode } from 'react';
import { UseRowSelectionProps } from '@crudx/common';

import { CrudGraphApiListType } from '../api';
import { CrudPaginationProps } from '../pagination';
import { CrudSchemataTypes } from '../schema';

import { CrudComponentCommonProps } from './common';
import { CrudComponentActionHookProps } from './component';

/**
 * Crud component table node props
 */
export type CrudComponentTableNodeProps<TSchema extends CrudSchemataTypes> =
  CrudComponentCommonProps<TSchema> &
    CrudComponentActionHookProps<TSchema> & {
      // the pagination hook to handle api & ui state
      pagination: CrudPaginationProps;
      // whether is retrieving data
      loading: boolean;
      // the data records
      data: CrudGraphApiListType<TSchema>[];
      // the row selection hook to handle table row selection
      rowSelection: UseRowSelectionProps;
    };

/**
 * Crud component table hooks props
 */
export type CrudComponentTableHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  tableProps: CrudComponentTableNodeProps<TSchema>;
  renderTable?: () => ReactNode;
};
