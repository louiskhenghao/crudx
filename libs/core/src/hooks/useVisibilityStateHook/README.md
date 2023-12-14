# `useVisibilityStateHook`

A hook that use to set visibility state

## Usage

```TypeScript
import { useVisibilityStateHook } from '@crudx/core';

const Demo = () => {
  const { visible, onShow, onHide, setVisible } = useVisibilityStateHook();

  return (
    <div>
      <button onClick={() => onShow()}>Show</button>
      <button onClick={() => onHide()}>Hide</button>
      <button onClick={() => setVisible()}>Toggle</button>

      <p>Visible: {visible}</p>
    </div>
  );
};
```

## Reference

```TypeScript
useVisibilityStateHook(defaultState: boolean): VisibilityStateProps;

export type VisibilityStateProps = {
  visible: boolean;
  onShow: () => void;
  onHide: () => void;
  setVisible: (state?: boolean) => void;
};
```
