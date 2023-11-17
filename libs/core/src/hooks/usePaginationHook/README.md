# `usePaginationHook`

A hook that use for pagination handling

## Usage

```TypeScript
import { usePaginationHook } from 'react-crudxcore';

const Demo = () => {
  const { reset, paginateTo, next, previous, current } = usePaginationHook();

  return (
    <div>
      <button onClick={() => previous()}>Previous</button>
      <button onClick={() => next()}>Next</button>
      <button onClick={() => paginateTo(100)}>Paginate to Page 100</button>
      <button onClick={() => reset()}>Reset</button>

      <p>Page: {current}</p>
    </div>
  );
};
```

## Reference

```TypeScript
usePaginationHook(options: UsePaginationHookOptions): UsePaginationHookProps;

export type UsePaginationHookOptions = {
  defaultPageSize?: number;
  defaultCurrent?: number;
  maxPageNumber?: number;
};

export type UsePaginationHookProps = {
  current: number;
  defaultCurrent: number;
  defaultPageSize: number;
  reset: () => void;
  next: () => void;
  previous: () => void;
  paginateTo: (input: number) => void;
};
```
