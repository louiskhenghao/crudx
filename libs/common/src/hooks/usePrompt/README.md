# `usePrompt`

A hook that use for render prompt dialog with self design UI

## Usage

```TypeScript
import { usePrompt } from '@crudx/common';

const Demo = () => {
  const dialog = usePrompt();

  return (
    <div>
      <button
        onClick={() => {
          dialog({
            node: ({ hide }) => {
              return <div>Some Content</div>
            }
          });
        }}
      >
        Prompt Dialog
      </button>

    </div>
  );
};
```

## Reference

```TypeScript
usePrompt(): (options: PromptProps)=> Promise<boolean>

export type PromptProps = {
  onHide?: () => void;
  node: (props: { hide: () => void }) => ReactNode;
};
```
