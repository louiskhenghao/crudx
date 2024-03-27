import {useApolloFileUploader} from "@crudx/core";
import {Props, SignedUrlImage} from "./props";
import React, {useEffect} from "react";
import FileUploader from "../FileUploader";
import {useDeepCompareEffect} from "@crudx/common";

const FileUploaderSigned = ({signedUrl, render, value, onChange}: Props) => {
  const {upload, generate, get, result} = useApolloFileUploader({
    ...signedUrl
  }, {
    compose: (result) => {
      return {
        uid: '1',
        url: result
      }
    },
    extract: (url) => {
      return {
        read: url.split('?')[0],
        write: url,
      }
    }
  });

  useDeepCompareEffect(() => {
    const hasFiles = files?.length > 0;
    const hasValues = value?.length > 0;
    if (!hasValues) return;
    if (!hasFiles) {
      const updates = (value ?? []).map((e, i) => {
        if (typeof e === "string") {
          const found = findFileFromStateByUrl(e);
          if (found) return found;
          return constructFileData(e, i);
        }
        return e;
      });
      setFiles(updates);
      return;
    }

    const findUrlFromValue = (inUrl: string) => {
      return find(value, (e) => e === inUrl);
    };

    const finals = reduce(
      files,
      (r: any[], e, i) => {
        const url = e?.url ?? e?.response?.url ?? e?.originFileObj?.url;
        const found = findUrlFromValue(url);
        if (!found && e.status === "done") {
          r.push(constructFileData(url, i));
        } else {
          r.push(e);
        }
        return r;
      },
      []
    );
    setFiles(finals);
  }, [value]);

  useDeepCompareEffect(() => {
    const updates = filter(
      (files ?? []).map((e) => {
        if (e.status !== "done") return null;
        return e?.url ?? e?.response?.url;
      }),
      (e) => !!e
    );
    onChange?.(updates);
  }, [files]);

  return (
    <FileUploader
      render={(file, onHandleRemove) => {
        return <SignedUrlFile file={file} onHandleRemove={onHandleRemove} loading={result.loading} url={result.data?.[signedUrl.key]?.url} render={render}/>
      }}
      value={[]}
      onChange={() => null}
    />
  )
}

const SignedUrlFile = (
  {
    file,
    onHandleRemove,
    loading,
    render,
    url
  } : {
    file: File;
    onHandleRemove: () => void;
    loading?: boolean;
    render?: (val: SignedUrlImage) => React.ReactNode | void;
    url?: string;
  }
) => {
  if (loading || !url) return <>{'loading'}</>;

  if (React.isValidElement(render)) return render({
    fileType: file.type,
    url,
    filename: file.name,
    loading: false,
    progress: 0,
    onRemove: onHandleRemove,
  }) as React.ReactNode;
  return <img key={file.name} alt={file.name} className='single-file-image' src={url} />
}


export default FileUploaderSigned;
