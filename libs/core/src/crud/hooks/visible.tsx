import omit from 'lodash/omit';

import { CrudComponentVisibilityController } from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import { CrudComponentModalFormHookProps } from '../../@types/crud/components/modal';
import { CrudSchemataTypes } from '../../@types/crud/schema';
import { useVisibilityStateHook } from '../../hooks/useVisibilityStateHook';

import useComponentAlertHook from './alert';

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
  const alertController = useComponentAlertHook();
  const detailsController = useVisibilityStateHook();
  const filterController = useVisibilityStateHook();

  // =============== PROPS
  const controllers: CrudComponentVisibilityController = {
    alert: alertController,
    filter: filterController,
    details: detailsController,
    extraModal: formHook?.modalFormProps.extra,
    ...omit(formHook?.modalFormProps ?? {}, ['extra']),
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
