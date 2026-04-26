import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
} from 'lucide-react';
import isNil from 'lodash/isNil';

import { Button } from '../../primitives/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '../../primitives/dialog';

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
    primaryButtonVariant = 'default',
    secondaryButtonVariant = 'outline',
    icon,
    title,
    message,
    visible = false,
    disableEscapeClose = false,
    disableBackdropClose = false,
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
      toggle: (inState?: boolean) => {
        if (!isNil(inState)) {
          setVisibleState(inState);
          return;
        }
        setVisibleState((prev) => !prev);
      },
      open: () => setVisibleState(true),
      close: () => setVisibleState(false),
    };
  });

  // =============== EVENTS
  const onHandleClose = () => setVisibleState(false);

  const onHandleClick = (action: DialogActionConfigType) => {
    return (e: React.MouseEvent) => {
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
          onClickAction?.((action as any).key ?? action.type);
          break;
      }
      onHandleClose();
    };
  };

  const titleIcon = icon ?? (
    <>
      {type === 'confirmation' && <Info className="h-5 w-5" />}
      {type === 'info' && <Info className="h-5 w-5" />}
      {type === 'success' && <CheckCircle2 className="h-5 w-5" />}
      {type === 'error' && <XCircle className="h-5 w-5" />}
      {type === 'warning' && <AlertTriangle className="h-5 w-5" />}
    </>
  );

  // =============== VIEWS
  return (
    <DialogRoot
      {...restProps}
      open={visibleState}
      onOpenChange={(next) => {
        if (next) {
          setVisibleState(true);
          return;
        }
        // Radix closes on both backdrop click and escape keypress via this channel.
        // Without a discriminator, honor `disable*` flags by refusing the close.
        if (disableBackdropClose || disableEscapeClose) {
          return;
        }
        setVisibleState(false);
        onClose?.(null, 'backdropClick');
      }}
    >
      <DialogContent
        showCloseButton={enableCloseButton}
        {...contentProps}
        onEscapeKeyDown={(e) => {
          if (disableEscapeClose) {
            e.preventDefault();
            return;
          }
          setVisibleState(false);
          onClose?.(e as unknown as Event, 'escapeKeyDown');
        }}
        onPointerDownOutside={(e) => {
          if (disableBackdropClose) {
            e.preventDefault();
            return;
          }
          setVisibleState(false);
          onClose?.(e as unknown as Event, 'backdropClick');
        }}
      >
        {title ? (
          <DialogHeader>
            <DialogTitle {...titleProps}>
              <div className="flex items-center gap-2">
                {titleIcon}
                {title}
              </div>
            </DialogTitle>
          </DialogHeader>
        ) : (
          // Radix Dialog (v1.1+) logs `console.error` when a
          // DialogContent opens without a DialogTitle. Always emit a
          // screen-reader-only fallback so headless usage stays
          // accessible and silent.
          <DialogTitle className="sr-only">Dialog</DialogTitle>
        )}
        <div className="py-2">
          {message && (
            <p
              className="text-sm text-[hsl(var(--muted-foreground))]"
              {...messageProps}
            >
              {message}
            </p>
          )}
          {children}
        </div>
        {dialogActions.length > 0 && (
          <DialogFooter {...actionProps}>
            {dialogActions.map((action, i) => {
              const actionType = action.type;
              const variant =
                actionType === 'primary'
                  ? primaryButtonVariant
                  : actionType === 'secondary'
                  ? secondaryButtonVariant
                  : 'ghost';
              return (
                <Button
                  key={`${action.label}-${i}`}
                  variant={variant}
                  {...action.props}
                  onClick={onHandleClick(action)}
                >
                  {action.label}
                </Button>
              );
            })}
          </DialogFooter>
        )}
      </DialogContent>
    </DialogRoot>
  );
});
Dialog.displayName = 'Dialog';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default Dialog;
