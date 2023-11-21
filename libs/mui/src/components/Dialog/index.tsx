import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import isNil from 'lodash/isNil';

import { DialogActionConfigType, DialogProps, DialogRefProps } from './props';
import { getDialogActions } from './settings';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Dialog = forwardRef<DialogRefProps, DialogProps>((props, ref) => {
  const {
    type = 'info',
    primaryButtonVariant = 'text',
    secondaryButtonVariant = 'text',
    icon,
    title,
    message,
    visible = false,
    enableCloseButton = false,
    actions = [],
    titleProps,
    contentProps,
    messageProps,
    actionProps,
    children,
    primaryText,
    secondaryText,
    onClose,
    onClickAction,
    onClickPrimaryAction,
    onClickSecondaryAction,
    ...restProps
  } = props;

  // =============== VARIABLES
  const dialogActions = getDialogActions(type, actions, {
    primaryText,
    secondaryText,
  });

  // =============== STATE
  const [visibleState, setVisibleState] = useState(visible);

  // =============== EFFECTS
  useEffect(() => setVisibleState(visible), [visible]);

  // =============== HOOKS
  useImperativeHandle(ref, () => {
    return {
      toggle: (inState) => {
        if (!isNil(inState)) {
          setVisibleState(inState);
          return;
        }
        setVisibleState(!visibleState);
      },
      open: () => setVisibleState(true),
      close: () => setVisibleState(false),
    };
  });

  // =============== EVENTS
  const onHandleClose = () => {
    setVisibleState(false);
  };

  const onHandleClick = (action: DialogActionConfigType) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();

      switch (action.type) {
        case 'primary':
          onClickPrimaryAction?.();
          onClickAction?.('primary');
          break;
        case 'secondary':
          onClickSecondaryAction?.();
          onClickAction?.('secondary');
          break;
        default:
          onClickAction?.(action.key ?? action.type);
          break;
      }
      onHandleClose();
    };
  };

  // =============== VIEWS
  return (
    <MuiDialog
      {...restProps}
      open={visibleState}
      onClose={(event, reason) => {
        setVisibleState(false);
        onClose?.(event, reason);
      }}
    >
      {enableCloseButton && (
        <IconButton
          aria-label="close"
          onClick={() => {
            onClickAction?.('close');
            onHandleClose();
          }}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      {title && (
        <DialogTitle {...titleProps}>
          <Stack direction="row" alignItems="center" gap={1}>
            {icon ?? (
              <>
                {type === 'confirmation' && <InfoOutlined />}
                {type === 'info' && <InfoOutlined />}
                {type === 'success' && <CheckCircleOutlineIcon />}
                {type === 'error' && <ErrorOutlineIcon />}
                {type === 'warning' && <WarningAmberIcon />}
              </>
            )}
            {title}
          </Stack>
        </DialogTitle>
      )}
      <DialogContent {...contentProps}>
        {message && (
          <DialogContentText {...messageProps}>{message}</DialogContentText>
        )}
        {children}
      </DialogContent>
      {dialogActions.length > 0 && (
        <DialogActions {...actionProps}>
          {dialogActions.map((action, i) => {
            const type = action.type;
            const variant =
              type === 'primary'
                ? primaryButtonVariant
                : secondaryButtonVariant;
            return (
              <Button
                key={`${action.label}-${i}`}
                variant={type === 'custom' ? 'text' : variant}
                {...action.props}
                onClick={onHandleClick(action)}
              >
                {action.label}
              </Button>
            );
          })}
        </DialogActions>
      )}
    </MuiDialog>
  );
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default Dialog;
