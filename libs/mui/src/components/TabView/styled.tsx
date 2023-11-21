import { styled } from '@mui/material/styles';
import Tab, { TabProps } from '@mui/material/Tab';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledTab = styled(Tab, {
  shouldForwardProp: (prop) => !['unstyled'].includes(prop as string),
})<TabProps & { unstyled?: boolean }>(({ theme, unstyled }) => {
  if (unstyled) return {};
  return {
    '.MuiChip-root': {
      height: 24,
      '.MuiChip-label': {
        paddingLeft: 8,
        paddingRight: 8,
      },
    },
  };
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default StyledTab;
