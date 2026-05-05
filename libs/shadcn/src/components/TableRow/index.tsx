import React, { useEffect, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

import { InferDataColumnType, TableColumnType } from '../../@types';
import {
  getColumnPinningStyle,
  getColumnStickyState,
} from '../../adapters/column-sticky';
import { cn } from '../../lib/cn';
import { Checkbox } from '../../primitives/checkbox';

import { TableRowProps } from './props';

const alignToClass = (a?: 'left' | 'center' | 'right') =>
  a === 'center' ? 'text-center' : a === 'right' ? 'text-right' : 'text-left';

const valignToStyle = (
  v?: 'top' | 'middle' | 'bottom' | 'baseline'
): React.CSSProperties['verticalAlign'] => v ?? 'middle';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TableRow = <TData,>(props: TableRowProps<TData>) => {
  const {
    className,
    position,
    data,
    checkbox,
    columns = [],
    checked = false,
    expandable = false,
    expandableProps,
    valign,
    valignCheckbox,
    onCheck,
    onClick,
    onExpand,
    renderExpandedView,
    ...restProps
  } = props;

  // =============== VARIABLES
  const clickable = !!onClick || expandable;
  const enableCheckbox = checkbox?.enabled ?? false;
  const enableCheckboxSticky = checkbox?.sticky ?? false;
  const hasCheckBoxSticky = enableCheckbox && enableCheckboxSticky;

  // =============== STATE
  const [expanded, setExpanded] = useState(false);

  // =============== EFFECTS
  useEffect(() => {
    if (!expandable) return;
    onExpand?.(data, expanded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, expandable]);

  // =============== EVENTS
  const onClickRow = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick?.(data, event);
    if (!expandable) return;
    setExpanded(!expanded);
  };

  const onHandleCheckbox = (state: boolean | 'indeterminate') => {
    if (!enableCheckbox) return;
    const checkedState = state === true;
    let record = data;
    if (checkbox?.dataIndex) {
      record = (data as any)?.[checkbox.dataIndex];
    }
    onCheck?.(checkedState, record as InferDataColumnType<TData>, { data });
  };

  // =============== HELPERS
  const renderColumnData = (column: TableColumnType<TData>, index: number) => {
    if (!data) return null;
    const { dataIndex, render } = column;
    const result = dataIndex ? (data as any)[dataIndex] : data;
    if (render) return render(result, data, position ?? -1, index);
    if (typeof result === 'object') return JSON.stringify(result);
    return result;
  };

  // =============== VIEWS
  return (
    <>
      <tr
        {...restProps}
        data-state={checked ? 'selected' : undefined}
        className={cn(
          'crudx-table-row [&:not(:last-child)>td]:border-b [&_>td]:border-border hover:bg-muted/40 data-[state=selected]:bg-muted/50',
          clickable && 'cursor-pointer',
          className
        )}
        onClick={onClickRow}
      >
        {/* CHECKBOX */}
        {enableCheckbox && (
          <td
            data-sticky={hasCheckBoxSticky ? 'left' : undefined}
            className={cn(
              'crudx-table-row-item crudx-checkbox-column text-center align-middle !px-3',
              hasCheckBoxSticky && 'sticky bg-background/90 backdrop-blur-xs',
              {
                'border-right': hasCheckBoxSticky,
              }
            )}
            style={{
              verticalAlign: valignToStyle(valignCheckbox),
              ...(hasCheckBoxSticky ? { left: 0, zIndex: 3 } : {}),
            }}
          >
            <Checkbox
              checked={checked}
              onClick={(e) => e.stopPropagation()}
              onCheckedChange={onHandleCheckbox}
            />
          </td>
        )}
        {/* OTHER COLUMNS */}
        {columns.map((column, index) => {
          const { key, sticky, dataIndex } = column;
          const { hideBorderLeft, hideBorderRight } = getColumnStickyState(
            columns,
            index,
            hasCheckBoxSticky
          );
          const { side, offset, isLastLeftPinned, isFirstRightPinned } =
            getColumnPinningStyle(columns, index, hasCheckBoxSticky);

          const result = dataIndex ? (data as any)[dataIndex] : data;
          const finalClassName =
            typeof column?.className === 'function'
              ? column.className?.(result, data, index)
              : column.className;

          const {
            style: cellStyle,
            className: cellClassName,
            ...restCellProps
          } = column.dataColumnProps ?? {};

          const boxShadow = isLastLeftPinned
            ? '-4px 0 4px -4px rgb(0 0 0 / 0.15) inset'
            : isFirstRightPinned
            ? '4px 0 4px -4px rgb(0 0 0 / 0.15) inset'
            : undefined;

          return (
            <td
              key={`${key}-${index}`}
              data-sticky={sticky ? side ?? true : undefined}
              className={cn(
                'crudx-table-row-item',
                `crudx-column-${key}`,
                'align-middle [&:has([role=checkbox])]:pe-0',
                alignToClass(column.align ?? 'left'),
                sticky && 'sticky bg-background/90 backdrop-blur-xs',
                {
                  'position-right': sticky && side === 'right',
                  'position-left': sticky && side === 'left',
                  'border-left': sticky,
                  'border-right': sticky,
                  'none-border-left': hideBorderLeft,
                  'none-border-right': hideBorderRight,
                },
                finalClassName,
                cellClassName
              )}
              style={{
                width: column.width,
                minWidth: column.minWidth,
                verticalAlign: valignToStyle(column.valign ?? valign),
                ...(sticky ? { zIndex: 3 } : {}),
                ...(sticky && side === 'left' ? { left: offset } : {}),
                ...(sticky && side === 'right' ? { right: offset } : {}),
                ...(boxShadow ? { boxShadow } : {}),
                ...cellStyle,
              }}
              {...restCellProps}
            >
              <>{renderColumnData(column, index)}</>
            </td>
          );
        })}
      </tr>
      {expandable && (
        <tr className="crudx-table-row-expand">
          <td
            colSpan={columns.length + (enableCheckbox ? 1 : 0)}
            style={{ padding: 0 }}
            {...expandableProps}
          >
            <Collapsible.Root open={expanded}>
              <Collapsible.Content>
                {renderExpandedView?.(data, expanded)}
              </Collapsible.Content>
            </Collapsible.Root>
          </td>
        </tr>
      )}
    </>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TableRow;
