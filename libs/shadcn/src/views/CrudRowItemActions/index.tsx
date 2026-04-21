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
    let v: ReactNode[] = [];
    let i: ButtonDropdownItemType[] = [];

    if (!renderActionButtons) {
      return { views: v, items: i };
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

    forEach(actions, (e) => {
      if (e === 'view' && isActionEnable(e, actions)) {
        if (viewButton) v.push(viewButton);
        if (viewButtonNode?.node) {
          i.push({
            key: 'view',
            title: viewButtonNode?.node,
            onClick: viewButtonNode.onClick,
            as: type === 'menu' ? viewButtonNode.node : null,
          });
        }
      }
      if (e === 'update' && isActionEnable(e, actions)) {
        if (updateButton) v.push(updateButton);
        if (updateButtonNode?.node) {
          i.push({
            key: 'update',
            title: updateButtonNode.node,
            onClick: updateButtonNode.onClick,
            as: type === 'menu' ? updateButtonNode.node : null,
          });
        }
      }
      if (e === 'delete' && isActionEnable(e, actions)) {
        if (deleteButton) v.push(deleteButton);
        if (deleteButtonNode?.node) {
          i.push({
            key: 'delete',
            title: deleteButtonNode.node,
            onClick: deleteButtonNode.onClick,
            as: type === 'menu' ? deleteButtonNode.node : null,
          });
        }
      }
      if (e === 'export' && isActionEnable(e, actions)) {
        if (exportButton) v.push(exportButton);
        if (exportButtonNode?.node) {
          i.push({
            key: 'export',
            title: exportButtonNode.node,
            onClick: exportButtonNode.onClick,
            as: type === 'menu' ? exportButtonNode.node : null,
          });
        }
      }
      if (e === 'extra' && isActionEnable(e, actions)) {
        v = [...v, ...(extraAction?.views ?? [])];
        i = [
          ...i,
          ...(extraAction?.nodes ?? []).map((node, index) => ({
            key: `extra-${index}`,
            title: node.node,
            onClick: node.onClick,
            as: type === 'menu' ? node.node : null,
          })),
        ];
      }
    });

    return { views: v, items: i };
  }, [type, data, actions, renderActionButtons, renderExtraActionButtons]);

  // =============== VIEW
  if (type === 'icon') {
    return (
      <>
        {views.map((e, idx) => (
          <Fragment key={idx}>{e}</Fragment>
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
CrudRowItemActions.displayName = 'CrudRowItemActions';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudRowItemActions;
