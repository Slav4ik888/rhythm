import { FC, useMemo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { AddUserRoot, ProfilesMenuRoot, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';
import { sxNavbarRow } from '../../styles';
import { DashboardSetEditBtn } from 'features/dashboard-view';
import { isDashboardPage } from 'pages/dashboard';
import { useLocation } from 'react-router-dom';
import { useCompany, checkAccess } from 'entities/company';
import { useUser } from 'entities/user';



interface Props {
  light?  : boolean
  isMini? : boolean
}

/** Кнопки Navbar меню после авторизации */
export const MenuBtns: FC<Props> = ({ light, isMini = false }) => {
  const { paramsCompany } = useCompany();
  const { email } = useUser();
  const location = useLocation();
  const isDashboard = isDashboardPage(location);
  const dashboardAccess = useMemo(() => checkAccess(paramsCompany, email, 'a.d.f', 'e'),
    [email, paramsCompany]);


  return (
    <MDBox sx={(theme: CustomTheme) => sxNavbarRow(theme, isMini)}>
      <MDBox display='flex' alignItems='center' color={light ? 'white' : 'inherit'}>
        {
          isDashboard && dashboardAccess && (
            <>
              <DashboardSetEditBtn />
              <AddUserRoot />
            </>
          )
        }
        {/* <OpenNotificationMenuBtn /> */}
        <OpenUIConfiguratorBtn />
        <ProfilesMenuRoot />
      </MDBox>
    </MDBox>
  );
};
