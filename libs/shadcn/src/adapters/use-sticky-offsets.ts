import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { TableColumnType } from '../@types';

import { getStickySide } from './column-sticky';

/**
 * ===========================
 * Runtime sticky offset measurement
 * ===========================
 *
 * The static `getColumnPinningStyle` helper in `./column-sticky` computes
 * cumulative `left` / `right` offsets from the column config — but it can
 * only see widths declared as numbers or `"NNpx"`. Anything in `%`, `rem`,
 * `auto`, or driven by content gets a 0 width, which makes stacked sticky
 * columns overlap.
 *
 * `useStickyOffsets` measures the rendered `<th>` widths from the DOM
 * (after layout) and re-measures via `ResizeObserver`, then exposes the
 * results through a context so head + body cells agree on the same
 * offsets. The static helper remains the first-paint / SSR fallback.
 */

export type StickyOffset = { left?: number; right?: number };

export interface MeasuredOffsets {
  get(columnKey: string): StickyOffset | undefined;
}

const NOOP_OFFSETS: MeasuredOffsets = { get: () => undefined };

export const StickyOffsetsContext =
  createContext<MeasuredOffsets>(NOOP_OFFSETS);

export const useStickyOffsetsContext = (): MeasuredOffsets =>
  useContext(StickyOffsetsContext);

const escapeAttr = (val: string): string =>
  val.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const offsetsEqual = (
  a: Map<string, StickyOffset>,
  b: Map<string, StickyOffset>
): boolean => {
  if (a.size !== b.size) return false;
  for (const [key, value] of a) {
    const other = b.get(key);
    if (!other) return false;
    if (other.left !== value.left || other.right !== value.right) return false;
  }
  return true;
};

export const useStickyOffsets = <TData,>(
  columns: TableColumnType<TData>[],
  hasCheckBoxSticky: boolean,
  tableRef: RefObject<HTMLTableElement>
): MeasuredOffsets => {
  const [offsets, setOffsets] = useState<Map<string, StickyOffset>>(
    () => new Map()
  );

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const measure = () => {
      const next = new Map<string, StickyOffset>();

      const checkboxTh = table.querySelector<HTMLElement>(
        'thead .crudx-checkbox-column'
      );
      const checkboxWidth =
        hasCheckBoxSticky && checkboxTh ? checkboxTh.offsetWidth : 0;

      let leftAcc = checkboxWidth;
      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        if (getStickySide(columns, i) !== 'left') continue;
        next.set(col.key, { left: leftAcc });
        const th = table.querySelector<HTMLElement>(
          `thead [data-key="${escapeAttr(col.key)}"]`
        );
        leftAcc += th?.offsetWidth ?? 0;
      }

      let rightAcc = 0;
      for (let i = columns.length - 1; i >= 0; i--) {
        const col = columns[i];
        if (getStickySide(columns, i) !== 'right') continue;
        next.set(col.key, { right: rightAcc });
        const th = table.querySelector<HTMLElement>(
          `thead [data-key="${escapeAttr(col.key)}"]`
        );
        rightAcc += th?.offsetWidth ?? 0;
      }

      setOffsets((prev) => (offsetsEqual(prev, next) ? prev : next));
    };

    measure();

    if (typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(measure);
    table.querySelectorAll('thead th').forEach((th) => observer.observe(th));

    return () => observer.disconnect();
  }, [columns, hasCheckBoxSticky, tableRef]);

  return useMemo<MeasuredOffsets>(
    () => ({ get: (key: string) => offsets.get(key) }),
    [offsets]
  );
};
