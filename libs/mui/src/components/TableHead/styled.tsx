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
    Pick<
      TableHeadProps,
      'divider' | 'stickyHeader' | 'tableHeadColumnBorder'
    > & {
      options?: TableHeadProps['dividerProps'];
    }
>((props) => {
  const { divider, options, theme, stickyHeader, tableHeadColumnBorder } =
    props;
  const borderStyle =
    tableHeadColumnBorder === 'preset'
      ? {
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
        }
      : {
          position: 'relative',
          '::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: options?.width ?? 1,
            height: options?.height ?? '100%',
            right: 0,
            top: 0,
            bottom: 0,
            marginTop: 'auto',
            marginBottom: 'auto',
            background: options?.color ?? theme.palette.divider,
          },
          '::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: options?.width ?? '100%',
            height: options?.height ?? 1,
            bottom: 0,
            right: 0,
            background: options?.color ?? theme.palette.divider,
          },
          ':last-child::after': {
            content: 'none',
          },
        };
  return {
    '.MuiTableCell-head': {
      background: stickyHeader ? undefined : theme.palette.action.selected,
      ...(!divider ? {} : borderStyle),
      ...(stickyHeader
        ? {
            border: 'hidden',
          }
        : {}),
    },
    ...(stickyHeader
      ? {
          position: 'sticky' as any,
          top: 0,
          zIndex: 3,
        }
      : {}),
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
