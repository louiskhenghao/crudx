import { isValidElement, memo } from 'react';
import isNil from 'lodash/isNil';

import { TabCountColor } from '../../../../@types';
import { cn } from '../../../../lib/cn';

import { TabLabelProps } from './props';

const chipColorClass: Record<TabCountColor, string> = {
  default: 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]',
  primary: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]',
  secondary:
    'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]',
  success: 'bg-emerald-500 text-white',
  warning: 'bg-amber-500 text-white',
  error: 'bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))]',
  info: 'bg-sky-500 text-white',
};

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TabLabel = memo((props: TabLabelProps) => {
  const { label, count, chipColor = 'default', chipProps } = props;

  // =============== VARIABLES
  const hasCount = !isNil(count);
  const isElement = isValidElement(count);

  // =============== VIEWS
  return (
    <span className="inline-flex items-center gap-1">
      {label}
      {!hasCount ? null : isElement ? (
        count
      ) : (
        <span
          {...chipProps}
          className={cn(
            'ml-0.5 inline-flex min-w-[20px] items-center justify-center rounded-full px-1.5 py-0.5 text-xs leading-none',
            chipColorClass[chipColor],
            chipProps?.className
          )}
        >
          {count}
        </span>
      )}
    </span>
  );
});
TabLabel.displayName = 'TabLabel';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TabLabel;
