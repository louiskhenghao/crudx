import { useMemo } from 'react';
import {
  getCoreRowModel,
  useReactTable,
  type RowSelectionState,
  type Table as TanStackTable,
} from '@tanstack/react-table';

import {
  InferDataColumnType,
  TableCheckboxConfig,
  TableColumnType,
} from '../@types';

import { columnsToColumnDefs } from './columns-to-coldef';

export interface UseCrudxTableArgs<TData> {
  data: TData[];
  columns: TableColumnType<TData>[];
  checked: InferDataColumnType<TData>[];
  checkbox?: TableCheckboxConfig<TData>;
}

/**
 * Thin wrapper over `useReactTable` that keeps every cross-cutting state
 * (pagination, sorting, row selection) in manual mode. The outer `Table`
 * component owns the source-of-truth and only uses the returned instance for
 * row iteration / header group resolution.
 */
export function useCrudxTable<TData>(
  args: UseCrudxTableArgs<TData>
): TanStackTable<TData> {
  const { data, columns, checked, checkbox } = args;

  const columnDefs = useMemo(() => columnsToColumnDefs(columns), [columns]);

  const rowSelection = useMemo<RowSelectionState>(() => {
    if (!checkbox?.enabled || !checked.length) return {};
    const selection: RowSelectionState = {};
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const value = extractCheckboxValue(row, checkbox);
      if (value != null && checked.includes(value)) {
        selection[String(i)] = true;
      }
    }
    return selection;
  }, [data, checked, checkbox]);

  return useReactTable<TData>({
    data,
    columns: columnDefs,
    state: { rowSelection },
    enableRowSelection: checkbox?.enabled ?? false,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row, index) => {
      if (checkbox?.enabled && checkbox.dataIndex) {
        const v = (row as any)[checkbox.dataIndex];
        return v != null ? String(v) : String(index);
      }
      return String(index);
    },
  });
}

export function extractCheckboxValue<TData>(
  row: TData,
  checkbox: TableCheckboxConfig<TData> | undefined
): InferDataColumnType<TData> | null {
  if (!checkbox?.enabled) return null;
  if (typeof row === 'number' || typeof row === 'string') {
    return row as InferDataColumnType<TData>;
  }
  if (!checkbox.dataIndex) return row as InferDataColumnType<TData>;
  return (row as any)?.[checkbox.dataIndex] ?? null;
}
