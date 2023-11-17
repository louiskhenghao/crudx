import { ReactNode } from 'react';

import { CrudSchemataTypes } from '../schema';

import { CrudComponentCommonProps } from './common';

/**
 * Crud component filter modal node props
 */
export type CrudComponentFilterModalNodeProps<
  TSchema extends CrudSchemataTypes
> = CrudComponentCommonProps<TSchema> & {
  visible: boolean;
  onShow: () => void;
  onHide: () => void;
};

/**
 * Crud component filter modal hooks props
 */
export type CrudComponentFilterModalHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  filterModalProps: CrudComponentFilterModalNodeProps<TSchema>;
  renderFilterModal?: () => ReactNode;
};
