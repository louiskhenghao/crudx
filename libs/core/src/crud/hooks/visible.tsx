import { CrudComponentVisibilityController } from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import { CrudComponentModalFormHookProps } from '../../@types/crud/components/modal';
import { CrudSchemataTypes } from '../../@types/crud/schema';
import { useVisibilityStateHook } from '../../hooks/useVisibilityStateHook';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useComponentVisibilityHook = <T extends CrudSchemataTypes = any>(
  payload: CrudComponentOptions<T>,
  formHook: CrudComponentModalFormHookProps<T>
): CrudComponentVisibilityController<T> => {
  // =============== HOOKS
  const detailsController = useVisibilityStateHook();
  const filterController = useVisibilityStateHook();

  // =============== PROPS
  const controllers: CrudComponentVisibilityController = {
    details: detailsController,
    filter: filterController,
    ...(formHook?.modalFormProps ?? {}),
  };

  // =============== RETURN
  return controllers;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useComponentVisibilityHook;
