import { FC } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { AddUserRoot, ProfilesMenuRoot, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';
import { sxNavbarRow } from '../../styles';
import { DashboardSetEditBtn } from 'features/dashboard-view';
import { isDashboardPage } from 'pages/dashboard';
import { useLocation } from 'react-router-dom';



interface Props {
  light?  : boolean
  isMini? : boolean
}

/** Кнопки Navbar меню после авторизации */
export const MenuBtns: FC<Props> = ({ light, isMini = false }) => {
  const location = useLocation();
  const isDashboard = isDashboardPage(location);

  return (
    <MDBox sx={(theme: CustomTheme) => sxNavbarRow(theme, isMini)}>
      <MDBox display='flex' alignItems='center' color={light ? 'white' : 'inherit'}>
        {
          isDashboard && <DashboardSetEditBtn />
        }
        <AddUserRoot />
        {/* <OpenNotificationMenuBtn /> */}
        <OpenUIConfiguratorBtn />
        <ProfilesMenuRoot />
      </MDBox>
    </MDBox>
  );
};
