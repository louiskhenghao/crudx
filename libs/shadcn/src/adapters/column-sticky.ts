import { TableColumnType } from '../@types';

export interface StickyState {
  isFirstSticky: boolean;
  isPrevSticky: boolean;
  isNextSticky: boolean;
  hideBorderLeft: boolean;
  hideBorderRight: boolean;
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
  return {
    isFirstSticky,
    isPrevSticky,
    isNextSticky,
    hideBorderLeft,
    hideBorderRight,
  };
}
