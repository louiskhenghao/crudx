import { ReactElement, ReactNode } from 'react';
import { BoxProps } from '@mui/material/Box';
import { LinkProps } from '@mui/material/Link';
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
