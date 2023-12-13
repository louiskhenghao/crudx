import { ReactNode, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TableProps } from '@mui/material/Table';
import cn from 'classnames';
import includes from 'lodash/includes';

import { Table } from '../../components/Table';
import { SortingOptionType } from '../../components/TableSettingsSortingOptions';
import { CrudContentHeaderView } from '../CrudContentHeaderView';

import { useColumnSettings } from './hooks/useColumnSettings';
import { defaultProps, defaultText } from './config';
import { CrudTableViewProps } from './props';
import { StyledWrapper } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudTableView = <TData = any,>(
  props: CrudTableViewProps<TData>
) => {
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
    spacingMultiplier,
    onCheck,
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
  } = props;

  // =============== STATE
  const [tableSize, setTableSize] = useState<TableProps['size']>('medium');
  const [sortingType, setSortingType] = useState<SortingOptionType>('DEFAULT');
  const [shouldExpand, setShouldExpand] = useState<boolean>(expanded ?? false);

  // =============== VARIABLES
  const nextText = text?.nextText ?? defaultText?.nextText;
  const previousText = text?.previousText ?? defaultText?.previousText;

  // =============== HOOKS
  const tableColumns = useColumnSettings(props);

  // =============== EFFECTS
  useEffect(() => setShouldExpand(!!expanded), [expanded]);

  // =============== VIEW
  const renderPaginationView = (args): ReactNode => {
    // custom render pagination
    if (renderPagination) return renderPagination(args);
    // if the paginate type = `none` return null
    // if paginate type = `pagination` should return null as well as we doesn't want override existing view
    if (includes(['none', 'pagination'], paginateType)) return null;

    return (
      <Stack
        className="crud-table-paginate-button"
        justifyContent="end"
        alignItems="center"
        flexWrap="wrap"
        direction="row"
      >
        <Button
          size={size}
          disabled={!enablePrevious}
          onClick={() => onPaginatePrevious?.()}
        >
          {previousText}
        </Button>

        <Button
          size={size}
          disabled={!enableNext}
          onClick={() => onPaginateNext?.()}
        >
          {nextText}
        </Button>
      </Stack>
    );
  };

  return (
    <StyledWrapper
      unstyled={unstyled}
      spacingMultiplier={spacingMultiplier}
      className={cn('crud-table-wrapper', className)}
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
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        renderPagination={renderPaginationView}
        {...tableProps}
      />
    </StyledWrapper>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
CrudTableView.defaultProps = defaultProps;

export * from './props';
export default CrudTableView;
