import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    !['unstyled', 'spacingMultiplier'].includes(prop as string),
})<BoxProps & { unstyled?: boolean; spacingMultiplier?: number }>(
  ({ theme, unstyled }) => {
    if (unstyled) return {};
    return {
      background: theme.palette.background.paper,
      '.crud-content-header-wrapper': {
        '.crud-content-header-primary': {
          borderBottom: `1px solid ${theme.palette.divider}`,
          '.crud-content-header-infos': {},
          '.crud-content-header-actions': {},
        },
        '.crud-content-header-expanded-content': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
        '.crud-content-header-tabview': {},
        '.crud-content-header-extra-content': {
          borderTop: `1px solid ${theme.palette.divider}`,
        },
      },
    };
  }
);

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default StyledWrapper;
