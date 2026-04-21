import { TableColumnType } from '../@types';

export const alignClass: Record<'left' | 'center' | 'right', string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const valignClass: Record<
  'top' | 'middle' | 'bottom' | 'baseline',
  string
> = {
  top: 'align-top',
  middle: 'align-middle',
  bottom: 'align-bottom',
  baseline: 'align-baseline',
};

export function getTitleText<TData>(column: TableColumnType<TData>): string {
  const { title, uppercase = true } = column;
  if (typeof title !== 'string') return '';
  return uppercase ? title.toUpperCase() : title;
}
