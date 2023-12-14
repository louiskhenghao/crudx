import { UseOperationVariables } from '../@types/apollo';
import { CrudProps } from '../@types/crud';
import { CrudCommonActions } from '../@types/crud/action';
import { CrudComponents } from '../@types/crud/components/component';
import { CrudModalFormOptions } from '../@types/crud/components/modal';
import { CrudDetailProps } from '../@types/crud/detail';
import { CrudMutationResourceEvents } from '../@types/crud/mutation';
import { CrudPagingOptions } from '../@types/crud/paging';
import {
  CrudSchemata,
  CrudSchemataResult,
  CrudSchemataTypes,
} from '../@types/crud/schema';
import { usePaginationHook, useRowSelectionHook } from '../hooks';

import { useGetQuery, useListQuery } from './hooks/query';
import CrudMutationResource from './mutation/resource';
import { CrudPagingResource } from './paging/resource';
import { CrudCallbackComposer } from './callback';
import { useCrudComponentHook, useCrudDetailHook } from './hooks';

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * CRUD
 * -----------------------------
 * CRUD class consolidated necessary props, utility methods to interact with UI by providing listed options
 */
export class CRUD<TSchema extends CrudSchemataTypes = any> {
  // the name of the module for crud, eg: admin, user
  private name: string;

  // the schema of API
  private schema: CrudSchemata<TSchema> = {};

  // the nodes for rendering UI
  private nodes: CrudComponents<TSchema> = {};

  // the paging resource
  private paging: CrudPagingResource<TSchema>;

  // the mutation resource
  private mutation: CrudMutationResource<TSchema>;

  // the callback composer for event listeners
  private callback: CrudCallbackComposer<TSchema>;

  // the details props
  private detail?: CrudDetailProps<TSchema>;

  // row item action
  private itemActions: CrudCommonActions<TSchema>;

  // modal form for mutation
  private modalForms: CrudModalFormOptions<TSchema>;

  // row selection for table
  private enableRowSelection = true;

  /**
   * constructor of CRUD
   */
  constructor(
    name: string,
    schema: CrudSchemata<TSchema>,
    options?: {
      paging?: CrudPagingOptions<TSchema>;
      nodes?: CrudComponents<TSchema>;
      events?: CrudMutationResourceEvents<TSchema>;
      itemActions?: CrudCommonActions<TSchema>;
      modalForms?: CrudModalFormOptions<TSchema>;
      enableNotification?: boolean;
      enableRowSelection?: boolean;
    }
  ) {
    const nodes = options?.nodes ?? {};
    const events = options?.events ?? {};
    const enableNotification = options?.enableNotification ?? true;
    const enableRowSelection = options?.enableRowSelection ?? true;

    this.name = name;
    this.schema = schema;
    this.nodes = nodes;
    this.itemActions = options?.itemActions ?? {};
    this.modalForms = options?.modalForms ?? {};
    this.enableRowSelection = enableRowSelection;

    // --- initialize crud callback composer
    this.callback = new CrudCallbackComposer(name, {
      nodes,
      enableNotification,
    });

    // --- initialize crud paging resource
    this.paging = new CrudPagingResource(name, {
      resultKey: this.schema.list?.key ?? '',
      ...options?.paging,
    });

    // --- initialize crud mutation resource
    this.mutation = new CrudMutationResource(name, {
      schema,
      nodes,
      events,
      callback: this.callback,
    });
  }

  /**
   * function to use crud
   */
  public use = (
    inVariables?: UseOperationVariables<TSchema['list'][1]>
  ): CrudProps<TSchema> => {
    // initialize hooks
    const paginationHook = usePaginationHook({
      defaultCurrent: this.paging.pageNumber,
      defaultPageSize: this.paging.pageSize,
    });
    const rowSelectionHook = useRowSelectionHook(this.enableRowSelection);
    // use get query
    const { result: getResult, query: getQuery } = useGetQuery(
      this.schema?.get,
      {}
    );
    // use listing query
    const { result: listResult } = useListQuery(this.schema?.list, {
      variables: this.paging.setInitialValue(inVariables),
    });

    // compose paging props
    const pagingProps = this.paging.compose(listResult, paginationHook);

    // prepare shared props
    const sharedProps = {
      name: this.name,
      rowSelection: rowSelectionHook,
      // control paging props
      pagingProps,
      // control pagination API request & state handling
      pagination: {
        current: paginationHook.current,
        defaultCurrent: paginationHook.defaultCurrent,
        defaultPageSize: paginationHook.defaultPageSize,
        reset: () => {
          paginationHook.reset();
          pagingProps.clearAndRefresh();
        },
        next: () => {
          pagingProps.onPaginateNext();
        },
        previous: () => {
          pagingProps.onPaginatePrevious();
        },
        paginateTo: (page: number) => {
          pagingProps.onPaginateTo(page);
        },
      },
    };

    // --- initialize props
    this.detail = useCrudDetailHook<TSchema>({
      query: getQuery,
      schema: this.schema,
      ...sharedProps,
    });

    // --- compose mutation resource
    this.mutation.compose({
      detail: this.detail,
      ...sharedProps,
    });

    // --- result
    const result: CrudSchemataResult<TSchema> = {
      get: getResult,
      list: listResult,
      create: this.mutation.create?.[1],
      update: this.mutation.update?.[1],
      delete: this.mutation.delete?.[1],
      exports: this.mutation.exports?.[1],
    };
    // --- component props
    const components = useCrudComponentHook<TSchema>({
      result,
      schema: this.schema,
      detail: this.detail,
      mutation: this.mutation,
      nodes: this.nodes,
      itemActions: this.itemActions,
      modalForms: this.modalForms,
      ...sharedProps,
    });

    // --- crud props
    return {
      result,
      detail: this.detail,
      mutation: this.mutation,
      components,
      ...sharedProps,
    };
  };
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CRUD;
