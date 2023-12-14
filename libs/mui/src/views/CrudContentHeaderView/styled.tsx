import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Styled box
export const StyledBox = styled(Box)(() => {
  return {
    '.crud-content-header-primary': {
      minHeight: 65,
      '.crud-content-header-infos': {},
      '.crud-content-header-actions': {},
    },
    '.crud-content-header-expanded-content': {},
    '.crud-content-header-tabview': {
      '.tabview-tabs-item': {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: 48,
      },
    },
  };
});
