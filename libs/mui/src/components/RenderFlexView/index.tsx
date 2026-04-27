import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import isArray from 'lodash/isArray';

import { GridFlexItemType, RenderFlexViewProps } from './props';

const COLUMNS = 12;

const colsToWidth = (n: number): string =>
  n >= COLUMNS ? '100%' : `${((n / COLUMNS) * 100).toFixed(4)}%`;

/** Translate `xs`/`sm`/`md`/`lg`/`xl` (1–12) into a responsive `width`. */
const sizingSx = (item: GridFlexItemType): BoxProps['sx'] => {
  const width: Record<string, string> = {};
  (['xs', 'sm', 'md', 'lg', 'xl'] as const).forEach((bp) => {
    const v = item?.[bp];
    if (typeof v === 'number') width[bp] = colsToWidth(v);
  });
  return Object.keys(width).length > 0 ? { width } : { width: '100%' };
};

const stripGridLegacyProps = <T extends Record<string, unknown>>(
  p: T | undefined
): Omit<T, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'spacing' | 'columns' | 'item' | 'container' | 'sx'> => {
  if (!p) return {} as any;
  const {
    xs: _xs,
    sm: _sm,
    md: _md,
    lg: _lg,
    xl: _xl,
    spacing: _spacing,
    columns: _columns,
    item: _item,
    container: _container,
    sx: _sx,
    ...rest
  } = p as any;
  return rest;
};

/**
 * ===========================
 * MAIN
 * ===========================
 *
 * Layout helper that mirrors the legacy `Grid container/item` ergonomics
 * but renders through `Box` + flexbox so it stays compatible with
 * `@mui/material` v5 (where v5 `Grid` is deprecated), v6, and v7.
 *
 * The `xs`/`sm`/`md`/`lg`/`xl` numeric props are preserved and mapped
 * onto a responsive `width` value. New code should compose `Box` /
 * `Stack` directly — `RenderFlexView` is kept for back-compat.
 */
export const RenderFlexView: React.FC<RenderFlexViewProps> = (props) => {
  const { className, items = [], containerProps, itemProps } = props;

  return (
    <>
      {items.map((row, rowIndex) => {
        const isItemArray = isArray(row);
        const rowMeta = (isItemArray
          ? containerProps
          : { ...containerProps, ...row.props }) as
          | (typeof containerProps & { sx?: BoxProps['sx'] })
          | undefined;
        const spacing = rowMeta?.spacing ?? 2;
        const halfGap = spacing / 2;
        const rowItems = isItemArray ? row : row.items;
        const rowSx = (rowMeta as { sx?: BoxProps['sx'] })?.sx;

        return (
          <Box
            key={`container-${rowIndex}`}
            className={className}
            {...stripGridLegacyProps(rowMeta as any)}
            sx={[
              {
                display: 'flex',
                flexWrap: 'wrap',
                mx: -halfGap,
                width: `calc(100% + ${spacing * 8}px)`,
              },
              ...(Array.isArray(rowSx) ? rowSx : rowSx ? [rowSx] : []),
            ]}
          >
            {rowItems.map((item, itemIndex) => {
              const merged = { ...itemProps, ...item } as GridFlexItemType;
              const itemSx = (merged as { sx?: BoxProps['sx'] }).sx;
              return (
                <Box
                  key={`item-${rowIndex}-${itemIndex}`}
                  {...stripGridLegacyProps(merged as any)}
                  sx={[
                    {
                      px: halfGap,
                      boxSizing: 'border-box',
                    },
                    sizingSx(merged) as BoxProps['sx'],
                    ...(Array.isArray(itemSx)
                      ? itemSx
                      : itemSx
                      ? [itemSx]
                      : []),
                  ]}
                />
              );
            })}
          </Box>
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
