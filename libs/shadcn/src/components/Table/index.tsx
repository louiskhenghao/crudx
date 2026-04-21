import { PropsWithChildren, useState } from 'react';
import { useDeepCompareEffect } from '@crudx/common';
import isNil from 'lodash/isNil';
import uniq from 'lodash/uniq';

import { InferDataColumnType } from '../../@types';
import { extractCheckboxValue } from '../../adapters/use-table-state';
import { cn } from '../../lib/cn';
import { Skeleton } from '../../primitives/skeleton';
import { TableHead, TableHeadProps } from '../TableHead';
import { TablePagination } from '../TablePagination';
import { TableRow, TableRowProps } from '../TableRow';

import { TableProps } from './props';
import { tableVariants } from './variants';

const normaliseSize = (
  size: 'sm' | 'md' | 'small' | 'medium' | undefined
): 'sm' | 'md' => {
  if (size === 'small' || size === 'sm') return 'sm';
  return 'md';
};

const toCssDim = (v: number | string | undefined) => {
  if (v == null) return undefined;
  if (typeof v === 'number') return `${v}px`;
  return v;
};

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
    size,
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
    className,
    style,
    ...restProps
  } = props;

  // =============== STATE
  const [checkedState, setCheckedState] =
    useState<InferDataColumnType<TData>[]>(checked);

  // =============== VARIABLES
  const normalizedSize = normaliseSize(size);
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
  const stickyMaxHeight = isStickyEnabled
    ? typeof stickyHeader !== 'boolean'
      ? stickyHeader.tableMaxHeight || 1000
      : 1000
    : undefined;

  // ================== HELPERS
  const getCheckedStatus = (): TableHeadProps<TData>['checked'] => {
    if (hasDefinedTotal && hasChecked) {
      if (checkedState.length >= (total ?? 0)) return 'all';
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

  // =============== EFFECTS
  useDeepCompareEffect(() => {
    triggerCheckboxUpdate(checked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  // =============== EVENTS
  const onHandleCheckAll: TableHeadProps<TData>['onCheckAll'] = (
    c,
    state
  ) => {
    if (!checkbox?.enabled) return;
    if (!c) {
      triggerCheckboxUpdate([]);
      return;
    }

    const indexes = data.reduce((r: InferDataColumnType<TData>[], e) => {
      const value = extractCheckboxValue<TData>(e, checkbox);
      if (value != null) r.push(value);
      return r;
    }, []);

    if (state === 'partial') {
      if (indexes.some((e) => checkedState.includes(e))) {
        const filtered = checkedState.filter((e) => !indexes.includes(e));
        triggerCheckboxUpdate(filtered);
        return;
      }
    }
    triggerCheckboxUpdate(uniq([...checkedState, ...indexes]));
  };

  const onHandleCheckItem: TableRowProps<TData>['onCheck'] = (c, record) => {
    const value = record;
    if (value == null) return;
    if (c) {
      triggerCheckboxUpdate([...checkedState, value]);
    } else {
      triggerCheckboxUpdate(checkedState.filter((e) => e !== value));
    }
  };

  // =============== RENDER FUNCTIONS
  const renderTableBodyContent = () => {
    if (loading) {
      if (loadingView) return loadingView;
      return [...Array(loadingRows)].map((_e, i) => (
        <tr key={i} className="table-row-loading">
          {enableCheckbox && <td colSpan={1} />}
          {columns.map((c) => (
            <td
              key={c.key}
              style={{
                width: c.width,
                textAlign: 'center',
                ...c.dataColumnProps?.style,
              }}
              {...c.dataColumnProps}
            >
              <Skeleton className="h-[30px] w-full" />
            </td>
          ))}
        </tr>
      ));
    }
    if (!hasData) {
      return (
        <tr className="table-row-empty">
          <td
            colSpan={columnLength}
            className="text-center p-0"
            style={{ padding: 0 }}
          >
            {emptyView ?? (
              <div className="py-12 h-full">{noDataView ?? 'No Data'}</div>
            )}
          </td>
        </tr>
      );
    }
    return data.map((e, i) => {
      const checkIndex = extractCheckboxValue<TData>(e, checkbox);
      const isChecked =
        checkIndex != null ? checkedState.includes(checkIndex) : false;
      return (
        <TableRow
          {...tableRowProps}
          key={i}
          data={e}
          position={i}
          columns={columns}
          checkbox={checkbox}
          checked={isChecked}
          expandable={expandable}
          valign={tableRowContentVAlign}
          valignCheckbox={tableRowCheckboxVAlign}
          onCheck={onHandleCheckItem}
          onClick={onRowClick ? (r, ev) => onRowClick(r, ev, i) : undefined}
          onExpand={onRowExpand ? (r, ex) => onRowExpand(r, ex, i) : undefined}
          renderExpandedView={
            renderExpandedView
              ? (record, ex) => renderExpandedView(record, ex, i)
              : undefined
          }
        />
      );
    });
  };

  const tableInlineVars: React.CSSProperties = {
    ...(borderStyleOptions?.color
      ? ({
          ['--crudx-border-color' as any]: borderStyleOptions.color,
        } as React.CSSProperties)
      : {}),
    ...(borderStyleOptions?.width
      ? ({
          ['--crudx-border-width' as any]: toCssDim(borderStyleOptions.width),
        } as React.CSSProperties)
      : {}),
    ...(tableHeadBackgroundColor
      ? ({
          ['--crudx-head-bg' as any]: tableHeadBackgroundColor,
        } as React.CSSProperties)
      : {}),
    opacity: loading ? 0.4 : 1,
    ...style,
  };

  const { style: containerStyle, className: containerClassName, ...restContainer } =
    tableContainerProps ?? {};

  // =============== VIEWS
  return (
    <div className="table-main-wrapper">
      {topView && <div className="table-top-container">{topView}</div>}
      <div
        {...restContainer}
        className={cn('relative w-full overflow-auto', containerClassName)}
        style={{
          ...(isStickyEnabled ? { maxHeight: stickyMaxHeight } : {}),
          ...containerStyle,
        }}
      >
        {/* =============== TABLE */}
        <table
          className={cn(
            'table',
            `style-${borderStyle}`,
            tableVariants({
              striped,
              bordered,
              borderStyle,
              size: normalizedSize,
            }),
            className
          )}
          style={tableInlineVars}
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
          <tbody {...tableBodyProps}>
            {renderTableBodyContent()}
            {/* extra view with `children` */}
            {children}
          </tbody>

          {/* =============== TABLE FOOTER */}
          {footerView && <tfoot {...tableFooterProps}>{footerView}</tfoot>}
        </table>
      </div>
      {/* =============== PAGINATION */}
      {pagination && (
        <div className="table-pagination-wrapper border-t border-[hsl(var(--border))]">
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
        </div>
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
