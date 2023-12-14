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
      '.crud-page-header-wrapper': {
        marginBottom: theme.spacing(hasMultiplier ? spacingMultiplier * 3 : 3),
      },
      '.crud-filter-wrapper': {
        borderRadius: 10,
        border: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.paper,
        padding: theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2),
        marginBottom: theme.spacing(hasMultiplier ? spacingMultiplier * 3 : 3),
      },
      '.crud-table-wrapper': {
        borderRadius: 10,
        border: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(hasMultiplier ? spacingMultiplier * 3 : 3),

        '.crud-content-header-primary': {
          paddingTop: theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2),
          paddingBottom: theme.spacing(
            hasMultiplier ? spacingMultiplier * 2 : 2
          ),
          paddingLeft: theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2),
          paddingRight: theme.spacing(
            hasMultiplier ? spacingMultiplier * 2 : 2
          ),
        },
      },

      '.crud-content-wrapper': {
        marginTop: theme.spacing(hasMultiplier ? spacingMultiplier * 3 : 3),

        '.crud-content-header-primary': {
          paddingTop: theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2),
          paddingBottom: theme.spacing(
            hasMultiplier ? spacingMultiplier * 2 : 2
          ),
          paddingLeft: theme.spacing(hasMultiplier ? spacingMultiplier * 2 : 2),
          paddingRight: theme.spacing(
            hasMultiplier ? spacingMultiplier * 2 : 2
          ),
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
