import { PropsWithChildren, ReactNode } from 'react';

import { GridFlexItemType } from '../../components/RenderFlexView';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudFilterViewProps = PropsWithChildren<{
  /**
   * whether to have unstyled layout
   */
  unstyled?: boolean;
  /**
   * css class name for the wrapper
   */
  className?: string;
  /**
   * the title to be display on filter view
   */
  title?: ReactNode;
  /**
   * action configuration with grid layout or custom rendering
   */
  actions?: (() => ReactNode) | GridFlexItemType[];
}>;

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudFilterViewProps;
