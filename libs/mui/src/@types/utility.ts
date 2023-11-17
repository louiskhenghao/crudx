/**
 * if `Type` is "any", return `Yes` otherwise `No`
 * @example
  ```ts
    type Target = any;
    IfTypeAny<Target, string, number>
  ```
 */
export type IfTypeAny<Type, Yes, No> = 0 extends 1 & Type ? Yes : No;

/**
 * if `Type` is "unknown", return `Yes` otherwise `No`
 * @example
  ```ts
    type Target = unknown;
    IfTypeUnknown<Target, string, number>
  ```
 */
export type IfTypeUnknown<Type, Yes, No> = unknown extends Type ? Yes : No;

/**
 * if `Type` is "undefined", return `Yes` otherwise `No`
 * @example
  ```ts
    type Target = undefined;
    IfTypeUndefined<Target, string, number>
  ```
 */
export type IfTypeUndefined<Type, Yes, No> = undefined extends Type ? Yes : No;

/**
 * if `Type` is "null", return `Yes` otherwise `No`
 * @example
  ```ts
    type Target = null;
    IfTypeNull<Target, string, number>
  ```
 */
export type IfTypeNull<Type, Yes, No> = null extends Type ? Yes : No;

/**
 * if `Type` is "unsure" (unknown, undefined, null, any), return `Yes` otherwise `No`
 * @example
  ```ts
    type Target = null;
    IfTypeUnsure<Target, string, number>
  ```
 */
export type IfTypeUnsure<Type, Yes, No> = IfTypeAny<
  IfTypeUnknown<
    IfTypeUndefined<IfTypeNull<Type, undefined, Type>, unknown, Type>,
    any,
    Type
  >,
  Yes,
  No
>;
