# Dialog

Dialog component that utilize material-ui available component with simple setup

---

## Props

```ts
import { PropsWithChildren, ReactNode } from 'react';
import { ButtonProps, ButtonTypeMap, DialogActionsProps, DialogContentProps, DialogContentTextProps, DialogProps as MuiDialogProps, DialogTitleProps } from '@mui/material';

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
      props?: ButtonTypeMap['props'];
    }
  | {
      key: string;
      type: 'custom';
      label: string;
      props?: ButtonTypeMap['props'];
    };

// dialog props
export type DialogProps = PropsWithChildren<
  Omit<MuiDialogProps, 'open'> & {
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
     * button variant
     * @default text
     */
    buttonVariant?: ButtonProps['variant'];
    // the title of the dialog
    title?: string;
    // the message of the dialog
    message?: string;
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
    // dialog title props customization
    titleProps?: DialogTitleProps;
    // dialog content props customization
    contentProps?: DialogContentProps;
    // dialog message props customization
    messageProps?: DialogContentTextProps;
    // dialog actions props customization
    actionProps?: DialogActionsProps;

    /**
     * EVENTS
     * ===========================
     */
    // primary action click event
    onClickPrimaryAction?: () => void;
    // secondary action click event
    onClickSecondaryAction?: () => void;
    // the action event for all action type
    onClickAction?: (action: 'primary' | 'secondary' | string) => void;
  }
>;
```

---

# Example

```ts
import { Dialog } from '@crudx/mui';

<Dialog
  type="info"
  title={"Use Google's location service?"}
  message="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
  visible={true}
  onClickAction={() => {
    // do something
  }}
/>;
```
