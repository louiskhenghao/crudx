import { BreadcrumbView } from '@crudx/{{UI_PACKAGE}}';

// TODO: replace items with your real breadcrumb trail.
// `current` is the path of the active page (matched against item.url).
export function BreadcrumbExample() {
  return (
    <BreadcrumbView
      items={[
        { label: 'Home', url: '/' },
        { label: 'Resources', url: '/resources' },
        { label: 'Detail' },
      ]}
      current="/resources"
    />
  );
}
