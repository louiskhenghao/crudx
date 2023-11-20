import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import cn from 'classnames';

import { RenderNodeView } from '../../../../components/RenderNodeView';
import { TabView } from '../../../../components/TabView';

import { useHeaderActionSettings } from './hooks/useHeaderActionSettings';
import { useHeaderInfos } from './hooks/useHeaderInfo';
import { CrudTableHeaderViewProps } from './props';
import { StyledBox } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudTableHeaderView = (props: CrudTableHeaderViewProps) => {
  const {
    expanded,
    headerTabs = [],
    headerTabsProps,
    headerViewNode: viewNode,
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

  // =============== VIEW
  // if there is custom header render
  if (viewNode) {
    const view = typeof viewNode === 'function' ? viewNode() : viewNode;
    if (!view) return null;
    return (
      <StyledBox className="crud-table-header-wrapper">
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
  if (!hasInfos && !hasActions && !hasTabs) {
    return null;
  }
  return (
    <StyledBox className="crud-table-header-wrapper">
      {(hasInfos || hasActions) && (
        <Grid
          container
          justifyContent="start"
          alignItems="center"
          className="crud-table-header-primary"
        >
          {headerInfoViews.length > 0 && (
            <Grid item className="crud-table-header-infos">
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
              <Grid item className="crud-table-header-actions">
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
        <div className="crud-table-header-expanded-content">
          {typeof expandNode === 'function' ? expandNode() : expandNode}
        </div>
      )}

      {/* ====== TABS */}
      <TabView
        {...headerTabsProps}
        className={cn('crud-table-header-tabview', headerTabsProps?.className)}
        items={headerTabs}
        onChange={onTabChange}
      />
    </StyledBox>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableHeaderView;
