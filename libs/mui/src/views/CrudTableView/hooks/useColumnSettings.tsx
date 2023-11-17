import { useMemo } from 'react';

import { TableColumnType } from '../../../@types';
import { CrudTableRowActions } from '../components/CrudTableRowActions';
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
    enableGroupColumnAction = false,
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
      if (size === 'small') return 30;
      if (size === 'medium') return 40;
      return 50;
    };

    // action columns variables
    const actionLength =
      (columnActions ?? []).length > 1 && !enableGroupColumnAction
        ? (columnActions ?? []).length
        : 1;

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
          <CrudTableRowActions
            data={record}
            actions={columnActions}
            node={columnActionsGroupIcon}
            type={enableGroupColumnAction ? 'menu' : 'icon'}
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
    enableGroupColumnAction,
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
