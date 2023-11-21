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
      '.crud-table-header-wrapper': {
        '.crud-table-header-primary': {
          borderBottom: `1px solid ${theme.palette.divider}`,
          '.crud-table-header-infos': {},
          '.crud-table-header-actions': {},
        },
        '.crud-table-header-expanded-content': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
        '.crud-table-header-tabview': {},
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
