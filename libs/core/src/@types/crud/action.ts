import { ReactElement, ReactNode } from 'react';

import { CrudMutationResource } from '../../crud/mutation/resource';
import { IfTypeAny } from '../utility';

import {
  CrudCommonVisibilityProps,
  CrudComponentAccessibilityProps,
  CrudComponentContext,
} from './components/common';
import {
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiGetType,
  CrudGraphApiListType,
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
  view?: CrudCommonActionNodeOptions<
    TSchema,
    IfTypeAny<TData, CrudGraphApiGetType<TSchema>, TData>
  >;
  update?: CrudCommonActionNodeOptions<
    TSchema,
    IfTypeAny<TData, CrudGraphApiUpdateType<TSchema>, TData>
  >;
  delete?: CrudCommonActionNodeOptions<
    TSchema,
    IfTypeAny<TData, CrudGraphApiDeleteType<TSchema>, TData>
  >;
  exports?: CrudCommonActionNodeOptions<
    TSchema,
    IfTypeAny<TData, CrudGraphApiExportType<TSchema>, TData>
  >;
  extra?: (CrudCommonActionNodeOptions<
    TSchema,
    IfTypeAny<TData, CrudGraphApiExportType<TSchema>, TData>
  > & { key: string })[];
  // the title to be display on dialog
  title?: (options: {
    action: CrudCommonActionButtonType;
    resource?: CrudCommonActionResource;
    data?: IfTypeAny<TData, CrudGraphApiListType<TSchema>, TData>;
  }) => string | ReactElement | null;
  // the message to be display on dialog
  message?: (options: {
    action: CrudCommonActionButtonType;
    resource?: CrudCommonActionResource;
    data?: IfTypeAny<TData, CrudGraphApiListType<TSchema>, TData>;
  }) => string | ReactElement | null;
  // the resource for dialog
  resource?: (
    context?: CrudCommonActionEventContext<TSchema, TData>,
    data?: IfTypeAny<TData, CrudGraphApiListType<TSchema>, TData>
  ) => CrudCommonActionResource;
}

// ====== ACTION BUTTON TYPE OPTIONS
export interface CrudCommonActionButtonTypeOptions<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> {
  key: CrudCommonActionButtonType;
  text?: { confirmText?: string; cancelText?: string };
  title?: CrudCommonActions<TSchema, TData>['title'];
  message?: CrudCommonActions<TSchema, TData>['message'];
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
  Omit<CrudCommonActionEventContext<TSchema, TData>, 'context'> & {
    context?: Omit<CrudComponentContext<TSchema>, 'controllers'>;
  } & {
    title?: string;
    props?: { [key: string]: any };
  };

export type CrudCommonDialogOptions<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> = {
  title?: CrudCommonDialogContext['title'];
  props?: CrudCommonDialogContext['props'];
  node: (
    options: Omit<CrudCommonDialogContext<TSchema, TData>, 'context'> & {
      context?: Omit<CrudComponentContext<TSchema>, 'controllers'>;
    }
  ) => ReactNode;
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
