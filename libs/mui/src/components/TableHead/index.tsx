import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import cn from 'classnames';
import isEmpty from 'lodash/isEmpty';

import { TableColumnType } from '../../@types';

import { TableHeadProps } from './props';

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
    sticky: stickyHeader,
    backgroundColor,
    onSort,
    onCheckAll,
    ...restProps
  } = props;

  // =============== VARIABLES
  const columnLength = columns.length;
  const enableCheckbox = checkbox?.enabled ?? false;
  const enableCheckboxSticky = checkbox?.sticky ?? false;
  const hasCheckBoxSticky = enableCheckbox && enableCheckboxSticky;
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
    index: number,
    colSpan?: number,
    rowSpan?: number,
    groupType?: 'group' | 'item'
  ) => {
    const { key, sticky } = column;
    const isCurrent = orderByState === key;

    const isFirstItem = index === 0;
    const isLastItem = columnLength === index + 1;
    const isFirstSticky = isFirstItem && (sticky || hasCheckBoxSticky);
    const isPrevSticky = !isFirstItem && columns[index - 1].sticky;
    const isNextSticky = !isLastItem && columns[index + 1].sticky;
    const hideBorderLeft = (isFirstSticky || isPrevSticky) && !isLastItem;
    const hideBorderRight = isLastItem || isNextSticky;

    return (
      <MuiTableCell
        key={key}
        className={cn('table-head-row-item', `column-${key}`, {
          sticky: sticky,
          'position-right': sticky,
          'table-head-group': groupType === 'group',
          'table-head-group-item': groupType === 'item',
          'border-left': sticky,
          'border-right': sticky,
          'none-border-left': hideBorderLeft,
          'none-border-right': hideBorderRight,
        })}
        {...column.headerColumnProps}
        sx={{
          width: column.width,
          minWidth: column.minWidth,
          fontSize: '0.8rem',
          fontWeight: '600 !important',
          whiteSpace: 'nowrap',
          zIndex: sticky ? 4 : undefined,
          ...column.headerColumnProps?.sx,
        }}
        align={column.alignTitle ?? column.align ?? 'left'}
        valign={'middle'}
        sortDirection={isCurrent ? defaultOrderDirection : false}
        colSpan={colSpan}
        rowSpan={rowSpan}
      >
        {renderColumnContent(column)}
      </MuiTableCell>
    );
  };

  // =============== VIEWS
  if (columns.length === 0) return null;

  return (
    <MuiTableHead
      className={cn('table-head', className, {
        sticky: stickyHeader,
      })}
      {...restProps}
      sx={{
        backgroundColor,
        ...restProps.sx,
      }}
    >
      <MuiTableRow
        className={cn('table-head-row', tableRowProps?.className)}
        {...tableRowProps}
      >
        {enableCheckbox && (
          <MuiTableCell
            className={cn('table-head-row-item checkbox-column ', {
              'sticky border-right': enableCheckboxSticky,
            })}
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
          </MuiTableCell>
        )}
        {header.map((col, index) => {
          if (col?.group) {
            return renderColumn(col.group, index, col.span, undefined, 'group');
          }
          if (!hasGroup) {
            return renderColumn(col.content as TableColumnType<TData>, index);
          }
          return renderColumn(
            col.content as TableColumnType<TData>,
            index,
            1,
            2
          );
        })}
      </MuiTableRow>
      {hasGroup && (
        <MuiTableRow
          className={cn(
            'table-head-row-item grouping-column',
            tableRowProps?.className
          )}
          {...tableRowProps}
        >
          {header.map((col) => {
            if (!col?.group) return null;
            return col?.content?.map((column, index) => {
              return renderColumn(column, index, undefined, undefined, 'item');
            });
          })}
        </MuiTableRow>
      )}
    </MuiTableHead>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableHead;
