import { ReactNode } from 'react';

import { CrudGraphApiGetType } from '../api';
import { CrudSchemataTypes } from '../schema';

import { CrudComponentCommonProps } from './common';

/**
 * Crud component detail node props
 */
export type CrudComponentDetailNodeProps<TSchema extends CrudSchemataTypes> =
  CrudComponentCommonProps<TSchema> & {
    data?: CrudGraphApiGetType<TSchema>;
    loading: boolean;
    visible: boolean;
    onShow: () => void;
    onHide: () => void;
  };

/**
 * Crud component detail hooks props
 */
export type CrudComponentDetailsHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  detailsProps: CrudComponentDetailNodeProps<TSchema>;
  renderDetails?: () => ReactNode;
};
