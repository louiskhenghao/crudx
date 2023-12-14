import { UsePaginationHookProps } from '../../hooks/usePaginationHook';
import { UseRowSelectionProps } from '../../hooks/useRowSelectionHook';

export type CrudHookProps = {
  pagination: UsePaginationHookProps;
  selection: UseRowSelectionProps;
};
