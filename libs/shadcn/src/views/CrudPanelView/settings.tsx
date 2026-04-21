import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { CRUD, CrudProps, CrudSchemataTypes } from '@crudx/core';
import omit from 'lodash/omit';
import reduce from 'lodash/reduce';

import { TableDataIndex } from '../../@types';
import { CrudRowItemActionType } from '../../@types';
import { Dialog } from '../../components/Dialog';
import { Sheet, SheetContent } from '../../primitives/sheet';
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
    tableCheckboxColumnSticky = false,
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

    if ((columnActionSequence ?? []).length === 0) {
      return enabledColumns;
    }

    const arranged = (columnActionSequence ?? []).reduce(
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
      alert: (viewNodeProps) => {
        const viewProps = prepareAlertProps?.(viewNodeProps);
        return (
          <Dialog
            type="confirmation"
            onClose={viewNodeProps.onHide}
            visible={viewNodeProps.visible}
            title={viewNodeProps.title as any}
            message={viewNodeProps.message}
            primaryText={viewNodeProps.primaryText}
            secondaryText={viewNodeProps.secondaryText}
            onClickAction={(action) => {
              if (action === 'primary') {
                viewNodeProps.onPrimary();
                return;
              }
              viewNodeProps.onSecondary();
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
          <Sheet open={visible} onOpenChange={(o) => !o && onHide()}>
            <SheetContent
              side={drawerProps?.side ?? 'right'}
              width={drawerProps?.width ?? '50%'}
              {...(omit(drawerProps, ['side', 'width']) as any)}
            >
              {renderDetailsView?.(nodeProps)}
            </SheetContent>
          </Sheet>
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

        if (filterModalViewType === 'modal') {
          const modalProps = viewProps?.modalProps;
          return (
            <Dialog
              type="custom"
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

        const drawerProps = viewProps?.drawerProps;
        return (
          <Sheet open={visible} onOpenChange={(o) => !o && onHide()}>
            <SheetContent
              side={drawerProps?.side ?? 'right'}
              width={drawerProps?.width ?? '50%'}
              {...(omit(drawerProps, ['side', 'width']) as any)}
            >
              {renderFilterContentView}
            </SheetContent>
          </Sheet>
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
            columns={columns as any}
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
            pageSize={pagination.pageSize}
            pageSizeOptions={viewProps?.pageSizeOptions}
            totalRecord={pagingProps.data.total ?? 0}
            totalSelected={accessibility.totalSelected}
            actionColumnSticky={tableActionColumnSticky}
            enableActionColumn={enableActionColumn}
            enableItemGroupAction={enableItemGroupAction}
            enableNext={accessibility.enableNext}
            enablePrevious={accessibility.enablePrevious}
            columnActions={tableActionList}
            onCheck={(d) => {
              rowSelection.setSelections(d as string[]);
              onTableItemCheck?.(d);
            }}
            onColumnSort={onTableColumnSort}
            onPageSizeChange={(size) => {
              pagination.setPageSize(size);
            }}
            onPageChange={(page) => {
              pagination.paginateTo(page);
            }}
            onTabChange={onTableTabChange}
            onPaginateNext={pagination.next}
            onPaginatePrevious={pagination.previous}
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
                dataIndex: columnDataIndex as any,
                sticky: tableCheckboxColumnSticky,
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
              dataIndex: columnDataIndex as any,
            }}
            onCheck={(d) => {
              rowSelection.setSelections(d);
              onTableItemCheck?.(d);
            }}
            onPageChange={(page) => {
              pagination.paginateTo(page);
            }}
            onTabChange={onTableTabChange}
            onPaginateNext={pagination.next}
            onPaginatePrevious={pagination.previous}
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
