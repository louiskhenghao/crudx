import { useMemo } from 'react';
import {
  CrudCommonDialogContext,
  CrudGraphApiCreateType,
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiUpdateType,
  CrudModalFormOptions,
  CrudSchemataTypes,
} from '@crudx/core';

import { Dialog } from '../../components/Dialog';

import { CrudModalFormProps, CrudResourceModalFormProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useCrudModalForm = <TSchema extends CrudSchemataTypes = any>(
  props: CrudResourceModalFormProps<TSchema>
): CrudModalFormOptions<TSchema> => {
  const { create, update, exports } = props;

  // =============== HOOKS
  const options: CrudModalFormOptions<TSchema> = useMemo(() => {
    // =============== HELPERS
    const onRenderNode = <TData extends Record<string, any>>(
      instance: CrudModalFormProps<TSchema, TData>
    ) => {
      return (ctx: CrudCommonDialogContext<TSchema, TData>) => {
        const {
          title,
          props: dialogProps = {},
          data,
          context,
          visible,
          mutation,
          accessibility,
          onHide,
          onShow,
        } = ctx;

        return (
          <Dialog
            type="custom"
            title={title}
            enableCloseButton
            visible={visible}
            onClose={() => onHide()}
            {...dialogProps}
            onClickAction={(e) => {
              onHide();
              dialogProps?.onClickAction?.(e);
            }}
          >
            {instance.render({
              data,
              context,
              visible,
              mutation,
              accessibility,
              onHide,
              onShow,
            })}
          </Dialog>
        );
      };
    };

    // =============== CONSTRUCT
    return {
      // --- modal forms setting for create & update
      create: create
        ? {
            title: create.title,
            props: create.props,
            node: onRenderNode<CrudGraphApiCreateType<TSchema>>(create),
          }
        : undefined,
      update: update
        ? {
            title: update.title,
            props: update.props,
            node: onRenderNode<CrudGraphApiUpdateType<TSchema>>(update),
          }
        : undefined,
      delete: props.delete
        ? {
            title: props.delete.title,
            props: props.delete.props,
            node: onRenderNode<CrudGraphApiDeleteType<TSchema>>(props?.delete),
          }
        : undefined,
      exports: exports
        ? {
            title: exports.title,
            props: exports.props,
            node: onRenderNode<CrudGraphApiExportType<TSchema>>(exports),
          }
        : undefined,
    };
  }, [create, exports, props.delete, update]);

  // =============== RETURN
  return options;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default useCrudModalForm;
