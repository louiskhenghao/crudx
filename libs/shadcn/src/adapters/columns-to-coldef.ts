import type { ColumnDef } from '@tanstack/react-table';

import { TableColumnType } from '../@types';

/**
 * Convert a MUI-compatible `TableColumnType[]` into TanStack `ColumnDef[]`.
 *
 * Layout-only fields (align, valign, width, sticky, className, headerProps,
 * dataProps, ...) are stashed under `meta.crudx` so renderers can read them
 * without re-fetching the original column. The original column is also
 * preserved at `meta.crudx.originalColumn`.
 *
 * Group handling follows MUI's rule from
 * `libs/mui/src/components/TableHead/index.tsx:49-71`: columns sharing a
 * `group.key` collapse into a synthetic parent, and only the first
 * occurrence's `group` metadata takes effect.
 */
export function columnsToColumnDefs<TData>(
  columns: TableColumnType<TData>[]
): ColumnDef<TData, any>[] {
  const out: ColumnDef<TData, any>[] = [];
  const consumedGroupKeys = new Set<string>();

  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];

    if (col.group) {
      const groupKey = col.group.key;
      if (consumedGroupKeys.has(groupKey)) continue;
      consumedGroupKeys.add(groupKey);

      const siblings = columns.filter(
        (c) => c.group && c.group.key === groupKey
      );

      out.push({
        id: `__group__${groupKey}`,
        header: col.group.title as any,
        meta: {
          crudx: {
            align: col.group.align,
            alignTitle: col.group.alignTitle,
            valign: col.group.valign,
            width: col.group.width,
            minWidth: col.group.minWidth,
            uppercase: col.group.uppercase,
            sticky: col.group.sticky,
            className: col.group.className,
            headerProps: col.group.headerColumnProps,
            groupKey,
            isGroupParent: true,
          },
        },
        columns: siblings.map((child) => toLeafDef<TData>(child, groupKey)),
      });
      continue;
    }

    out.push(toLeafDef<TData>(col));
  }

  return out;
}

function toLeafDef<TData>(
  col: TableColumnType<TData>,
  groupKey?: string
): ColumnDef<TData, any> {
  const hasDataIndex = col.dataIndex != null && col.dataIndex !== '';

  const base = {
    id: col.key,
    header: col.title as any,
    enableSorting: col.sortable ?? false,
    meta: {
      crudx: {
        align: col.align,
        alignTitle: col.alignTitle,
        valign: col.valign,
        width: col.width,
        minWidth: col.minWidth,
        uppercase: col.uppercase,
        sticky: col.sticky,
        className: col.className,
        headerProps: col.headerColumnProps,
        dataProps: col.dataColumnProps,
        originalColumn: col,
        groupKey,
      },
    },
  } as ColumnDef<TData, any>;

  if (hasDataIndex) {
    (base as any).accessorKey = String(col.dataIndex);
  }

  if (col.render) {
    (base as any).cell = (info: any) =>
      col.render!(
        info.getValue(),
        info.row.original,
        info.row.index,
        info.column.getIndex?.() ?? 0
      );
  }

  return base;
}
