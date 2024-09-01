import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { CRUD, CrudProps, CrudSchemataTypes } from '@crudx/core';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import omit from 'lodash/omit';
import reduce from 'lodash/reduce';

import { TableDataIndex } from '../../@types';
import { CrudRowItemActionType } from '../../@types';
import { Dialog } from '../../components/Dialog';
import { CrudContentView } from '../CrudContentView';
import { CrudFilterView } from '../CrudFilterView';
import { CrudPageHeaderView } from '../CrudPageHeaderView';
import { CrudTableView } from '../CrudTableView';

import { useCrudModalForm } from './hooks/useCrudModalForm';
import { useCrudTableItemAction } from './hooks/useCrudTableItemAction';
import { CrudPanelViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export function useCrudProps<T extends CrudSchemataTypes = any>(
  props: CrudPanelViewProps<T>
): CrudProps<T> {
  const {
    name,
    schema,
    columns,
    unstyled,
    pageTitle,
    pageActions,
    pageBackPath,
    checked = [],
    pageBreadcrumbs = [],
    tableTitle,
    tableTabs,
    tableTabState,
    tableInfos,
    tableActions,
    tableExpandView,
    tableExpandState,
    tableExtraView,
    tableCheckboxSticky = false,
    tableActionColumnSticky = false,
    variables = {},
    events,
    paging,
    alertProps,
    modalForms = {},
    filterTitle,
    filterNode,
    filterActions,
    columnActions,
    columnDataIndex,
    columnExtraActions = [],
    columnActionSequence = ['view', 'update', 'delete', 'export', 'extra'],
    detailsViewType = 'drawer',
    filterModalViewType = 'drawer',
    emptyView,
    noDataView,
    enableDetailView = true,
    enableNotification = true,
    enableRowSelection = true,
    enableActionColumn = true,
    enableItemGroupAction = false,
    spacingMultiplier,
    onTableTabChange,
    onTableItemCheck,
    onTableColumnSort,
    prepareAlertProps,
    prepareHeaderViewProps,
    prepareFilterViewProps,
    prepareTableViewProps,
    prepareContentViewProps,
    prepareDetailViewProps,
    prepareFilterModalViewProps,
    renderDetailsView,
    renderFilterModalView,
    renderNotificationView,
    renderItemView,
  } = props;

  // =================== VARIABLES
  const tableActionState = useMemo(
    () => ({
      view: enableDetailView || !!columnActions?.enableView,
      update: !!modalForms?.update || !!columnActions?.enableUpdate,
      delete: !!schema?.delete || !!columnActions?.enableDelete,
      export: !!schema?.exports || !!columnActions?.enableExport,
      extra:
        columnActions?.enableExtra ||
        columnActions?.extraActions?.length ||
        columnExtraActions.length,
    }),
    [schema, columnActions, columnExtraActions, enableDetailView, modalForms]
  );

  const tableActionList: CrudRowItemActionType[] = useMemo(() => {
    const enabledColumns = reduce(
      tableActionState,
      (r: CrudRowItemActionType[], e, k) => {
        if (e) {
          switch (k) {
            case 'view':
              r.push('view');
              break;
            case 'update':
              r.push('update');
              break;
            case 'delete':
              r.push('delete');
              break;
            case 'export':
              r.push('export');
              break;
            case 'extra':
              r.push('extra');
              break;
            default:
              break;
          }
        }
        return r;
      },
      []
    );

    if (columnActionSequence.length === 0) {
      return enabledColumns;
    }

    const arranged = columnActionSequence.reduce(
      (r: CrudRowItemActionType[], e) => {
        if (enabledColumns?.includes(e)) {
          r.push(e);
        }
        return r;
      },
      []
    );

    if (arranged.length === enabledColumns.length) {
      return arranged;
    }

    const leftover = enabledColumns.filter((e) => !arranged.includes(e));

    return [...arranged, ...leftover];
  }, [tableActionState, columnActionSequence]);

  // =================== CRUD
  const crud = new CRUD<T>(name, schema, {
    paging,
    events,
    enableNotification,
    enableRowSelection,
    nodes: {
      /**
       * --------------------------
       * NOTIFICATION
       * --------------------------
       */
      notification: (options) => {
        const { type, message } = options;
        if (renderNotificationView) {
          renderNotificationView(options);
          return;
        }
        if (type === 'success') {
          toast.success(message);
          return;
        }
        toast.error(message);
      },
      /**
       * --------------------------
       * ALERT VIEW
       * --------------------------
       */
      alert: (props) => {
        const viewProps = prepareAlertProps?.(props);
        return (
          <Dialog
            type="confirmation"
            fullWidth
            onClose={props.onHide}
            visible={props.visible}
            title={props.title as any}
            message={props.message}
            primaryText={props.primaryText}
            secondaryText={props.secondaryText}
            onClickAction={(action) => {
              if (action === 'primary') {
                props.onPrimary();
                return;
              }
              props.onSecondary();
            }}
            {...alertProps}
            {...viewProps}
          />
        );
      },
      /**
       * --------------------------
       * PAGE HEADER VIEW
       * --------------------------
       */
      pageHeader: (nodeProps) => {
        const viewProps = prepareHeaderViewProps?.(nodeProps);
        return (
          <CrudPageHeaderView
            unstyled={unstyled}
            title={pageTitle}
            actions={pageActions}
            backPath={pageBackPath}
            items={pageBreadcrumbs}
            spacingMultiplier={spacingMultiplier}
            {...viewProps}
          />
        );
      },
      /**
       * --------------------------
       * FILTER VIEW
       * --------------------------
       */
      filter: (nodeProps) => {
        const viewProps = prepareFilterViewProps?.(nodeProps);
        return (
          <CrudFilterView
            unstyled={unstyled}
            title={filterTitle}
            actions={filterActions}
            spacingMultiplier={spacingMultiplier}
            {...(viewProps ?? {})}
          >
            {viewProps?.children ?? filterNode}
          </CrudFilterView>
        );
      },
      /**
       * --------------------------
       * DETAIL VIEW
       * --------------------------
       */
      details: (nodeProps) => {
        const { visible, onHide } = nodeProps;
        const viewProps = prepareDetailViewProps?.(nodeProps);

        if (detailsViewType === 'modal') {
          const modalProps = viewProps?.modalProps;
          return (
            <Dialog
              type="custom"
              fullWidth
              maxWidth="md"
              visible={visible}
              onClose={onHide}
              enableCloseButton
              {...(modalProps as any)}
              onClickAction={() => {
                onHide();
              }}
            >
              {renderDetailsView?.(nodeProps)}
            </Dialog>
          );
        }

        const drawerProps = viewProps?.drawerProps;
        return (
          <SwipeableDrawer
            anchor="right"
            {...drawerProps}
            onOpen={() => null}
            PaperProps={{
              sx: {
                backgroundColor: 'background.paper',
                width: '50%',
              },
              ...drawerProps?.PaperProps,
            }}
            sx={{
              width: '50%',
              ...drawerProps?.sx,
            }}
            open={visible}
            onClose={onHide}
          >
            {renderDetailsView?.(nodeProps)}
          </SwipeableDrawer>
        );
      },
      /**
       * --------------------------
       * FILTER MODAL VIEW
       * --------------------------
       */
      filterModal: (nodeProps) => {
        const { visible, onHide } = nodeProps;
        const viewProps = prepareFilterModalViewProps?.(nodeProps);

        const renderFilterContentView = renderFilterModalView?.(nodeProps) ?? (
          <CrudFilterView
            unstyled={unstyled}
            title={filterTitle}
            actions={filterActions}
            spacingMultiplier={spacingMultiplier}
            {...(viewProps ?? {})}
          >
            {viewProps?.children ?? filterNode}
          </CrudFilterView>
        );

        // if filter view is in modal form
        if (filterModalViewType === 'modal') {
          const modalProps = viewProps?.modalProps;
          return (
            <Dialog
              type="custom"
              fullWidth
              maxWidth="md"
              visible={visible}
              onClose={onHide}
              enableCloseButton
              {...(modalProps as any)}
              onClickAction={(e) => {
                onHide();
                modalProps?.onClickAction?.(e);
              }}
            >
              {renderFilterContentView}
            </Dialog>
          );
        }

        // if filter view is in drawer form
        const drawerProps = viewProps?.drawerProps;
        return (
          <SwipeableDrawer
            anchor="right"
            {...drawerProps}
            onOpen={() => null}
            PaperProps={{
              sx: {
                width: '50%',
                backgroundColor: 'background.paper',
              },
              ...drawerProps?.PaperProps,
            }}
            sx={{ width: '50%', ...drawerProps?.sx }}
            open={visible}
            onClose={onHide}
          >
            {renderFilterContentView}
          </SwipeableDrawer>
        );
      },
      /**
       * --------------------------
       * TABLE VIEW
       * --------------------------
       */
      table: (nodeProps) => {
        const {
          data,
          loading,
          pagination,
          accessibility,
          context,
          rowSelection,
          renderActionButtons,
          renderExtraActionButtons,
        } = nodeProps;
        const { pagingProps } = context;
        const viewProps = prepareTableViewProps?.(nodeProps);
        const selectable = rowSelection.isSelectable;
        const restViewProps = omit(viewProps ?? {}, ['tableProps']);

        return (
          <CrudTableView<T>
            data={data}
            title={tableTitle}
            loading={loading}
            columns={columns}
            headerTabs={tableTabs}
            headerTabState={tableTabState}
            headerInfos={tableInfos}
            headerActions={tableActions}
            headerExpandView={tableExpandView}
            headerExtraView={tableExtraView}
            expanded={tableExpandState}
            emptyView={emptyView}
            noDataView={noDataView}
            page={pagination.current}
            pageSize={pagination.defaultPageSize}
            pageSizeOptions={viewProps?.pageSizeOptions}
            totalRecord={pagingProps.data.total ?? 0}
            totalSelected={accessibility.totalSelected}
            actionColumnSticky={tableActionColumnSticky}
            enableActionColumn={enableActionColumn}
            enableItemGroupAction={enableItemGroupAction}
            enableNext={accessibility.enableNext}
            enablePrevious={accessibility.enablePrevious}
            columnActions={tableActionList}
            onCheck={(data) => {
              rowSelection.setSelections(data as string[]);
              onTableItemCheck?.(data);
            }}
            onColumnSort={onTableColumnSort}
            onPageSizeChange={(size) => {
              pagingProps.onUpdatePageSize(size);
            }}
            onPageChange={(page) => {
              pagination.paginateTo(page);
            }}
            onTabChange={onTableTabChange}
            onPaginateNext={pagingProps.onPaginateNext}
            onPaginatePrevious={pagingProps.onPaginatePrevious}
            onTriggerCreate={accessibility.onTriggerCreate}
            onTriggerRefresh={accessibility.onTriggerRefresh}
            onTriggerSorting={accessibility.onTriggerSorting}
            renderActionButtons={renderActionButtons}
            renderExtraActionButtons={renderExtraActionButtons}
            {...restViewProps}
            tableProps={{
              ...viewProps?.tableProps,
              checkbox: {
                enabled: selectable,
                dataIndex: columnDataIndex,
                sticky: tableCheckboxSticky,
              },
              checked:
                checked?.length === 0
                  ? (rowSelection.selections as TableDataIndex<T>[])
                  : checked,
            }}
          />
        );
      },
      /**
       * --------------------------
       * CONTENT VIEW
       * --------------------------
       */
      content: (nodeProps) => {
        const {
          data,
          loading,
          pagination,
          accessibility,
          context,
          rowSelection,
          renderActionButtons,
          renderExtraActionButtons,
        } = nodeProps;
        const { pagingProps } = context;
        const viewProps = prepareContentViewProps?.(nodeProps);
        const selectable = rowSelection.isSelectable;

        return (
          <CrudContentView<T>
            data={data}
            title={tableTitle}
            loading={loading}
            headerTabs={tableTabs}
            headerTabState={tableTabState}
            headerInfos={tableInfos}
            headerActions={tableActions}
            headerExpandView={tableExpandView}
            headerExtraView={tableExtraView}
            expanded={tableExpandState}
            emptyView={emptyView}
            noDataView={noDataView}
            page={pagination.current}
            pageSize={pagination.defaultPageSize}
            totalRecord={pagingProps.data.total ?? 0}
            totalSelected={accessibility.totalSelected}
            enableItemAction={enableActionColumn}
            enableItemGroupAction={enableItemGroupAction}
            enableNext={accessibility.enableNext}
            enablePrevious={accessibility.enablePrevious}
            itemActions={tableActionList}
            checked={
              checked?.length === 0
                ? (rowSelection.selections as TableDataIndex<T>[])
                : checked
            }
            checkbox={{
              enabled: selectable,
              dataIndex: columnDataIndex,
            }}
            onCheck={(data) => {
              rowSelection.setSelections(data);
              onTableItemCheck?.(data);
            }}
            onPageChange={(page) => {
              pagination.paginateTo(page);
            }}
            onTabChange={onTableTabChange}
            onPaginateNext={pagingProps.onPaginateNext}
            onPaginatePrevious={pagingProps.onPaginatePrevious}
            onTriggerCreate={accessibility.onTriggerCreate}
            onTriggerRefresh={accessibility.onTriggerRefresh}
            onTriggerSorting={accessibility.onTriggerSorting}
            renderActionButtons={renderActionButtons}
            renderExtraActionButtons={renderExtraActionButtons}
            renderItemView={renderItemView}
            {...viewProps}
          />
        );
      },
    },
    /**
     * --------------------------
     * ITEM ACTIONS
     * --------------------------
     */
    itemActions: useCrudTableItemAction<T>({
      name,
      ...(columnActions ?? {}),
      extraActions: columnActions?.extraActions ?? columnExtraActions,
      nodeType: enableItemGroupAction ? 'menu' : columnActions?.nodeType,
    }),
    /**
     * --------------------------
     * MODAL FORMS CONFIGURATION
     * --------------------------
     */
    modalForms: useCrudModalForm<T>(modalForms ?? {}),
  });

  const crudProps = crud.use(variables);
  return crudProps;
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useCrudProps;
