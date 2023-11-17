import { GetPortalAuthProfileDocument } from '@apps/graphql';
import { retrieveAuthTokenFromContext } from '@webbyx/next-js';
import fetch from 'isomorphic-unfetch';

import { GRAPHQL_ENDPOINT } from './constant';

export const checkAuthProfile = async (context?: any): Promise<any> => {
  const token = retrieveAuthTokenFromContext(context);
  if (!token) return Promise.resolve(null);

  // NOTE: Replace with project GraphQL document
  // const query = XXXDocument?.loc?.source?.body ?? {};
  const query = GetPortalAuthProfileDocument?.loc?.source?.body ?? {}; // TODO: remove this line if above line is resolved
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'motorloan-platform': 'portal',
    },
    body: JSON.stringify({
      query,
    }),
  });
  const result = await res.json();
  return result?.data?.getPortalAuthProfile ?? null;
};

export default checkAuthProfile;
