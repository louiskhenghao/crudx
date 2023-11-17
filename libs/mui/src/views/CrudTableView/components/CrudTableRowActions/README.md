# CrudTableRowActions

Action button for table row

---

## Props

```ts
import CrudTableViewProps from '../../props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudTableRowActionsProps<TData = any> = Pick<CrudTableViewProps<TData>, 'actions' | 'renderActionButtons' | 'renderExtraActionButtons'> & {
  /**
   * whether put action into a dropdown group
   * @default icon
   */
  type?: 'icon' | 'menu';
  /**
   * table row data
   */
  data?: TData;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudTableRowActionsProps;
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
