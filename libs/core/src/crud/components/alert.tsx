import { CrudComponentAlertHookProps } from '../../@types/crud/components/alert';
import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useAlertComponentHook = <TSchema extends CrudSchemataTypes = any>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController
): CrudComponentAlertHookProps => {
  const { nodes, mutation, detail, pagingProps, hooks } = payload;
  const controller = controllers.alert;

  // =============== RETURN
  return {
    renderAlert: () => {
      if (!nodes?.alert) return null;
      return nodes.alert({
        accessibility,
        context: {
          mutation,
          detail,
          controllers,
          pagingProps,
          hooks,
        },
        visible: controller.visible ?? false,
        onHide: controller.onHide,
        ...controller.props,
      });
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useAlertComponentHook;
