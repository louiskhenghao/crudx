import { Fragment, ReactNode, useEffect, useMemo, useState } from 'react';
import { useDeepCompareEffect } from '@crudx/core';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import cn from 'classnames';
import isNil from 'lodash/isNil';

import { TableDataIndex } from '../../@types';
import { SortingOptionType } from '../../components/TableSettingsSortingOptions';
import { CrudContentHeaderView } from '../CrudContentHeaderView';
import CrudRowItemActions from '../CrudRowItemActions';

import { defaultProps, defaultText } from './config';
import { CrudContentViewProps } from './props';
import { StyledWrapper } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudContentView = <TData = any,>(
  props: CrudContentViewProps<TData>
) => {
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
    headerCustomView,
    headerExpandView,
    headerExtraView,
    headerTabs,
    headerTabState,
    headerTabsProps,
    headerActions,
    headerActionSize = 'medium',
    headerInfos,
    unstyled,
    spacingMultiplier,
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
  } = props;

  // =============== STATE
  const [sortingType, setSortingType] = useState<SortingOptionType>('DEFAULT');
  const [shouldExpand, setShouldExpand] = useState<boolean>(expanded ?? false);
  const [checkedState, setCheckedState] =
    useState<TableDataIndex<TData>[]>(checked);

  // =============== VARIABLES
  const nextText = text?.nextText ?? defaultText?.nextText;
  const previousText = text?.previousText ?? defaultText?.previousText;

  // =============== EFFECTS
  useEffect(() => setShouldExpand(!!expanded), [expanded]);

  const totalPage = useMemo(() => {
    return Math.ceil(totalRecord / pageSize);
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
    return val?.[checkbox.dataIndex] as TableDataIndex<TData>;
  };

  const checkedItemByRecord = (data: TData, checked: boolean) => {
    const record = extractCheckedValue(data);
    if (isNil(record)) return;
    if (checked) {
      triggerCheckboxUpdate([...checkedState, record]);
    } else {
      triggerCheckboxUpdate(checkedState.filter((e) => e !== record));
    }
  };

  const onHandleCheckbox =
    (data: TData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      const isChecked = event.target.checked;
      checkedItemByRecord(data, isChecked);
    };

  // =============== EFFECTS
  useDeepCompareEffect(() => {
    triggerCheckboxUpdate(checked);
  }, [checked]);

  const renderPaginationView = (): ReactNode => {
    // custom render pagination
    if (renderPagination) {
      return renderPagination({
        page,
        total: totalRecord,
        data,
        pageSize,
        onPageChange,
      });
    }
    // if paginate type = null
    if (paginateType === 'none') return null;

    // if paginate type = pagination
    if (paginateType === 'pagination') {
      return (
        <Pagination
          color="primary"
          page={page}
          count={totalPage}
          onChange={(e, p) => onPageChange?.(p)}
          {...paginationProps}
        />
      );
    }

    return (
      <Stack
        className="crud-content-paginate-button"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        direction="row"
      >
        <Button
          size={headerActionSize}
          disabled={!enablePrevious}
          onClick={() => onPaginatePrevious?.()}
        >
          {previousText}
        </Button>

        <Button
          size={headerActionSize}
          disabled={!enableNext}
          onClick={() => onPaginateNext?.()}
        >
          {nextText}
        </Button>
      </Stack>
    );
  };

  const renderContentView = () => {
    // if loading
    if (loading) {
      return (
        loadingView ?? (
          <Box sx={{ padding: 20, textAlign: 'center' }}>
            <CircularProgress size={50} />
          </Box>
        )
      );
    }

    if (!renderItemView) {
      return 'Please implement `renderItemView` for item rendering';
    }
    return data.map((record, i) => {
      const checkIndex = extractCheckedValue(record);
      const isChecked = checkIndex ? checkedState.includes(checkIndex) : false;

      return (
        <Fragment key={`content-item-${i}`}>
          {renderItemView(
            record,
            {
              checkbox: () => {
                if (!checkbox?.enabled) return null;
                return (
                  <Checkbox
                    color="primary"
                    checked={isChecked}
                    onClick={(e) => e.stopPropagation()}
                    onChange={onHandleCheckbox(record)}
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
              checked: isChecked,
              onCheck: (state) => checkedItemByRecord(record, state),
            }
          )}
        </Fragment>
      );
    });
  };

  // =============== VIEW
  return (
    <StyledWrapper
      unstyled={unstyled}
      spacingMultiplier={spacingMultiplier}
      className={cn('crud-content-wrapper', className)}
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
      <div className="crud-content-items-wrapper">{renderContentView()}</div>

      {/* ==== PAGINATION */}
      <div className="crud-content-pagination-wrapper">
        {renderPaginationView()}
      </div>
    </StyledWrapper>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
CrudContentView.defaultProps = defaultProps;

export * from './props';
export default CrudContentView;
