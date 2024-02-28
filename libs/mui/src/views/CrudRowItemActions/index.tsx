import { Fragment, memo, ReactNode, useMemo } from 'react';
import forEach from 'lodash/forEach';

import {
  ButtonDropdown,
  ButtonDropdownItemType,
} from '../../components/ButtonDropdown';
import { isActionEnable } from '../../helpers';

import { CrudRowItemActionsProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudRowItemActions = memo((props: CrudRowItemActionsProps) => {
  const {
    data,
    node,
    type = 'icon',
    actions = [],
    renderActionButtons,
    renderExtraActionButtons,
  } = props;

  // =============== HOOKS
  const { views, items } = useMemo(() => {
    let views: ReactNode[] = [];
    let items: ButtonDropdownItemType[] = [];

    // if render action button wasn't provided
    // then return empty array
    if (!renderActionButtons) {
      return { views, items };
    }

    const {
      viewButton,
      updateButton,
      deleteButton,
      exportButton,
      viewButtonNode,
      updateButtonNode,
      deleteButtonNode,
      exportButtonNode,
    } = renderActionButtons({ data });
    const extraAction = renderExtraActionButtons?.({ data });

    // ----------- loop actions
    forEach(actions, (e) => {
      // view button
      if (e === 'view' && isActionEnable(e, actions)) {
        if (viewButton) views.push(viewButton);
        if (viewButtonNode?.node) {
          items.push({
            key: 'view',
            title: viewButtonNode?.node,
            onClick: viewButtonNode.onClick,
            as: type === 'menu' ? viewButtonNode.node : null,
          });
        }
      }
      // update button
      if (e === 'update' && isActionEnable(e, actions)) {
        if (updateButton) views.push(updateButton);
        if (updateButtonNode?.node) {
          items.push({
            key: 'update',
            title: updateButtonNode.node,
            onClick: updateButtonNode.onClick,
            as: type === 'menu' ? updateButtonNode.node : null,
          });
        }
      }
      // delete button
      if (e === 'delete' && isActionEnable(e, actions)) {
        if (deleteButton) views.push(deleteButton);
        if (deleteButtonNode?.node) {
          items.push({
            key: 'delete',
            title: deleteButtonNode.node,
            onClick: deleteButtonNode.onClick,
            as: type === 'menu' ? deleteButtonNode.node : null,
          });
        }
      }
      // export button
      if (e === 'export' && isActionEnable(e, actions)) {
        if (exportButton) views.push(exportButton);
        if (exportButtonNode?.node) {
          items.push({
            key: 'export',
            title: exportButtonNode.node,
            onClick: exportButtonNode.onClick,
            as: type === 'menu' ? exportButtonNode.node : null,
          });
        }
      }
      if (e === 'extra' && isActionEnable(e, actions)) {
        views = [...views, ...(extraAction?.views ?? [])];
        items = [
          ...items,
          ...(extraAction?.nodes ?? []).map((e, i) => ({
            key: `extra-${i}`,
            title: e.node,
            onClick: e.onClick,
            as: type === 'menu' ? e.node : null,
          })),
        ];
      }
    });
    // ----------- return
    return {
      views,
      items,
    };
  }, [type, data, actions, renderActionButtons, renderExtraActionButtons]);

  // =============== VIEW
  if (type === 'icon') {
    return (
      <>
        {views.map((e, i) => (
          <Fragment key={i}>{e}</Fragment>
        ))}
      </>
    );
  }

  return (
    <ButtonDropdown type="icon" items={items}>
      {node}
    </ButtonDropdown>
  );
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudRowItemActions;
