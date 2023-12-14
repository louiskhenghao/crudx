import { Fragment } from 'react';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

import { CrudCommonDialogOptions } from '../../@types/crud/action';
import {
  CrudGraphApiCreateType,
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiUpdateType,
} from '../../@types/crud/api';
import { CrudComponentAccessibilityProps } from '../../@types/crud/components/common';
import { CrudComponentOptions } from '../../@types/crud/components/component';
import {
  CrudComponentModalFormHookProps,
  CrudComponentModalsFormProps,
  CrudModalFormHookProps,
} from '../../@types/crud/components/modal';
import { CrudSchemataTypes } from '../../@types/crud/schema';
import { makeCrudCommonDialogForm } from '../hooks/common';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useModalFormComponentHook = <
  TSchema extends CrudSchemataTypes = any
>(
  payload: CrudComponentOptions<TSchema>,
  accessibility: CrudComponentAccessibilityProps
): CrudComponentModalFormHookProps<TSchema> => {
  const { modalForms, mutation, detail, pagingProps, hooks: cHooks } = payload;

  // =============== HELPERS
  const createModalForm = <TData = Record<string, any>,>(
    target?: CrudCommonDialogOptions<TSchema, TData>
  ) => {
    return makeCrudCommonDialogForm<TSchema, TData>(target, {
      accessibility,
      mutation,
      context: {
        mutation,
        detail,
        pagingProps,
        hooks: cHooks,
      },
    });
  };

  // =============== PROPS
  const modalFormHookProps: CrudModalFormHookProps<TSchema> = {
    create: createModalForm<CrudGraphApiCreateType<TSchema>>(
      modalForms?.create
    ),
    update: createModalForm<CrudGraphApiUpdateType<TSchema>>(
      modalForms?.update
    ),
    delete: createModalForm<CrudGraphApiDeleteType<TSchema>>(
      modalForms?.delete
    ),
    exports: createModalForm<CrudGraphApiExportType<TSchema>>(
      modalForms?.exports
    ),
    extra: reduce(
      modalForms?.extra ?? {},
      (r, e, k) => {
        r[k] = createModalForm<CrudGraphApiExportType<TSchema>>(e);
        return r;
      },
      {}
    ),
  };

  const modalFormResults: {
    hooks: any;
    props: CrudComponentModalsFormProps<TSchema>;
  } = {
    hooks: modalFormHookProps,
    props: {
      create: {
        onShow: modalFormHookProps?.create?.[1],
        onHide: modalFormHookProps?.create?.[2],
        visible: modalFormHookProps?.create?.[3] ?? false,
      },
      update: {
        onShow: modalFormHookProps?.update?.[1],
        onHide: modalFormHookProps?.update?.[2],
        visible: modalFormHookProps?.update?.[3] ?? false,
      },
      delete: {
        onShow: modalFormHookProps?.delete?.[1],
        onHide: modalFormHookProps?.delete?.[2],
        visible: modalFormHookProps?.delete?.[3] ?? false,
      },
      exports: {
        onShow: modalFormHookProps?.exports?.[1],
        onHide: modalFormHookProps?.exports?.[2],
        visible: modalFormHookProps?.exports?.[3] ?? false,
      },
      extra: reduce(
        modalFormHookProps?.extra,
        (r, e, k) => {
          r[k] = {
            onShow: e?.[1],
            onHide: e?.[2],
            visible: e?.[3] ?? false,
          };
          return r;
        },
        {}
      ),
    },
  };

  // =============== RETURN
  const { hooks } = modalFormResults;

  return {
    modalFormProps: modalFormResults.props,
    renderModalForms: () => {
      return (
        <>
          {hooks?.create?.[0]?.()}
          {hooks?.update?.[0]?.()}
          {hooks?.delete?.[0]?.()}
          {hooks?.exports?.[0]?.()}
          {map(hooks?.extra, (e, i) => {
            return <Fragment key={`extra-dialog-${i}`}>{e?.[0]?.()}</Fragment>;
          })}
        </>
      );
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useModalFormComponentHook;
