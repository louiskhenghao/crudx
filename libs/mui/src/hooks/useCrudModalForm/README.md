# useCrudModalForm

This hooks to help with crud modal initialization

---

## Types

```ts
import { ReactNode } from 'react';
import { CrudCommonDialogContext, CrudCommonDialogOptions, CrudGraphApiCreateType, CrudGraphApiDeleteType, CrudGraphApiExportType, CrudGraphApiUpdateType, CrudSchemataTypes } from '@crudx/core';

import { DialogProps } from '../../components';

export type CrudModalFormProps<T extends CrudSchemataTypes = any, D = any> = Omit<CrudCommonDialogOptions<T>, 'node' | 'props'> & {
  props?: DialogProps;
  render: (options: CrudCommonDialogContext<T, D>) => ReactNode;
};

// the modal configuration for resources
export type CrudResourceModalFormProps<T extends CrudSchemataTypes = any> = {
  create?: CrudModalFormProps<T, CrudGraphApiCreateType<T>>;
  update?: CrudModalFormProps<T, CrudGraphApiUpdateType<T>>;
  delete?: CrudModalFormProps<T, CrudGraphApiDeleteType<T>>;
  exports?: CrudModalFormProps<T, CrudGraphApiExportType<T>>;
};

export type UseCrudModalFormProps<TSchema extends CrudSchemataTypes = any> = CrudResourceModalFormProps<TSchema>;
```

---

## Example

```TypeScript
import { useCrudModalForm } from "@crudx/mui";

// ====== HOOKS
const modalForms = useCrudModalForm({
  create: {
    title: "Create Modal Title",
    render: ({ hideDialog, context }) => {
      const resources = context.mutation; // access mutation resource
      return <div>Create Modal</div>;
    }
  },
  update: {
    title: "Update Modal Title",
    props: {
      // ant design modal props
      footer: null
    },
    render: ({ hideDialog, context }) => {
      const resources = context.mutation; // access mutation resource
      return <div>Create Modal</div>;
    }
  }
});
```
