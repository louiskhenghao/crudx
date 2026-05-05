import { cva } from 'class-variance-authority';

export const tableVariants = cva(
  'min-w-full align-middle caption-bottom text-left rtl:text-right text-foreground font-normal text-sm border-separate border-spacing-0',
  {
    variants: {
      borderStyle: {
        default: '',
        preset: '',
      },
      striped: {
        true: '[&_tbody_tr:nth-child(even)]:bg-muted/40 [&_tbody_tr:nth-child(even)_[data-sticky]]:bg-[color-mix(in_oklab,hsl(var(--muted))_40%,hsl(var(--background)))]',
        false: '',
      },
      bordered: {
        true: '[&_thead_tr>th]:border-e [&_thead_tr>:last-child]:border-e-0 [&_tbody_tr>td]:border-e [&_tbody_tr>:last-child]:border-e-0',
        false: '',
      },
      size: {
        sm: '[&_th]:h-9 [&_th]:px-3 [&_td]:px-3 [&_td]:py-2',
        md: '[&_th]:h-10 [&_th]:px-4 [&_td]:px-4 [&_td]:py-3',
      },
    },
    defaultVariants: {
      borderStyle: 'preset',
      striped: false,
      bordered: true,
      size: 'md',
    },
  }
);

export const tableCellAlignClass = (align?: 'left' | 'center' | 'right') => {
  if (align === 'center') return 'text-center';
  if (align === 'right') return 'text-right';
  return 'text-left';
};

export const tableCellValignClass = (
  valign?: 'top' | 'middle' | 'bottom' | 'baseline'
) => {
  if (valign === 'top') return 'align-top';
  if (valign === 'bottom') return 'align-bottom';
  if (valign === 'baseline') return 'align-baseline';
  return 'align-middle';
};
