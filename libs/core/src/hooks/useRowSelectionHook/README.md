# `useRowSelectionHook`

A hook that to handle row selection

## Usage

```TypeScript
import { useRowSelectionHook } from 'react-crudxcore';

const Demo = () => {
  const { selectable, selections, clear, toggle } = useRowSelectionHook();

  return (
    <div>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => toggle()}>Toggle Selections</button>
      <button onClick={() => setVisible()}>Set Selection</button>

      <p>Selectable: {selectable}</p>
      <p>Selections: {JSON.stringify(selections)}</p>
    </div>
  );
};
```

## Reference

```TypeScript
useRowSelectionHook = <T extends string>(defaultState: boolean, callback?: (selections: T[]) => void):UseRowSelectionProps<T>

export type UseRowSelectionProps<T extends string> = {
  // indicate wether has enable selection
  isSelectable: boolean;
  // the selections items in unique key
  selections: T[];
  // function to clear selection
  clear: () => void;
  // function to toggle whether can perform selection
  toggle: () => void;
  // function to set selection change
  setSelections: (selectedRows: T[]) => void;
};
```
