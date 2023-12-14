import { CrudContentViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const defaultText: CrudContentViewProps['text'] = {
  columnActionText: 'Action',
  nextText: 'Next',
  previousText: 'Previous',
  createText: 'Create',
  expandText: 'Expand',
  collapseText: 'Collapse',
  sorting: { default: 'Default', asc: 'Ascending', desc: 'Descending' },
  density: { default: 'Default', small: 'Small', medium: 'Medium' },
};

export const defaultProps: CrudContentViewProps = {
  data: [],
  page: 1,
  pageSize: 10,
  paginateType: 'pagination',
  itemActions: ['view'],
  headerActions: [],
  headerTabs: [],
  headerActionSize: 'medium',
  text: defaultText,
  headerInfos: [{ type: 'title' }, { type: 'total' }, { type: 'bulk' }],
  expanded: false,
  enableItemAction: true,
  enableItemGroupAction: false,
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
