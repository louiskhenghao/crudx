import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import {
  CrudComponentFilterHookProps,
  CrudComponentFilterNodeProps,
} from '../../@types/crud/components/filter';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const usePanelComponentHook = <T extends CrudSchemataTypes = any>(
  payload: CrudComponentOptions<T>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController
): CrudComponentFilterHookProps<T> => {
  const { mutation, detail, nodes, pagingProps, hooks } = payload;

  // =============== PROPS
  const filterProps: CrudComponentFilterNodeProps<T> = {
    accessibility,
    context: {
      mutation,
      detail,
      controllers,
      pagingProps,
      hooks,
    },
  };

  // =============== RETURN
  return {
    filterProps,
    renderFilter: () => {
      if (!nodes?.filter) return null;
      return nodes.filter(filterProps);
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default usePanelComponentHook;
