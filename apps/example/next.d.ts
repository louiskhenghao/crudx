import type { ReactElement, ReactNode } from 'react';
import { ThemeSettings } from '@webbyx/mui';
import type {
  NextComponentType,
  NextPageContext,
} from 'next/dist/shared/lib/utils';

declare module 'next' {
  export declare type NextPage<P = any, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    setPageThemeSettings?: () => ThemeSettings;
    getLayout?: (page: ReactElement) => ReactNode;
  };
}
