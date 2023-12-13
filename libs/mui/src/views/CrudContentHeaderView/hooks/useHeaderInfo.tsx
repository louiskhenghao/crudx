import { useMemo } from 'react';
import { formatNumbering } from '@crudx/core';
import Typography from '@mui/material/Typography';
import forEach from 'lodash/forEach';
import replace from 'lodash/replace';

import { TableSelectedBulkOptions } from '../../../components/TableSelectedBulkOptions';
import { CrudContentHeaderViewProps } from '../props';
import { CrudContentHeaderItemNode } from '../types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// hooks to get header info
export const useHeaderInfos = (
  props: CrudContentHeaderViewProps
): {
  views: CrudContentHeaderItemNode[];
} => {
  const {
    title,
    totalRecord,
    totalSelected = 0,
    headerInfos,
    headerBulkOptions,
    headerActionSize,
    onTriggerBulkAction,
  } = props;

  // =============== VIEWS
  const views = useMemo(() => {
    // -------- VARIABLES
    const viewList: CrudContentHeaderItemNode[] = [];
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
                className="crud-content-header-total-count"
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
                size={headerActionSize}
                className="crud-content-header-bulk-node"
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
    headerActionSize,
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
