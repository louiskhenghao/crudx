import { DialogActionConfigType, DialogProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const getDialogActions = (
  type: DialogProps['type'],
  actions: DialogProps['actions'] = [],
  text: {
    primaryText?: string;
    secondaryText?: string;
  }
): DialogActionConfigType[] => {
  // if has input actions then override default action
  if (actions.length > 0) return actions;

  // if there is no input actions, use default
  switch (type) {
    case 'confirmation':
      return [
        {
          type: 'secondary',
          label: text?.secondaryText ?? 'Cancel',
          props: {},
        },
        {
          type: 'primary',
          label: text?.primaryText ?? 'Confirm',
          props: {},
        },
      ];
    case 'info':
    case 'error':
    case 'success':
    case 'warning':
      return [
        {
          type: 'primary',
          label: text?.primaryText ?? 'OK',
        },
      ];
    default:
      return [];
  }
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default getDialogActions;
