import { RenderFlexView } from '@crudx/{{UI_PACKAGE}}';

// TODO: replace cells with your real content. Each row is an array of
// items; use `xs`, `sm`, `md` etc. to control breakpoints.
export function RenderFlexExample() {
  return (
    <RenderFlexView
      containerProps={{ spacing: 2 }}
      items={[
        [
          { xs: 12, sm: 6, children: <div>Cell A</div> },
          { xs: 12, sm: 6, children: <div>Cell B</div> },
        ],
        [{ xs: 12, children: <div>Full-width row</div> }],
      ]}
    />
  );
}
