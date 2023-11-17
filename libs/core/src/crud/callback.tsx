import { ApolloError, OperationVariables } from '@apollo/client';
import isArray from 'lodash/isArray';

import { CrudComponents } from '../@types/crud/components/component';
import { CrudMutateEventCallback } from '../@types/crud/mutation';
import { CrudSchemataTypes } from '../@types/crud/schema';

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * CRUD CALLBACK COMPOSER
 * -----------------------------
 * compose list of strategy for mutation options (`onCompleted` & `onError`)
 * available strategy were `create`, `update`, `delete`, `export`
 */
export class CrudCallbackComposer<TSchema extends CrudSchemataTypes = any> {
  private name: string;

  private nodes?: CrudComponents<TSchema>;

  private enableNotification = true;

  constructor(
    name: string,
    options: {
      nodes?: CrudComponents<TSchema>;
      enableNotification?: boolean;
    }
  ) {
    this.name = name;
    this.nodes = options?.nodes;
    this.enableNotification = options?.enableNotification ?? true;
  }

  /**
   * execute notification on event
   */
  notify = (
    input: [string, string, boolean?],
    callback?: (type: 'completed' | 'error', context: any) => void
  ): CrudMutateEventCallback => {
    const [action, actionInPastTense, shouldNotification] = input;
    const notification = this.nodes?.notification;
    // if notification is disable then return empty strategy
    if (!shouldNotification || !this.enableNotification) return {};

    if (!notification) {
      console.warn('Please provide notification node or disable notification');
      return {};
    }

    return {
      onCompleted: (context: any): void => {
        notification({
          type: 'success',
          message: `Successfully ${actionInPastTense} ${this.name}`,
        });
        if (callback) callback('completed', context);
      },
      onError: (error): void => {
        notification({
          type: 'error',
          message: `Failed to ${action} ${this.name}`,
        });
        if (callback) callback('error', error);
      },
    };
  };

  /**
   * standardize the callback into array format
   */
  standardize = <Q, V = OperationVariables>(
    callbacks:
      | CrudMutateEventCallback<Q, V>
      | CrudMutateEventCallback<Q, V>[] = []
  ): CrudMutateEventCallback<Q, V>[] => {
    if (!callbacks) return [];
    if (isArray(callbacks)) {
      return callbacks;
    }
    return [callbacks];
  };

  /**
   * compose callbacks into executional operation
   */
  compose = <Q, V>(
    callbacks: CrudMutateEventCallback<Q, V> | CrudMutateEventCallback<Q, V>[]
  ): CrudMutateEventCallback<Q, V> => {
    return {
      onCompleted: (params: any) => {
        if (!isArray(callbacks)) {
          callbacks?.onCompleted?.(params);
          return;
        }
        callbacks.forEach((callback) => {
          callback?.onCompleted?.(params);
        });
      },
      onError: (error: ApolloError) => {
        if (!isArray(callbacks)) {
          callbacks?.onError?.(error);
          return;
        }
        callbacks.forEach((callback) => {
          callback?.onError?.(error);
        });
      },
    };
  };
}

export default CrudCallbackComposer;
