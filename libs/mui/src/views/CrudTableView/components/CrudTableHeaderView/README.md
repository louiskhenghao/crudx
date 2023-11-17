# CrudTableHeaderView

Crud table header view

---

## Props

```ts
export type CrudTableHeaderViewProps<TData = any> = Pick<CrudTableViewProps<TData>, 'text' | 'title' | 'expanded' | 'headerViewNode' | 'headerExpandNode' | 'headerExpandNode' | 'headerTabs' | 'headerTabsProps' | 'headerInfos' | 'headerActions' | 'headerActionSize' | 'totalRecord' | 'totalSelected' | 'onTriggerBulkAction' | 'onTriggerCreate' | 'onTriggerRefresh' | 'onTriggerSettings' | 'onTriggerSorting' | 'onTriggerDensity' | 'onTriggerTab' | 'onTriggerExpand'> & {
  tableSize: TableProps['size'];
  sortingType: SortingOptionType;
};
```

---

## Example

```ts
import { CrudTableHeaderView } from '@crudx/mui';

<CrudTableHeaderView
  title={<>Title</>}
  expanded={true}
  tableSize="small"
  sortingType="DEFAULT"
  totalRecord={0}
  totalSelected={0}
  headerViewNode={<>Custom View</>}
  headerExpandNode={<>expanded</>}
  headerTabs={[]}
  headerInfos={[]}
  headerActions={[]}
  headerActionSize="small"
  onTriggerTab={(item) => {
    // do something
  }}
  onTriggerCreate={() => {
    // do something
  }}
  onTriggerRefresh={() => {
    // do something
  }}
  onTriggerSettings={(item) => {
    // do something
  }}
  onTriggerBulkAction={(item) => {
    // do something
  }}
  onTriggerDensity={(item) => {
    // do something
  }}
  onTriggerSorting={(item) => {
    // do something
  }}
  onTriggerExpand={(current, next) => {
    // do something
  }}
/>;
```
