import { ReactNode, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TableProps } from '@mui/material/Table';
import cn from 'classnames';
import includes from 'lodash/includes';

import { Table } from '../../components/Table';
import { SortingOptionType } from '../../components/TableSettingsSortingOptions';

import { CrudTableHeaderView } from './components/CrudTableHeaderView';
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
  const {
    className,
    size,
    text,
    data,
    page,
    title,
    pageSize,
    paginateType,
    enableNext,
    enablePrevious,
    totalRecord,
    totalSelected,
    tableProps,
    expanded,
    headerViewNode,
    headerExpandNode,
    headerTabs,
    headerTabsProps,
    headerActions,
    headerActionSize,
    headerInfos,
    onCheck,
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
    onTriggerTab,
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
    <div className={cn('crud-table-wrapper', className)}>
      <Table
        size={tableSize}
        data={data}
        page={page}
        total={totalRecord}
        columns={tableColumns}
        pageSize={pageSize}
        topView={
          <CrudTableHeaderView
            text={text}
            title={title}
            expanded={shouldExpand}
            tableSize={tableSize}
            sortingType={sortingType}
            totalRecord={totalRecord}
            totalSelected={totalSelected}
            headerViewNode={headerViewNode}
            headerExpandNode={headerExpandNode}
            headerTabs={headerTabs}
            headerTabsProps={headerTabsProps}
            headerInfos={headerInfos}
            headerActions={headerActions}
            headerActionSize={headerActionSize}
            onTriggerTab={onTriggerTab}
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
    </div>
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