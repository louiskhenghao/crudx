import LogoutIcon from '@mui/icons-material/Logout';
import PasswordIcon from '@mui/icons-material/Password';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ProfileDropdownItemType } from '@webbyx/mui';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useUserDropdownMenuItems = (props?: {
  onLogout: () => void;
}): ProfileDropdownItemType[] => {
  // =============== RETURN
  return [
    {
      key: 'change-password',
      title: 'Change Password',
      url: '/change-password',
      icon: <PasswordIcon />,
    },
    {
      key: 'settings',
      title: 'Settings',
      url: '/settings',
      icon: <SettingsOutlinedIcon />,
    },
    'divider',
    {
      key: 'logout',
      title: 'Logout',
      icon: <LogoutIcon />,
      onClick: props?.onLogout,
    },
  ];
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useUserDropdownMenuItems;
