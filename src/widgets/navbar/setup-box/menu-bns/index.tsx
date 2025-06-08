import { FC } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { OpenNotificationMenuBtn, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';
import { sxNavbarRow } from '../../styles';
import { ProfilesMenuRoot } from 'widgets/profiles-menu';
import { DashboardSetEditBtn } from 'features/dashboard-view';
import { isDashboardPage } from 'pages/dashboard';
import { useLocation } from 'react-router-dom';
import { SxNavbarIcon } from '../..';



interface Props {
  light?  : boolean
  isMini? : boolean
  sx      : SxNavbarIcon
}

/** Кнопки Navbar меню после авторизации */
export const MenuBtns: FC<Props> = ({ light, isMini = false, sx }) => {
  const location = useLocation();
  const isDashboard = isDashboardPage(location);

  return (
    <MDBox sx={(theme: CustomTheme) => sxNavbarRow(theme, isMini)}>
      <MDBox display='flex' alignItems='center' color={light ? 'white' : 'inherit'}>
        {
          isDashboard && <DashboardSetEditBtn sx={sx} />
        }
        <OpenNotificationMenuBtn sx={sx} />
        <OpenUIConfiguratorBtn   sx={sx} />
        <ProfilesMenuRoot        sx={sx} />
      </MDBox>
    </MDBox>
  );
};
