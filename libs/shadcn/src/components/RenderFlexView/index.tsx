import React from 'react';
import isArray from 'lodash/isArray';

import { cn } from '../../lib/cn';

import {
  GridBreakpointSpan,
  GridFlexItemType,
  GridFlexRowType,
  RenderFlexViewProps,
} from './props';

const spanClass = (
  bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  value: GridBreakpointSpan | undefined
): string => {
  if (value == null || value === false) return '';
  if (value === true) return bp === 'xs' ? 'flex-1' : `${bp}:flex-1`;
  if (value === 'auto') return bp === 'xs' ? 'w-auto' : `${bp}:w-auto`;
  // 12-column grid → percentage width via Tailwind arbitrary value
  const prefix = bp === 'xs' ? '' : `${bp}:`;
  const pct = Math.max(0, Math.min(12, value));
  return `${prefix}basis-[${(pct / 12) * 100}%] ${prefix}max-w-[${(pct / 12) * 100}%]`;
};

const itemClasses = (item: GridFlexItemType): string =>
  cn(
    spanClass('xs', item.xs),
    spanClass('sm', item.sm),
    spanClass('md', item.md),
    spanClass('lg', item.lg),
    spanClass('xl', item.xl)
  );

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const RenderFlexView: React.FC<RenderFlexViewProps> = (props) => {
  const { className, items = [], containerProps, itemProps } = props;

  // =============== VIEWS
  return (
    <>
      {items.map((row, rowIndex) => {
        const isItemArray = isArray(row);
        const resolvedRow: GridFlexRowType = isItemArray
          ? { ...(containerProps ?? {}) }
          : { ...(containerProps ?? {}), ...(row.props ?? {}) };

        const spacing = resolvedRow.spacing ?? 2;
        const gapStyle = { gap: `${spacing * 0.25}rem` };

        const children = isItemArray
          ? row
          : (row as { items: GridFlexItemType[] }).items;

        return (
          <div
            key={`container-${rowIndex}`}
            className={cn('flex flex-wrap', className, resolvedRow.className)}
            style={{ ...gapStyle, ...resolvedRow.style }}
            {...resolvedRow.rowProps}
          >
            {children.map((item, itemIndex) => {
              const merged: GridFlexItemType = {
                ...(isItemArray ? {} : itemProps),
                ...item,
              };
              return (
                <div
                  key={`item-${rowIndex}-${itemIndex}`}
                  className={cn(itemClasses(merged), merged.className)}
                  style={merged.style}
                  {...merged.itemProps}
                >
                  {merged.children}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default RenderFlexView;
