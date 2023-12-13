import { CrudTableViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const defaultText: CrudTableViewProps['text'] = {
  columnActionText: 'Action',
  nextText: 'Next',
  previousText: 'Previous',
  createText: 'Create',
  expandText: 'Expand',
  collapseText: 'Collapse',
  sorting: { default: 'Default', asc: 'Ascending', desc: 'Descending' },
  density: { default: 'Default', small: 'Small', medium: 'Medium' },
};

export const defaultProps: CrudTableViewProps = {
  size: 'medium',
  data: [],
  columns: [],
  page: 1,
  pageSize: 10,
  paginateType: 'pagination',
  columnActions: ['view'],
  headerActions: [],
  headerTabs: [],
  headerActionSize: 'medium',
  text: defaultText,
  actionColumnPosition: 'last',
  headerInfos: [{ type: 'title' }, { type: 'total' }, { type: 'bulk' }],
  expanded: false,
  enableActionColumn: true,
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
