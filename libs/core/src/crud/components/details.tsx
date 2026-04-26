import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import {
  CrudComponentDetailNodeProps,
  CrudComponentDetailsHookProps,
} from '../../@types/crud/components/details';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useDetailsComponentHook = <
  TSchema extends CrudSchemataTypes = any
>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps,
  controllers: CrudComponentVisibilityController
): CrudComponentDetailsHookProps<TSchema> => {
  const { result, schema, nodes, mutation, detail, pagingProps, hooks } =
    payload;
  const controller = controllers?.details;

  // =============== VARIABLES
  const getAction = schema.get;
  const getResults = result?.get;
  const rawData = getResults?.data;
  // GraphQL responses wrap the entity under the operation name
  // (e.g. `{ post: {...} }`), so we extract via the schema key. REST
  // adapters return the entity directly with no wrapper, so when the
  // keyed lookup yields nothing fall back to the raw payload.
  const keyedData = getAction?.key ? rawData?.[getAction.key] : undefined;
  const detailsResult = keyedData ?? rawData;
  const data = getAction ? detailsResult : null;
  const loading = getResults?.loading ?? false;

  // =============== PROPS
  const detailsProps: CrudComponentDetailNodeProps<TSchema> = {
    accessibility,
    context: {
      mutation,
      detail,
      controllers,
      pagingProps,
      hooks,
    },
    data,
    loading,
    visible: controller?.visible ?? false,
    onShow: () => controller?.onShow(),
    onHide: () => controller?.onHide(),
  };

  // =============== RETURN
  return {
    detailsProps,
    renderDetails: () => {
      if (!nodes?.details) return null;
      return nodes.details(detailsProps);
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useDetailsComponentHook;
