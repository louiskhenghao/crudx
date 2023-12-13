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
    !['unstyled', 'spacingMultiplier'].includes(prop as string),
})<BoxProps & { unstyled?: boolean; spacingMultiplier?: number }>(
  ({ theme, unstyled, spacingMultiplier }) => {
    if (unstyled) return {};
    const hasMultiplier = !isNil(spacingMultiplier);
    return {
      '.crud-content-header-wrapper': {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        border: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.paper,
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

      '.crud-content-items-wrapper': {
        paddingTop: theme.spacing(hasMultiplier ? spacingMultiplier * 4 : 4),
        paddingBottom: theme.spacing(hasMultiplier ? spacingMultiplier * 4 : 4),
      },
      '.crud-content-pagination-wrapper': {
        padding: theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2),
        '.MuiPagination-ul': {
          justifyContent: 'center',
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
