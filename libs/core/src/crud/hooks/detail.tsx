import { CrudDetailOptions, CrudDetailProps } from '../../@types/crud/detail';
import { CrudSchemataTypes } from '../../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * useCrudDetailHook
 * ---------------------------
 * hooks provided various methods to accommodate data
 * @param options
 */
export const useCrudDetailHook = <T extends CrudSchemataTypes = any>(
  options: CrudDetailOptions<T>
): CrudDetailProps<T> => {
  const { query } = options;

  // =============== RETURN
  return {
    query,
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  useCrudDetailHook,
};
