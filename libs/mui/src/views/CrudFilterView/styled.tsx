import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => !['visible'].includes(prop as string),
})<BoxProps & { unstyled?: boolean }>(({ theme, unstyled }) => {
  if (unstyled) return {};
  return {
    '.crud-filter-title': {
      marginBottom: theme.spacing(1.5),
    },
    '.crud-filter-content': {
      marginBottom: theme.spacing(1),
    },
    '.crud-filter-content-expand-view': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
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
