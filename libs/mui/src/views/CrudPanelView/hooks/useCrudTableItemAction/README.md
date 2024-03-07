# useCrudTableItemAction

---

## Types

```ts
import { CrudCommonActionEventContext, CrudCommonActionNode, CrudCommonActionNodeOptions, CrudCommonActions, CrudGraphApiDeleteType, CrudGraphApiExportType, CrudGraphApiGetType, CrudGraphApiUpdateType, CrudSchemataTypes } from '@crudx/core';
import { ButtonProps } from '@mui/material/Button';
import { TooltipProps } from '@mui/material/Tooltip';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudTableItemActionProps<TSchema extends CrudSchemataTypes = any, TData = any> = {
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
   * whether adopt link for action button
   */
  links?: {
    view?: CrudTableItemActionLinkProps;
    update?: CrudTableItemActionLinkProps;
    delete?: CrudTableItemActionLinkProps;
    export?: CrudTableItemActionLinkProps;
  };
  /**
   * whether enable view button
   * @default true
   */
  enableView?: CrudTableItemActionEnabler<TSchema, TData>;
  /**
   * whether enable update button
   * @default false
   */
  enableUpdate?: CrudTableItemActionEnabler<TSchema, TData>;
  /**
   * whether enable delete button
   * @default false
   */
  enableDelete?: CrudTableItemActionEnabler<TSchema, TData>;
  /**
   * whether enable export button
   * @default false
   */
  enableExport?: CrudTableItemActionEnabler<TSchema, TData>;
  /**
   * whether enable extra buttons
   * @default true
   */
  enableExtra?: CrudTableItemActionEnabler<TSchema, TData>;

  /**
   * EXTRA ACTION
   * ===========================
   */
  extraActions?: {
    key: string;
    // text to be display over menu
    title: string;
    // path link
    link?: CrudTableItemActionLinkProps;
    // whether to show this action
    enabled?: CrudTableItemActionEnabler<TSchema, TData>;
    // custom view to be display
    node?: CrudCommonActionNode<TSchema, CrudGraphApiGetType<TSchema>>;
    // whether to show alert when click on the button
    alert?: boolean;
    // tooltip when hover for action button
    tooltip?: boolean | string | Omit<TooltipProps, 'children'>;
    action?: CrudCommonActionNodeOptions<TSchema, CrudGraphApiGetType<TSchema>>['onClick'];
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
  viewAction?: CrudCommonActionNodeOptions<TSchema, CrudGraphApiGetType<TSchema>>['onClick'];
  updateAction?: CrudCommonActionNodeOptions<TSchema, CrudGraphApiUpdateType<TSchema>>['onClick'];
  deleteAction?: CrudCommonActionNodeOptions<TSchema, CrudGraphApiDeleteType<TSchema>>['onClick'];
  exportAction?: CrudCommonActionNodeOptions<TSchema, CrudGraphApiExportType<TSchema>>['onClick'];
};

export type CrudTableItemActionLinkProps =
  | string
  | {
      // path link to direct
      path: string;
      // whether to open in new tab
      openNewTab: boolean;
    };

export type CrudTableItemActionEnabler<TSchema extends CrudSchemataTypes = any, TData = any> = ((data: CrudCommonActionEventContext<TSchema, TData>) => boolean) | boolean;

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableItemActionProps;
```

---

## Example

```TypeScript
import { useCrudTableItemAction } from "@crudx/mui";

// ====== HOOKS

const itemActions = useCrudTableItemAction({
  name: 'bank',
  identifier: 'bank_name',
  enableAlert: ['view', 'update', 'export', 'delete'],
  enableDelete: true,
  enableExport: true,
  enableUpdate: (ctx) => {
    return ctx?.data?.xxx === 'yyy';
  },
  enableView: true,
  tooltips: {
    view: 'View Item',
  },
  title: (options) => {
    if (options.action === 'view') {
      return `View ${options.name} detail`;
    }
    // not showing any title
    return null;
  },
});

```
