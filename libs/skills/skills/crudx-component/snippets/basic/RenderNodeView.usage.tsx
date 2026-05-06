import { RenderNodeView } from '@crudx/{{UI_PACKAGE}}';

// TODO: each item is an inline node. `spacing` is the gap between them.
export function RenderNodeExample() {
  return (
    <RenderNodeView
      spacing={1}
      items={[
        { key: 'icon', content: <span>★</span> },
        { key: 'label', content: <span>23 favourites</span> },
      ]}
    />
  );
}
