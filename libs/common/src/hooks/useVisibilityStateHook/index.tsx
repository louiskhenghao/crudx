import { useState } from 'react';
import isNil from 'lodash/isNil';

/**
 * =====================
 * MAIN
 * =====================
 */
export const useVisibilityStateHook = (
  defaultState = false
): VisibilityStateProps => {
  // ============== STATE
  const [visibleState, setVisibleState] = useState<boolean>(defaultState);

  // ============== RETURN
  return {
    visible: visibleState,
    onShow: () => {
      setVisibleState(true);
    },
    onHide: () => {
      setVisibleState(false);
    },
    setVisible: (state?: boolean) => {
      if (!isNil(state)) {
        setVisibleState(state);
        return;
      }
      setVisibleState(!visibleState);
    },
  };
};

export const defaultVisibilityStatePropsValue = {
  visible: false,
  onShow: () => console.warn('Not implemented!'),
  onHide: () => console.warn('Not implemented!'),
  setVisible: () => console.warn('Not implemented!'),
};

/**
 * =====================
 * EXPORTS
 * =====================
 */
export type VisibilityStateProps = {
  visible: boolean;
  onShow: () => void;
  onHide: () => void;
  setVisible: (state?: boolean) => void;
};

export default useVisibilityStateHook;
