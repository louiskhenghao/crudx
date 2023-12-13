import Grid from '@mui/material/Grid';
import cn from 'classnames';

import { RenderNodeView } from '../../components/RenderNodeView';
import { TabView } from '../../components/TabView';

import { useHeaderActionSettings } from './hooks/useHeaderActionSettings';
import { useHeaderInfos } from './hooks/useHeaderInfo';
import { CrudContentHeaderViewProps } from './props';
import { StyledBox } from './styled';

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
      <StyledBox className="crud-content-header-wrapper">
        {view}
        <TabView
          {...headerTabsProps}
          items={headerTabs}
          onChange={onTabChange}
        />
      </StyledBox>
    );
  }

  // default header
  if (!hasInfos && !hasActions && !hasTabs && !hasExpand && !hasExtra) {
    return null;
  }
  return (
    <StyledBox className="crud-content-header-wrapper">
      {(hasInfos || hasActions) && (
        <Grid
          container
          justifyContent="start"
          alignItems="center"
          className="crud-content-header-primary"
        >
          {headerInfoViews.length > 0 && (
            <Grid item className="crud-content-header-infos">
              <RenderNodeView
                flexWrap="wrap"
                alignItems="center"
                direction="row"
                spacing={1}
                items={headerInfoViews.map((e) => ({
                  key: e.key,
                  content: e.render,
                }))}
              />
            </Grid>
          )}

          {headerActionViews.length > 0 && (
            <>
              <Grid item flex="auto" />
              <Grid item className="crud-content-header-actions">
                <RenderNodeView
                  flexWrap="wrap"
                  alignItems="center"
                  direction="row"
                  spacing={1}
                  items={headerActionViews.map((e) => ({
                    key: e.key,
                    content: e.render,
                  }))}
                />
              </Grid>
            </>
          )}
        </Grid>
      )}
      {/* ====== EXPAND CONTENT */}
      {expanded && (
        <div className="crud-content-header-expanded-content">
          {typeof expandNode === 'function' ? expandNode() : expandNode}
        </div>
      )}

      {/* ====== TABS */}
      <TabView
        {...headerTabsProps}
        className={cn(
          'crud-content-header-tabview',
          headerTabsProps?.className
        )}
        value={headerTabState}
        items={headerTabs}
        onChange={onTabChange}
      />

      {/* ====== EXTRA CONTENT */}
      {extraNode && (
        <div className="crud-content-header-extra-content">
          {typeof extraNode === 'function' ? extraNode() : extraNode}
        </div>
      )}
    </StyledBox>
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
