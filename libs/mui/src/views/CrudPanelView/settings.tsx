import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { CRUD, CrudProps, CrudSchemataTypes } from '@crudx/core';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import intersection from 'lodash/intersection';
import reduce from 'lodash/reduce';

import { Dialog } from '../../components/Dialog';
import { useCrudModalForm } from '../../hooks/useCrudModalForm';
import { useCrudTableItemAction } from '../../hooks/useCrudTableItemAction';
import { CrudFilterView } from '../CrudFilterView';
import { CrudPageHeaderView } from '../CrudPageHeaderView';
import { CrudTableView, CrudTableViewProps } from '../CrudTableView';
import { CrudTableColumnActionType } from '../CrudTableView/types';

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
    pageBreadcrumbs = [],
    tableTitle,
    tableTabs,
    tableInfos,
    tableActions,
    variables = {},
    events,
    paging,
    modalForms,
    filterTitle,
    filterNode,
    filterActions,
    columnActions,
    columnDataIndex,
    columnExtraActions = [],
    columnActionSequence = ['view', 'update', 'delete', 'export', 'extra'],
    detailsViewType = 'drawer',
    filterModalViewType = 'drawer',
    enableDetailView = true,
    enableNotification = true,
    enableRowSelection = true,
    enableGroupColumnAction = false,
    prepareHeaderViewProps,
    prepareFilterViewProps,
    prepareTableViewProps,
    prepareDetailViewProps,
    prepareFilterModalViewProps,
    renderDetailsView,
    renderFilterModalView,
    renderNotificationView,
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

  const tableActionList: CrudTableColumnActionType[] = useMemo(() => {
    const enabledColumns = reduce(
      tableActionState,
      (r: CrudTableColumnActionType[], e, k) => {
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
      (r: CrudTableColumnActionType[], e) => {
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
    callbacks: events,
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
            {...(viewProps ?? {})}
          >
            {filterNode}
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
            {...(viewProps ?? {})}
          >
            {filterNode ?? viewProps?.children}
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
        return (
          <CrudTableView<T>
            data={data}
            title={tableTitle}
            loading={loading}
            columns={columns}
            headerTabs={tableTabs}
            headerInfos={tableInfos}
            headerActions={tableActions}
            page={pagination.current}
            pageSize={pagination.defaultPageSize}
            pageSizeOptions={viewProps?.pageSizeOptions}
            totalRecord={pagingProps.data.total ?? 0}
            totalSelected={accessibility.totalSelected}
            enableGroupColumnAction={enableGroupColumnAction}
            enableNext={accessibility.enableNext}
            enablePrevious={accessibility.enablePrevious}
            columnActions={tableActionList}
            tableProps={{
              enableTableHeadDivider: true,
              ...viewProps?.tableProps,
              checkbox: {
                enabled: selectable,
                dataIndex: columnDataIndex,
              },
              checked: rowSelection.selections,
            }}
            onCheck={(data) => {
              rowSelection.setSelections(data);
            }}
            onPageSizeChange={(size) => {
              pagingProps.onUpdatePageSize(size);
            }}
            onPageChange={(page) => {
              pagination.paginateTo(page);
            }}
            onPaginateNext={pagingProps.onPaginateNext}
            onPaginatePrevious={pagingProps.onPaginatePrevious}
            onTriggerCreate={accessibility.onTriggerCreate}
            onTriggerRefresh={accessibility.onTriggerRefresh}
            onTriggerSorting={accessibility.onTriggerSorting}
            renderActionButtons={renderActionButtons}
            renderExtraActionButtons={renderExtraActionButtons}
            {...viewProps}
          />
        );
      },
    },
    /**
     * --------------------------
     * TABLE ACTION COLUMN
     * --------------------------
     */
    itemActions: useCrudTableItemAction<T>({
      name,
      enableView: tableActionState.view,
      enableUpdate: tableActionState.update,
      enableDelete: tableActionState.delete,
      enableExport: tableActionState.export,
      ...(columnActions ?? {}),
      extraActions: columnActions?.extraActions ?? columnExtraActions,
      nodeType: enableGroupColumnAction ? 'menu' : columnActions?.nodeType,
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