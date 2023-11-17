import { ReactElement, ReactNode } from 'react';
import { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import { ChipProps } from '@mui/material/Chip';
import { LinkProps } from '@mui/material/Link';
import { TypographyProps } from '@mui/material/Typography';

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
