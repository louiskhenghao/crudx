import { memo } from 'react';
import { Link as NextLink } from '@crudx/common';
import { ChevronLeft } from 'lucide-react';

import { cn } from '../../lib/cn';
import { BreadcrumbView } from '../../components/BreadcrumbView';
import { RenderNodeView } from '../../components/RenderNodeView';

import { CrudPageHeaderViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudPageHeaderView = memo((props: CrudPageHeaderViewProps) => {
  const {
    unstyled,
    className,
    title,
    items = [],
    actions = [],
    backPath,
    backIcon,
    titleProps,
    wrapperProps,
    backPathProps,
    breadcrumbProps,
  } = props;

  // =============== VARIABLES
  const hasActions = actions.length > 0;
  const hasBreadcrumbs = items.length > 0;

  // =============== VIEW
  if (!backPath && !hasActions && !hasBreadcrumbs && !title) {
    return null;
  }

  return (
    <div
      {...wrapperProps}
      className={cn(
        'crud-page-header-wrapper',
        !unstyled && 'mb-6',
        className
      )}
    >
      {/* ---- BREADCRUMBS */}
      {hasBreadcrumbs && (
        <BreadcrumbView
          className={cn('crud-page-header-breadcrumbs', !unstyled && 'mb-2')}
          items={items}
          {...breadcrumbProps}
        />
      )}

      <div className="crud-page-header-content flex items-center">
        {/* ---- TITLE VIEW */}
        <div className="crud-page-header-title flex items-center gap-2">
          {/* ---- BACK BUTTON */}
          {backPath && (
            <NextLink
              {...backPathProps}
              className={cn(
                'crud-page-header-title-back inline-flex items-center',
                backPathProps?.className
              )}
              href={backPath}
            >
              {backIcon ?? <ChevronLeft className="h-5 w-5" />}
            </NextLink>
          )}

          {/* ---- TITLE */}
          {title && (
            <h1
              {...titleProps}
              className={cn(
                'crud-page-header-title-text text-2xl font-semibold leading-none tracking-tight',
                titleProps?.className
              )}
            >
              {title}
            </h1>
          )}
        </div>

        {/* ---- ACTIONS VIEWS */}
        {hasActions && (
          <div className="crud-page-header-actions ml-auto">
            <RenderNodeView direction="row" gap={2} items={actions} />
          </div>
        )}
      </div>
    </div>
  );
});
CrudPageHeaderView.displayName = 'CrudPageHeaderView';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudPageHeaderView;
