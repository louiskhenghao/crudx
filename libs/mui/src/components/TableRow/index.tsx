import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import TableCell from '@mui/material/TableCell';
import MUITableRow from '@mui/material/TableRow';
import cn from 'classnames';

import { InferDataColumnType, TableColumnType } from '../../@types';
import { StyledTableRow } from '../Table/styled';

import { TableRowProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TableRow = <TData,>(props: TableRowProps<TData>) => {
  const {
    className,
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
  const columnLength = columns.length;

  // =============== STATE
  const [expanded, setExpanded] = useState(false);

  // =============== EVENTS
  const onClickRow = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick?.(data, event);
    if (!expandable) return;
    setExpanded(!expanded);
  };

  const onHandleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (!enableCheckbox) return;
    const checkedState = event.target.checked;
    let record = data;
    if (checkbox?.dataIndex) {
      record = data?.[checkbox.dataIndex] as any;
    }
    onCheck?.(checkedState, record as InferDataColumnType<TData>, {
      data,
    });
  };

  // =============== HELPERS
  const renderColumnData = (column: TableColumnType<TData>, index: number) => {
    if (!data) return null;
    const { dataIndex, render } = column;
    const result = dataIndex ? data[dataIndex] : data;
    if (render) return render(result, data, index);
    if (typeof result === 'object') return JSON.stringify(result);

    return result;
  };

  // =============== VIEWS
  return (
    <>
      <StyledTableRow
        className={cn('table-row', className)}
        selected={checked}
        clickable={clickable}
        onClick={onClickRow}
        {...restProps}
      >
        {/* CHECKBOX  */}
        {enableCheckbox && (
          <TableCell
            className={cn('table-row-item checkbox-column ', {
              'sticky border-right': hasCheckBoxSticky,
            })}
            padding="checkbox"
            align="center"
            sx={{ verticalAlign: valignCheckbox ?? 'middle' }}
          >
            <Checkbox
              color="primary"
              checked={checked}
              onClick={(e) => e.stopPropagation()}
              onChange={onHandleCheckbox}
            />
          </TableCell>
        )}
        {/* OTHER COLUMNS  */}
        {columns.map((column, index) => {
          const { key, sticky, dataIndex } = column;
          const isFirstItem = index === 0;
          const isLastItem = columnLength === index + 1;
          const isFirstSticky = isFirstItem && (sticky || hasCheckBoxSticky);
          const isPrevSticky = !isFirstItem && columns[index - 1].sticky;
          const isNextSticky = !isLastItem && columns[index + 1].sticky;
          const hideBorderLeft = (isFirstSticky || isPrevSticky) && !isLastItem;
          const hideBorderRight = isLastItem || isNextSticky;

          const result = dataIndex ? data[dataIndex] : data;
          const finalClassName =
            typeof column?.className === 'function'
              ? column.className?.(result, data, index)
              : column.className;

          return (
            <TableCell
              className={cn('table-row-item', `column-${key}`, finalClassName, {
                'sticky position-right': sticky,
                'border-left': sticky,
                'border-right': sticky,
                'none-border-left': hideBorderLeft,
                'none-border-right': hideBorderRight,
              })}
              key={`${key}-${index}`}
              align={column.align ?? 'left'}
              {...column.dataColumnProps}
              sx={{
                width: column.width,
                minWidth: column.minWidth,
                verticalAlign: column.valign ?? valign ?? 'middle',
                ...column.dataColumnProps?.sx,
              }}
            >
              <>{renderColumnData(column, index)}</>
            </TableCell>
          );
        })}
      </StyledTableRow>
      {expandable && (
        <MUITableRow className="table-row-expand" {...restProps}>
          <TableCell
            padding="none"
            colSpan={columns.length + (enableCheckbox ? 1 : 0)}
            {...expandableProps}
          >
            <Collapse
              timeout="auto"
              in={expanded}
              unmountOnExit
              addEndListener={() => onExpand?.(data, expanded)}
            >
              {renderExpandedView?.(data, expanded)}
            </Collapse>
          </TableCell>
        </MUITableRow>
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
