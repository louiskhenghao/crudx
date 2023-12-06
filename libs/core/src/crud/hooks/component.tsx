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
import { defaultVisibilityStatePropsValue } from '../../hooks/useVisibilityStateHook';
import {
  useActionsComponentHook,
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
  const { pagingProps, rowSelection } = payload;

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
  const props: CrudComponentAccessibilityProps = {
    enableNext: !isNil(pagingProps?.data?.page?.next) ?? false,
    enablePrevious: !isNil(pagingProps?.data?.page?.previous) ?? false,
    enableBulkAction: !!rowSelection.isSelectable,
    totalSelected: rowSelection.selections?.length || 0,
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
  const formHook = useModalFormComponentHook(payload, props);

  // --- component visibility hook
  controllers = useComponentVisibilityHook(payload, formHook);

  // --- component hook
  const alertHook = useAlertComponentHook(payload, props, controllers);
  const actionsHook = useActionsComponentHook(payload, props, controllers);
  const detailsHook = useDetailsComponentHook(payload, props, controllers);
  const panelHook = usePanelComponentHook(payload, props, controllers);
  const tableHook = useTableComponentHook(
    payload,
    props,
    controllers,
    actionsHook
  );
  const pageHeaderHook = usePageHeaderComponentHook(
    payload,
    props,
    controllers
  );
  const modalFilterHook = useFilterModalComponentHook(
    payload,
    props,
    controllers
  );

  // --- destruct props from hook
  const { renderAlert } = alertHook;
  const { detailsProps, renderDetails } = detailsHook;
  const { filterProps, renderFilter } = panelHook;
  const { tableProps, renderTable } = tableHook;
  const { pageHeaderProps, renderPageHeader } = pageHeaderHook;
  const { modalFormProps, renderModalForms } = formHook;
  const { filterModalProps, renderFilterModal } = modalFilterHook;

  // =============== RETURN
  return {
    filterProps,
    tableProps,
    detailsProps,
    pageHeaderProps,
    modalFormProps,
    filterModalProps,
    renderAlert,
    renderTable,
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
