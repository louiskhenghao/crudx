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
    '.crud-page-header-breadcrumbs': {
      marginBottom: theme.spacing(1),
    },
  };
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default StyledWrapper;
