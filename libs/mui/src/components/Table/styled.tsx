import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import MuiTableCell, {
  TableCellProps as MuiTableCellProps,
} from '@mui/material/TableCell';

import { TableColumnType } from '../../@types';

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
    borderCollapse: 'separate',
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

export const StyledTableCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) =>
    !['striped', 'bordered', 'sticky'].includes(prop as string),
})<MuiTableCellProps & Pick<TableColumnType, 'sticky'>>((props) => {
  const { sticky } = props;
  return {
    ...(!sticky
      ? {}
      : {
          left: 0,
          zIndex: 1,
          position: 'sticky !important' as any,
        }),
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
