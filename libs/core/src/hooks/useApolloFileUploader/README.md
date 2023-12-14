# `useApolloFileUploader`

A hook that use to upload file with apollo hook

## Usage

```TypeScript
import { useApolloFileUploader } from '@crudx/core';

const Demo = () => {
  const {upload, generate, get, results} = useApolloFileUploader({
    key: "some-name",
    query: useXxxMutation,
  }, {
    compose: (result) => {
      return {
        uid: 1,
        url: results
      }
    },
    extract: (url) => {
      return {
        read: url.split('?')[0]
        write: url,
      }
    }
  });

  return (
    <div>
      <button onClick={() => {
        generate({
          variables: {}
        })
      }}>
        Generate signed url
      </button>
      <button onClick={() => {
        const [urlToWrite] = get(1)
        upload(urlToWrite, new File(), { 'x-header': 'some-header' })
      }}>
        Upload
      </button>

      <p>RESULTS: JSON.stringify(results)</p>
    </div>
  );
};
```

## Reference

```TypeScript
useApolloFileUploader = <
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
): UploaderTupleProps<TData, TVariables>

export type UploaderTupleProps<TData = any, TVariables = any> = {
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
};};
```
