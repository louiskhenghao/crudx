import { styled } from '@mui/material/styles';
import MuiTableRow, {
  TableRowProps as MuiTableRowProps,
} from '@mui/material/TableRow';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledTableRow = styled(MuiTableRow, {
  shouldForwardProp: (prop) => !['clickable'].includes(prop as string),
})<MuiTableRowProps & { clickable?: boolean }>((props) => {
  const { clickable = false, theme } = props;
  return {
    cursor: clickable ? 'pointer' : undefined,
    '&.Mui-selected td': {
      background: `${theme.palette.action.selected} !important`,
    },
  };
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  StyledTableRow,
};
