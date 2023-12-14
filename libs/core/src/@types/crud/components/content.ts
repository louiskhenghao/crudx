import { ReactNode } from 'react';

import { UseRowSelectionProps } from '../../../hooks/useRowSelectionHook';
import { CrudGraphApiListType } from '../api';
import { CrudPaginationProps } from '../pagination';
import { CrudSchemataTypes } from '../schema';

import { CrudComponentCommonProps } from './common';
import { CrudComponentActionHookProps } from './component';

/**
 * Crud component content node props
 */
export type CrudComponentContentNodeProps<TSchema extends CrudSchemataTypes> =
  CrudComponentCommonProps<TSchema> &
    CrudComponentActionHookProps<TSchema> & {
      // the pagination hook to handle api & ui state
      pagination: CrudPaginationProps;
      // whether is retrieving data
      loading: boolean;
      // the data records
      data: CrudGraphApiListType<TSchema>[];
      // the row selection hook to handle content row selection
      rowSelection: UseRowSelectionProps;
    };

/**
 * Crud component content hooks props
 */
export type CrudComponentContentHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  contentProps: CrudComponentContentNodeProps<TSchema>;
  renderContent?: () => ReactNode;
};
