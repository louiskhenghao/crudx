import { ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import { CrudProps, CrudSchemataTypes } from '@crudx/core';

import { cn } from '../../lib/cn';

import { CrudPanelViewProps } from './props';
import { useCrudProps } from './settings';

/**
 * ===========================
 * MAIN
 * ===========================
 */
function CrudPanelViewComponent<
  T extends CrudSchemataTypes = any,
  TColumnData = any
>(props: CrudPanelViewProps<T, TColumnData>, ref: ForwardedRef<CrudProps<T>>) {
  const {
    className,
    unstyled,
    contentViewType = 'table',
    enablePageHeader = true,
    enableFilterView = true,
    enableDetailView = true,
    enableFilterModalView = true,
  } = props;

  // =============== HOOKS
  const crudProps = useCrudProps<T>(props);
  useImperativeHandle(ref, () => crudProps);

  // =============== VARIABLES
  const { components } = crudProps;
  const {
    renderAlert,
    renderDetails,
    renderContent,
    renderFilter,
    renderTable,
    renderPageHeader,
    renderModalForms,
    renderFilterModal,
  } = components;

  // =============== VIEWS
  return (
    <div
      className={cn('crudx-panel-wrapper', !unstyled && 'space-y-0', className)}
    >
      {renderAlert?.()}
      {enablePageHeader && renderPageHeader?.()}
      {enableFilterView && renderFilter?.()}
      {contentViewType === 'table' && renderTable?.()}
      {contentViewType === 'view' && renderContent?.()}
      {enableDetailView && renderDetails?.()}
      {renderModalForms?.()}
      {enableFilterModalView && renderFilterModal?.()}
    </div>
  );
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './hooks';
export * from './props';
export const CrudPanelView = forwardRef(CrudPanelViewComponent) as <
  T extends CrudSchemataTypes = any,
  TColumn = any
>(
  props: CrudPanelViewProps<T, TColumn> & { ref?: ForwardedRef<CrudProps<T>> }
) => ReturnType<typeof CrudPanelViewComponent>;

export default CrudPanelView;
