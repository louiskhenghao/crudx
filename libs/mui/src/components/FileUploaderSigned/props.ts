import {UseMutationAction} from "@crudx/core";
import {BaseMutationOptions, OperationVariables} from "@apollo/client";
import {ReactNode} from "react";

export type SignedUrl<
  TData = any,
  TVariables extends OperationVariables = OperationVariables
> = {
  key: string;
  query: UseMutationAction<TData, TVariables>;
  options?: BaseMutationOptions<TData, TVariables>;
}

export type Props<
  TData = any,
  TVariables extends OperationVariables = OperationVariables
> = {
  signedUrl: SignedUrl<TData, TVariables>;
  render: (val: SignedUrlImage) => (ReactNode | void);
  value: string[];
  onChange: (val: string[]) => void;
}

export type SignedUrlImage = {
  url: string;
  filename: string;
  fileType: string;
  loading?: boolean;
  progress?: number;
  onRemove?: () => void;
}
