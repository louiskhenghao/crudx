import { AuthOptions } from '@webbyx/next-js';

import checkAuthProfile from './auth.query';
import {
  DEFAULT_PATH_AFTER_SIGN_IN,
  DEFAULT_PATH_BEFORE_SIGN_IN,
  NO_LAYOUT_PATH,
  NOT_FOUND_PATH,
  ONBOARDING_PATH,
  PATHS_FOR_ADMIN_ONLY,
  PATHS_NOT_ALLOWED_AFTER_AUTH,
  PATHS_ONLY_ALLOWED_BEFORE_AUTH,
  SIGN_IN_PATH,
} from './constant';

export const authOptions: AuthOptions = {
  checkAuthProfile,
  syncAuthEventKeyName: 'signout',
  logging: process.env.NODE_ENV === 'development', // whether should do logging on auth check
  enableAdmin: false,
  enableNotFoundRedirection: false,
  enableOnboarding: false, // enable onboarding check
  /**
   * check whether user is required onboarding based on API response
    checkRequiredOnboard: async (authUser) => {
      return !authUser?.xxxx; // check whether should do onboard based on API response
    },
  */

  /**
   * Redirect to path based on conditions
    onChangePath: async (paths, authUser) => {
      // examples
      if (paths.includes("/setup")) { // if user landed to /setup
        // if user has already onboard, then redirect path
        if (includes(authUser.hasOnboarded, "onboarded")) {
          return DEFAULT_PATH_AFTER_SIGN_IN;
        }
      }
      return false;
    },
   */
  paths: {
    signInPath: SIGN_IN_PATH,
    notFoundPath: NOT_FOUND_PATH,
    afterAuthPath: DEFAULT_PATH_AFTER_SIGN_IN,
    beforeAuthPath: DEFAULT_PATH_BEFORE_SIGN_IN,
    onboardingPath: ONBOARDING_PATH,
    allowedBeforeAuthPaths: PATHS_ONLY_ALLOWED_BEFORE_AUTH,
    restrictAfterAuthPaths: PATHS_NOT_ALLOWED_AFTER_AUTH,
    allowedAdminPaths: PATHS_FOR_ADMIN_ONLY,
    noLayoutPaths: NO_LAYOUT_PATH,
  },
};

export default authOptions;
