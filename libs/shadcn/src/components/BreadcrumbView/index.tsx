import React, { Fragment } from 'react';
import { Link as NextLink } from '@crudx/common';

import { cn } from '../../lib/cn';

import { BreadcrumbViewProps } from './props';

const chipClass =
  'inline-flex items-center gap-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-2 py-0.5 text-xs';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const BreadcrumbView: React.FC<BreadcrumbViewProps> = (props) => {
  const {
    type = 'default',
    current,
    className,
    items = [],
    separator = '/',
    chipProps,
    textProps,
    linkProps,
    ...restProps
  } = props;

  // =============== VIEWS
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        'breadcrumb-view-wrapper inline-flex items-center gap-2 text-sm',
        className
      )}
      {...restProps}
    >
      {items.map((e, i) => {
        const { url, label, icon } = e;
        const isMatched = current === url;
        const isLast = i === items.length - 1;

        // chip display
        if (type === 'chip') {
          const chipNode = (
            <span
              {...chipProps}
              className={cn(chipClass, isMatched && 'opacity-60', chipProps?.className)}
            >
              {icon}
              {label}
            </span>
          );
          return (
            <Fragment key={i}>
              {url && !isMatched ? (
                <NextLink href={url} {...linkProps}>
                  {chipNode}
                </NextLink>
              ) : (
                chipNode
              )}
              {!isLast && <span className="text-[hsl(var(--muted-foreground))]">{separator}</span>}
            </Fragment>
          );
        }

        // default display
        const textNode = (
          <span
            {...textProps}
            className={cn('inline-flex items-center gap-1', textProps?.className)}
          >
            {icon}
            {label}
          </span>
        );

        return (
          <Fragment key={i}>
            {url && !isMatched ? (
              <NextLink
                href={url}
                {...linkProps}
                className={cn('hover:underline', linkProps?.className)}
              >
                {textNode}
              </NextLink>
            ) : (
              textNode
            )}
            {!isLast && (
              <span className="text-[hsl(var(--muted-foreground))]">
                {separator}
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default BreadcrumbView;
