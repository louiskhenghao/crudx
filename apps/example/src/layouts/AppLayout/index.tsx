import React from 'react';
import { SIGN_IN_PATH } from '@apps/config/constant';
import { useNavigationItems } from '@apps/config/navigation.config';
import { useUserDropdownMenuItems } from '@apps/config/user-dropdown.config';
import { MainLayout } from '@webbyx/mui';
import { clearAuthToken, redirect, useAuthIdentity } from '@webbyx/next-js';

import { LayoutProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Layout: React.FC<LayoutProps> = (props) => {
  const { contentHeightFixed, children } = props;

  // =============== HOOKS
  const { authUser, config } = useAuthIdentity();
  const menuItems = useNavigationItems();
  const userItems = useUserDropdownMenuItems({
    onLogout: () => {
      clearAuthToken();
      redirect({}, SIGN_IN_PATH, 'replace');
    },
  });

  // =============== VIEWS
  if (config?.shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <MainLayout
      company="ABC"
      brandingLink="/"
      enableFixedContentHeight={contentHeightFixed}
      verticalLayoutProps={{
        navigation: {
          items: menuItems,
        },
        appBar: {
          rightItems: [
            { type: 'mode' },
            { type: 'language' },
            {
              type: 'user',
              props: {
                name: authUser?.username ?? 'John Doe',
                color: 'primary',
              },
              items: userItems,
            },
          ],
        },
      }}
    >
      {children}
    </MainLayout>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default Layout;
