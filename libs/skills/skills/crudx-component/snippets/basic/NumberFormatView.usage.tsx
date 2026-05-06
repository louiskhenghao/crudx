import { NumberFormatView } from '@crudx/{{UI_PACKAGE}}';

// TODO: tweak `format` (see numeral.js docs) and prefix/postfix.
export function NumberFormatExample() {
  return (
    <>
      <NumberFormatView amount={1234567.89} format="0,0.00" prefix="$" postfix=" USD" />
      <NumberFormatView amount={0.7421} format="0.0%" />
      <NumberFormatView amount={2_500_000} format="0.0a" prefix="≈ " />
    </>
  );
}
