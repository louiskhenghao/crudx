# TooltipView

A wrapper of MUI Tooltip with controlling props eg: enabled

---

## Props

```ts
import { TooltipProps } from '@mui/material';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// button dropdown props
export type TooltipViewProps = TooltipProps & {
  /**
   * whether enabled tooltip, by default will see if title is provided
   * by providing will hard force applied
   */
  enabled?: boolean;
};
```

---

# Example

```ts
import { TooltipView } from '@crudx/mui';

<TooltipView enabled title="Custom tooltip">
  Hey
</TooltipView>;
```
