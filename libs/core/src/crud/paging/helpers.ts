import { removeObjectEmptyValue } from '@crudx/common';

import includes from 'lodash/includes';
import merge from 'lodash/merge';
import reduce from 'lodash/reduce';

import { TransportOperationVariables } from '../../@types/transport';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const constructQueryVariable = (
  variables: TransportOperationVariables = {},
  defaultOptions: { [key: string]: any } = {}
): TransportOperationVariables => {
  return merge({}, defaultOptions, variables);
};

export const emptyQueryVariable = (
  variables: TransportOperationVariables = {}
): TransportOperationVariables => {
  return reduce(
    variables,
    (result, value, key) => merge(result, { [`${key}`]: undefined }),
    {}
  );
};

export const cleanQueryVariable = (
  variables: TransportOperationVariables = {}
): TransportOperationVariables => {
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
