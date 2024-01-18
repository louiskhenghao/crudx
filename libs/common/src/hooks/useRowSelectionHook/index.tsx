import { useState } from 'react';
import isNil from 'lodash/isNil';

/**
 * =====================
 * MAIN
 * =====================
 */
export const useRowSelectionHook = <T extends string>(
  defaultState = false,
  callback?: (selections: T[]) => void
): UseRowSelectionProps<T> => {
  // ==================== STATE
  const [selections, setSelectionsState] = useState<T[]>([]);
  const [isSelectable, setIsSelectable] = useState<boolean>(defaultState);

  // ==================== EVENTS
  const clear = () => {
    setSelectionsState([]);
  };

  const toggle = (state) => {
    let intended = !isSelectable;
    if (!isNil(state)) intended = state;
    setIsSelectable(intended);
    if (intended) setSelectionsState([]);
  };

  const setSelections = (selectedRows) => {
    if (!isSelectable) {
      callback?.([]);
      setSelectionsState([]);
      return;
    }
    callback?.(selectedRows);
    setSelectionsState(selectedRows);
  };

  // ==================== RETURN
  return {
    isSelectable,
    selections,
    clear,
    toggle,
    setSelections,
  };
};

/**
 * =====================
 * EXPORTS
 * =====================
 */
export type UseRowSelectionProps<T extends string = string> = {
  // the selections items in unique key
  selections: T[];
  // indicate wether has enable selection
  isSelectable: boolean;
  // function to clear selection
  clear: () => void;
  // function to toggle whether can perform selection
  toggle: (state?: boolean) => void;
  // function to set selection change
  setSelections: (selectedRows: T[]) => void;
};

export default useRowSelectionHook;
