import {
  CrudCommonActionEventContext,
  CrudCommonActionNode,
  CrudCommonActionNodeOptions,
  CrudCommonActions,
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiGetType,
  CrudGraphApiUpdateType,
  CrudSchemataTypes,
} from '@crudx/core';

import { ButtonProps } from '../../../../primitives/button';
import { TooltipViewProps } from '../../../../components/TooltipView';

type TooltipValue =
  | boolean
  | string
  | Omit<TooltipViewProps, 'children' | 'enabled'>;

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudTableItemActionProps<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> = {
  /**
   * size of the button
   * @default sm
   */
  size?: ButtonProps['size'];
  // the name of the module
  name: string;
  // the identifier to read from data
  identifier?: string;
  // the button presentation type
  nodeType?: 'button' | 'menu' | 'icon';
  /**
   * whether enable alert when click on the button
   * @default ['delete','export']
   */
  enableAlert?: ('view' | 'update' | 'delete' | 'export')[];
  /**
   * custom text for confirm & cancel button
   */
  text?: {
    confirmText?: string;
    cancelText?: string;
    viewText?: string;
    updateText?: string;
    deleteText?: string;
    exportText?: string;
  };
  /**
   * whether adopt link for action button
   */
  links?: {
    view?: CrudTableItemActionLinkProps<TSchema, TData>;
    update?: CrudTableItemActionLinkProps<TSchema, TData>;
    delete?: CrudTableItemActionLinkProps<TSchema, TData>;
    export?: CrudTableItemActionLinkProps<TSchema, TData>;
  };
  enableView?: CrudTableItemActionEnabler<TSchema, TData>;
  enableUpdate?: CrudTableItemActionEnabler<TSchema, TData>;
  enableDelete?: CrudTableItemActionEnabler<TSchema, TData>;
  enableExport?: CrudTableItemActionEnabler<TSchema, TData>;
  enableExtra?: CrudTableItemActionEnabler<TSchema, TData>;

  /**
   * EXTRA ACTION
   * ===========================
   */
  extraActions?: {
    key: string;
    title: string;
    link?: CrudTableItemActionLinkProps<TSchema, TData>;
    enabled?: CrudTableItemActionEnabler<TSchema, TData>;
    node?: CrudCommonActionNode<TSchema, CrudGraphApiGetType<TSchema>>;
    alert?: boolean;
    tooltip?: TooltipValue;
    action?: CrudCommonActionNodeOptions<
      TSchema,
      CrudGraphApiGetType<TSchema>
    >['onClick'];
  }[];

  /**
   * TOOLTIPS
   * ===========================
   */
  tooltips?: {
    view?: TooltipValue;
    update?: TooltipValue;
    delete?: TooltipValue;
    export?: TooltipValue;
  };

  /**
   * CUSTOM VIEW NODE
   * ===========================
   */
  viewNode?: CrudCommonActionNode<TSchema, CrudGraphApiGetType<TSchema>>;
  updateNode?: CrudCommonActionNode<TSchema, CrudGraphApiUpdateType<TSchema>>;
  deleteNode?: CrudCommonActionNode<TSchema, CrudGraphApiDeleteType<TSchema>>;
  exportNode?: CrudCommonActionNode<TSchema, CrudGraphApiExportType<TSchema>>;

  /**
   * CUSTOM VIEW CONTENT
   * ===========================
   */
  title?: CrudCommonActions<TSchema, TData>['title'];
  message?: CrudCommonActions<TSchema, TData>['message'];
  resource?: CrudCommonActions<TSchema, TData>['resource'];

  /**
   * CUSTOM VIEW ACTION
   * ===========================
   */
  viewAction?: CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiGetType<TSchema>
  >['onClick'];
  updateAction?: CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiUpdateType<TSchema>
  >['onClick'];
  deleteAction?: CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiDeleteType<TSchema>
  >['onClick'];
  exportAction?: CrudCommonActionNodeOptions<
    TSchema,
    CrudGraphApiExportType<TSchema>
  >['onClick'];
};

export type CrudTableItemActionLinkProps<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> = (data: CrudCommonActionEventContext<TSchema, TData>) =>
  | string
  | {
      path: string;
      openNewTab?: boolean;
    };

export type CrudTableItemActionEnabler<
  TSchema extends CrudSchemataTypes = any,
  TData = any
> = ((data: CrudCommonActionEventContext<TSchema, TData>) => boolean) | boolean;

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableItemActionProps;
