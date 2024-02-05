import { ReactNode } from 'react';
import {
  CrudCommonActionNode,
  CrudCommonActionNodeOptions,
  CrudCommonActions,
  CrudGraphApiDeleteType,
  CrudGraphApiExportType,
  CrudGraphApiGetType,
  CrudGraphApiUpdateType,
  CrudSchemataTypes,
} from '@crudx/core';
import { ButtonProps } from '@mui/material/Button';
import { TooltipProps } from '@mui/material/Tooltip';

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
   * @default small
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
   * whether enable view button
   * @default true
   */
  enableView?: boolean;
  /**
   * whether enable update button
   * @default false
   */
  enableUpdate?: boolean;
  /**
   * whether enable delete button
   * @default false
   */
  enableDelete?: boolean;
  /**
   * whether enable export button
   * @default false
   */
  enableExport?: boolean;
  /**
   * whether enable extra buttons
   * @default true
   */
  enableExtra?: boolean;

  /**
   * EXTRA ACTION
   * ===========================
   */
  extraActions?: {
    key: string;
    // text to be display over menu
    title: string;
    node?: CrudCommonActionNode<TSchema, CrudGraphApiGetType<TSchema>>;
    alert?: boolean;
    tooltip?: boolean | string | Omit<TooltipProps, 'children'>;
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
    view?: boolean | string | Omit<TooltipProps, 'children'>;
    update?: boolean | string | Omit<TooltipProps, 'children'>;
    delete?: boolean | string | Omit<TooltipProps, 'children'>;
    export?: boolean | string | Omit<TooltipProps, 'children'>;
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
  // custom title on dialog
  title?: CrudCommonActions<TSchema, TData>['title'];
  // custom message on dialog
  message?: CrudCommonActions<TSchema, TData>['message'];
  // custom resource data for dialog
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

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableItemActionProps;
