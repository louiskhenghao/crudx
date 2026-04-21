import { useMemo } from 'react';
import { ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import forEach from 'lodash/forEach';
import omit from 'lodash/omit';

import { Button } from '../../../primitives/button';
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
    headerActionSize = 'sm',
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
      const tooltip = (field as any).tooltip;
      const enabled = (field as any).enabled ?? true;

      // ----- create button
      if (type === 'create' && enabled) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const tooltips = getTooltipText('create', { tooltip, createText });
            return (
              <TooltipView {...tooltips}>
                <Button
                  size={headerActionSize}
                  variant="outline"
                  onClick={onTriggerCreate}
                  {...(field as any).props}
                >
                  {(field as any)?.node ?? createText}
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
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={onTriggerRefresh}
                  {...(field as any).props}
                >
                  {(field as any)?.icon ?? <RefreshCw className="h-4 w-4" />}
                </Button>
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
                icon={(field as any)?.icon}
                items={(field as any).items}
                tooltip={omit(tooltips, ['enabled'])}
                buttonProps={(field as any).props}
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
                icon={(field as any)?.icon}
                selected={sortingType}
                text={text?.sorting ?? defaultText?.sorting}
                tooltip={omit(tooltips, ['enabled'])}
                buttonProps={(field as any).props}
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
                icon={(field as any)?.icon}
                text={text?.density ?? defaultText?.density}
                tooltip={omit(tooltips, ['enabled'])}
                buttonProps={(field as any).props}
                onChange={onTriggerDensity}
              />
            );
          },
        });
      }

      // ----- expand
      if (type === 'expand' && !!headerExpandView && enabled) {
        const f = field as any;
        const collapseIcon = f?.icon?.collapse ?? (
          <ChevronUp className="h-4 w-4" />
        );
        const expandIcon = f?.icon?.expand ?? (
          <ChevronDown className="h-4 w-4" />
        );
        const finalExpandText = f?.text?.expand ?? expandText;
        const finalCollapseText = f?.text?.collapse ?? collapseText;
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const tooltips = getTooltipText('expand', { tooltip });
            return (
              <TooltipView {...tooltips}>
                <Button
                  variant="ghost"
                  size={headerActionSize}
                  {...f.props}
                  onClick={(e) => {
                    const current = expanded ?? false;
                    f?.props?.onClick?.(e);
                    onTriggerExpand?.(current, !current);
                  }}
                >
                  {expanded ? finalCollapseText : finalExpandText}
                  {expanded ? collapseIcon : expandIcon}
                </Button>
              </TooltipView>
            );
          },
        });
      }

      // ----- custom
      if (type === 'custom') {
        const f = field as any;
        viewList.push({
          key: `${f.key}-${i}`,
          render: () => {
            const tooltips = getTooltipText(f.key, { tooltip });
            return (
              <TooltipView {...tooltips}>
                {
                  f.render?.({
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
