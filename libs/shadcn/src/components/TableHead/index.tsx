import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import isEmpty from 'lodash/isEmpty';

import { TableColumnType } from '../../@types';
import { getColumnStickyState } from '../../adapters/column-sticky';
import { cn } from '../../lib/cn';
import { Checkbox } from '../../primitives/checkbox';

import { TableHeadProps } from './props';

const alignToClass = (a?: 'left' | 'center' | 'right') =>
  a === 'center' ? 'text-center' : a === 'right' ? 'text-right' : 'text-left';

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
    borderTop = true,
    borderBottom = true,
    backgroundColor,
    onSort,
    onCheckAll,
    style,
    ...restProps
  } = props;

  // =============== VARIABLES
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
    setOrderByState(defaultOrderBy);
  }, [defaultOrderBy]);

  useEffect(() => {
    setOrderDirectionState(defaultOrderDirection);
  }, [defaultOrderDirection]);

  // =============== EVENTS
  const onHandleSortClick = (key: string) => {
    return (e: React.MouseEvent) => {
      const isCurrent = key === orderByState;
      const isAsc = isCurrent && orderDirectionState === 'asc';
      const nextDirection: 'asc' | 'desc' = isAsc ? 'desc' : 'asc';
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
      isStringTitle && uppercase ? (title as string).toUpperCase() : title;
    const isCurrent = orderByState === key;

    if (!sortable) {
      return columnTitle;
    }

    const Icon = !isCurrent
      ? ArrowUpDown
      : orderDirectionState === 'desc'
      ? ArrowDown
      : ArrowUp;

    return (
      <button
        type="button"
        onClick={onHandleSortClick(key)}
        className={cn(
          'inline-flex items-center gap-1 font-inherit text-inherit bg-transparent border-0 cursor-pointer',
          isCurrent ? 'opacity-100' : 'opacity-70 hover:opacity-100'
        )}
      >
        {columnTitle}
        <Icon className="h-3.5 w-3.5" />
        {isCurrent && (
          <span className="sr-only">
            {orderDirectionState === 'desc'
              ? 'sorted descending'
              : 'sorted ascending'}
          </span>
        )}
      </button>
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
    const sticky_ = getColumnStickyState(columns, index, hasCheckBoxSticky);
    const { hideBorderLeft, hideBorderRight } = sticky_;

    const align = column.alignTitle ?? column.align ?? 'left';

    const baseHeadClass = cn(
      'crudx-table-head-row-item',
      `crudx-column-${key}`,
      'relative align-middle font-normal text-accent-foreground [&:has([role=checkbox])]:pe-0',
      alignToClass(align),
      {
        sticky: sticky,
        'position-right': sticky,
        'table-head-group': groupType === 'group',
        'table-head-group-item': groupType === 'item',
        'border-left': sticky,
        'border-right': sticky,
        'border-top': borderTop,
        'border-bottom': borderBottom,
        'none-border-left': hideBorderLeft,
        'none-border-right': hideBorderRight,
        'none-border-top': !borderTop,
        'none-border-bottom': !borderBottom,
      }
    );

    const {
      style: headerStyle,
      className: headerClassName,
      ...restHeaderProps
    } = column.headerColumnProps ?? {};

    return (
      <th
        key={key}
        className={cn(baseHeadClass, headerClassName)}
        style={{
          width: column.width,
          minWidth: column.minWidth,
          zIndex: sticky ? 4 : undefined,
          verticalAlign: 'middle',
          ...headerStyle,
        }}
        colSpan={colSpan}
        rowSpan={rowSpan}
        {...restHeaderProps}
      >
        {renderColumnContent(column)}
      </th>
    );
  };

  // =============== VIEWS
  if (columns.length === 0) return null;

  return (
    <thead
      {...restProps}
      className={cn(
        'crudx-table-head',
        stickyHeader && 'sticky top-0 z-10',
        className
      )}
      style={style}
    >
      <tr
        {...tableRowProps}
        className={cn(
          'crudx-table-head-row bg-[var(--crudx-head-bg,color-mix(in_oklab,var(--muted)_40%,transparent))]',
          borderBottom && '[&>th]:border-b',
          tableRowProps?.className
        )}
        style={{ backgroundColor, ...tableRowProps?.style }}
      >
        {enableCheckbox && (
          <th
            className={cn(
              'crudx-table-head-row-item crudx-checkbox-column',
              'relative w-[44px] text-center align-middle [&:has([role=checkbox])]:pe-0',
              {
                'sticky crudx-border-right': hasCheckBoxSticky,
                'crudx-border-top': borderTop,
                'crudx-border-bottom': borderBottom,
                'crudx-none-border-top': !borderTop,
                'crudx-none-border-bottom': !borderBottom,
              }
            )}
            rowSpan={hasGroup ? 2 : undefined}
            style={{ verticalAlign: 'middle' }}
          >
            <Checkbox
              aria-label="Select all"
              indeterminate={checked === 'partial'}
              checked={checked === 'all'}
              onCheckedChange={(state) => {
                onCheckAll?.(state === true, checked);
              }}
            />
          </th>
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
      </tr>
      {hasGroup && (
        <tr
          {...tableRowProps}
          className={cn(
            'crudx-table-head-row-item crudx-grouping-column',
            tableRowProps?.className
          )}
        >
          {header.map((col) => {
            if (!col?.group) return null;
            const children = col?.content as TableColumnType<TData>[];
            return children?.map((column, index) =>
              renderColumn(column, index, undefined, undefined, 'item')
            );
          })}
        </tr>
      )}
    </thead>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableHead;
