import { ReactNode } from 'react';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type RenderNodeViewProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * the breadcrumb items configuration
   */
  items?: {
    key: string;
    content: (() => ReactNode) | ReactNode;
  }[];
  /**
   * flex direction
   * @default 'row'
   */
  direction?: 'row' | 'column';
  /**
   * cross-axis alignment
   * @default 'center'
   */
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /**
   * main-axis alignment
   */
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /**
   * allow children to wrap onto multiple lines when they overflow
   * @default false
   */
  wrap?: boolean;
  /**
   * main-axis gap between items (Tailwind gap scale)
   */
  gap?: number;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default RenderNodeViewProps;
