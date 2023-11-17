import { useMemo } from 'react';
import { formatNumbering } from '@crudx/core';
import Typography from '@mui/material/Typography';
import forEach from 'lodash/forEach';
import replace from 'lodash/replace';

import { TableSelectedBulkOptions } from '../../../../../components/TableSelectedBulkOptions';
import { CrudTableHeaderItemNode } from '../../../types';
import { CrudTableHeaderViewProps } from '../props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// hooks to get header info
export const useHeaderInfos = (
  props: CrudTableHeaderViewProps
): {
  views: CrudTableHeaderItemNode[];
} => {
  const {
    title,
    totalRecord,
    totalSelected = 0,
    headerInfos,
    headerBulkOptions,
    onTriggerBulkAction,
  } = props;

  // =============== VIEWS
  const views = useMemo(() => {
    // -------- VARIABLES
    const viewList: CrudTableHeaderItemNode[] = [];
    const titleView = typeof title === 'function' ? title() : title;

    // ----- loop of actions
    forEach(headerInfos, (field, i) => {
      const type = field.type;
      const enabled = field.enabled ?? true;

      // ----- create button
      if (type === 'title' && enabled && titleView) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            if (['string', 'number'].includes(typeof titleView)) {
              return <Typography variant="h6">{titleView}</Typography>;
            }
            return <>{titleView}</>;
          },
        });
      }
      if (type === 'total' && enabled) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            return (
              <Typography
                className="crud-table-header-total-count"
                {...field.props}
              >
                {replace(
                  field?.text ?? 'Total: {count}',
                  '{count}',
                  `${formatNumbering(totalRecord ?? 0)}`
                )}
              </Typography>
            );
          },
        });
      }
      if (type === 'bulk' && enabled && totalSelected > 0) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            return (
              <TableSelectedBulkOptions
                size="small"
                className="crud-table-header-bulk-node"
                text={field?.text}
                items={headerBulkOptions ?? field.items}
                total={totalSelected}
                onChange={onTriggerBulkAction}
                {...field.props}
              />
            );
          },
        });
      }
    });

    return viewList;
  }, [
    title,
    totalSelected,
    totalRecord,
    headerInfos,
    headerBulkOptions,
    onTriggerBulkAction,
  ]);

  return { views };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useHeaderInfos;
