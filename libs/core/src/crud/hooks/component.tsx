import { defaultVisibilityStatePropsValue } from '@crudx/common';
import isNil from 'lodash/isNil';

import {
  CrudComponentAccessibilityProps,
  CrudComponentVisibilityController,
} from '../../@types/crud/components/common';
import {
  CrudComponentOptions,
  CrudComponentProps,
} from '../../@types/crud/components/component';
import { CrudSchemataTypes } from '../../@types/crud/schema';
import {
  useActionsComponentHook,
  useContentComponentHook,
  useDetailsComponentHook,
  useFilterModalComponentHook,
  useModalFormComponentHook,
  usePageHeaderComponentHook,
  usePanelComponentHook,
  useTableComponentHook,
} from '../components';
import useAlertComponentHook from '../components/alert';

import { useComponentVisibilityHook } from './visible';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useCrudComponentHook = <TSchema extends CrudSchemataTypes = any>(
  payload: CrudComponentOptions<TSchema>
): CrudComponentProps<TSchema> => {
  const { pagingProps, rowSelection, pagination } = payload;

  // =============== VARIABLES
  // --- shared accessibility function
  let controllers: CrudComponentVisibilityController = {
    details: defaultVisibilityStatePropsValue,
    filter: defaultVisibilityStatePropsValue,
    create: defaultVisibilityStatePropsValue,
    update: defaultVisibilityStatePropsValue,
    delete: defaultVisibilityStatePropsValue,
    exports: defaultVisibilityStatePropsValue,
    alert: {
      ...defaultVisibilityStatePropsValue,
      props: {
        title: 'Confirmation',
        message: 'Do you confirm that you want to proceed with this action?',
        primaryText: 'Confirm',
        secondaryText: 'Cancel',
        onPrimary: () => console.warn('Not implemented!'),
        onSecondary: () => console.warn('Not implemented!'),
      },
    },
    extraModal: {},
  };

  const accessibility: CrudComponentAccessibilityProps = {
    pagination,
    enableNext: !isNil(pagingProps?.data?.page?.next),
    enablePrevious: !isNil(pagingProps?.data?.page?.previous),
    enableBulkAction: !!rowSelection.isSelectable,
    totalSelected: rowSelection.selections?.length || 0,
    selections: rowSelection.selections,
    setSelections: rowSelection.setSelections,
    onTriggerSelectionClear: rowSelection.clear,
    onTriggerCreate: () => {
      if (!controllers?.create?.onShow) {
        console.warn('Method is not accessible at this stage');
        return;
      }
      controllers.create.onShow();
    },
    onTriggerFiltering: () => {
      if (!controllers?.filter?.onShow) {
        console.warn('Method is not accessible at this stage');
        return;
      }
      controllers.filter.onShow();
    },
    onTriggerRefresh: pagingProps.refresh,
    onTriggerSelection: rowSelection?.toggle,
    onPaginateTo: pagingProps?.onPaginateTo,
    onPaginateNext: pagingProps?.onPaginateNext,
    onPaginatePrevious: pagingProps?.onPaginatePrevious,
    onTriggerSorting: (sort) => {
      if (sort === 'DEFAULT') {
        pagingProps.onResetSorting();
        return;
      }
      pagingProps.onUpdateSorting(sort);
    },
  };

  // --- form hook
  const formHook = useModalFormComponentHook(payload, accessibility);

  // --- component visibility hook
  controllers = useComponentVisibilityHook(payload, formHook);

  // --- component hook
  const alertHook = useAlertComponentHook(payload, accessibility, controllers);
  const actionsHook = useActionsComponentHook(
    payload,
    accessibility,
    controllers
  );
  const detailsHook = useDetailsComponentHook(
    payload,
    accessibility,
    controllers
  );
  const panelHook = usePanelComponentHook(payload, accessibility, controllers);
  const tableHook = useTableComponentHook(
    payload,
    accessibility,
    controllers,
    actionsHook
  );
  const contentHook = useContentComponentHook(
    payload,
    accessibility,
    controllers,
    actionsHook
  );
  const pageHeaderHook = usePageHeaderComponentHook(
    payload,
    accessibility,
    controllers
  );
  const modalFilterHook = useFilterModalComponentHook(
    payload,
    accessibility,
    controllers
  );

  // --- destruct props from hook
  const { renderAlert } = alertHook;
  const { detailsProps, renderDetails } = detailsHook;
  const { filterProps, renderFilter } = panelHook;
  const { tableProps, renderTable } = tableHook;
  const { contentProps, renderContent } = contentHook;
  const { pageHeaderProps, renderPageHeader } = pageHeaderHook;
  const { modalFormProps, renderModalForms } = formHook;
  const { filterModalProps, renderFilterModal } = modalFilterHook;

  // =============== RETURN
  return {
    filterProps,
    contentProps,
    tableProps,
    detailsProps,
    pageHeaderProps,
    modalFormProps,
    filterModalProps,
    renderAlert,
    renderTable,
    renderContent,
    renderFilter,
    renderDetails,
    renderPageHeader,
    renderModalForms,
    renderFilterModal,
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useCrudComponentHook;
