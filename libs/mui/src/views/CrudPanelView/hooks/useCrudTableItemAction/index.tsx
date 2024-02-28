import { ReactNode, useMemo } from 'react';
import {
  CrudCommonActionNode,
  CrudCommonActions,
  CrudSchemataTypes,
} from '@crudx/core';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { TooltipProps } from '@mui/material/Tooltip';
import cn from 'classnames';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';
import startCase from 'lodash/startCase';
import Link from 'next/link';

import { TooltipView } from '../../../../components/TooltipView';

import {
  CrudTableItemActionLinkProps,
  CrudTableItemActionProps,
} from './props';

const MenuActionTextMap = {
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
    size = 'small',
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
      type,
      node,
      title?: boolean | string | Omit<TooltipProps, 'children'>
    ) => {
      const tooltipsValue = title ?? tooltips?.[type] ?? true;

      // if tooltip doesn't enabled, just return node
      if (!tooltipsValue) return node;

      // if tooltip is boolean, then use default text as tooltip
      if (typeof tooltipsValue === 'boolean') {
        return <TooltipView title={startCase(type)}>{node}</TooltipView>;
      }

      // if tooltip is string, then use it as tooltip text
      if (typeof tooltipsValue === 'string') {
        return <TooltipView title={tooltipsValue}>{node}</TooltipView>;
      }

      return <TooltipView {...tooltipsValue}>{node}</TooltipView>;
    };

    // render link
    const renderLink = (node: any, linking?: CrudTableItemActionLinkProps) => {
      const isLinkString = typeof linking === 'string';
      const url = isLinkString ? linking : linking?.path;
      const openNewTab =
        !isLinkString && linking?.openNewTab ? { target: '_blank' } : {};

      if (nodeType === 'menu') {
        return (
          <MenuItem
            className="crud-item-action-link"
            {...(url ? { component: Link, href: url, ...openNewTab } : {})}
          >
            {node}
          </MenuItem>
        );
      }
      if (!url) return node;
      return (
        <Link className="crud-item-action-link" href={url} {...openNewTab}>
          {node}
        </Link>
      );
    };

    // render actin node
    const renderActionNode =
      (
        type: 'view' | 'update' | 'delete' | 'export' | string,
        node: CrudCommonActionNode<T>,
        title?: boolean | string | Omit<TooltipProps, 'children'>,
        linking?: CrudTableItemActionLinkProps
      ) =>
      (ctx, clickEvent): ReactNode => {
        // if node type = function
        if (typeof node === 'function') {
          return renderTooltip(type, node(ctx, clickEvent), title);
        }

        // if node type = menu
        if (nodeType === 'menu') {
          return renderLink(
            <Stack
              className={cn('crud-item-action-menu-type', type)}
              alignItems="center"
              direction="row"
              width="100%"
            >
              {node}
              <span>
                &nbsp;
                {title ?? text?.[`${type}Text`] ?? MenuActionTextMap[type]}
              </span>
            </Stack>,
            linking
          );
        }

        /**
         * nodeType = `button` / `icon`
         * -------------------------
         */
        // default to icon button
        let buttonNode = (
          <IconButton
            className={cn('crud-item-action-button-type', type)}
            size={size}
            aria-label={type}
            onClick={!linking ? clickEvent : undefined}
          >
            {node}
          </IconButton>
        );
        // if button type
        if (nodeType === 'button') {
          buttonNode = (
            <Button
              className={cn('crud-item-action-button-type', type)}
              size={size}
              aria-label={type}
              onClick={!linking ? clickEvent : undefined}
            >
              {node}
            </Button>
          );
        }

        return renderTooltip(type, renderLink(buttonNode, linking), title);
      };

    /**
    // render alert node
    const renderAlertNode = (options) => {
      return (
        <Dialog
          {...dialogProps}
          type="confirmation"
          fullWidth
          maxWidth="sm"
          visible={true}
          title={options.title}
          message={options.message ?? ''}
          onClickAction={(action) => {
            if (action === 'primary') {
              options.onPrimary();
              return;
            }
            options.onSecondary();
          }}
        />
      );
    };
     */

    // ========== RETURN
    return {
      view: enableView
        ? {
            onClick: !links?.view
              ? (e, ctx) => {
                  if (!ctx) return;
                  if (viewAction) {
                    viewAction(e, ctx);
                    return;
                  }
                  if (!ctx.data) return;
                  ctx.context?.detail?.query({
                    variables: {
                      id: ctx.data?.id,
                    },
                  });
                  ctx.context?.controllers?.details?.onShow();
                }
              : undefined,
            // NOTE: we can have custom alert node just like example below
            // alert: !isEnableAlert('view') ? false : renderAlertNode,
            alert: !links?.view && isEnableAlert('view'),
            node: renderActionNode(
              'view',
              viewNode ?? <RemoveRedEyeOutlinedIcon fontSize="inherit" />,
              undefined,
              links?.view
            ),
          }
        : undefined,
      update: enableUpdate
        ? {
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
              'update',
              updateNode ?? <ModeEditOutlineOutlinedIcon fontSize="inherit" />,
              undefined,
              links?.update
            ),
          }
        : undefined,
      delete: enableDelete
        ? {
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
              'delete',
              deleteNode ?? <DeleteOutlineOutlinedIcon fontSize="inherit" />,
              undefined,
              links?.delete
            ),
          }
        : undefined,
      exports: enableExport
        ? {
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
              'export',
              exportNode ?? <CloudDownloadOutlinedIcon fontSize="inherit" />,
              undefined,
              links?.export
            ),
          }
        : undefined,

      extra: enableExtra
        ? extraActions.reduce((result: any, action) => {
            const tooltipTitle = !isNil(action.tooltip)
              ? action.tooltip || action.title
              : action.title;

            result.push({
              key: action.key,
              title: action.title,
              alert: !action.link && action.alert,
              node: renderActionNode(
                action.key,
                action?.node ?? (
                  <ExpandCircleDownOutlinedIcon fontSize="inherit" />
                ),
                tooltipTitle,
                action.link
              ),
              onClick: !action.link ? action.action : undefined,
            });
            return result;
          }, [])
        : undefined,

      text,
      title: title ? (context) => title(context) : undefined,
      message: message ? (context) => message(context) : undefined,
      resource: identifier
        ? (context) => {
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

  // =============== RETURN
  return buttons;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default useCrudTableItemAction;
