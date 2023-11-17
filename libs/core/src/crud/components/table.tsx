import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import {
  CrudComponentActionHookProps,
  CrudComponentOptions,
} from '../../@types/crud/components/component';
import {
  CrudComponentTableHookProps,
  CrudComponentTableNodeProps,
} from '../../@types/crud/components/table';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useTableComponentHook = <TSchema extends CrudSchemataTypes = any>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController,
  actionsHook: CrudComponentActionHookProps<TSchema>
): CrudComponentTableHookProps<TSchema> => {
  const {
    pagination,
    rowSelection,
    detail,
    mutation,
    nodes,
    paging,
    pagingProps,
  } = payload;

  // =============== VARIABLES
  const list = pagingProps?.data?.list ?? [];
  const loading = pagingProps?.loading ?? false;

  // =============== PROPS
  const tableProps: CrudComponentTableNodeProps<TSchema> = {
    accessibility,
    context: {
      mutation,
      detail,
      controllers,
      paging,
      pagingProps,
    },
    // standard table props
    loading,
    data: list,
    pagination,
    rowSelection: rowSelection,
    // synthesis
    ...actionsHook,
  };

  // =============== RETURN
  return {
    tableProps,
    renderTable: () => {
      if (!nodes?.table) return null;
      return nodes.table(tableProps);
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useTableComponentHook;
