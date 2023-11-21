import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { VerticalNavItemsType } from '@webbyx/mui';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const useNavigationItems = (): VerticalNavItemsType[] => {
  return [
    {
      key: 'home',
      title: 'Home',
      icon: <HomeOutlinedIcon />,
      path: '/',
    },
    {
      key: 'test-crud-api',
      title: 'CRUD Helper',
      path: '/test-crud-api',
    },
    {
      key: 'test-crud-api-component',
      title: 'CRUD Component',
      path: '/test-crud-api-component',
    },
  ];
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default useNavigationItems;
