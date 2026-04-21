import { ReactElement, ReactNode } from 'react';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type BreadcrumbViewProps = React.HTMLAttributes<HTMLElement> & {
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
   * separator between items
   * @default '/'
   */
  separator?: ReactNode;
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
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  textProps?: React.HTMLAttributes<HTMLSpanElement>;
  chipProps?: React.HTMLAttributes<HTMLSpanElement>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default BreadcrumbViewProps;
