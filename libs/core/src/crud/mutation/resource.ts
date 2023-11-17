import { MutationTuple, OperationVariables } from '@apollo/client';

import { CrudComponents } from '../../@types/crud/components';
import {
  CrudMutateEventCallback,
  CrudMutationComposeOptions,
  CrudMutationProps,
  CrudMutationResourceEvents,
  CrudMutationResourceOptions,
} from '../../@types/crud/mutation';
import { CrudSchemata, CrudSchemataTypes } from '../../@types/crud/schema';
import CrudCallbackComposer from '../callback';

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * CRUD Mutation Resource
 * -----------------------------
 */
export class CrudMutationResource<TSchema extends CrudSchemataTypes = any> {
  // the name of the module for crud, eg: admin, user
  private name: string;

  private schema: CrudSchemata<TSchema> = {};

  private nodes: CrudComponents<TSchema>;

  private composer: CrudCallbackComposer<TSchema>;

  private callbacks: CrudMutationResourceEvents<TSchema>;

  create?: MutationTuple<TSchema['create'][0], TSchema['create'][1]>;
  update?: MutationTuple<TSchema['update'][0], TSchema['update'][1]>;
  delete?: MutationTuple<TSchema['delete'][0], TSchema['delete'][1]>;
  exports?: MutationTuple<TSchema['exports'][0], TSchema['exports'][1]>;

  /**
   * constructor of mutation resource
   */
  constructor(name: string, options: CrudMutationResourceOptions) {
    this.name = name;
    this.schema = options.schema;
    this.nodes = options.nodes;
    this.composer = options.composer;
    this.callbacks = options.callbacks;
  }

  /**
   * compose resource
   */
  compose = (
    options: CrudMutationComposeOptions
  ): CrudMutationProps<TSchema> => {
    // =============== VARIABLES
    const schema = this.schema;
    const callbacks = this.callbacks;
    const clearSelections = options?.rowSelection?.clear;

    // =============== HELPERS
    const createResource = <Q, V = OperationVariables>(
      type: 'create' | 'update' | 'delete' | 'exports',
      inCallbacks: CrudMutateEventCallback<Q, V>[]
    ): MutationTuple<Q, V> | any => {
      const action = schema?.[type];
      if (!action) {
        // if doesn't has action query, first item in tuple will throw error message
        return [
          () => {
            console.warn(
              `Please provide "${type}" schema in order to use this resource`
            );
          },
          {
            called: false,
            client: null,
            loading: false,
          },
        ];
      }

      const actionOptions = action?.options ?? {};
      return action.query({
        ...(actionOptions ?? {}),
        ...this.composer.compose([
          {
            onCompleted: actionOptions?.onCompleted,
            onError: actionOptions?.onError,
          },
          ...inCallbacks,
        ]),
      });
    };

    // =============== INITIALIZE
    // --- CREATE
    this.create = createResource<TSchema['create'][0], TSchema['create'][1]>(
      'create',
      [
        this.composer.notify(['create', 'created', !!schema?.create]),
        ...this.composer.standardize<
          TSchema['create'][0],
          TSchema['create'][1]
        >(callbacks?.create),
      ]
    );

    // --- UPDATE
    this.update = createResource<TSchema['update'][0], TSchema['update'][1]>(
      'update',
      [
        this.composer.notify(['update', 'updated', !!schema?.update]),
        ...this.composer.standardize<
          TSchema['update'][0],
          TSchema['update'][1]
        >(callbacks?.update),
      ]
    );

    // --- EXPORTS
    this.exports = createResource<TSchema['exports'][0], TSchema['exports'][1]>(
      'exports',
      [
        this.composer.notify(['export', 'exported', !!schema?.exports]),
        ...this.composer.standardize<
          TSchema['exports'][0],
          TSchema['exports'][1]
        >(callbacks?.exports),
      ]
    );
    // --- DELETE
    this.delete = createResource<TSchema['delete'][0], TSchema['delete'][1]>(
      'delete',
      [
        this.composer.notify(['delete', 'deleted', !!schema?.delete]),
        ...this.composer.standardize<
          TSchema['delete'][0],
          TSchema['delete'][1]
        >(callbacks?.delete),
        {
          onCompleted: () => {
            clearSelections?.();
          },
        },
      ]
    );

    // =============== RETURN
    return {
      create: this.create,
      update: this.update,
      exports: this.exports,
      delete: this.delete,
    };
  };
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudMutationResource;
