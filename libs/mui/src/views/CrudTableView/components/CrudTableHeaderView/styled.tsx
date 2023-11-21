import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Styled box
export const StyledBox = styled(Box)(() => {
  return {
    '.crud-table-header-primary': {
      minHeight: 65,
      '.crud-table-header-infos': {},
      '.crud-table-header-actions': {},
    },
    '.crud-table-header-expanded-content': {},
    '.crud-table-header-tabview': {
      '.tabview-tabs-item': {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: 48,
      },
    },
  };
});
