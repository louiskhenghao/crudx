import { TabView } from '@crudx/{{UI_PACKAGE}}';

// TODO: replace items with your tabs. `content` is the panel rendered
// when the tab is active.
export function TabViewExample() {
  return (
    <TabView
      items={[
        { key: 'overview', label: 'Overview', content: <div>Overview…</div> },
        { key: 'activity', label: 'Activity', content: <div>Activity…</div> },
        { key: 'settings', label: 'Settings', content: <div>Settings…</div> },
      ]}
    />
  );
}
