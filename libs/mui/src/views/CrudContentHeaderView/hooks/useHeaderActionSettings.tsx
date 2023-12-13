import { useMemo } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import forEach from 'lodash/forEach';
import omit from 'lodash/omit';

import { TableSettingsDensityOptions } from '../../../components/TableSettingsDensityOptions';
import { TableSettingsOptions } from '../../../components/TableSettingsOptions';
import { TableSettingsSortingOptions } from '../../../components/TableSettingsSortingOptions';
import { TooltipView } from '../../../components/TooltipView';
import { getTooltipText } from '../../../helpers';
import { defaultText } from '../config';
import { CrudContentHeaderViewProps } from '../props';
import { CrudContentHeaderItemNode } from '../types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// hooks to get header actions
export const useHeaderActionSettings = (
  props: CrudContentHeaderViewProps
): {
  views: CrudContentHeaderItemNode[];
} => {
  const {
    text,
    sortingType,
    expanded,
    headerExpandView,
    headerActions = [],
    headerActionSize = 'small',
    onTriggerCreate,
    onTriggerRefresh,
    onTriggerSettings,
    onTriggerSorting,
    onTriggerDensity,
    onTriggerExpand,
  } = props;

  // =============== VARIABLES
  const createText = text?.createText ?? defaultText?.createText;
  const collapseText = text?.collapseText ?? defaultText?.collapseText;
  const expandText = text?.expandText ?? defaultText?.expandText;

  // =============== VIEWS
  const views = useMemo(() => {
    const viewList: CrudContentHeaderItemNode[] = [];

    // ----- loop of actions
    forEach(headerActions, (field, i) => {
      const type = field.action;
      const tooltip = field.tooltip;
      const enabled = field.enabled ?? true;

      // ----- create button
      if (type === 'create' && enabled) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const tooltips = getTooltipText('create', {
              tooltip,
              createText,
            });
            return (
              <TooltipView {...tooltips}>
                <Button
                  size={headerActionSize}
                  variant="outlined"
                  onClick={onTriggerCreate}
                  {...field.props}
                >
                  {field?.node ?? createText}
                </Button>
              </TooltipView>
            );
          },
        });
      }

      // ----- refresh
      if (type === 'refresh' && enabled) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const tooltips = getTooltipText('refresh', { tooltip });
            return (
              <TooltipView {...tooltips}>
                <IconButton
                  size={headerActionSize}
                  onClick={onTriggerRefresh}
                  {...field.props}
                >
                  {field?.icon ?? <CachedIcon />}
                </IconButton>
              </TooltipView>
            );
          },
        });
      }

      // ----- settings
      if (type === 'settings' && enabled) {
        const tooltips = getTooltipText('settings', { tooltip });
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            return (
              <TableSettingsOptions
                size={headerActionSize}
                icon={field?.icon}
                items={field.items}
                tooltip={omit(tooltips, ['enabled'])}
                buttonProps={field.props}
                onChange={onTriggerSettings}
              />
            );
          },
        });
      }

      // ----- sorting
      if (type === 'sorting' && enabled) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const tooltips = getTooltipText('sorting', { tooltip });
            return (
              <TableSettingsSortingOptions
                size={headerActionSize}
                icon={field?.icon}
                selected={sortingType}
                text={text?.sorting ?? defaultText?.sorting}
                tooltip={omit(tooltips, ['enabled'])}
                buttonProps={field.props}
                onChange={onTriggerSorting}
              />
            );
          },
        });
      }

      // ----- density
      if (type === 'density' && enabled) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const tooltips = getTooltipText('density', { tooltip });
            return (
              <TableSettingsDensityOptions
                size={headerActionSize}
                icon={field?.icon}
                text={text?.density ?? defaultText?.density}
                tooltip={omit(tooltips, ['enabled'])}
                buttonProps={field.props}
                onChange={onTriggerDensity}
              />
            );
          },
        });
      }

      // ----- expand
      if (type === 'expand' && !!headerExpandView && enabled) {
        const collapseIcon = field?.icon?.collapse ?? <ExpandLessIcon />;
        const expandIcon = field?.icon?.expand ?? <ExpandMoreIcon />;
        const finalExpandText = field?.text?.expand ?? expandText;
        const finalCollapseText = field?.text?.collapse ?? collapseText;
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const tooltips = getTooltipText('expand', { tooltip });
            return (
              <TooltipView {...tooltips}>
                <Button
                  variant="text"
                  size={headerActionSize}
                  {...field.props}
                  onClick={(e) => {
                    const current = expanded ?? false;
                    field?.props?.onClick?.(e);
                    onTriggerExpand?.(current, !current);
                  }}
                  endIcon={expanded ? collapseIcon : expandIcon}
                >
                  {expanded ? finalCollapseText : finalExpandText}
                </Button>
              </TooltipView>
            );
          },
        });
      }

      // ----- custom
      if (type === 'custom') {
        viewList.push({
          key: `${field.key}-${i}`,
          render: () => {
            const tooltips = getTooltipText(field.key, { tooltip });
            return (
              <TooltipView {...tooltips}>
                {
                  field.render?.({
                    tableSize: headerActionSize,
                    expanded: expanded ?? false,
                  }) as any
                }
              </TooltipView>
            );
          },
        });
      }
    });

    return viewList;
  }, [
    text,
    headerActionSize,
    sortingType,
    createText,
    collapseText,
    headerExpandView,
    expandText,
    expanded,
    headerActions,
    onTriggerCreate,
    onTriggerRefresh,
    onTriggerSettings,
    onTriggerSorting,
    onTriggerExpand,
    onTriggerDensity,
  ]);

  return { views };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useHeaderActionSettings;
