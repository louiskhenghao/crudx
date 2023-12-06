import { styled } from '@mui/material/styles';
import MuiTableHead, {
  TableHeadProps as MuiTableHeadProps,
} from '@mui/material/TableHead';

import { TableHeadProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const StyledTableHead = styled(MuiTableHead, {
  shouldForwardProp: (prop) => !['divider', 'options'].includes(prop as string),
})<
  MuiTableHeadProps &
    Pick<TableHeadProps, 'divider'> & {
      options?: TableHeadProps['dividerProps'];
    }
>((props) => {
  const { divider, options, theme } = props;
  return {
    '.MuiTableCell-head': {
      background: theme.palette.action.selected,
      ...(!divider
        ? {}
        : {
            position: 'relative',
            '::after': {
              content: '""',
              display: 'block',
              position: 'absolute',
              width: options?.width ?? 2,
              height: options?.height ?? '40%',
              right: 0,
              top: 0,
              bottom: 0,
              marginTop: 'auto',
              marginBottom: 'auto',
              background: options?.color ?? theme.palette.divider,
            },
            ':last-child::after': {
              content: 'none',
            },
          }),
    },
  };
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  StyledTableHead,
};
