# NumberFormatView

The component used to format number

---

## Props

```ts
import { ReactNode } from 'react';

export type NumberFormatViewProps = {
  /**
   * prefix for number
   */
  prefix?: ReactNode;
  /**
   * postfix for number
   */
  postfix?: ReactNode;
  /**
   * the amount to be display,
   * @default 0
   */
  amount?: string | number;
  /**
   * the number formatting
   * @default 0,0
   */
  format?: string;
};
```

---

# Example

```ts
import { NumberFormatView } from '@crudx/mui';

<NumberFormatView amount={10000} />;
```
