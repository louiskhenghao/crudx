import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import cn from 'classnames';

import { TableColumnType } from '../../@types';

import { TableHeadProps } from './props';
import { StyledTableHead } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TableHead = <TData,>(props: TableHeadProps<TData>) => {
  // =============== PROPS
  const {
    className,
    columns = [],
    checked = 'none',
    sorting = {
      defaultDirection: 'asc',
    },
    checkbox,
    tableRowProps,
    divider = true,
    dividerProps,
    onSort,
    onCheckAll,
    ...restProps
  } = props;

  // =============== VARIABLES
  const enableCheckbox = checkbox?.enabled ?? false;
  const defaultOrderBy = sorting?.defaultOrder;
  const defaultOrderDirection = sorting?.defaultDirection ?? 'asc';

  // =============== STATE
  const [orderByState, setOrderByState] = useState(defaultOrderBy);
  const [orderDirectionState, setOrderDirectionState] = useState(
    defaultOrderDirection
  );

  // =============== EFFECTS
  useEffect(() => setOrderByState(defaultOrderBy), [defaultOrderBy]);
  useEffect(
    () => setOrderDirectionState(defaultOrderDirection),
    [defaultOrderDirection]
  );

  // =============== EVENTS
  const onHandleSortClick = (key: string) => {
    return (e: React.MouseEvent) => {
      const isCurrent = key === orderByState;
      const isAsc = isCurrent && orderDirectionState === 'asc';
      const nextDirection = isAsc ? 'desc' : 'asc';
      setOrderByState(key);
      setOrderDirectionState(nextDirection);
      onSort?.(e, key);
    };
  };

  // =============== RENDER FUNCTIONS
  const renderColumnContent = (column: TableColumnType<TData>) => {
    const { key, title, sortable, uppercase = true } = column;
    const isStringTitle = typeof title === 'string';
    const columnTitle =
      isStringTitle && uppercase ? title.toUpperCase() : title;
    const isCurrent = orderByState === key;

    if (!sortable)
      return (
        <Typography fontSize={12} fontWeight={600} whiteSpace="nowrap">
          {columnTitle}
        </Typography>
      );
    return (
      <TableSortLabel
        active={isCurrent}
        direction={isCurrent ? orderDirectionState : 'asc'}
        onClick={onHandleSortClick(key)}
      >
        {columnTitle}
        {isCurrent && (
          <Box component="span" sx={visuallyHidden}>
            {orderDirectionState === 'desc'
              ? 'sorted descending'
              : 'sorted ascending'}
          </Box>
        )}
      </TableSortLabel>
    );
  };

  // =============== VIEWS
  if (columns.length === 0) return null;

  return (
    <StyledTableHead
      className={cn('table-head', className)}
      divider={divider}
      options={dividerProps}
      {...restProps}
    >
      <TableRow
        className={cn('table-head-row', tableRowProps?.className)}
        {...tableRowProps}
      >
        {enableCheckbox && (
          <TableCell padding="checkbox" align="center" valign="middle">
            <Checkbox
              color="primary"
              indeterminate={checked === 'partial'}
              checked={checked === 'all'}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const checkedState = event.target.checked;
                onCheckAll?.(checkedState, checked);
              }}
              inputProps={{
                'aria-label': 'Select all',
              }}
            />
          </TableCell>
        )}
        {columns.map((column, i) => {
          const { key } = column;
          const isCurrent = orderByState === key;
          return (
            <TableCell
              key={key}
              {...column.headerColumnProps}
              sx={{
                width: column.width,
                ...column.headerColumnProps?.sx,
              }}
              align={column.align ?? 'left'}
              valign={'middle'}
              sortDirection={isCurrent ? defaultOrderDirection : false}
            >
              {renderColumnContent(column)}
            </TableCell>
          );
        })}
      </TableRow>
    </StyledTableHead>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableHead;
