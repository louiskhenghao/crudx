/**
 * ===========================
 * CONSTANT
 * ===========================
 */
export const APP_NAME = 'Admin';

/**
 * ===========================
 * ENVIRONMENT VARIABLES
 * ===========================
 */
// api endpoint (base url)
export const BASE_ENDPOINT =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333';

// api endpoint (graphql endpoint)
export const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:3333/graphql';

// api endpoint (graphql subscription endpoint)
export const GRAPHQL_SUBSCRIPTION_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'ws://localhost:3333/graphql';

// google api key
export const GOOGLE_MAP_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || '';

/**
 * ===========================
 * APP ROUTE
 * ===========================
 */
// default path after login
export const DEFAULT_PATH_AFTER_SIGN_IN = '/dashboard';

// default path before login
export const DEFAULT_PATH_BEFORE_SIGN_IN = '/signin';

// path for login page
export const SIGN_IN_PATH = '/signin';

// page not found page
export const NOT_FOUND_PATH = '/404';

// onboarding path
export const ONBOARDING_PATH = '/';

// path accessible by public
// by default, this works as a whitelist.
// everything else that is not listed here will not be accessible by the public
export const PATHS_ONLY_ALLOWED_BEFORE_AUTH = [
  '/',
  SIGN_IN_PATH,
  '/404',
  '/500',
  '/test-crud',
  '/test-crud-api',
  '/test-crud-api-component',
];

// restricted path that can't be accessed if user has already signed in
export const PATHS_NOT_ALLOWED_AFTER_AUTH = [SIGN_IN_PATH, '/forgot-password'];

// path for admin portal (optional)
export const PATHS_FOR_ADMIN_ONLY = ['/app'];

// config to defined path that only shows content, which has no header, footer, sidebar, etc
// NOTE: This needed to handle on frontend level
export const NO_LAYOUT_PATH = [SIGN_IN_PATH, '/404', '/500'];
