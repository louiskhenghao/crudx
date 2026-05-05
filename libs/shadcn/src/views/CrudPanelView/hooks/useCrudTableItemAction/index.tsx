import { ReactNode, useMemo } from 'react';
import { Link } from '@crudx/common';
import {
  CrudCommonActionNode,
  CrudCommonActions,
  CrudSchemataTypes,
} from '@crudx/core';
import { ChevronDownCircle, Download, Eye, Pencil, Trash2 } from 'lucide-react';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';
import startCase from 'lodash/startCase';

import { cn } from '../../../../lib/cn';
import { Button } from '../../../../primitives/button';
import { DropdownMenuItem } from '../../../../primitives/dropdown-menu';
import {
  TooltipView,
  TooltipViewProps,
} from '../../../../components/TooltipView';

import {
  CrudTableItemActionEnabler,
  CrudTableItemActionLinkProps,
  CrudTableItemActionProps,
} from './props';

type TooltipValue =
  | boolean
  | string
  | Omit<TooltipViewProps, 'children' | 'enabled'>;

const MenuActionTextMap: Record<string, string> = {
  view: 'View',
  update: 'Update',
  delete: 'Delete',
  export: 'Export',
};

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useCrudTableItemAction = <T extends CrudSchemataTypes = any>(
  props: CrudTableItemActionProps<T>
): CrudCommonActions<T> => {
  const {
    size = 'sm',
    text,
    name,
    identifier,
    nodeType = 'icon',
    links,
    enableView = true,
    enableUpdate = false,
    enableDelete = false,
    enableExport = false,
    enableExtra = true,
    enableAlert = ['delete', 'export'],
    tooltips = {},
    viewNode,
    updateNode,
    deleteNode,
    exportNode,
    extraActions = [],
    viewAction,
    updateAction,
    deleteAction,
    exportAction,
    title,
    message,
    resource,
  } = props;

  // =============== HOOKS
  const buttons: CrudCommonActions<T> = useMemo(() => {
    // HELPERS
    const isEnableAlert = (type: 'view' | 'update' | 'delete' | 'export') => {
      return includes(enableAlert, type);
    };

    // render tooltip view
    const renderTooltip = (
      type: string,
      node: React.ReactElement,
      tipTitle?: TooltipValue
    ) => {
      const tooltipsValue = tipTitle ?? tooltips?.[type as 'view'] ?? true;

      if (!tooltipsValue) return node;

      if (typeof tooltipsValue === 'boolean') {
        return <TooltipView title={startCase(type)}>{node}</TooltipView>;
      }

      if (typeof tooltipsValue === 'string') {
        return <TooltipView title={tooltipsValue}>{node}</TooltipView>;
      }

      return <TooltipView {...tooltipsValue}>{node}</TooltipView>;
    };

    // render link
    const renderLink = (
      node: React.ReactElement,
      linking?: ReturnType<CrudTableItemActionLinkProps>
    ): React.ReactElement => {
      const isLinkString = typeof linking === 'string';
      const url = isLinkString ? linking : linking?.path;
      const openNewTab =
        !isLinkString && linking?.openNewTab ? { target: '_blank' } : {};

      if (nodeType === 'menu') {
        if (url) {
          return (
            <DropdownMenuItem asChild className="crudx-item-action-link">
              <Link href={url} {...openNewTab}>
                {node}
              </Link>
            </DropdownMenuItem>
          );
        }
        return (
          <DropdownMenuItem className="crudx-item-action-link">
            {node}
          </DropdownMenuItem>
        );
      }
      if (!url) return node;
      return (
        <Link className="crudx-item-action-link" href={url} {...openNewTab}>
          {node}
        </Link>
      );
    };

    // render action node
    const renderActionNode =
      (
        viewer: CrudTableItemActionEnabler,
        type: 'view' | 'update' | 'delete' | 'export' | string,
        node: CrudCommonActionNode<T>,
        tipTitle?: TooltipValue,
        linking?: CrudTableItemActionLinkProps
      ) =>
      (ctx: any, clickEvent: any): ReactNode => {
        const link = linking?.(ctx);

        if (typeof viewer === 'boolean' && !viewer) {
          return null;
        }
        if (typeof viewer === 'function' && !viewer(ctx)) {
          return null;
        }

        // if node type = function
        if (typeof node === 'function') {
          return renderTooltip(type, node(ctx, clickEvent) as any, tipTitle);
        }

        // if node type = menu
        if (nodeType === 'menu') {
          return renderLink(
            <span
              className={cn(
                'crudx-item-action-menu-type flex items-center w-full',
                type
              )}
            >
              {node}
              <span className="ml-1">
                &nbsp;
                {(typeof tipTitle === 'string'
                  ? tipTitle
                  : typeof tipTitle === 'object'
                  ? tipTitle.title
                  : undefined) ??
                  text?.[`${type}Text` as 'viewText'] ??
                  MenuActionTextMap[type]}
              </span>
            </span>,
            link
          );
        }

        /**
         * nodeType = `button` / `icon`
         */
        const isButton = nodeType === 'button';
        const buttonNode = (
          <Button
            className={cn('crudx-item-action-button-type', type)}
            size={isButton ? size : 'icon'}
            variant={isButton ? 'outline' : 'ghost'}
            aria-label={type}
            onClick={!linking ? clickEvent : undefined}
          >
            {node}
          </Button>
        );

        return renderTooltip(type, renderLink(buttonNode, link), tipTitle);
      };

    // ========== RETURN
    return {
      view: {
        onClick: !links?.view
          ? (e, ctx) => {
              if (!ctx) return;
              if (viewAction) {
                viewAction(e, ctx);
                return;
              }
              if (!ctx.data) return;
              ctx.context?.detail?.query({
                variables: { id: (ctx.data as any)?.id },
              });
              ctx.context?.controllers?.details?.onShow();
            }
          : undefined,
        alert: !links?.view && isEnableAlert('view'),
        node: renderActionNode(
          enableView,
          'view',
          viewNode ?? <Eye className="h-4 w-4" />,
          undefined,
          links?.view
        ),
      },
      update: {
        onClick: !links?.update
          ? (e, ctx) => {
              if (!ctx) return;
              if (updateAction) {
                updateAction(e, ctx);
                return;
              }
              const data = ctx?.data;
              ctx.context?.controllers?.update?.onShow(data);
            }
          : undefined,
        alert: !links?.update && isEnableAlert('update'),
        node: renderActionNode(
          enableUpdate,
          'update',
          updateNode ?? <Pencil className="h-4 w-4" />,
          undefined,
          links?.update
        ),
      },
      delete: {
        onClick: !links?.delete
          ? (e, ctx) => {
              if (!ctx) return;
              if (deleteAction) {
                deleteAction(e, ctx);
                return;
              }
              const data = ctx?.data;
              ctx.context?.controllers?.delete?.onShow(data);
            }
          : undefined,
        alert: !links?.delete && isEnableAlert('delete'),
        node: renderActionNode(
          enableDelete,
          'delete',
          deleteNode ?? <Trash2 className="h-4 w-4" />,
          undefined,
          links?.delete
        ),
      },
      exports: {
        onClick: !links?.export
          ? (e, ctx) => {
              if (!ctx) return;
              if (exportAction) {
                exportAction(e, ctx);
                return;
              }
              const data = ctx?.data;
              ctx.context?.controllers?.exports?.onShow(data);
            }
          : undefined,
        alert: !links?.export && isEnableAlert('export'),
        node: renderActionNode(
          enableExport,
          'export',
          exportNode ?? <Download className="h-4 w-4" />,
          undefined,
          links?.export
        ),
      },
      extra: extraActions.reduce((result: any, action) => {
        const tooltipTitle = !isNil(action.tooltip)
          ? action.tooltip || action.title
          : action.title;

        result.push({
          key: action.key,
          title: action.title,
          alert: !action.link && action.alert,
          node: renderActionNode(
            action.enabled ?? enableExtra ?? true,
            action.key,
            action?.node ?? <ChevronDownCircle className="h-4 w-4" />,
            tooltipTitle,
            action.link
          ),
          onClick: !action.link ? action.action : undefined,
        });
        return result;
      }, []),

      text,
      title: title ? (context: any) => title(context) : undefined,
      message: message ? (context: any) => message(context) : undefined,
      resource: identifier
        ? (context: any) => {
            if (resource) return resource(context);
            return {
              name,
              identifier: identifier ? context?.data?.[identifier] : null,
            };
          }
        : undefined,
    };
  }, [
    name,
    size,
    text,
    links,
    identifier,
    nodeType,
    tooltips,
    viewNode,
    updateNode,
    deleteNode,
    exportNode,
    enableAlert,
    enableView,
    enableUpdate,
    enableDelete,
    enableExtra,
    enableExport,
    extraActions,
    title,
    message,
    resource,
    viewAction,
    updateAction,
    deleteAction,
    exportAction,
  ]);

  return buttons;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default useCrudTableItemAction;
