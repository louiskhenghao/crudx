import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import {
  CrudComponentFilterModalHookProps,
  CrudComponentFilterModalNodeProps,
} from '../../@types/crud/components/filter-modal';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useFilterModalComponentHook = <
  TSchema extends CrudSchemataTypes = any
>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController
): CrudComponentFilterModalHookProps<TSchema> => {
  const { nodes, mutation, detail, paging, pagingProps } = payload;
  const controller = controllers?.filter;

  // =============== PROPS
  const props: CrudComponentFilterModalNodeProps<TSchema> = {
    accessibility,
    context: {
      mutation,
      detail,
      controllers,
      paging,
      pagingProps,
    },
    visible: controller?.visible ?? false,
    onShow: () => controller?.onShow(),
    onHide: () => controller?.onHide(),
  };

  // =============== RETURN
  return {
    filterModalProps: props,
    renderFilterModal: () => {
      if (!nodes?.filterModal) return null;
      return nodes.filterModal(props);
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useFilterModalComponentHook;
