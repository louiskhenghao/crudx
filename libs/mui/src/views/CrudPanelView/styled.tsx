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
    '.crud-page-header-wrapper': {
      marginBottom: theme.spacing(1),
    },
    '.crud-filter-wrapper': {
      padding: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
      border: '1px solid #ccc',
      borderRadius: 5,
    },
    '.crud-table-wrapper': {
      marginTop: theme.spacing(1),
    },
  };
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default StyledWrapper;
