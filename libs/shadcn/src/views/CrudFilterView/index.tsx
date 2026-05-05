import { memo } from 'react';

import { cn } from '../../lib/cn';
import { RenderFlexView } from '../../components/RenderFlexView';

import { CrudFilterViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudFilterView = memo((props: CrudFilterViewProps) => {
  const { unstyled, className, title, actions, children } = props;

  // =============== VARIABLES
  const hasActions =
    typeof actions === 'function' ||
    (typeof actions === 'object' && (actions as any[])?.length > 0);

  // =============== VIEW
  if (!title && !children && !actions) {
    return null;
  }
  return (
    <div
      className={cn(
        'crudx-filter-wrapper',
        !unstyled &&
          'rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 mb-6',
        className
      )}
    >
      {/* ---- TITLE */}
      {title && (
        <div
          className={cn(
            'crudx-filter-title text-base font-bold',
            !unstyled && 'mb-2'
          )}
        >
          {title}
        </div>
      )}

      {/* ---- CONTENT */}
      {!!children && (
        <div
          className={cn(
            'crudx-filter-content',
            !unstyled && hasActions && 'mb-2'
          )}
        >
          {children}
        </div>
      )}

      {/* ---- ACTIONS */}
      {typeof actions === 'function' && (
        <div className="crudx-filter-actions">{actions()}</div>
      )}
      {typeof actions === 'object' && (actions as any[]).length > 0 && (
        <div className="crudx-filter-actions">
          <RenderFlexView items={[actions as any]} />
        </div>
      )}
    </div>
  );
});
CrudFilterView.displayName = 'CrudFilterView';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudFilterView;
