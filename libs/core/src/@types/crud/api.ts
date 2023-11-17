import { IfTypeUnsure } from '../utility';

import { CrudSchemataTypes } from './schema';

/**
 * ===========================
 * GRAPH API TYPES
 * ===========================
 */
export type CrudGraphApiGetType<TSchema extends CrudSchemataTypes = any> =
  TSchema['get'][2];

export type CrudGraphApiListType<TSchema extends CrudSchemataTypes = any> =
  IfTypeUnsure<
    TSchema['list'][2],
    IfTypeUnsure<TSchema['get'][2], TSchema['get'][2], any>,
    TSchema['list'][2]
  >;

export type CrudGraphApiCreateType<TSchema extends CrudSchemataTypes = any> =
  IfTypeUnsure<
    TSchema['create'][2],
    IfTypeUnsure<TSchema['get'][2], TSchema['get'][2], any>,
    TSchema['create'][2]
  >;

export type CrudGraphApiUpdateType<TSchema extends CrudSchemataTypes = any> =
  IfTypeUnsure<
    TSchema['update'][2],
    IfTypeUnsure<TSchema['get'][2], TSchema['get'][2], any>,
    TSchema['update'][2]
  >;

export type CrudGraphApiDeleteType<TSchema extends CrudSchemataTypes = any> =
  IfTypeUnsure<
    TSchema['delete'][2],
    IfTypeUnsure<TSchema['get'][2], TSchema['get'][2], any>,
    TSchema['delete'][2]
  >;

export type CrudGraphApiExportType<TSchema extends CrudSchemataTypes = any> =
  IfTypeUnsure<
    TSchema['exports'][2],
    IfTypeUnsure<TSchema['get'][2], TSchema['get'][2], any>,
    TSchema['exports'][2]
  >;
