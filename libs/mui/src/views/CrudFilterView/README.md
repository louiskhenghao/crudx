# CrudFilterView

Crud filter view

---

## Props

```TypeScript
import { PropsWithChildren, ReactNode } from 'react';

import { GridFlexItemType } from '../../components/RenderFlexView';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudFilterViewProps = PropsWithChildren<{
  /**
   * whether to have unstyled layout
   */
  unstyled?: boolean;
  /**
   * spacing multiplier for padding & margin
   * @default null
   */
  spacingMultiplier?: number;
  /**
   * css class name for the wrapper
   */
  className?: string;
  /**
   * the title to be display on filter view
   */
  title?: ReactNode;
  /**
   * action configuration with grid layout or custom rendering
   */
  actions?: (() => ReactNode) | GridFlexItemType[];
}>;

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudFilterViewProps;
```

---

## Reference

Below it how the structure of layout (css class name)

```
└── .crud-filter-wrapper
     ├── .crud-filter-title
     ├── .crud-filter-content
     └── .crud-filter-actions
```

---

## Example

```TypeScript
import { CrudFilterView } from '@crudx/mui';

// ====== VIEWS
<CrudFilterView
  title="TITLE"
>
  Some content to be display on filter view
</CrudFilterView>
```
