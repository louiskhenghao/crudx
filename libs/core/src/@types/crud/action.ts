import { ReactElement, ReactNode } from 'react';

import { CrudMutationResource } from '../../crud/mutation/resource';

import {
  CrudCommonVisibilityProps,
  CrudComponentAccessibilityProps,
  CrudComponentContext,
} from './components/common';
import {
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiGetType,
  CrudGraphApiUpdateType,
} from './api';
import { CrudSchemataTypes } from './schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */

// ====== COMMON ACTION BUTTON
export type CrudCommonActionButtonType = 'delete' | 'edit' | string;

export type CrudCommonActionNode<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> =
  | ((
      context: CrudCommonActionEventContext<TSchema, TData>,
      onClick?: (e: any) => void
    ) => ReactNode)
  | ReactNode;

// the resource to access from action
export type CrudCommonActionResource = {
  // the name of the context
  name?: string;
  // the key of fields that access from data
  identifier?: string;
};

// the crud common action node props
export type CrudCommonActionNodeProps = [
  // the actual node to display, which bind with onClick function
  ReactNode,
  // the pure node with onClick function separated
  { node: ReactNode; onClick: (e: any) => void }
];

// ====== ACTIONS
export interface CrudCommonActions<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> {
  view?: CrudCommonActionNodeOptions<TSchema, CrudGraphApiGetType<TSchema>>;
  update?: CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiUpdateType<TSchema>
  >;
  delete?: CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiDeleteType<TSchema>
  >;
  exports?: CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiExportType<TSchema>
  >;
  extra?: (CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiExportType<TSchema>
  > & { key: string })[];
  // the title to be display on dialog
  title?: (options: {
    action: CrudCommonActionButtonType;
    resource?: CrudCommonActionResource;
  }) => string | ReactElement | null;
  // the message to be display on dialog
  message?: (options: {
    action: CrudCommonActionButtonType;
    resource?: CrudCommonActionResource;
  }) => string | ReactElement | null;
  // the resource for dialog
  resource?: (
    context?: CrudCommonActionEventContext<TSchema, TData>
  ) => CrudCommonActionResource;
}

// ====== ACTION BUTTON TYPE OPTIONS
export interface CrudCommonActionButtonTypeOptions<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> {
  key: CrudCommonActionButtonType;
  text?: { confirmText?: string; cancelText?: string };
  title?: CrudCommonActions<TSchema>['title'];
  message?: CrudCommonActions<TSchema>['message'];
  resource?: CrudCommonActions<TSchema, TData>['resource'];
}
// ====== ACTION NODE OPTIONS
export type CrudCommonActionNodeOptions<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> = {
  // text to be display for dialog / etc
  title?: string;
  // whether show custom alert
  alert?: ((options: CrudCommonActionNodeAlertOptions) => any) | boolean;
  // the node to be show
  node: CrudCommonActionNode<TSchema, TData>;
  // on click event for action
  onClick: (
    e: any,
    context?: CrudCommonActionEventContext<TSchema, TData>
  ) => void;
  // event callback for alert confirm / cancel
  onAlertFeedback?: (
    action: 'positive' | 'negative',
    e: any,
    context?: CrudCommonActionEventContext<TSchema, TData>
  ) => void;
};

// action node alert options
export type CrudCommonActionNodeAlertOptions = {
  title: string | ReactElement;
  message: string | ReactElement;
  primaryText: string;
  secondaryText: string;
  onPrimary: () => void;
  onSecondary: () => void;
};

// ====== ACTION EVENT CONTEXT
export interface CrudCommonActionEventContext<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> {
  data?: TData;
  mutation?: CrudMutationResource<TSchema>;
  context?: CrudComponentContext<TSchema>;
  accessibility?: CrudComponentAccessibilityProps;
}

// ====== COMMON DIALOG
export type CrudCommonDialogContext<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> = CrudCommonVisibilityProps<TData> &
  CrudCommonActionEventContext<TSchema, TData> & {
    title?: string;
    props?: { [key: string]: any };
  };

export type CrudCommonDialogOptions<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> = {
  title?: CrudCommonDialogContext['title'];
  props?: CrudCommonDialogContext['props'];
  node: (options: CrudCommonDialogContext<TSchema, TData>) => ReactNode;
};

/**
 * [
 *    () => ReactNode, // render method for dialog
 *    (data?: any) => void, // method to show dialog
 *    () => void // method to hide dialog
 *    boolean // current visibility state
 * ]
 */
export type CrudCommonDialogTuple<TData = any> = [
  () => ReactNode, // render method to improve performances
  CrudCommonVisibilityProps<TData>['onShow'], // show dialog method
  CrudCommonVisibilityProps<TData>['onHide'], // hide dialog method
  CrudCommonVisibilityProps<TData>['visible']
];
