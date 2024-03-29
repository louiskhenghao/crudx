import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import cn from 'classnames';

import { TableColumnType } from '../../@types';

import { TableHeadProps } from './props';
import { StyledTableHead } from './styled';
import {StyledTableCell} from "../Table/styled";
import {isEmpty} from "lodash";

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
    tableHeadColumnBorder ,
    stickyHeader,
    ...restProps
  } = props;

  // =============== VARIABLES
  const enableCheckbox = checkbox?.enabled ?? false;
  const defaultOrderBy = sorting?.defaultOrder;
  const defaultOrderDirection = sorting?.defaultDirection ?? 'asc';
  const headerGroup = columns.map(item => {
    if (!item.group) return {
      content: item,
      span: 1
    };
    const groupKey = item?.group?.key;
    const groupItems = columns.filter(subItem => subItem.group && subItem.group.key === groupKey);
    return {
      group: item.group,
      content: groupItems,
      span: groupItems.length
    };
  });

  const header = headerGroup.filter((item, index, self) =>
      index === self.findIndex(t => (
        t.group && item.group && t.group.key === item.group.key
      )) || !item?.group
  );
  const group = header.filter((col) => !!col?.group);
  const hasGroup = !isEmpty(group);

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
      onSort?.(key, nextDirection, e);
    };
  };

  // =============== RENDER FUNCTIONS
  const renderColumnContent = (column: TableColumnType<TData>) => {
    const { key, title, sortable, uppercase = true } = column;
    const isStringTitle = typeof title === 'string';
    const columnTitle =
      isStringTitle && uppercase ? title.toUpperCase() : title;
    const isCurrent = orderByState === key;

    if (!sortable) {
      return columnTitle;
    }
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

  const renderColumn = (column: TableColumnType<TData>, colSpan?: number, rowSpan?: number) => {
    const { key, sticky } = column;
    const isCurrent = orderByState === key;
    return (
      <StyledTableCell
        key={key}
        {...column.headerColumnProps}
        sx={{
          width: column.width,
          fontSize: '0.8rem',
          fontWeight: '600 !important',
          whiteSpace: 'nowrap',
          zIndex: sticky ? 3 : undefined,
          background: sticky || stickyHeader ? '#eeeeee' : undefined,
          ...column.headerColumnProps?.sx,
        }}
        align={column.align ?? 'left'}
        valign={'middle'}
        sortDirection={isCurrent ? defaultOrderDirection : false}
        sticky={sticky}
        colSpan={colSpan}
        rowSpan={rowSpan}
      >
        {renderColumnContent(column)}
      </StyledTableCell>
    );
  }

  const renderHeader = () => {

    if (!hasGroup) return (
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
        {header.map((col) => {
          if (col?.group) return renderColumn(col.group, col.span)
          return renderColumn(col.content as TableColumnType<TData>)
        })}
      </TableRow>
    )
    return (
      <>
        <TableRow
          className={cn('table-head-row', tableRowProps?.className)}
          {...tableRowProps}
        >
          {enableCheckbox && (
            <StyledTableCell padding="checkbox" align="center" valign="middle" rowSpan={2}>
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
            </StyledTableCell>
          )}
          {header.map((col) => {
            if (col?.group) return renderColumn(col.group, col.span)
            return renderColumn(col.content as TableColumnType<TData>, 1, 2)
          })}
        </TableRow>
        <TableRow
          className={cn('table-head-row', tableRowProps?.className)}
          {...tableRowProps}
        >
          {header.map((col) => {
            if (!col?.group) return null;
            return (
              <>
                {col?.content?.map((column) => {
                  return renderColumn(column)
                })}
              </>
            )
          })}
        </TableRow>
      </>
    )
  }

  // =============== VIEWS
  if (columns.length === 0) return null;

  return (
    <StyledTableHead
      className={cn('table-head', className)}
      divider={divider}
      tableHeadColumnBorder={tableHeadColumnBorder ?? hasGroup ? 'default' : 'preset'}
      options={dividerProps}
      stickyHeader={stickyHeader}
      {...restProps}
    >
      {renderHeader()}
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
