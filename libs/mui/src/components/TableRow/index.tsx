import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import TableCell from '@mui/material/TableCell';
import MUITableRow from '@mui/material/TableRow';
import cn from 'classnames';

import { TableColumnType } from '../../@types';

import { TableRowProps } from './props';
import { StyledTableRow } from './styled';

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
    onCheck,
    onClick,
    onExpand,
    renderExpandedView,
    ...restProps
  } = props;

  // =============== VARIABLES
  const clickable = !!onClick || expandable;
  const enableCheckbox = checkbox?.enabled ?? false;

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
    onCheck?.(checkedState, record, {
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
        {enableCheckbox && (
          <TableCell padding="checkbox" align="center">
            <Checkbox
              color="primary"
              checked={checked}
              onClick={(e) => e.stopPropagation()}
              onChange={onHandleCheckbox}
            />
          </TableCell>
        )}
        {columns.map((column, index) => {
          return (
            <TableCell
              key={`${column.key}-${index}`}
              align={column.align ?? 'left'}
              {...column.dataColumnProps}
              sx={{
                width: column.width,
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
