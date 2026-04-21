import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '../../lib/cn';
import { Button } from '../../primitives/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../primitives/select';

import { TablePaginationProps } from './props';

const defaultDisplayedRowsLabel = ({
  from,
  to,
  count,
}: {
  from: number;
  to: number;
  count: number;
}) => `${from}-${to} of ${count}`;

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TablePagination = <TData,>(
  props: TablePaginationProps<TData>
) => {
  const {
    className,
    data = [],
    page = 1,
    total,
    pageSize = 10,
    pageSizeOptions = [10, 25, 50],
    rowsPerPageLabel = 'Rows per page',
    displayedRowsLabel = defaultDisplayedRowsLabel,
    nextLabel,
    prevLabel,
    onPageChange,
    onPageSizeChange,
    ...rest
  } = props;

  // =============== STATE
  const [pageState, setPageState] = useState<number>(page);
  const [rowsPerPageState, setRowsPerPageState] = useState(pageSize);

  // =============== EFFECTS
  useEffect(() => setPageState(page), [page]);
  useEffect(() => setRowsPerPageState(pageSize), [pageSize]);

  // =============== VARIABLES
  const count = total ?? data.length;
  const safePage = Math.max(1, pageState);
  const totalPages = Math.max(1, Math.ceil(count / rowsPerPageState));
  const from = count === 0 ? 0 : (safePage - 1) * rowsPerPageState + 1;
  const to = Math.min(count, safePage * rowsPerPageState);
  const canPrev = safePage > 1;
  const canNext = safePage < totalPages;

  // =============== EVENTS
  const onPrev = () => {
    if (!canPrev) return;
    const next = safePage - 1;
    setPageState(next);
    onPageChange?.(next);
  };

  const onNext = () => {
    if (!canNext) return;
    const next = safePage + 1;
    setPageState(next);
    onPageChange?.(next);
  };

  const onRowsPerPageChange = (value: string) => {
    const next = parseInt(value, 10);
    if (Number.isNaN(next)) return;
    setRowsPerPageState(next);
    onPageSizeChange?.(next);
  };

  // =============== VIEWS
  return (
    <div
      {...rest}
      className={cn(
        'table-pagination flex items-center justify-end gap-6 px-2 py-2 text-sm',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-[hsl(var(--muted-foreground))]">
          {rowsPerPageLabel}
        </span>
        <Select
          value={String(rowsPerPageState)}
          onValueChange={onRowsPerPageChange}
        >
          <SelectTrigger className="h-8 w-[72px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {pageSizeOptions.map((opt) => (
              <SelectItem key={opt} value={String(opt)}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-[hsl(var(--muted-foreground))]">
        {displayedRowsLabel({ from, to, count, page: safePage })}
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
          {prevLabel}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={!canNext}
          aria-label="Next page"
        >
          {nextLabel}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TablePagination;
