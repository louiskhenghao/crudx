/**
 * createRestTanstackAdapter
 *
 * Sugar over the per-slot factories (`restList`, `restGet`,
 * `restMutation`). Returns an adapter object whose `.schema()` method
 * accepts one config block per CRUD slot and produces a fully-typed
 * `CrudSchemata` ready to drop into `<CrudPanelView />` or `new CRUD()`.
 *
 * The raw factories stay exported so power users can keep building
 * partial schemas, mix transports per resource, or skip the adapter
 * instance entirely.
 */

import type {
  CrudSchemata,
  CrudSchemataTypes,
  TransportBaseMutationOptions,
  TransportLazyQueryHookOptions,
  TransportOperationVariables,
  TransportQueryHookOptions,
} from '@crudx/core';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

import {
  restCursorPagination,
  restGet,
  restList,
  restMutation,
  RestMutationAdapterOptions,
  RestQueryAdapterOptions,
  restOffsetPagination,
} from './index';

type AnyVars = TransportOperationVariables;

export interface RestTanstackAdapterConfig {
  /** Defaults merged into every list/get hook's `queryOptions`. */
  defaultQueryOptions?: Partial<UseQueryOptions<any, unknown, any>>;
  /** Defaults merged into every mutation hook's `mutationOptions`. */
  defaultMutationOptions?: Partial<UseMutationOptions<any, unknown, any>>;
}

/**
 * --------------------------
 * SLOT INPUTS
 * --------------------------
 *
 * Each slot accepts the same `resource`/`fetch`/`request` shape as the
 * raw factories, plus the `key` + `options` fields that live on
 * `CrudSchemata` slots.
 */
export interface RestListSlotInput<
  TData = any,
  TVariables extends AnyVars = AnyVars
> extends RestQueryAdapterOptions<TData, TVariables> {
  key: string;
  options?: TransportQueryHookOptions<TData, TVariables>;
}

export interface RestGetSlotInput<
  TData = any,
  TVariables extends AnyVars = AnyVars
> extends RestQueryAdapterOptions<TData, TVariables> {
  key: string;
  options?: TransportLazyQueryHookOptions<TData, TVariables>;
}

export interface RestMutationSlotInput<
  TData = any,
  TVariables extends AnyVars = AnyVars
> extends RestMutationAdapterOptions<TData, TVariables> {
  key: string;
  options?: TransportBaseMutationOptions<TData, TVariables>;
}

export interface RestSchemaInput<TSchema extends CrudSchemataTypes = any> {
  list?: RestListSlotInput<TSchema['list'][0], TSchema['list'][1]>;
  get?: RestGetSlotInput<TSchema['get'][0], TSchema['get'][1]>;
  create?: RestMutationSlotInput<TSchema['create'][0], TSchema['create'][1]>;
  update?: RestMutationSlotInput<TSchema['update'][0], TSchema['update'][1]>;
  delete?: RestMutationSlotInput<TSchema['delete'][0], TSchema['delete'][1]>;
  exports?: RestMutationSlotInput<TSchema['exports'][0], TSchema['exports'][1]>;
}

export interface RestTanstackAdapter {
  /**
   * Builds a complete `CrudSchemata` from one config block per slot.
   * Each slot is wired through the matching raw factory under the hood.
   */
  schema<TSchema extends CrudSchemataTypes>(
    input: RestSchemaInput<TSchema>
  ): CrudSchemata<TSchema>;
  /** Re-exposed offset pagination preset. */
  offsetPagination: typeof restOffsetPagination;
  /** Re-exposed cursor pagination preset. */
  cursorPagination: typeof restCursorPagination;
}

export const createRestTanstackAdapter = (
  config: RestTanstackAdapterConfig = {}
): RestTanstackAdapter => {
  const mergeQueryOptions = (
    slotOptions: RestQueryAdapterOptions<any, any>['queryOptions']
  ) =>
    config.defaultQueryOptions || slotOptions
      ? { ...(config.defaultQueryOptions ?? {}), ...(slotOptions ?? {}) }
      : undefined;

  const mergeMutationOptions = (
    slotOptions: RestMutationAdapterOptions<any, any>['mutationOptions']
  ) =>
    config.defaultMutationOptions || slotOptions
      ? { ...(config.defaultMutationOptions ?? {}), ...(slotOptions ?? {}) }
      : undefined;

  return {
    schema(input) {
      const out: CrudSchemata<any> = {};

      if (input.list) {
        const { key, options, queryOptions, ...rest } = input.list;
        out.list = {
          key,
          query: restList({
            ...rest,
            queryOptions: mergeQueryOptions(queryOptions),
          }),
          options,
        };
      }

      if (input.get) {
        const { key, options, queryOptions, ...rest } = input.get;
        out.get = {
          key,
          query: restGet({
            ...rest,
            queryOptions: mergeQueryOptions(queryOptions),
          }),
          options,
        };
      }

      if (input.create) {
        const { key, options, mutationOptions, ...rest } = input.create;
        out.create = {
          key,
          query: restMutation({
            ...rest,
            mutationOptions: mergeMutationOptions(mutationOptions),
          }),
          options,
        };
      }

      if (input.update) {
        const { key, options, mutationOptions, ...rest } = input.update;
        out.update = {
          key,
          query: restMutation({
            ...rest,
            mutationOptions: mergeMutationOptions(mutationOptions),
          }),
          options,
        };
      }

      if (input.delete) {
        const { key, options, mutationOptions, ...rest } = input.delete;
        out.delete = {
          key,
          query: restMutation({
            ...rest,
            mutationOptions: mergeMutationOptions(mutationOptions),
          }),
          options,
        };
      }

      if (input.exports) {
        const { key, options, mutationOptions, ...rest } = input.exports;
        out.exports = {
          key,
          query: restMutation({
            ...rest,
            mutationOptions: mergeMutationOptions(mutationOptions),
          }),
          options,
        };
      }

      return out;
    },
    offsetPagination: restOffsetPagination,
    cursorPagination: restCursorPagination,
  };
};
