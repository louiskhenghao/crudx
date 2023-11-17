# BreadcrumbView

Breadcrumb view component

---

## Props

```ts
import { ReactElement, ReactNode } from 'react';
import { ChipProps, LinkProps, TypographyProps } from '@mui/material';
import { BreadcrumbsProps } from '@mui/material/Breadcrumbs';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type BreadcrumbViewProps = Omit<BreadcrumbsProps, 'children'> & {
  /**
   * breadcrumb item display type
   * @default default
   */
  type?: 'chip' | 'default';
  /**
   * the current url path
   * by providing will check the item url & make it un-clickable
   */
  current?: string;
  /**
   * the breadcrumb items configuration
   */
  items?: {
    url?: string;
    icon?: ReactElement;
    label: ReactNode;
  }[];

  /**
   * CUSTOM PROPS
   * ===========================
   */
  linkProps?: Omit<LinkProps, 'href'>;
  textProps?: TypographyProps;
  chipProps?: Omit<ChipProps, 'label'>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default BreadcrumbViewProps;
```

---

# Example

```ts
import { BreadcrumbView } from '@crudx/mui';
import HomeIcon from '@mui/icons-material/Home';
import Chip from '@mui/material/Chip;

<BreadcrumbView
  type="chip"
  current="/test"
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
/>;
```
