import { ReactNode, useEffect, useState } from 'react';
import includes from 'lodash/includes';

import { cn } from '../../lib/cn';
import { Button } from '../../primitives/button';
import { Table } from '../../components/Table';
import { TableProps } from '../../components/Table';
import { SortingOptionType } from '../../components/TableSettingsSortingOptions';
import { CrudContentHeaderView } from '../CrudContentHeaderView';

import { useColumnSettings } from './hooks/useColumnSettings';
import { defaultProps, defaultText } from './config';
import { CrudTableViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudTableView = <TData = any,>(
  props: CrudTableViewProps<TData>
) => {
  const merged = { ...defaultProps, ...props } as CrudTableViewProps<TData>;
  const {
    className,
    size,
    text,
    data,
    page,
    title,
    checked,
    loading,
    pageSize,
    paginateType,
    enableNext,
    enablePrevious,
    pageSizeOptions,
    totalRecord,
    totalSelected,
    tableProps,
    expanded,
    headerCustomView,
    headerExpandView,
    headerExtraView,
    headerTabs,
    headerTabState,
    headerTabsProps,
    headerActions,
    headerActionSize,
    headerInfos,
    unstyled,
    emptyView,
    noDataView,
    onCheck,
    onColumnSort,
    onTabChange,
    onPageChange,
    onPageSizeChange,
    onPaginateNext,
    onPaginatePrevious,
    renderPagination,
    onTriggerBulkAction,
    onTriggerCreate,
    onTriggerRefresh,
    onTriggerSettings,
    onTriggerSorting,
    onTriggerDensity,
    onTriggerExpand,
  } = merged;

  // =============== STATE
  const [tableSize, setTableSize] = useState<TableProps['size']>('md');
  const [sortingType, setSortingType] = useState<SortingOptionType>('DEFAULT');
  const [shouldExpand, setShouldExpand] = useState<boolean>(expanded ?? false);

  // =============== VARIABLES
  const nextText = text?.nextText ?? defaultText?.nextText;
  const previousText = text?.previousText ?? defaultText?.previousText;

  // =============== HOOKS
  const tableColumns = useColumnSettings(merged);

  // =============== EFFECTS
  useEffect(() => setShouldExpand(!!expanded), [expanded]);

  // =============== VIEW
  const renderPaginationView = (args: any): ReactNode => {
    if (includes(['none'], paginateType)) return null;
    if (renderPagination) return renderPagination(args) ?? <></>;
    if (includes(['pagination'], paginateType)) return null;

    return (
      <div className="crud-table-paginate-button flex flex-wrap items-center justify-end gap-2">
        <Button
          size={size as any}
          variant="outline"
          disabled={!enablePrevious}
          onClick={() => onPaginatePrevious?.()}
        >
          {previousText}
        </Button>
        <Button
          size={size as any}
          variant="outline"
          disabled={!enableNext}
          onClick={() => onPaginateNext?.()}
        >
          {nextText}
        </Button>
      </div>
    );
  };

  return (
    <div
      className={cn(
        'crud-table-wrapper',
        !unstyled &&
          'rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] mt-6',
        className
      )}
    >
      <Table
        size={tableSize}
        data={data}
        page={page}
        loading={loading}
        checked={checked}
        total={totalRecord}
        columns={tableColumns}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        pagination={paginateType !== 'none'}
        emptyView={emptyView}
        noDataView={noDataView}
        topView={
          <CrudContentHeaderView
            text={text}
            title={title}
            expanded={shouldExpand}
            sortingType={sortingType}
            totalRecord={totalRecord}
            totalSelected={totalSelected}
            headerCustomView={headerCustomView}
            headerExpandView={headerExpandView}
            headerTabs={headerTabs}
            headerTabState={headerTabState}
            headerTabsProps={headerTabsProps}
            headerInfos={headerInfos}
            headerActions={headerActions}
            headerActionSize={headerActionSize}
            headerExtraView={headerExtraView}
            onTabChange={onTabChange}
            onTriggerCreate={onTriggerCreate}
            onTriggerRefresh={onTriggerRefresh}
            onTriggerSettings={onTriggerSettings}
            onTriggerBulkAction={onTriggerBulkAction}
            onTriggerDensity={(item) => {
              setTableSize(item as TableProps['size']);
              onTriggerDensity?.(item);
            }}
            onTriggerSorting={(item) => {
              setSortingType(item);
              onTriggerSorting?.(item);
            }}
            onTriggerExpand={(current, next) => {
              setShouldExpand(next);
              onTriggerExpand?.(current, next);
            }}
          />
        }
        onCheck={onCheck}
        onColumnSort={onColumnSort}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        renderPagination={renderPaginationView as any}
        {...tableProps}
      />
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudTableView;
