import compact from 'lodash/compact';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import isObject from 'lodash/isObject';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const isObjectEmpty = (inValue: any): boolean => {
  return isObject(inValue) && isEmpty(inValue);
};

export const removeObjectEmptyValue = (inObject: {
  [key: string]: any;
}): { [key: string]: any } => {
  if (!isObject(inObject)) return inObject;
  if (isArray(inObject)) {
    return compact(
      map(inObject, (e) => {
        const ass = removeObjectEmptyValue(e);
        return !isObjectEmpty(ass) ? ass : null;
      })
    );
  }
  return reduce(
    inObject,
    (result, value, key) => {
      if (isNil(value) || isObjectEmpty(value)) return result;
      if (isObject(value)) {
        return Object.assign(result, {
          [`${key}`]: removeObjectEmptyValue(value),
        });
      }
      return Object.assign(result, { [`${key}`]: value });
    },
    {}
  );
};

export const removeKeysFromObject = (value: any, keys: string[]): any => {
  if (!isObject(value)) {
    return value;
  }
  if (isArray(value)) {
    return value.map((item) => removeKeysFromObject(item, keys));
  }
  return Object.keys(value)
    .filter((k) => !keys.includes(k))
    .reduce(
      (acc, x) =>
        Object.assign(acc, { [x]: removeKeysFromObject(value[x], keys) }),
      {}
    );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default {
  isObjectEmpty,
  removeObjectEmptyValue,
  removeKeysFromObject,
};
