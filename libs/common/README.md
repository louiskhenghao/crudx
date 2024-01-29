# @crudx/common

This library contains common helpers, hooks & components

---

## Installation

```bash
yarn add @crudx/common currency-symbol-map dayjs numeral react react-dom
```

---

## Components

| Name         | Link                                            |
| ------------ | ----------------------------------------------- |
| CloneElement | [link](./src/components/CloneElement/README.md) |
| DateTime     | [link](./src/components/DateTime/README.md)     |
| Money        | [link](./src/components/Money/README.md)        |

---

## Hooks

| Name                   | Link                                                 |
| ---------------------- | ---------------------------------------------------- |
| useCustomCompareEffect | [link](./src/hooks/useCustomCompareEffect/README.md) |
| useDeepCompareEffect   | [link](./src/hooks/useDeepCompareEffect/README.md)   |
| usePaginationHook      | [link](./src/hooks/usePaginationHook/README.md)      |
| usePrompt              | [link](./src/hooks/usePrompt/README.md)              |
| useRowSelectionHook    | [link](./src/hooks/useRowSelectionHook/README.md)    |
| useVisibilityStateHook | [link](./src/hooks/useVisibilityStateHook/README.md) |

---

## Helper Functions

| Name                   | Link                                   |
| ---------------------- | -------------------------------------- |
| toCurrencySymbol       | [link](./src/helpers/currency.tsx#L18) |
| formatCurrency         | [link](./src/helpers/currency.tsx#L30) |
| formatDateTime         | [link](./src/helpers/date.ts#L18)      |
| setDateTime            | [link](./src/helpers/date.ts#L41)      |
| isPrimitive            | [link](./src/helpers/general.ts#L8)    |
| formatNumbering        | [link](./src/helpers/general.ts#L13)   |
| isObjectEmpty          | [link](./src/helpers/object.ts#L14)    |
| removeObjectEmptyValue | [link](./src/helpers/object.ts#L18)    |
| removeKeysFromObject   | [link](./src/helpers/object.ts#L45)    |
