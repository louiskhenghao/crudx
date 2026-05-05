import { cn } from '../../lib/cn';
import { RenderNodeView } from '../../components/RenderNodeView';
import { TabView } from '../../components/TabView';

import { useHeaderActionSettings } from './hooks/useHeaderActionSettings';
import { useHeaderInfos } from './hooks/useHeaderInfo';
import { CrudContentHeaderViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudContentHeaderView = (props: CrudContentHeaderViewProps) => {
  const {
    expanded,
    headerTabs = [],
    headerTabsProps,
    headerTabState,
    headerCustomView: viewNode,
    headerExtraView: extraNode,
    headerExpandView: expandNode,
    onTabChange,
  } = props;

  // =============== HOOKS
  const { views: headerInfoViews } = useHeaderInfos(props);
  const { views: headerActionViews } = useHeaderActionSettings(props);

  // =============== VARIABLES
  const hasInfos = headerInfoViews.length > 0;
  const hasActions = headerActionViews.length > 0;
  const hasTabs = headerTabs.length > 0;
  const hasExpand = !!expandNode;
  const hasExtra = !!extraNode;

  // =============== VIEW
  // if there is custom header render
  if (viewNode) {
    const view = typeof viewNode === 'function' ? viewNode() : viewNode;
    if (!view) return null;
    return (
      <div className="crudx-content-header-wrapper">
        {view}
        <TabView
          {...headerTabsProps}
          items={headerTabs}
          onChange={onTabChange}
        />
      </div>
    );
  }

  // default header
  if (!hasInfos && !hasActions && !hasTabs && !hasExpand && !hasExtra) {
    return null;
  }
  return (
    <div className="crudx-content-header-wrapper">
      {(hasInfos || hasActions) && (
        <div className="crudx-content-header-primary flex flex-wrap items-center gap-2 px-4 py-3 border-b border-[hsl(var(--border))]">
          {headerInfoViews.length > 0 && (
            <div className="crudx-content-header-infos">
              <RenderNodeView
                direction="row"
                alignItems="center"
                gap={4}
                items={headerInfoViews.map((e) => ({
                  key: e.key,
                  content: e.render,
                }))}
              />
            </div>
          )}

          {headerActionViews.length > 0 && (
            <div className="crudx-content-header-actions ml-auto">
              <RenderNodeView
                direction="row"
                alignItems="center"
                gap={2}
                items={headerActionViews.map((e) => ({
                  key: e.key,
                  content: e.render,
                }))}
              />
            </div>
          )}
        </div>
      )}
      {/* ====== EXPAND CONTENT */}
      {expanded && (
        <div className="crudx-content-header-expanded-content border-b border-[hsl(var(--border))]">
          {typeof expandNode === 'function' ? expandNode() : expandNode}
        </div>
      )}

      {/* ====== TABS */}
      {hasTabs && (
        <TabView
          {...headerTabsProps}
          className={cn(
            'crudx-content-header-tabview',
            headerTabsProps?.className
          )}
          value={headerTabState}
          items={headerTabs}
          onChange={onTabChange}
        />
      )}

      {/* ====== EXTRA CONTENT */}
      {extraNode && (
        <div className="crudx-content-header-extra-content border-t border-[hsl(var(--border))]">
          {typeof extraNode === 'function' ? extraNode() : extraNode}
        </div>
      )}
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export * from './types';
export default CrudContentHeaderView;
