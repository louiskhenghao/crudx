import { useState } from 'react';
import axios from 'axios';
import { File } from 'buffer';
import random from 'lodash/random';

import { UseMutationAction } from '../../@types';
import {
  TransportBaseMutationOptions,
  TransportFetchResult,
  TransportMutationHookOptions,
  TransportMutationResult,
  TransportOperationVariables,
} from '../../@types/transport';
/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useApolloFileUploader = <
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
>(
  // mutation configuration
  hook: {
    key: string;
    query: UseMutationAction<TData, TVariables>;
    options?: TransportBaseMutationOptions<TData, TVariables>;
  },
  /**
   * function to construct result to a format that can be consumed by this hook
   */
  options?: {
    // extract signed-url to read/write link
    extract?: (url: string) => { read: string; write: string };
    // compose state format from result
    compose?: (res: any) => { uid: string | number; url: string };
    // custom http request for file upload
    request?: (
      url: string,
      file: File | Blob,
      headers: Record<string, any>
    ) => Promise<any>;
  }
): ApolloFileUploaderProps<TData, TVariables> => {
  // =============== STATE
  const [signedUrls, setSignedUrls] = useState<Record<string, any>>({});

  // check whether hook is provided else return error
  if (!hook) {
    throw new Error('Please provide action hook!');
  }

  // =============== HOOKS
  const actionKey = hook.key;
  const mutation = hook.query({
    ...hook?.options,
    onCompleted: (res) => {
      const results = res[actionKey];
      const info = options?.compose?.(results) ?? {
        uid: results.uid ?? results.signedUrl ?? random(1000, 9999),
        url: results.signedUrl ?? '',
      };
      setSignedUrls({
        ...signedUrls,
        [`${info.uid}`]: info.url,
      });
      hook?.options?.onCompleted?.(res);
    },
  });

  // =============== HELPERS
  const getSignedUrl = (uid: string): [string, string] => {
    const url = signedUrls?.[uid] ?? '';
    if (options?.extract) {
      const extracted = options.extract(url);
      return [extracted.write, extracted.read];
    }
    const [urlToRead] = url.split('?');
    return [url, urlToRead];
  };

  // function to upload file
  const uploadFile = (
    url: string,
    file: File | Blob,
    customHeaders?: (() => Record<string, any>) | Record<string, any>
  ): Promise<any> => {
    let headers: any = {};
    if (customHeaders) {
      if (typeof customHeaders === 'function') {
        headers = customHeaders();
      } else {
        headers = customHeaders;
      }
    }

    // compose the request headers
    const requestHeaders = {
      'Content-Type': file.type,
      ...headers,
    };

    if (options?.request) {
      return options.request(url, file, requestHeaders);
    }

    // https://github.com/googleapis/python-storage/issues/3#issuecomment-580415038
    return axios({
      url,
      method: 'PUT',
      headers: requestHeaders,
      data: file,
    });
  };

  // =============== RETURN
  return {
    get: getSignedUrl,
    upload: uploadFile,
    generate: mutation[0],
    result: mutation[1],
  };
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export type ApolloFileUploaderProps<
  TData = any,
  TVariables extends TransportOperationVariables = TransportOperationVariables
> = {
  // function to get signed-url with given unique id
  get: (uid: string) => [string, string];
  // function to upload file
  upload: (
    url: string,
    file: File | Blob,
    headers?: (() => Record<string, any>) | Record<string, any>
  ) => Promise<any>;
  // function to generate signed-url from the mutation hook
  generate: (
    options?: TransportMutationHookOptions<TData, TVariables>
  ) => Promise<TransportFetchResult<TData>>;
  // the mutation results from the transport layer
  result: TransportMutationResult<TData>;
};

export default useApolloFileUploader;
