import { ReactElement, ReactNode } from 'react';

import { CrudSchemataTypes } from '../schema';

import { CrudComponentCommonProps } from './common';

/**
 * Crud component alert node props
 */
export type CrudComponentAlertNodeProps<TSchema extends CrudSchemataTypes> =
  CrudComponentCommonProps<TSchema> & {
    // visibility of the alert
    visible: boolean;
    // the title of the alert
    title: string | ReactElement;
    // the message of the alert
    message: string | ReactElement;
    // primary action text
    primaryText: string;
    // secondary action text
    secondaryText: string;
    // primary action callback
    onPrimary: () => void;
    // secondary action callback
    onSecondary: () => void;
    // hide the alert
    onHide: () => void;
  };

/**
 * Crud component alert hooks props
 */
export type CrudComponentAlertHookProps = {
  renderAlert?: () => ReactNode;
};
