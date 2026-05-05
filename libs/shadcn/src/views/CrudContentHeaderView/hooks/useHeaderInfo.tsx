import { useMemo } from 'react';
import { formatNumbering } from '@crudx/common';
import forEach from 'lodash/forEach';
import replace from 'lodash/replace';

import { cn } from '../../../lib/cn';
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
    const viewList: CrudContentHeaderItemNode[] = [];
    const titleView = typeof title === 'function' ? title() : title;

    forEach(headerInfos, (field, i) => {
      const type = field.type;
      const enabled = field.enabled ?? true;

      if (type === 'title' && enabled && titleView) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            if (['string', 'number'].includes(typeof titleView)) {
              return (
                <h2 className="text-xl font-semibold leading-tight">
                  {titleView}
                </h2>
              );
            }
            return <>{titleView}</>;
          },
        });
      }
      if (type === 'total' && enabled) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const f = field as any;
            const { className, ...restProps } = f.props ?? {};
            return (
              <p
                {...restProps}
                className={cn(
                  'crudx-content-header-total-count text-sm text-[hsl(var(--muted-foreground))]',
                  className
                )}
              >
                {replace(
                  f?.text ?? 'Total: {count}',
                  '{count}',
                  `${formatNumbering(totalRecord ?? 0)}`
                )}
              </p>
            );
          },
        });
      }
      if (type === 'bulk' && enabled && totalSelected > 0) {
        viewList.push({
          key: `${type}-${i}`,
          render: () => {
            const f = field as any;
            return (
              <TableSelectedBulkOptions
                size={headerActionSize}
                className="crudx-content-header-bulk-node"
                text={f?.text}
                items={headerBulkOptions ?? f.items}
                total={totalSelected}
                onChange={onTriggerBulkAction}
                {...f.props}
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
