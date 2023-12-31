import { ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import { CrudProps, CrudSchemataTypes } from '@crudx/core';
import cn from 'classnames';

import { CrudPanelViewProps } from './props';
import { useCrudProps } from './settings';
import { StyledWrapper } from './styled';

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
    spacingMultiplier,
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
    <StyledWrapper
      unstyled={unstyled}
      spacingMultiplier={spacingMultiplier}
      className={cn('crud-panel-wrapper', className)}
    >
      {renderAlert?.()}
      {enablePageHeader && renderPageHeader?.()}
      {enableFilterView && renderFilter?.()}
      {contentViewType === 'table' && renderTable?.()}
      {contentViewType === 'view' && renderContent?.()}
      {enableDetailView && renderDetails?.()}
      {renderModalForms?.()}
      {enableFilterModalView && renderFilterModal?.()}
    </StyledWrapper>
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
