import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import isNil from 'lodash/isNil';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    !['unstyled', 'spacingMultiplier', 'hasActions'].includes(prop as string),
})<
  BoxProps & {
    unstyled?: boolean;
    spacingMultiplier?: number;
    hasActions?: boolean;
  }
>(({ theme, unstyled, spacingMultiplier, hasActions }) => {
  if (unstyled) return {};
  const hasMultiplier = !isNil(spacingMultiplier);
  return {
    '.crud-filter-title': {
      marginBottom: theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2),
    },
    '.crud-filter-content': {
      marginBottom: hasActions
        ? theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2)
        : undefined,
    },
    '.crud-filter-actions': {},
  };
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default StyledWrapper;
