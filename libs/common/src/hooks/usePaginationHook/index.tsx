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
  const [pageSizeState, setPageSizeState] = useState<number>(defaultPageSize);

  // ==================== EFFECTS
  useEffect(() => {
    setCurrentState(defaultCurrent);
  }, [defaultCurrent]);

  useEffect(() => {
    setPageSizeState(defaultPageSize);
  }, [defaultPageSize]);

  // ==================== EVENTS
  const reset = () => {
    setCurrentState(defaultCurrent);
    setPageSizeState(defaultPageSize);
  };

  const next = () => {
    const intent = currentState + 1;
    paginateTo(intent);
  };

  const previous = () => {
    const intent = currentState - 1;
    paginateTo(intent);
  };

  // paginate to
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

  // set page size
  const setPageSize = (input: number) => {
    if (input <= 0) {
      setPageSizeState(defaultPageSize);
      return;
    }
    setPageSizeState(input);
  };

  // ==================== RETURN
  return {
    reset,
    next,
    previous,
    paginateTo,
    setPageSize,
    current: currentState,
    pageSize: pageSizeState,
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
  pageSize: number;
  defaultCurrent: number;
  defaultPageSize: number;
  reset: () => void;
  next: () => void;
  previous: () => void;
  paginateTo: (input: number) => void;
  setPageSize: (input: number) => void;
};

export default usePaginationHook;
