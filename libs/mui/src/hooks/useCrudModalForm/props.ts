import { ReactNode } from 'react';
import {
  CrudCommonDialogContext,
  CrudCommonDialogOptions,
  CrudGraphApiCreateType,
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiUpdateType,
  CrudSchemataTypes,
} from '@crudx/core';

import { DialogProps } from '../../components/Dialog';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudModalFormProps<
  T extends CrudSchemataTypes = any,
  D = any
> = Omit<CrudCommonDialogOptions<T>, 'node' | 'props'> & {
  props?: DialogProps;
  render: (options: CrudCommonDialogContext<T, D>) => ReactNode;
};

// the modal configuration for resources
export type CrudResourceModalFormProps<T extends CrudSchemataTypes = any> = {
  create?: CrudModalFormProps<T, CrudGraphApiCreateType<T>>;
  update?: CrudModalFormProps<T, CrudGraphApiUpdateType<T>>;
  delete?: CrudModalFormProps<T, CrudGraphApiDeleteType<T>>;
  exports?: CrudModalFormProps<T, CrudGraphApiExportType<T>>;
};

export type UseCrudModalFormProps<TSchema extends CrudSchemataTypes = any> =
  CrudResourceModalFormProps<TSchema>;
