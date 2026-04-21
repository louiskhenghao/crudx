import { ReactElement, ReactNode } from 'react';

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
   * spacing multiplier for padding & margin
   * @default null
   */
  spacingMultiplier?: number;
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
   * CUSTOM PROPS
   * ===========================
   */
  wrapperProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;
  backPathProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>;
  breadcrumbProps?: Omit<BreadcrumbViewProps, 'items'>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudPageHeaderViewProps;
