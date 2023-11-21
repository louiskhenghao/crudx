import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';

import { TableProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledTable = styled(MuiTable, {
  shouldForwardProp: (prop) =>
    !['striped', 'bordered'].includes(prop as string),
})<MuiTableProps & Pick<TableProps, 'striped' | 'bordered'>>((props) => {
  const { striped, bordered, theme } = props;
  return {
    ...(!striped
      ? {}
      : {
          '.table-row:nth-of-type(odd) td': {
            background: theme.palette.action.hover,
          },
        }),
    // hide last border'
    '.table-row:last-child td, .table-row:last-child th': {
      border: 0,
    },
    ...(bordered ? {} : { '.table-row td': { border: 0 } }),
  };
});

export const StyledPaginationWrapper = styled(Box)((props) => {
  const { theme } = props;
  return {
    borderTop: `1px solid ${theme.palette.divider}`,
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
