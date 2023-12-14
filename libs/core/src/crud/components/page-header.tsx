import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import {
  CrudComponentPageHeaderHookProps,
  CrudComponentPageHeaderNodeProps,
} from '../../@types/crud/components/page-header';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const usePageHeaderComponentHook = <
  TSchema extends CrudSchemataTypes = any
>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController
): CrudComponentPageHeaderHookProps<TSchema> => {
  const { detail, mutation, nodes, pagingProps, hooks } = payload;

  // =============== PROPS
  const pageHeaderProps: CrudComponentPageHeaderNodeProps<TSchema> = {
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
    pageHeaderProps,
    renderPageHeader: () => {
      if (!nodes?.pageHeader) return null;
      return nodes.pageHeader(pageHeaderProps);
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default usePageHeaderComponentHook;
