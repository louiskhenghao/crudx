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
  shouldForwardProp: (prop) =>
    ![
      'divider',
      'options',
      'stickyHeader',
      'columnBorder',
      'backgroundColor',
    ].includes(prop as string),
})<
  MuiTableHeadProps &
    Pick<
      TableHeadProps,
      'divider' | 'stickyHeader' | 'columnBorder' | 'backgroundColor'
    > & {
      options?: TableHeadProps['dividerProps'];
    }
>((props) => {
  const {
    divider,
    options,
    theme,
    stickyHeader,
    columnBorder,
    backgroundColor,
  } = props;

  const isBorderPreset = columnBorder === 'preset';
  const dividerColor = options?.color ?? theme.palette.divider;
  const dividerWidth = options?.width ?? 1;

  const borderStyle = isBorderPreset
    ? {
        position: 'relative',
        '::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: dividerWidth,
          height: options?.height ?? '40%',
          right: 0,
          top: 0,
          bottom: 0,
          marginTop: 'auto',
          marginBottom: 'auto',
          background: dividerColor,
        },
        ':last-child::after': {
          content: 'none',
        },
      }
    : {
        borderTop: `${dividerWidth}px solid ${dividerColor}`,
        borderBottom: `${dividerWidth}px solid ${dividerColor}`,
        borderRight: `${dividerWidth}px solid ${dividerColor}`,
        ':not(&.table-head-group-item):first-child': {
          borderLeft: `${dividerWidth}px solid ${dividerColor}`,
        },
        '&.table-head-group-item': {
          borderTop: 'none',
        },
      };

  return {
    background: backgroundColor,
    '.MuiTableCell-head': {
      ...(divider ? borderStyle : {}),
    },
    ...(!stickyHeader ? {} : { position: 'sticky', top: 0, zIndex: 3 }),
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
