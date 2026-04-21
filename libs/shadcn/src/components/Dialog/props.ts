import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import type * as DialogPrimitive from '@radix-ui/react-dialog';

import { ButtonProps } from '../../primitives/button';

type DialogRootProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Root
>;
type DialogContentExtraProps = Omit<
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
  'children' | 'open' | 'onOpenChange'
>;

/**
 * ===========================
 * MAIN
 * ===========================
 */

// dialog use ref props
export type DialogRefProps = {
  toggle: (state?: boolean) => void;
  open: () => void;
  close: () => void;
};

// dialog action button config
export type DialogActionConfigType =
  | {
      type: 'primary' | 'secondary';
      label: string;
      props?: Omit<ButtonProps, 'onClick'>;
    }
  | {
      key: string;
      type: 'custom';
      label: string;
      props?: Omit<ButtonProps, 'onClick'>;
    };

export type DialogCloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButton';

// dialog props
export type DialogProps = PropsWithChildren<
  Omit<DialogRootProps, 'open' | 'onOpenChange' | 'children'> & {
    // whether should visible
    visible?: boolean;
    /**
     * type of the dialog, each type should have default actions
     * - "confirmation": have 2 action button
     * - "others": have 1 action button
     * @default confirmation
     */
    type?: 'confirmation' | 'info' | 'success' | 'error' | 'warning' | 'custom';
    // custom icon display on title
    icon?: ReactNode;
    /**
     * button variant for button variant
     * @default default
     */
    primaryButtonVariant?: ButtonProps['variant'];
    /**
     * secondary button variant
     * @default outline
     */
    secondaryButtonVariant?: ButtonProps['variant'];
    /**
     * disable backdrop close
     */
    disableBackdropClose?: boolean;
    /**
     * disable esc button close
     */
    disableEscapeClose?: boolean;

    // the title of the dialog
    title?: string | ReactElement;
    // the message of the dialog
    message?: string | ReactElement;
    // the action of the dialog, this will override default action from type
    actions?: DialogActionConfigType[];
    // whether show close button on dialog, default to false
    enableCloseButton?: boolean;
    /**
     * custom text to display on primary action button
     * @default OK, Confirm
     */
    primaryText?: string;
    /**
     * custom text to display on secondary action button
     * @default Cancel
     */
    secondaryText?: string;

    /**
     * CUSTOM PROPS
     * ===========================
     */
    // radix DialogContent props customization
    contentProps?: DialogContentExtraProps;
    // dialog title div props customization
    titleProps?: React.HTMLAttributes<HTMLHeadingElement>;
    // dialog message div props customization
    messageProps?: React.HTMLAttributes<HTMLParagraphElement>;
    // dialog actions row props customization
    actionProps?: React.HTMLAttributes<HTMLDivElement>;

    /**
     * EVENTS
     * ===========================
     */
    // close event
    onClose?: (
      event: Event | React.SyntheticEvent | null,
      reason: DialogCloseReason
    ) => void;
    // primary action click event
    onClickPrimaryAction?: () => void;
    // secondary action click event
    onClickSecondaryAction?: () => void;
    // the action event for all action type
    onClickAction?: (action: 'primary' | 'secondary' | string) => void;
  }
>;
