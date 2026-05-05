import { TableColumnType } from '../@types';

export const STICKY_CHECKBOX_WIDTH = 44;

export interface StickyState {
  isFirstSticky: boolean;
  isPrevSticky: boolean;
  isNextSticky: boolean;
  hideBorderLeft: boolean;
  hideBorderRight: boolean;
  side?: 'left' | 'right';
}

/**
 * Mirrors MUI's sticky border rules from
 * `libs/mui/src/components/TableHead/index.tsx:140-149` &
 * `libs/mui/src/components/TableRow/index.tsx:110-116`.
 */
export function getColumnStickyState<TData>(
  columns: TableColumnType<TData>[],
  index: number,
  hasCheckBoxSticky: boolean
): StickyState {
  const columnLength = columns.length;
  const col = columns[index];
  const isFirstItem = index === 0;
  const isLastItem = columnLength === index + 1;
  const isFirstSticky = isFirstItem && (!!col.sticky || hasCheckBoxSticky);
  const isPrevSticky = !isFirstItem && !!columns[index - 1]?.sticky;
  const isNextSticky = !isLastItem && !!columns[index + 1]?.sticky;
  const hideBorderLeft = (isFirstSticky || isPrevSticky) && !isLastItem;
  const hideBorderRight = isLastItem || isNextSticky;
  const side: StickyState['side'] = getStickySide(columns, index);
  return {
    isFirstSticky,
    isPrevSticky,
    isNextSticky,
    hideBorderLeft,
    hideBorderRight,
    side,
  };
}

/**
 * Determine which edge a sticky column anchors to.
 *
 * - Columns 0..i all sticky    → 'left'  (left block)
 * - Columns i..last all sticky → 'right' (right block)
 * - Otherwise (isolated sticky in middle) → 'right' default
 */
export function getStickySide<TData>(
  columns: TableColumnType<TData>[],
  index: number
): 'left' | 'right' | undefined {
  const col = columns[index];
  if (!col?.sticky) return undefined;
  if (isInLeftStickyBlock(columns, index)) return 'left';
  if (isInRightStickyBlock(columns, index)) return 'right';
  return 'right';
}

function isInLeftStickyBlock<TData>(
  columns: TableColumnType<TData>[],
  index: number
): boolean {
  for (let i = 0; i <= index; i++) {
    if (!columns[i]?.sticky) return false;
  }
  return true;
}

function isInRightStickyBlock<TData>(
  columns: TableColumnType<TData>[],
  index: number
): boolean {
  for (let i = index; i < columns.length; i++) {
    if (!columns[i]?.sticky) return false;
  }
  return true;
}

const widthToPx = (w: number | string | undefined): number => {
  if (w == null) return 0;
  if (typeof w === 'number') return w;
  const match = /^(\d+(?:\.\d+)?)(?:px)?$/i.exec(w.trim());
  return match ? parseFloat(match[1]) : 0;
};

export interface ColumnPinningStyle {
  side: 'left' | 'right' | undefined;
  offset: number;
  isLastLeftPinned: boolean;
  isFirstRightPinned: boolean;
}

/**
 * Mirrors TanStack's `getCommonPinningStyles` helper. Returns the cumulative
 * inset offset (px) and boundary flags for a sticky column, accounting for
 * a sticky checkbox column on the left edge.
 */
export function getColumnPinningStyle<TData>(
  columns: TableColumnType<TData>[],
  index: number,
  hasCheckBoxSticky: boolean
): ColumnPinningStyle {
  const side = getStickySide(columns, index);
  if (!side) {
    return {
      side: undefined,
      offset: 0,
      isLastLeftPinned: false,
      isFirstRightPinned: false,
    };
  }

  let offset = 0;
  if (side === 'left') {
    if (hasCheckBoxSticky) offset += STICKY_CHECKBOX_WIDTH;
    for (let i = 0; i < index; i++) {
      if (columns[i]?.sticky) offset += widthToPx(columns[i].width);
    }
  } else {
    for (let i = index + 1; i < columns.length; i++) {
      if (columns[i]?.sticky) offset += widthToPx(columns[i].width);
    }
  }

  const isLastLeftPinned =
    side === 'left' &&
    (index === columns.length - 1 || !columns[index + 1]?.sticky);
  const isFirstRightPinned =
    side === 'right' && (index === 0 || !columns[index - 1]?.sticky);

  return { side, offset, isLastLeftPinned, isFirstRightPinned };
}
