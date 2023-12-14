import {
  CrudComponentAccessibilityProps,
  CrudComponentActionProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import {
  CrudComponentActionHookProps,
  CrudComponentOptions,
} from '../../@types/crud/components/component';
import { CrudSchemataTypes } from '../../@types/crud/schema';
import {
  makeCrudCommonActionButtons,
  makeCrudExtraActionButtons,
} from '../hooks/common';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useActionsComponentHook = <
  TSchema extends CrudSchemataTypes = any
>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController
): CrudComponentActionHookProps<TSchema> => {
  const { detail, mutation, itemActions = {}, pagingProps, hooks } = payload;

  // =============== HELPERS
  const renderActionButtons = (context): CrudComponentActionProps => {
    const data = context?.data;
    const {
      viewButton,
      updateButton,
      deleteButton,
      exportButton,
      viewButtonNode,
      updateButtonNode,
      deleteButtonNode,
      exportButtonNode,
    } = makeCrudCommonActionButtons<TSchema>(itemActions, {
      data,
      mutation,
      context: {
        mutation,
        detail,
        controllers,
        pagingProps,
        hooks,
      },
      accessibility,
    });

    return {
      viewButton,
      updateButton,
      deleteButton,
      exportButton,
      viewButtonNode,
      updateButtonNode,
      deleteButtonNode,
      exportButtonNode,
    };
  };

  const renderExtraActionButtons = (context) => {
    const data = context?.data;
    const { views, nodes } = makeCrudExtraActionButtons<TSchema>(itemActions, {
      data,
      mutation,
      context: {
        mutation,
        detail,
        controllers,
        pagingProps,
        hooks,
      },
      accessibility,
    });
    return {
      views,
      nodes,
    };
  };

  // =============== return
  return {
    renderActionButtons,
    renderExtraActionButtons,
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useActionsComponentHook;
