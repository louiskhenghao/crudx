import { OperationVariables } from '@apollo/client';
import { removeObjectEmptyValue } from '@crudx/common';
import includes from 'lodash/includes';
import merge from 'lodash/merge';
import reduce from 'lodash/reduce';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const constructQueryVariable = (
  variables: OperationVariables = {},
  defaultOptions: { [key: string]: any } = {}
): OperationVariables => {
  return merge({}, defaultOptions, variables);
};

export const emptyQueryVariable = (
  variables: OperationVariables = {}
): OperationVariables => {
  return reduce(
    variables,
    (result, value, key) => merge(result, { [`${key}`]: undefined }),
    {}
  );
};

export const cleanQueryVariable = (
  variables: OperationVariables = {}
): OperationVariables => {
  return removeObjectEmptyValue(variables);
};

export const computeOffset = (page: number, pageSize = 25) => {
  if (includes([0, 1], page)) {
    return 0;
  }
  return (page - 1) * pageSize;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  constructQueryVariable,
  emptyQueryVariable,
  cleanQueryVariable,
  computeOffset,
};
