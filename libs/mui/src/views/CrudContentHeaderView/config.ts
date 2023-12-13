import { CrudContentHeaderViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const defaultText: CrudContentHeaderViewProps['text'] = {
  createText: 'Create',
  expandText: 'Expand',
  collapseText: 'Collapse',
  sorting: { default: 'Default', asc: 'Ascending', desc: 'Descending' },
  density: { default: 'Default', small: 'Small', medium: 'Medium' },
};

export const defaultProps: CrudContentHeaderViewProps = {
  sortingType: 'DESC',
  headerActions: [],
  headerTabs: [],
  headerActionSize: 'medium',
  text: defaultText,
  headerInfos: [{ type: 'title' }, { type: 'total' }, { type: 'bulk' }],
  expanded: false,
  totalSelected: 0,
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  defaultProps,
  defaultText,
};
