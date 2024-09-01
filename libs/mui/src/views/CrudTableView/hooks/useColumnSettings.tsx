import { useMemo } from 'react';

import { TableColumnType } from '../../../@types';
import { CrudRowItemActions } from '../../CrudRowItemActions';
import { defaultText } from '../config';
import { CrudTableViewProps } from '../props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// hooks to get table columns
export const useColumnSettings = <TData = any,>(
  props: CrudTableViewProps<TData>
): TableColumnType<TData>[] => {
  const {
    size,
    columns,
    columnActions = [],
    text = defaultText,
    enableActionColumn,
    enableItemGroupAction = false,
    columnActionsGroupIcon,
    actionColumnProps = {},
    actionColumnExtraWidth,
    actionColumnPosition = 'last',
    renderActionButtons,
    renderExtraActionButtons,
  } = props;

  const tableColumns: TableColumnType<TData>[] = useMemo(() => {
    const returnColumns = columns ?? [];

    if (!enableActionColumn || !renderActionButtons) {
      return returnColumns;
    }

    // =============== HELPERS

    const getActionColSize = () => {
      if (size === 'small') return 35;
      if (size === 'medium') return 50;
      return 60;
    };

    // action columns variables
    const actionLength =
      (columnActions ?? []).length > 1 && !enableItemGroupAction
        ? (columnActions ?? []).length
        : 1;

    // TODO: handle column position
    // const isActionColLast = actionColumnPosition === 'last';
    // const isActionCoFirst = actionColumnPosition === 'first';
    // const colFixedRight = isActionColLast ? 'right' : undefined;
    // const colFixedLeft = isActionCoFirst ? 'left' : undefined;
    // const colFixed = colFixedRight ?? colFixedLeft;

    // action column settings
    const actionColumnConfig: TableColumnType<TData> = {
      key: 'action',
      title: text?.columnActionText ?? 'Action',
      align: 'center',
      width: actionLength * getActionColSize() + (actionColumnExtraWidth ?? 0),
      // fixed: enableActionFixedWidth ? colFixed : undefined,
      ...actionColumnProps,
      render: (record) => {
        return (
          <CrudRowItemActions
            data={record}
            actions={columnActions}
            node={columnActionsGroupIcon}
            type={enableItemGroupAction ? 'menu' : 'icon'}
            renderActionButtons={renderActionButtons}
            renderExtraActionButtons={renderExtraActionButtons}
          />
        );
      },
    };

    // return column config
    if (actionColumnPosition === 'first') {
      return [actionColumnConfig, ...returnColumns];
    }

    if (typeof actionColumnPosition === 'number') {
      return [
        ...returnColumns.slice(0, actionColumnPosition),
        actionColumnConfig,
        ...returnColumns.slice(actionColumnPosition),
      ];
    }

    // usually position will be the last
    return [...returnColumns, actionColumnConfig];
  }, [
    size,
    text,
    columns,
    columnActions,
    enableActionColumn,
    columnActionsGroupIcon,
    actionColumnExtraWidth,
    actionColumnProps,
    actionColumnPosition,
    enableItemGroupAction,
    renderActionButtons,
    renderExtraActionButtons,
  ]);

  return tableColumns;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useColumnSettings;
