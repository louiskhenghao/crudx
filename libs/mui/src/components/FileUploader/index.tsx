import { Props, CustomUploadButtonProps } from './props';
import React, {useMemo, useRef, useState} from "react";
import ConditionalWrapper from "../ConditionalWrapper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import size from "lodash/size";

/**
 * ===========================
 * MAIN
 * ===========================
 */

const FileUploader: React.FC<Props> = (props) => {
  const {
    multiple = true,
    onChange,
    enableDrop = true,
    acceptType = 'image/*,.pdf',
    customUploadButton,
    uploadSize = Infinity,
    uploadButtonProps,
    render,
    containerProps,
    value = []
  } = props;

  // ======== STATES
  const [dragActive, setDragActive] = useState<boolean>(false);

  // ======== HOOKS
  const fileInputRef = useRef<HTMLInputElement>(null);

  const disabledCondition = useMemo(() => {
    return uploadSize <= size(value);
  }, [uploadSize, value]);

  // ======== EVENTS
  // upload action
  const onHandleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // action drag
  const onHandleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const onHandleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFiles: File[] = Array.from(e.dataTransfer.files);
      onChange?.([...value, ...droppedFiles]);
    }
  };

  // handle file change
  const onHandleFileChange = (event: any) => {
    const selectedFiles: File[] = Array.from(event.target.files);
    const fileList = value ?? [];
    fileList.push(...selectedFiles);
    onChange?.(multiple ? fileList : selectedFiles);
  };

  // handle remove
  const onHandleRemove = (index: number) => {
    const fileList = [...value];
    fileList.splice(index, 1);
    onChange?.(fileList);
  };

  // ======= VIEWS
  return (
    <ConditionalWrapper
      condition={enableDrop}
      wrapper={(children) => (
        <Box
          onDragEnter={onHandleDrag}
          onDragLeave={onHandleDrag}
          onDragOver={onHandleDrag}
          onDrop={onHandleDrop}
        >
          {children}
        </Box>
      )}
      {...containerProps}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={onHandleFileChange}
        onClick={(event: any) => (event.target.value = null)}
        accept={acceptType}
        multiple={multiple}
      />
      {customUploadButton ? (
        React.isValidElement<CustomUploadButtonProps>(customUploadButton) ? (
          React.cloneElement<CustomUploadButtonProps>(customUploadButton, {
            disabled: disabledCondition,
            onClick: onHandleButtonClick,
            className: dragActive ? 'bg-[#f0f0f0]' : '',
          })
        ) : (
          customUploadButton({
            disabledCondition,
            onHandleButtonClick,
            dragActive,
            onRemove: onHandleRemove,
            fileList: value,
          })
        )
      ) : (
        <Button
          className={'mb-3'}
          variant={'outlined'}
          onClick={onHandleButtonClick}
          disabled={disabledCondition}
          {...uploadButtonProps}
        >
          {!uploadButtonProps?.icon && (
            <Box {...uploadButtonProps?.containerProps}>
              <UploadFileIcon sx={{ fontSize: uploadButtonProps?.iconSize }} />
            </Box>
          )}
          {uploadButtonProps?.icon}
          {uploadButtonProps?.buttonText || 'Upload'}
        </Button>
      )}
      {value?.map((file, index) => {
        return render?.(file, () => onHandleRemove?.(index))
      })}
    </ConditionalWrapper>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default FileUploader;
