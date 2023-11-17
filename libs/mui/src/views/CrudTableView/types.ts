import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { TableProps } from '@mui/material/Table';
import { TooltipProps } from '@mui/material/Tooltip';
import { TypographyProps } from '@mui/material/Typography';

import { TabType } from '../../@types';
import {
  ButtonDropdownItemType,
  TableSelectedBulkOptionsProps,
} from '../../components';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudTableColumnActionType =
  | 'view'
  | 'update'
  | 'delete'
  | 'export'
  | 'extra';

// crud table header actions
export type CrudTableHeaderAction =
  | ({
      /**
       * whether show tooltip or custom tooltip text
       * @default true
       */
      tooltip?: boolean | string | Omit<TooltipProps, 'children'>;
      /**
       * whether to show this item
       * @default true
       */
      enabled?: boolean;
    } & (
      | {
          action: 'expand';
          props?: ButtonProps;
          text?: { expand?: ReactNode; collapse?: ReactNode };
          icon?: { expand?: ReactNode; collapse?: ReactNode };
        }
      | { action: 'refresh'; icon?: ReactNode; props?: ButtonProps }
      | { action: 'density'; icon?: ReactNode; props?: ButtonProps }
      | { action: 'sorting'; icon?: ReactNode; props?: ButtonProps }
      | {
          action: 'settings';
          icon?: ReactNode;
          props?: ButtonProps;
          items: Omit<ButtonDropdownItemType, 'onClick'>[];
        }
      | { action: 'create'; node?: ReactNode; props?: ButtonProps }
    ))
  | {
      key: string;
      action: 'custom';
      enabled?: boolean;
      tooltip: boolean | string | Omit<TooltipProps, 'children'>;
      render: (context?: {
        expanded: boolean;
        tableSize: TableProps['size'];
      }) => ReactNode;
    };

// crud table header info item configuration
export type CrudTableHeaderInfo =
  | {
      /**
       * whether to show this item
       * @default true
       */
      enabled?: boolean;
    } & (
      | { type: 'title' }
      | {
          type: 'bulk';
          /**
           * custom text
           * @default "{count} Item(s) Selected"
           */
          text?: string;
          /**
           * custom props for bulk options
           */
          props?: Omit<
            TableSelectedBulkOptionsProps,
            'items' | 'total' | 'onChange'
          >;
          /**
           * bulk action items
           * @default [{ type: "delete" }, { type: "export" } ]
           */
          items?: Omit<ButtonDropdownItemType, 'onClick'>[];
        }
      | {
          type: 'total';
          /**
           * custom text
           * @default "Total: {count}"
           */
          text?: string;
          /**
           * custom props for MUI Typography
           */
          props?: TypographyProps;
        }
    );

// crud table header info item configuration
export type CrudTableHeaderTab = Omit<TabType, 'content'>;

// crud table header item node
export type CrudTableHeaderItemNode = {
  key: string;
  render: (context?: { [key: string]: any }) => ReactNode;
};
