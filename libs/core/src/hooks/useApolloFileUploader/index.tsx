import { useState } from 'react';
import {
  BaseMutationOptions,
  FetchResult,
  MutationFunctionOptions,
  MutationResult,
  OperationVariables,
} from '@apollo/client';
import axios from 'axios';
import { File } from 'buffer';
import random from 'lodash/random';

import { UseMutationAction } from '../../@types';
/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useApolloFileUploader = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables
>(
  // mutation configuration
  hook: {
    key: string;
    query: UseMutationAction<TData, TVariables>;
    options?: BaseMutationOptions<TData, TVariables>;
  },
  /**
   * function to construct result to a format that can be consumed by this hook
   */
  options?: {
    // extract signed-url to read/write link
    extract?: (url: string) => { read: string; write: string };
    // compose state format from result
    compose?: (res: any) => { uid: string | number; url: string };
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
    // https://github.com/googleapis/python-storage/issues/3#issuecomment-580415038
    return axios({
      url,
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
        ...headers,
      },
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
export type ApolloFileUploaderProps<TData = any, TVariables = any> = {
  // function to get signed-url with given unique id
  get: (uid: string) => [string, string];
  // function to upload file
  upload: (
    url: string,
    file: File | Blob,
    headers?: (() => Record<string, any>) | Record<string, any>
  ) => Promise<any>;
  // function to generate signed-url from Apollo mutation hook
  generate: (
    options?: MutationFunctionOptions<TData, TVariables>
  ) => Promise<FetchResult<TData>>;
  // the mutation results from apollo
  result: MutationResult<TData>;
};

export default useApolloFileUploader;
