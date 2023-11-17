# CrudPageHeaderView

Crud page header that help to render breadcrumbs, title, back button & cta

---

## Props

```ts
import { ReactElement, ReactNode } from 'react';
import { BoxProps, LinkProps } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

import { BreadcrumbViewProps } from '../../components/BreadcrumbView';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudPageHeaderViewProps = {
  /**
   * whether to have unstyled layout
   */
  unstyled?: boolean;
  /**
   * css name for component
   */
  className?: string;
  /**
   * whether enabled back button
   */
  backIcon?: ReactElement;
  /**
   * the title to be display
   */
  title?: string | ReactNode;
  /**
   * breadcrumb items
   */
  items?: BreadcrumbViewProps['items'];
  /**
   * the link that will go back by clicking back button
   */
  backPath?: string;
  /**
   * action to be display on very right of title
   */
  actions?: {
    key: string;
    content: (() => ReactNode) | ReactNode;
  }[];

  /**
   *
   * CUSTOM PROPS
   * ===========================
   */
  wrapperProps?: Omit<BoxProps, 'className'>;
  backPathProps?: Omit<LinkProps, 'href' | 'component'>;
  titleProps?: TypographyProps;
  breadcrumbProps?: Omit<BreadcrumbViewProps, 'items'>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudPageHeaderViewProps;
```

---

## Reference

Below it how the structure of layout (css class name)

```
└── .crud-page-header-wrapper
     ├── .crud-page-header-breadcrumbs
     └── .crud-page-header-content
          ├──.crud-page-header-title
          │    ├──.crud-page-header-title-back
          │    └──.crud-page-header-title-text
          └──.crud-page-header-actions
```

---

## Example

```ts
import { CrudPageHeaderView } from '@crudx/mui';
import HomeIcon from '@mui/icons-material/Home';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

<CrudPageHeaderView
  title="Hey"
  backPath="/test-crud"
  items={[
    {
      icon: <HomeIcon />,
      label: 'Home',
      url: '/home',
    },
    {
      label: 'Next',
      url: '/next',
    },
    {
      label: <Chip label="Three" />,
      url: '/test',
    },
  ]}
  actions={[
    {
      key: 'create',
      content: (
        <Button size="small" variant="outlined">
          CTA BUTTON
        </Button>
      ),
    },
  ]}
/>;
```
