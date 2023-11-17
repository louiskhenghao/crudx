import { ReactNode } from 'react';

import { CrudSchemataTypes } from '../schema';

import { CrudComponentCommonProps } from './common';

/**
 * Crud component page-header node props
 */
export type CrudComponentPageHeaderNodeProps<
  TSchema extends CrudSchemataTypes
> = CrudComponentCommonProps<TSchema>;

/**
 * Crud component page-header hooks props
 */
export type CrudComponentPageHeaderHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  pageHeaderProps: CrudComponentPageHeaderNodeProps<TSchema>;
  renderPageHeader?: () => ReactNode;
};
