import { ReactNode } from 'react';

import { CrudSchemataTypes } from '../schema';

import { CrudComponentCommonProps } from './common';

/**
 * Crud component filter node props
 */
export type CrudComponentFilterNodeProps<TSchema extends CrudSchemataTypes> =
  CrudComponentCommonProps<TSchema>;

/**
 * Crud component filter hooks props
 */
export type CrudComponentFilterHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  filterProps: CrudComponentFilterNodeProps<TSchema>;
  renderFilter?: () => ReactNode;
};
