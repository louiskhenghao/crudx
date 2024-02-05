import { useState } from 'react';
import { CloneElement, usePrompt, useVisibilityStateHook } from '@crudx/common';
import get from 'lodash/get';
import isFunction from 'lodash/isFunction';
import startCase from 'lodash/startCase';

import {
  CrudCommonActionButtonTypeOptions,
  CrudCommonActionEventContext,
  CrudCommonActionNodeOptions,
  CrudCommonActionNodeProps,
  CrudCommonActions,
  CrudCommonDialogOptions,
  CrudCommonDialogTuple,
} from '../../@types/crud/action';
import {
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiGetType,
  CrudGraphApiUpdateType,
} from '../../@types/crud/api';
import {
  CrudComponentActionProps,
  CrudComponentContext,
  CrudComponentExtraActionProps,
} from '../../@types/crud/components/common';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * makeCrudCommonActionButton
 * ---------------------------
 * create action button
 */
export function makeCrudCommonActionButton<
  TSchema extends CrudSchemataTypes = any,
  TData = any
>(
  buttonOptions: CrudCommonActionButtonTypeOptions<TSchema, TData>,
  nodeOptions: CrudCommonActionNodeOptions<TSchema>,
  context?: CrudCommonActionEventContext<TSchema, TData>
): CrudCommonActionNodeProps {
  if (!nodeOptions?.node) {
    throw new Error('Please provide node component');
  }
  const { key, text, title, message } = buttonOptions;
  const { node, alert, onClick, onAlertFeedback } = nodeOptions;
  const controller = context?.context?.controllers.alert;
  const nodeTitle = nodeOptions.title;

  // =============== HOOKS
  const dialog = usePrompt();

  // =============== VARIABLES
  const record = context?.data;
  const resource = isFunction(buttonOptions.resource)
    ? buttonOptions.resource(context, record)
    : buttonOptions.resource;
  const name = get(resource, 'name', 'record');
  const identifier = get(resource, 'identifier', null);
  const viewing = identifier ? ` (${identifier})` : '';

  // =============== EVENTS
  const onHandleClick = (e: any) => {
    e?.stopPropagation?.();
    if (!onClick) {
      console.warn('onClick is not implemented!');
      return;
    }
    if (!alert) {
      onClick(e, context);
      return;
    }

    const prompt = async () => {
      // variables
      const titleText =
        title?.({ action: key, resource, data: record }) ??
        `${nodeTitle ?? startCase(key)} confirmation`;
      const messageText =
        message?.({ action: key, resource, data: record }) ??
        `Do you confirm that you want to ${
          nodeTitle ?? key
        } this ${name} ${viewing}?`;
      const primaryText = text?.confirmText ?? 'Confirm';
      const secondaryText = text?.cancelText ?? 'Cancel';

      // if alert was boolean
      if (typeof alert === 'boolean') {
        if (!controller) {
          console.warn('Alert nodes is not implemented!');
        }
        controller?.onShow({
          title: titleText,
          message: messageText,
          primaryText,
          secondaryText,
          onPrimary: () => {
            onClick(e, context);
            onAlertFeedback?.('positive', {}, context);
          },
          onSecondary: () => {
            onAlertFeedback?.('negative', {}, context);
          },
        });
        return;
      }
      // if alert was a function
      await dialog({
        node: ({ hide }) => {
          return alert({
            title: titleText,
            message: messageText,
            primaryText,
            secondaryText,
            onPrimary: () => {
              hide();
              onClick(e, context);
              onAlertFeedback?.('positive', {}, context);
            },
            onSecondary: () => {
              hide();
              onAlertFeedback?.('negative', {}, context);
            },
          });
        },
      });
    };
    prompt();
  };

  // =============== VIEWS
  if (typeof node === 'function') {
    return [
      <>{node(context ?? {}, onHandleClick)}</>,
      { node: node(context ?? {}), onClick: onHandleClick },
    ];
  }
  return [
    <CloneElement onClick={onHandleClick}>{node}</CloneElement>,
    { node, onClick: onHandleClick },
  ];
}

/**
 * makeCrudCommonButton
 * ---------------------------
 * make crud button, return null value if `buttonOptions` or `nodeOptions` is not provided
 */
export function makeCrudCommonButton<
  TSchema extends CrudSchemataTypes = any,
  TData = any
>(
  buttonOptions?: CrudCommonActionButtonTypeOptions<TSchema, TData>,
  nodeOptions?: CrudCommonActionNodeOptions<TSchema, TData>,
  context?: CrudCommonActionEventContext<TSchema, TData>
): CrudCommonActionNodeProps {
  if (!buttonOptions || !nodeOptions) {
    return [
      null,
      { node: null, onClick: () => console.warn('Not implemented!') },
    ];
  }

  // =============== RETURN
  return makeCrudCommonActionButton<TSchema, TData>(
    buttonOptions,
    nodeOptions,
    context
  );
}

/**
 * makeCrudCommonActionButtons
 * ---------------------------
 * create buttons (view, update, delete, exports)
 */
export function makeCrudCommonActionButtons<
  TSchema extends CrudSchemataTypes = any
>(
  options: CrudCommonActions<TSchema>,
  context?: CrudCommonActionEventContext<TSchema>
): CrudComponentActionProps {
  const { resource, title, message } = options;

  // =============== PROPS
  // view button
  const [viewButton, viewNode] = makeCrudCommonButton<
    TSchema,
    CrudGraphApiGetType<TSchema>
  >({ key: 'view', title, resource, message }, options.view, context);

  // update button
  const [updateButton, updateNode] = makeCrudCommonButton<
    TSchema,
    CrudGraphApiUpdateType<TSchema>
  >({ key: 'update', title, resource, message }, options?.update, context);

  // delete button
  const [deleteButton, deleteNode] = makeCrudCommonButton<
    TSchema,
    CrudGraphApiDeleteType<TSchema>
  >({ key: 'delete', title, resource, message }, options?.delete, context);

  // export button
  const [exportButton, exportNode] = makeCrudCommonButton<
    TSchema,
    CrudGraphApiExportType<TSchema>
  >({ key: 'export', title, resource, message }, options?.exports, context);

  // =============== RETURN
  return {
    viewButton,
    updateButton,
    deleteButton,
    exportButton,
    viewButtonNode: viewNode,
    updateButtonNode: updateNode,
    deleteButtonNode: deleteNode,
    exportButtonNode: exportNode,
  };
}

/**
 * makeCrudExtraActionButtons
 * ---------------------------
 * create extra buttons
 */
export function makeCrudExtraActionButtons<
  TSchema extends CrudSchemataTypes = any
>(
  options: CrudCommonActions<TSchema>,
  context?: CrudCommonActionEventContext<TSchema>
): CrudComponentExtraActionProps {
  const { resource, title, message } = options;
  // =============== PROPS
  const results = (options.extra ?? []).reduce(
    (r: CrudComponentExtraActionProps, e) => {
      const [view, node] = makeCrudCommonButton<
        TSchema,
        CrudGraphApiGetType<TSchema>
      >({ key: e.key, title, resource, message }, e, context);
      r.views.push(view);
      r.nodes.push(node);
      return r;
    },
    { views: [], nodes: [] }
  );

  // =============== RETURN
  return results;
}

/**
 * makeCrudCommonDialogForm
 * ---------------------------
 * render Dialog with any content
 */
export function makeCrudCommonDialogForm<
  TSchema extends CrudSchemataTypes,
  TData = any
>(
  options?: CrudCommonDialogOptions<TSchema, TData>,
  context?: Omit<CrudCommonActionEventContext<TSchema, TData>, 'context'> & {
    context?: Omit<CrudComponentContext<TSchema>, 'controllers'>;
  }
): CrudCommonDialogTuple<TData> {
  // ===============  STATE
  const [data, setData] = useState<TData>();

  // =============== HOOKS
  const {
    visible,
    onShow: onActionShow,
    onHide: onActionHide,
  } = useVisibilityStateHook();

  // =============== EVENTS
  const onShow = (inData) => {
    setData(inData);
    onActionShow();
  };
  const onHide = () => {
    onActionHide();
  };

  // =============== TUPLE
  return [
    () => {
      if (!options?.node) return null;
      const { node, title, props } = options;
      return node({
        title,
        props,
        data,
        visible,
        ...(context ?? {}),
        onHide,
        onShow,
      });
    },
    onShow,
    onHide,
    visible,
  ];
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  makeCrudCommonActionButton,
  makeCrudCommonActionButtons,
  makeCrudCommonDialogForm,
};
