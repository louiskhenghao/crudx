import { ReactNode, useMemo } from 'react';
import { CrudCommonActions, CrudSchemataTypes } from '@crudx/core';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { TooltipProps } from '@mui/material/Tooltip';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';
import startCase from 'lodash/startCase';

import { Dialog } from '../../../../components/Dialog';
import { TooltipView } from '../../../../components/TooltipView';

import { CrudTableItemActionProps } from './props';

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

    // render actin node
    const renderActionNode =
      (
        type: 'view' | 'update' | 'delete' | 'export' | string,
        icon: ReactNode,
        title?: boolean | string | Omit<TooltipProps, 'children'>
      ) =>
      (ctx, clickEvent): ReactNode => {
        // if node type = function
        if (typeof nodeType === 'function') {
          return renderTooltip(
            type,
            nodeType({
              node: icon,
              onClick: clickEvent,
            }),
            title
          );
        }

        // if node type = menu
        if (nodeType === 'menu') {
          return (
            <Stack alignItems="center" justifyContent="center" direction="row">
              {icon}
              <span>
                &nbsp;
                {title ?? text?.[`${type}Text`] ?? MenuActionTextMap[type]}
              </span>
            </Stack>
          );
        }

        /**
         * nodeType = `button` / `icon`
         * -------------------------
         */
        // default to icon button
        let buttonNode = (
          <IconButton size={size} aria-label={type} onClick={clickEvent}>
            {icon}
          </IconButton>
        );
        // if button type
        if (nodeType === 'button') {
          buttonNode = (
            <Button size={size} aria-label={type} onClick={clickEvent}>
              {icon}
            </Button>
          );
        }

        return renderTooltip(type, buttonNode, title);
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
            onClick: (e, ctx) => {
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
            },
            // NOTE: we can have custom alert node just like example below
            // alert: !isEnableAlert('view') ? false : renderAlertNode,
            alert: isEnableAlert('view'),
            node:
              viewNode ??
              renderActionNode(
                'view',
                <RemoveRedEyeOutlinedIcon fontSize="inherit" />
              ),
          }
        : undefined,
      update: enableUpdate
        ? {
            onClick: (e, ctx) => {
              if (!ctx) return;
              if (updateAction) {
                updateAction(e, ctx);
                return;
              }
              const data = ctx?.data;
              ctx.context?.controllers?.update?.onShow(data);
            },
            alert: isEnableAlert('update'),
            node:
              updateNode ||
              renderActionNode(
                'update',
                <ModeEditOutlineOutlinedIcon fontSize="inherit" />
              ),
          }
        : undefined,
      delete: enableDelete
        ? {
            onClick: (e, ctx) => {
              if (!ctx) return;
              if (deleteAction) {
                deleteAction(e, ctx);
                return;
              }
              const data = ctx?.data;
              ctx.context?.controllers?.delete?.onShow(data);
            },
            alert: isEnableAlert('delete'),
            node:
              deleteNode ||
              renderActionNode(
                'delete',
                <DeleteOutlineOutlinedIcon fontSize="inherit" />
              ),
          }
        : undefined,
      exports: enableExport
        ? {
            onClick: (e, ctx) => {
              if (!ctx) return;
              if (exportAction) {
                exportAction(e, ctx);
                return;
              }
              const data = ctx?.data;
              ctx.context?.controllers?.exports?.onShow(data);
            },
            alert: isEnableAlert('export'),
            node:
              exportNode ||
              renderActionNode(
                'export',
                <CloudDownloadOutlinedIcon fontSize="inherit" />
              ),
          }
        : undefined,

      extra: enableExtra
        ? extraActions.reduce((result: any, action) => {
            result.push({
              key: action.key,
              title: action.title,
              alert: action.alert,
              node:
                action?.node ??
                renderActionNode(
                  action.key,
                  <ExpandCircleDownOutlinedIcon fontSize="inherit" />,
                  !isNil(action.tooltip)
                    ? action.tooltip || action.title
                    : action.title
                ),
              onClick: action.action,
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
