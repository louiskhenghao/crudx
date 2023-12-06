import { useMemo, useState } from 'react';

import { CrudCommonActionNodeAlertOptions } from '../../@types/crud/action';
import { CrudComponentVisibilityController } from '../../@types/crud/components/common';
import { CrudSchemataTypes } from '../../@types/crud/schema';
import { useVisibilityStateHook } from '../../hooks/useVisibilityStateHook';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useComponentAlertHook = <
  T extends CrudSchemataTypes = any
>(): CrudComponentVisibilityController<T>['alert'] => {
  // =============== HOOKS
  const { visible, onHide, onShow } = useVisibilityStateHook();
  const [props, setProps] = useState<CrudCommonActionNodeAlertOptions | null>();

  const states = useMemo(() => {
    if (props) return props;
    return {
      title: 'Confirmation',
      message: 'Do you confirm that you want to proceed with this action?',
      primaryText: 'Confirm',
      secondaryText: 'Cancel',
      onPrimary: () => {
        onHide();
        console.warn('Not implemented!');
      },
      onSecondary: () => {
        onHide();
        console.warn('Not implemented!');
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, visible]);

  // =============== RETURN
  return {
    visible,
    props: {
      ...states,
      onPrimary: () => {
        onHide();
        states.onPrimary();
      },
      onSecondary: () => {
        onHide();
        states.onSecondary();
      },
    },
    onShow: (options) => {
      setProps(options);
      onShow();
    },
    onHide: () => {
      onHide();
      setTimeout(() => {
        setProps(null);
      }, 200);
    },
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useComponentAlertHook;
