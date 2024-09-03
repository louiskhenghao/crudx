import { PropsWithChildren, useState } from 'react';
import { useDeepCompareEffect } from '@crudx/common';
import Skeleton from '@mui/material/Skeleton';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableFooter from '@mui/material/TableFooter';
import MuiTableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import cn from 'classnames';
import isNil from 'lodash/isNil';
import uniq from 'lodash/uniq';

import { InferDataColumnType } from '../../@types';
import { TableHead, TableHeadProps } from '../TableHead';
import { TablePagination } from '../TablePagination';
import { TableRow, TableRowProps } from '../TableRow';

import { TableProps } from './props';
import { StyledPaginationWrapper, StyledTable } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Table = <TData,>(props: PropsWithChildren<TableProps<TData>>) => {
  // =============== PROPS
  const {
    data = [],
    columns = [],
    checked = [],
    total,
    loading = false,
    bordered = true,
    borderStyle = 'preset',
    borderStyleOptions,
    striped = false,
    loadingRows = 10,
    pagination = true,
    expandable = false,
    stickyHeader = false,
    page,
    pageSize,
    pageSizeOptions,
    checkbox,
    children,
    // table head
    tableHeadProps,
    tableHeadBackgroundColor,
    tableHeadBorderTop,
    tableHeadBorderBottom,
    // table row
    tableRowContentVAlign,
    tableRowCheckboxVAlign,
    // custom view
    topView,
    emptyView,
    noDataView,
    loadingView,
    footerView,
    // view props
    tableContainerProps,
    tableBodyProps,
    tableRowProps,
    tableFooterProps,
    tablePaginationProps,
    // function
    onCheck,
    onRowClick,
    onRowExpand,
    onColumnSort,
    onPageChange,
    onPageSizeChange,
    renderExpandedView,
    renderPagination,
    ...restProps
  } = props;

  // =============== STATE
  const [checkedState, setCheckedState] =
    useState<InferDataColumnType<TData>[]>(checked);

  // =============== VARIABLES
  const hasData = data?.length > 0;
  const hasDefinedTotal = !isNil(total);
  const hasChecked = checkedState?.length > 0;
  const enableCheckbox = checkbox?.enabled ?? false;
  const columnLength = enableCheckbox ? columns.length + 1 : columns.length;
  const hasStickySet = !isNil(stickyHeader);
  const isStickyEnabled =
    hasStickySet &&
    ((typeof stickyHeader === 'boolean' && stickyHeader) ||
      typeof stickyHeader === 'object');

  // ================== HELPERS
  const getCheckedStatus = (): TableHeadProps<TData>['checked'] => {
    if (hasDefinedTotal && hasChecked) {
      if (checkedState.length >= total) return 'all';
      return 'partial';
    }
    if (hasChecked) {
      if (data.length === checkedState.length) return 'all';
      return 'partial';
    }
    return 'none';
  };

  // =============== HELPERS
  const triggerCheckboxUpdate = (val: InferDataColumnType<TData>[]) => {
    setCheckedState(val);
    onCheck?.(val);
  };

  const extractCheckedValue = (
    val: TData
  ): InferDataColumnType<TData> | null => {
    if (!checkbox?.enabled) return null;
    if (typeof val === 'number' || typeof val === 'string') {
      return val as InferDataColumnType<TData>;
    }
    if (!checkbox.dataIndex) {
      return val as InferDataColumnType<TData>;
    }
    return val?.[checkbox.dataIndex] as InferDataColumnType<TData>;
  };

  // =============== EFFECTS
  useDeepCompareEffect(() => {
    triggerCheckboxUpdate(checked);
  }, [checked]);

  // =============== EVENTS
  const onHandleCheckAll: TableHeadProps<TData>['onCheckAll'] = (
    checked,
    state
  ) => {
    // stop acton if checkbox wasn't enabled
    if (!checkbox?.enabled) return;
    if (!checked) {
      triggerCheckboxUpdate([]);
      return;
    }

    const indexes = data.reduce((r: InferDataColumnType<TData>[], e) => {
      const value = extractCheckedValue(e);
      if (value) r.push(value);
      return r;
    }, []);

    // if checkbox in checked state
    if (state === 'partial') {
      if (indexes.some((e) => checkedState.includes(e))) {
        const filtered = checkedState.filter((e) => !indexes.includes(e));
        triggerCheckboxUpdate(filtered);
        return;
      }
    }
    triggerCheckboxUpdate(uniq([...checkedState, ...indexes]));
  };

  const onHandleCheckItem: TableRowProps<TData>['onCheck'] = (
    checked,
    record
  ) => {
    const value = record;
    if (!value) return;
    if (checked) {
      triggerCheckboxUpdate([...checkedState, value]);
    } else {
      triggerCheckboxUpdate(checkedState.filter((e) => e !== value));
    }
  };

  // =============== RENDER FUNCTIONS
  const renderMuiTableBodyContent = () => {
    if (loading) {
      if (loadingView) return loadingView;
      return [...Array(loadingRows)].map((e, i) => (
        <MuiTableRow key={i} className="table-row-loading">
          {enableCheckbox && <MuiTableCell colSpan={1} />}
          {columns.map((c) => (
            <MuiTableCell
              key={c.key}
              align="center"
              {...c.dataColumnProps}
              sx={{ width: c.width, ...c.dataColumnProps?.sx }}
            >
              <Skeleton height={30} />
            </MuiTableCell>
          ))}
        </MuiTableRow>
      ));
    }
    if (!hasData) {
      return (
        <MuiTableRow className="table-row-empty">
          <MuiTableCell colSpan={columnLength} align="center" padding="none">
            {emptyView ?? (
              <Typography py={12} height={'100%'}>
                {noDataView ?? 'No Data'}
              </Typography>
            )}
          </MuiTableCell>
        </MuiTableRow>
      );
    }
    return data.map((e, i) => {
      const checkIndex = extractCheckedValue(e);
      const isChecked = checkIndex ? checkedState.includes(checkIndex) : false;
      return (
        <TableRow
          {...tableRowProps}
          key={i}
          data={e}
          columns={columns}
          checkbox={checkbox}
          checked={isChecked}
          expandable={expandable}
          valign={tableRowContentVAlign}
          valignCheckbox={tableRowCheckboxVAlign}
          onCheck={onHandleCheckItem}
          onClick={onRowClick ? (r, e) => onRowClick(r, e, i) : undefined}
          onExpand={onRowExpand ? (r, e) => onRowExpand(r, e, i) : undefined}
          renderExpandedView={
            renderExpandedView
              ? (record, expanded) => renderExpandedView(record, expanded, i)
              : undefined
          }
        />
      );
    });
  };

  // =============== VIEWS
  return (
    <div className="table-main-wrapper">
      {topView && <div className="table-top-container">{topView}</div>}
      <MuiTableContainer
        {...tableContainerProps}
        sx={{
          position: 'relative',
          // if sticky enabled, set for table height
          ...(isStickyEnabled
            ? {
                maxHeight:
                  typeof stickyHeader !== 'boolean'
                    ? stickyHeader.tableMaxHeight || 1000
                    : 1000,
              }
            : {}),
          ...tableContainerProps?.sx,
        }}
      >
        {/* =============== TABLE */}
        <StyledTable
          className={cn('table', `style-${borderStyle}`, { striped, bordered })}
          borderStyleOptions={borderStyleOptions}
          tableHeadBackgroundColor={tableHeadBackgroundColor}
          sx={{ opacity: loading ? 0.4 : 1, ...restProps.sx }}
          {...restProps}
        >
          {/* =============== TABLE HEAD */}
          <TableHead
            columns={columns}
            checkbox={checkbox}
            sticky={isStickyEnabled}
            borderTop={tableHeadBorderTop}
            borderBottom={tableHeadBorderBottom}
            onSort={onColumnSort}
            checked={getCheckedStatus()}
            onCheckAll={onHandleCheckAll}
            {...tableHeadProps}
          />

          {/* =============== TABLE BODY */}
          <MuiTableBody {...tableBodyProps}>
            {renderMuiTableBodyContent()}
            {/* extra view with `children` */}
            {children}
          </MuiTableBody>

          {/* =============== TABLE FOOTER */}
          {footerView && (
            <MuiTableFooter {...tableFooterProps}>{footerView}</MuiTableFooter>
          )}
        </StyledTable>
      </MuiTableContainer>
      {/* =============== PAGINATION */}
      {pagination && (
        <StyledPaginationWrapper className="table-pagination-wrapper">
          {renderPagination?.({
            page,
            total,
            data,
            pageSize,
            pageSizeOptions,
            onPageChange,
            onPageSizeChange,
          }) ?? (
            <TablePagination
              page={page}
              total={total}
              data={data}
              pageSize={pageSize}
              pageSizeOptions={pageSizeOptions}
              onPageChange={onPageChange}
              onPageSizeChange={onPageSizeChange}
              {...tablePaginationProps}
            />
          )}
        </StyledPaginationWrapper>
      )}
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default Table;
