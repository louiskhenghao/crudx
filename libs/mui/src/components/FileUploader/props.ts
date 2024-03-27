import React from "react";
import {BoxProps} from "@mui/material/Box";
import {ButtonProps} from "@mui/material/Button";
import {OperationVariables} from "@apollo/client";
import {SignedUrl} from "../FileUploaderSigned/props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type Props<
  TData = any,
  TVariables extends OperationVariables = OperationVariables
> = {
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
  render?: (files: File, onHandleRemove: () => void) => React.ReactNode;
  /**
   * File uploader container props
   */
  containerProps?: BoxProps;
  value?: File[];
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
