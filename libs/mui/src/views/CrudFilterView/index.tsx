import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cn from 'classnames';

import { RenderFlexView } from '../../components/RenderFlexView';

import { CrudFilterViewProps } from './props';
import { StyledWrapper } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudFilterView = memo((props: CrudFilterViewProps) => {
  const { unstyled, className, title, actions, spacingMultiplier, children } =
    props;

  // =============== VARIABLES
  const hasActions =
    typeof actions === 'function' ||
    (typeof actions === 'object' && actions.length > 0);

  // =============== VIEW
  if (!title && !children && !actions) {
    return null;
  }
  return (
    <StyledWrapper
      unstyled={unstyled}
      spacingMultiplier={spacingMultiplier}
      hasActions={hasActions}
      className={cn('crud-filter-wrapper', className)}
    >
      {/* ---- TITLE */}
      {title && (
        <Typography
          className="crud-filter-title"
          variant="subtitle1"
          fontWeight="700"
        >
          {title}
        </Typography>
      )}

      {/* ---- CONTENT */}
      {!!children && <Box className="crud-filter-content">{children}</Box>}

      {/* ---- ACTIONS */}
      {typeof actions === 'function' && (
        <Box className="crud-filter-actions">{actions()}</Box>
      )}
      {typeof actions === 'object' && actions.length > 0 && (
        <Box className="crud-filter-actions">
          <RenderFlexView items={[actions]} />
        </Box>
      )}
    </StyledWrapper>
  );
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudFilterView;
