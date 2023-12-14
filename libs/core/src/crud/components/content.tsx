import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import {
  CrudComponentActionHookProps,
  CrudComponentOptions,
} from '../../@types/crud/components/component';
import {
  CrudComponentContentHookProps,
  CrudComponentContentNodeProps,
} from '../../@types/crud/components/content';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useContentComponentHook = <
  TSchema extends CrudSchemataTypes = any
>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController,
  actionsHook: CrudComponentActionHookProps<TSchema>
): CrudComponentContentHookProps<TSchema> => {
  const { pagination, rowSelection, detail, mutation, nodes, pagingProps } =
    payload;

  // =============== VARIABLES
  const list = pagingProps?.data?.list ?? [];
  const loading = pagingProps?.loading ?? false;

  // =============== PROPS
  const contentProps: CrudComponentContentNodeProps<TSchema> = {
    accessibility,
    context: {
      mutation,
      detail,
      controllers,
      pagingProps,
    },
    // standard content props
    loading,
    data: list,
    pagination,
    rowSelection: rowSelection,
    // synthesis
    ...actionsHook,
  };

  // =============== RETURN
  return {
    contentProps,
    renderContent: () => {
      if (!nodes?.content) return null;
      return nodes.content(contentProps);
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useContentComponentHook;
