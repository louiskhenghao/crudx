# CrudTableRowActions

Action button for table row

---

## Props

```ts
import { ReactNode } from 'react';
import { CrudCommonActionNodeProps, CrudComponentActionProps } from '@crudx/core';

import { CrudRowItemActionType } from '../../@types';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudRowItemActionsProps<TData = any> = {
  /**
   * whether put action into a dropdown group
   * @default icon
   */
  type?: 'icon' | 'menu';
  /**
   * table row data
   */
  data?: TData;
  /**
   * custom node
   */
  node?: ReactNode;
  /**
   * columns action
   */
  actions?: CrudRowItemActionType[];
  /**
   * custom render action column buttons
   */
  renderActionButtons?: (context?: { data: TData }) => CrudComponentActionProps;
  /**
   * extra action columns button
   */
  renderExtraActionButtons?: (context?: { data: TData }) => {
    views: ReactNode[];
    nodes: CrudCommonActionNodeProps['1'][];
  };
};
```

---

## Example

```ts
import { CrudTableRowActions } from '@crudx/mui';

<CrudTableRowActions
  type="icon"
  actions={actions}
  data={record}
  renderActionButtons={({ data }) => {
    return {
      viewNode: <Button>View</Button>,
    };
  }}
  renderExtraActionButtons={() => {
    return <Button>View</Button>;
  }}
/>;
```
