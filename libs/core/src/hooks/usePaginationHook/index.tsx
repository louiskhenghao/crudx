import { useEffect, useState } from 'react';
import isNil from 'lodash/isNil';

/**
 * =====================
 * MAIN
 * =====================
 */
export const usePaginationHook = (
  options: UsePaginationHookOptions = {
    defaultCurrent: 1,
    defaultPageSize: 25,
    maxPageNumber: undefined,
  }
): UsePaginationHookProps => {
  const { defaultCurrent = 1, defaultPageSize = 25, maxPageNumber } = options;

  // ==================== STATE
  const [currentState, setCurrentState] = useState<number>(defaultCurrent);

  // ==================== EFFECTS
  useEffect(() => {
    setCurrentState(defaultCurrent);
  }, [defaultCurrent]);

  // ==================== EVENTS
  const reset = () => {
    setCurrentState(defaultCurrent);
  };

  const paginateTo = (input: number) => {
    if (!isNil(maxPageNumber) && input > maxPageNumber) {
      setCurrentState(maxPageNumber);
      return;
    }
    if (input <= 0) {
      setCurrentState(1);
      return;
    }
    setCurrentState(input);
  };

  const next = () => {
    const intent = currentState + 1;
    paginateTo(intent);
  };

  const previous = () => {
    const intent = currentState - 1;
    paginateTo(intent);
  };

  // ==================== RETURN
  return {
    reset,
    next,
    previous,
    paginateTo,
    current: currentState,
    defaultPageSize,
    defaultCurrent,
  };
};

/**
 * =====================
 * EXPORTS
 * =====================
 */
export type UsePaginationHookOptions = {
  defaultPageSize?: number;
  defaultCurrent?: number;
  maxPageNumber?: number;
};

export type UsePaginationHookProps = {
  current: number;
  defaultCurrent: number;
  defaultPageSize: number;
  reset: () => void;
  next: () => void;
  previous: () => void;
  paginateTo: (input: number) => void;
};

export default usePaginationHook;
