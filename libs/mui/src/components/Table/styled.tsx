import { styled } from '@mui/material/styles';
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';

import { TableProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledTable = styled(MuiTable, {
  shouldForwardProp: (prop) => !['striped'].includes(prop as string),
})<MuiTableProps & Pick<TableProps, 'striped'>>((props) => {
  const { striped, theme } = props;
  return {
    ...(!striped
      ? {}
      : {
          '.table-row:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  };
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  StyledTable,
};
