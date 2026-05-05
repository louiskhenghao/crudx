import { Fragment, ReactNode, useEffect, useMemo, useState } from 'react';
import { useDeepCompareEffect } from '@crudx/common';
import { Loader2 } from 'lucide-react';
import isNil from 'lodash/isNil';

import { TableDataIndex } from '../../@types';
import { cn } from '../../lib/cn';
import { Button } from '../../primitives/button';
import { Checkbox } from '../../primitives/checkbox';
import { SortingOptionType } from '../../components/TableSettingsSortingOptions';
import { CrudContentHeaderView } from '../CrudContentHeaderView';
import { CrudRowItemActions } from '../CrudRowItemActions';

import { defaultProps, defaultText } from './config';
import { CrudContentViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudContentView = <TData = any,>(
  props: CrudContentViewProps<TData>
) => {
  const merged = { ...defaultProps, ...props } as CrudContentViewProps<TData>;
  const {
    className,
    text,
    data = [],
    page,
    title,
    checked = [],
    loading = false,
    pageSize = 10,
    paginateType,
    enableNext,
    enablePrevious,
    totalRecord = 0,
    totalSelected,
    enableItemGroupAction,
    itemActionGroupIcon,
    checkbox,
    itemActions,
    expanded,
    loadingView,
    emptyView,
    noDataView,
    headerCustomView,
    headerExpandView,
    headerExtraView,
    headerTabs,
    headerTabState,
    headerTabsProps,
    headerActions,
    headerActionSize = 'md',
    headerInfos,
    unstyled,
    paginationProps,
    onCheck,
    onTabChange,
    onPageChange,
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
    renderItemView,
    renderActionButtons,
    renderExtraActionButtons,
  } = merged;

  // =============== STATE
  const [sortingType, setSortingType] = useState<SortingOptionType>('DEFAULT');
  const [shouldExpand, setShouldExpand] = useState<boolean>(expanded ?? false);
  const [checkedState, setCheckedState] =
    useState<TableDataIndex<TData>[]>(checked);

  // =============== VARIABLES
  const hasData = data?.length > 0;
  const nextText = text?.nextText ?? defaultText?.nextText;
  const previousText = text?.previousText ?? defaultText?.previousText;

  // =============== EFFECTS
  useEffect(() => setShouldExpand(!!expanded), [expanded]);

  const totalPage = useMemo(() => {
    return Math.max(1, Math.ceil(totalRecord / pageSize));
  }, [totalRecord, pageSize]);

  // =============== HELPERS
  const triggerCheckboxUpdate = (val: TableDataIndex<TData>[]) => {
    setCheckedState(val);
    onCheck?.(val);
  };

  const extractCheckedValue = (val: TData): TableDataIndex<TData> | null => {
    if (!checkbox?.enabled) return null;
    if (typeof val === 'number' || typeof val === 'string') {
      return val as TableDataIndex<TData>;
    }
    if (!checkbox.dataIndex) {
      return val as TableDataIndex<TData>;
    }
    return (val as any)?.[checkbox.dataIndex] as TableDataIndex<TData>;
  };

  const checkedItemByRecord = (d: TData, isChecked: boolean) => {
    const record = extractCheckedValue(d);
    if (isNil(record)) return;
    if (isChecked) {
      triggerCheckboxUpdate([...checkedState, record]);
    } else {
      triggerCheckboxUpdate(checkedState.filter((e) => e !== record));
    }
  };

  // =============== EFFECTS
  useDeepCompareEffect(() => {
    triggerCheckboxUpdate(checked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const renderPaginationView = (): ReactNode => {
    if (renderPagination) {
      return renderPagination({
        page,
        total: totalRecord,
        data,
        pageSize,
        onPageChange,
      });
    }
    if (paginateType === 'none') return null;

    if (paginateType === 'pagination') {
      const currentPage = Math.max(1, page ?? 1);
      return (
        <div
          {...paginationProps}
          className={cn(
            'flex items-center justify-center gap-1',
            paginationProps?.className
          )}
        >
          <Button
            size="sm"
            variant="outline"
            disabled={currentPage <= 1}
            onClick={() => onPageChange?.(currentPage - 1)}
          >
            {previousText}
          </Button>
          <span className="text-sm text-[hsl(var(--muted-foreground))] px-2">
            {currentPage} / {totalPage}
          </span>
          <Button
            size="sm"
            variant="outline"
            disabled={currentPage >= totalPage}
            onClick={() => onPageChange?.(currentPage + 1)}
          >
            {nextText}
          </Button>
        </div>
      );
    }

    return (
      <div className="crudx-content-paginate-button flex flex-wrap items-center justify-center gap-2">
        <Button
          size={headerActionSize}
          variant="outline"
          disabled={!enablePrevious}
          onClick={() => onPaginatePrevious?.()}
        >
          {previousText}
        </Button>
        <Button
          size={headerActionSize}
          variant="outline"
          disabled={!enableNext}
          onClick={() => onPaginateNext?.()}
        >
          {nextText}
        </Button>
      </div>
    );
  };

  const renderContentView = () => {
    if (loading) {
      return (
        <div className="crudx-content-data-loading">
          {loadingView ?? (
            <div className="py-10 text-center">
              <Loader2 className="inline-block h-10 w-10 animate-spin text-[hsl(var(--muted-foreground))]" />
            </div>
          )}
        </div>
      );
    }

    if (!hasData) {
      return (
        <div className="crudx-content-data-empty">
          {emptyView ?? (
            <p className="py-12 text-center text-[hsl(var(--muted-foreground))]">
              {noDataView ?? 'No Data'}
            </p>
          )}
        </div>
      );
    }

    if (!renderItemView) {
      return 'Please implement `renderItemView` for item rendering';
    }

    return (
      <div className="crudx-content-data-items">
        {data.map((record, i) => {
          const checkIndex = extractCheckedValue(record);
          const isChecked = checkIndex
            ? checkedState.includes(checkIndex)
            : false;

          return (
            <Fragment key={`content-item-${i}`}>
              {renderItemView(
                record,
                {
                  checkbox: () => {
                    if (!checkbox?.enabled) return null;
                    return (
                      <Checkbox
                        checked={isChecked}
                        onClick={(e) => e.stopPropagation()}
                        onCheckedChange={(state) =>
                          checkedItemByRecord(record, state === true)
                        }
                      />
                    );
                  },
                  action: () => {
                    return (
                      <CrudRowItemActions
                        data={record}
                        actions={itemActions}
                        node={itemActionGroupIcon}
                        type={enableItemGroupAction ? 'menu' : 'icon'}
                        renderActionButtons={renderActionButtons}
                        renderExtraActionButtons={renderExtraActionButtons}
                      />
                    );
                  },
                },
                {
                  index: i,
                  checked: isChecked,
                  onCheck: (state) => checkedItemByRecord(record, state),
                }
              )}
            </Fragment>
          );
        })}
      </div>
    );
  };

  // =============== VIEW
  return (
    <div
      className={cn('crudx-content-wrapper', !unstyled && 'mt-6', className)}
    >
      {/* ==== HEADER */}
      <CrudContentHeaderView
        text={text as any}
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

      {/* ==== CONTENT */}
      <div className={cn('crudx-content-data-wrapper', !unstyled && 'py-4')}>
        {renderContentView()}
      </div>

      {/* ==== PAGINATION */}
      <div
        className={cn('crudx-content-pagination-wrapper', !unstyled && 'p-2')}
      >
        {renderPaginationView()}
      </div>
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudContentView;
