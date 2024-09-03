import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import MuiTableRow, {
  TableRowProps as MuiTableRowProps,
} from '@mui/material/TableRow';

import { TableProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */

/**
 * table
 */
export const StyledTable = styled(MuiTable, {
  shouldForwardProp: (prop) =>
    !['borderStyleOptions', 'tableHeadBackgroundColor'].includes(
      prop as string
    ),
})<
  MuiTableProps &
    Pick<TableProps, 'borderStyleOptions' | 'tableHeadBackgroundColor'>
>((props) => {
  const { theme, borderStyleOptions, tableHeadBackgroundColor } = props;
  const palette = theme.palette;
  const dividerWidth = borderStyleOptions?.width ?? 1;
  const dividerColor = borderStyleOptions?.color ?? palette.divider;
  const tableHeadColor = tableHeadBackgroundColor ?? palette.background.default;

  return {
    borderCollapse: 'separate',

    /**
     * default table cell background color
     * ------------------------------
     */
    '.MuiTableRow-head .MuiTableCell-head': {
      backgroundColor: tableHeadColor,
    },
    '.MuiTableCell-root': {
      backgroundColor: palette.background.paper,
    },

    /**
     * bordered table style
     * ------------------------------
     */
    '&.bordered': {
      '.MuiTableRow-head .MuiTableCell-head': {
        borderTop: `${dividerWidth}px solid ${dividerColor}`,
        borderLeft: `${dividerWidth}px solid ${dividerColor}`,
        borderBottom: `${dividerWidth}px solid ${dividerColor}`,
        '&:first-of-type': {
          borderLeft: 0,
        },
      },
      '.MuiTableRow-root .MuiTableCell-body': {
        borderBottom: `${dividerWidth}px solid ${dividerColor}`,
        borderLeft: `${dividerWidth}px solid ${dividerColor}`,
        '&:first-of-type': {
          borderLeft: 0,
        },
      },
      '.MuiTableBody-root .MuiTableRow-root:last-child td': {
        borderBottom: 0,
      },
    },

    /**
     * bordered border style
     * ------------------------------
     */
    '&.style-default': {},
    '&.style-preset': {
      // preset style for table head
      '.MuiTableHead-root  .MuiTableCell-head': {
        position: 'relative',
        borderTop: '0 !important',
        borderLeft: '0 !important',
        borderRight: '0 !important',
        borderBottom: '0 !important',
        '&.sticky::before, ::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: dividerWidth,
          height: '40%',
          top: 0,
          left: 0,
          right: 'initial',
          bottom: 0,
          marginTop: 'auto',
          marginBottom: 'auto',
          background: dividerColor,
        },
        '&.sticky:first-of-type::before, :first-of-type::before': {
          content: 'none',
        },
        '&.sticky::after, ::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: dividerWidth,
          height: '40%',
          left: 'initial',
          top: 0,
          right: 0,
          bottom: 0,
          marginTop: 'auto',
          marginBottom: 'auto',
          background: dividerColor,
        },
        ':last-child::after': {
          content: 'none',
        },
      },

      '.MuiTableRow-root .MuiTableCell-body': {
        '&:not(.sticky)': {
          border: 0,
        },
        '&.sticky': {
          borderBottom: 0,
        },
      },
    },

    /**
     * stripe table row with background color
     * ------------------------------
     */
    '&.striped': {
      '.MuiTableBody-root .MuiTableRow-root:nth-of-type(even)': {
        '.MuiTableCell-root': {
          background: palette.background.default,
        },
      },
    },

    /**
     * table header
     * ------------------------------
     */
    '.MuiTableHead-root': {
      // sticky header
      '&.sticky .MuiTableCell-root': {
        top: 0,
        zIndex: 1,
        position: 'sticky',
      },
      // sticky column of the header, override even header
      '.MuiTableCell-root': {
        '&.sticky': {
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 2,
        },
        '&.border-left': {
          borderLeft: `${dividerWidth}px solid ${dividerColor}`,
        },
        '&.border-right': {
          borderRight: `${dividerWidth}px solid ${dividerColor}`,
        },
        '&.none-border-left': {
          borderLeft: 0,
        },
        '&.none-border-right': {
          borderRight: 0,
        },
        '&.position-right': {
          right: 0,
        },
      },
    },

    /**
     * sticky body row column
     * ------------------------------
     */
    '.MuiTableBody-root': {
      // sticky column of the body table row
      '.MuiTableRow-root .MuiTableCell-root': {
        '&.sticky': {
          left: 0,
          zIndex: 1,
          position: 'sticky',
        },

        '&.border-left': {
          borderLeft: `${dividerWidth}px solid ${dividerColor}`,
        },
        '&.border-right': {
          borderRight: `${dividerWidth}px solid ${dividerColor}`,
        },
        '&.none-border-left': {
          borderLeft: 0,
        },
        '&.none-border-right': {
          borderRight: 0,
        },

        '&.position-right': {
          right: 0,
        },
      },
    },
  };
});

/**
 * styled table row
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
 * styled pagination wrapper
 */
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
  StyledTableRow,
  StyledPaginationWrapper,
};
