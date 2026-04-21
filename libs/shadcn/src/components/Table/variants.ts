import { cva } from 'class-variance-authority';

export const tableVariants = cva(
  'w-full caption-bottom text-sm border-collapse',
  {
    variants: {
      borderStyle: {
        default: '',
        preset: '',
      },
      striped: { true: '[&_tbody_tr:nth-child(even)]:bg-[hsl(var(--muted))]/40', false: '' },
      bordered: { true: '', false: '' },
      size: {
        sm: '[&_td]:py-1 [&_td]:px-2 [&_th]:py-1 [&_th]:px-2',
        md: '[&_td]:py-2.5 [&_td]:px-4 [&_th]:py-2.5 [&_th]:px-4',
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
