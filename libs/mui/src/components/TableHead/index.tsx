import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import cn from 'classnames';
import isEmpty from 'lodash/isEmpty';

import { TableColumnType } from '../../@types';
import { StyledTableCell } from '../Table/styled';

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
    stickyHeader,
    columnBorder,
    backgroundColor = '#eeeeee',
    onSort,
    onCheckAll,
    ...restProps
  } = props;

  // =============== VARIABLES
  const enableCheckbox = checkbox?.enabled ?? false;
  const defaultOrderBy = sorting?.defaultOrder;
  const defaultOrderDirection = sorting?.defaultDirection ?? 'asc';
  // restructure header based on its settings
  const header = useMemo(() => {
    // recompose header array based on its settings
    const list = columns.map((item) => {
      // if there is no group setting
      if (!item.group) return { content: item, span: 1 };
      // group key when there is column being found based on key
      const groupKey = item.group?.key;
      const groupItems = columns.filter(
        (subItem) => subItem.group && subItem.group.key === groupKey
      );
      return {
        group: item.group,
        content: groupItems,
        span: groupItems.length,
      };
    });
    return list.filter((item, index, self) => {
      const foundIndex = self.findIndex((t) => {
        return t.group && item.group && t.group.key === item.group.key;
      });
      return index === foundIndex || !item.group;
    });
  }, [columns]);
  const hasGroup = useMemo(() => {
    const group = header.filter((col) => !!col?.group);
    return !isEmpty(group);
  }, [header]);
  const isColumnBorderDefault = columnBorder === 'default';
  const columnBorderStyle =
    isColumnBorderDefault || hasGroup ? 'default' : 'preset';

  // =============== STATE
  const [orderByState, setOrderByState] = useState(defaultOrderBy);
  const [orderDirectionState, setOrderDirectionState] = useState(
    defaultOrderDirection
  );

  // =============== EFFECTS
  useEffect(() => {
    return setOrderByState(defaultOrderBy);
  }, [defaultOrderBy]);

  useEffect(() => {
    return setOrderDirectionState(defaultOrderDirection);
  }, [defaultOrderDirection]);

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

  const renderColumn = (
    column: TableColumnType<TData>,
    colSpan?: number,
    rowSpan?: number,
    groupType?: 'group' | 'item'
  ) => {
    const { key, sticky } = column;
    const isCurrent = orderByState === key;
    return (
      <StyledTableCell
        key={key}
        className={cn({
          'table-head-group': groupType === 'group',
          'table-head-group-item': groupType === 'item',
        })}
        {...column.headerColumnProps}
        sx={{
          width: column.width,
          minWidth: column.minWidth,
          fontSize: '0.8rem',
          fontWeight: '600 !important',
          whiteSpace: 'nowrap',
          zIndex: sticky ? 3 : undefined,
          ...column.headerColumnProps?.sx,
        }}
        align={column.alignTitle ?? column.align ?? 'left'}
        valign={'middle'}
        sortDirection={isCurrent ? defaultOrderDirection : false}
        sticky={sticky}
        colSpan={colSpan}
        rowSpan={rowSpan}
      >
        {renderColumnContent(column)}
      </StyledTableCell>
    );
  };

  // =============== VIEWS
  if (columns.length === 0) return null;

  return (
    <StyledTableHead
      className={cn('table-head', className)}
      divider={divider}
      options={dividerProps}
      stickyHeader={stickyHeader}
      columnBorder={columnBorderStyle}
      backgroundColor={backgroundColor}
      {...restProps}
    >
      <TableRow
        className={cn('table-head-row', tableRowProps?.className)}
        {...tableRowProps}
      >
        {enableCheckbox && (
          <TableCell
            padding="checkbox"
            align="center"
            valign="middle"
            rowSpan={hasGroup ? 2 : undefined}
          >
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
          if (col?.group) {
            return renderColumn(col.group, col.span, undefined, 'group');
          }
          if (!hasGroup) {
            return renderColumn(col.content as TableColumnType<TData>);
          }
          return renderColumn(col.content as TableColumnType<TData>, 1, 2);
        })}
      </TableRow>
      {hasGroup && (
        <TableRow
          className={cn(
            'table-head-row grouping-column',
            tableRowProps?.className
          )}
          {...tableRowProps}
        >
          {header.map((col) => {
            if (!col?.group) return null;
            return col?.content?.map((column) => {
              return renderColumn(column, undefined, undefined, 'item');
            });
          })}
        </TableRow>
      )}
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
