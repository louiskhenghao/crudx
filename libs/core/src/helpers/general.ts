import numeral from 'numeral';

export const isPrimitive = (val: any) => val !== Object(val);

export const formatNumbering = (
  amount: string | number = 0,
  format = '0,0'
): string | number => {
  return numeral(amount).format(format);
};
