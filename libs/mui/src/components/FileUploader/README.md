# FileUploader

File uploader component

---

## Props

```ts
import React from "react";
import {BoxProps} from "@mui/material/Box";
import {ButtonProps} from "@mui/material/Button";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type Props = {
  /**
   * on file listing changed
   */
  onChange?: (value: File[]) => void;
  /**
   * enable upload multiple
   * @defualt true
   */
  multiple?: boolean;
  /**
   * enable drag and drop on upload action
   * @default true
   */
  enableDrop?: boolean;
  /**
   * acceptable file type
   * @default "image/*,.pdf"
   */
  acceptType?: string;
  /**
   * available when props "multiple" = true
   * limit size on uploaded file
   * @default Infinity
   */
  uploadSize?: number;
  /**
   * customize upload button
   */
  customUploadButton?: (props: FileUploaderCustomFnProps) => React.ReactNode;
  /**
   * default upload button props
   */
  uploadButtonProps?: ButtonProps & {
    icon?: React.ReactNode;
    iconSize?: string | number;
    buttonText?: string;
    containerProps?: BoxProps;
  }
  /**
   * Render file layout
   * @param files
   * @param onHandleRemove
   */
  render?: (files: File[], onHandleRemove: (index: number) => void) => React.ReactNode;
  /**
   * File uploader container props
   */
  containerProps?: BoxProps;
}

/**
 * ===========================
 * Custom Upload Button Props
 * ===========================
 */
export type FileUploaderCustomFnProps = {
  /**
   * disabled button when false
   */
  disabledCondition?: boolean;
  /**
   * on upload button click
   */
  onHandleButtonClick?: () => void;
  /**
   * get true when drag over
   */
  dragActive?: boolean;
  /**
   * on item remove
   * @param i = item index
   */
  onRemove?: (i: number) => void;
  /**
   * Uploaded files
   */
  fileList?: File[];
};

/**
 * Normal Customer Upload Props (show this when props available)
 */
export type CustomUploadButtonProps = {
  /**
   * onclick action
   */
  onClick: () => void;
  /**
   * button disabled props
   */
  disabled: boolean;
  /**
   * button classname
   */
  className: string;
};
```

---

# Example

```ts
import {FileUploader} from '@crudx/mui';

<FileUploader
  onChange={(file) => console.log(file)}
  fileList={files}
  multiple={true} // default true
  uploadSize={6} // default unlimited
  acceptType={"./pdf"}
  customUploadButton={(val) => {
    const {disabledCondition, onHandleButtonClick, dragActive, onRemove, fileList} = val;
    return (
      <button></button>
    )
  }}
  render={(files, onHandleRemove) => {
    return (
      <div>
        // display uploaded file & remove action  
      </div>
    )
  }}
/>;
```
