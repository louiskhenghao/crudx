import { ReactNode } from 'react';

import { CrudCommonDialogOptions, CrudCommonDialogTuple } from '../action';
import {
  CrudGraphApiCreateType,
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiUpdateType,
} from '../api';
import { CrudSchemataTypes } from '../schema';

// this is for modal form creations
export type CrudModalFormOptions<TSchema extends CrudSchemataTypes = any> = {
  create?: CrudCommonDialogOptions<TSchema, CrudGraphApiCreateType<TSchema>>;
  update?: CrudCommonDialogOptions<TSchema, CrudGraphApiUpdateType<TSchema>>;
  delete?: CrudCommonDialogOptions<TSchema, CrudGraphApiUpdateType<TSchema>>;
  exports?: CrudCommonDialogOptions<TSchema, CrudGraphApiUpdateType<TSchema>>;
  extra?: Record<
    string,
    CrudCommonDialogOptions<TSchema, CrudGraphApiUpdateType<TSchema>>
  >;
};

export type CrudModalFormHookProps<TSchema extends CrudSchemataTypes = any> = {
  create: CrudCommonDialogTuple<CrudGraphApiCreateType<TSchema>>;
  update: CrudCommonDialogTuple<CrudGraphApiUpdateType<TSchema>>;
  delete: CrudCommonDialogTuple<CrudGraphApiUpdateType<TSchema>>;
  exports: CrudCommonDialogTuple<CrudGraphApiUpdateType<TSchema>>;
  extra: Record<string, CrudCommonDialogTuple<CrudGraphApiUpdateType<TSchema>>>;
};

// this is for modal form props
export type CrudComponentModalFormProps<D = any> = {
  onShow: (data?: D) => void;
  onHide: () => void;
  visible: boolean;
};

export type CrudComponentModalsFormProps<
  TSchema extends CrudSchemataTypes = any
> = {
  create: CrudComponentModalFormProps<CrudGraphApiCreateType<TSchema>>;
  update: CrudComponentModalFormProps<CrudGraphApiUpdateType<TSchema>>;
  delete: CrudComponentModalFormProps<CrudGraphApiDeleteType<TSchema>>;
  exports: CrudComponentModalFormProps<CrudGraphApiExportType<TSchema>>;
  extra: Record<
    string,
    CrudComponentModalFormProps<CrudGraphApiExportType<TSchema>>
  >;
};

export type CrudComponentModalFormHookProps<
  TSchema extends CrudSchemataTypes = any
> = {
  modalFormProps: CrudComponentModalsFormProps<TSchema>;
  renderModalForms?: () => ReactNode;
};
