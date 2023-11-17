import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

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
    headerExpandNode: expandNode,
    onTriggerTab,
  } = props;

  // =============== HOOKS
  const { views: headerInfoViews } = useHeaderInfos(props);
  const { views: headerActionViews } = useHeaderActionSettings(props);

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
          onChange={onTriggerTab}
        />
      </StyledBox>
    );
  }

  // default header
  if (
    headerInfoViews.length === 0 &&
    headerActionViews.length === 0 &&
    headerTabs.length === 0
  ) {
    return null;
  }
  return (
    <StyledBox className="crud-table-header-wrapper">
      <Grid container justifyContent="start">
        {headerInfoViews.length > 0 && (
          <Grid item className="crud-table-header-infos">
            <Stack
              flexWrap="wrap"
              alignItems="center"
              direction="row"
              spacing={1}
            >
              {headerInfoViews.map((e) => {
                return <Fragment key={`${e.key}`}>{e.render()}</Fragment>;
              })}
            </Stack>
          </Grid>
        )}

        {headerActionViews.length > 0 && (
          <>
            <Grid item flex="auto" />
            <Grid item className="crud-table-header-actions">
              {headerActionViews.map((e) => {
                return <Fragment key={`${e.key}`}>{e.render()}</Fragment>;
              })}
            </Grid>
          </>
        )}
      </Grid>
      {/* ====== EXPAND CONTENT */}
      {expanded && (
        <div className="crud-table-header-expanded-content">
          {typeof expandNode === 'function' ? expandNode() : expandNode}
        </div>
      )}

      {/* ====== TABS */}
      <TabView
        {...headerTabsProps}
        items={headerTabs}
        onChange={onTriggerTab}
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
