import { FC } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { AddUserRoot, ProfilesMenuRoot, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';
import { sxNavbarRow } from '../../styles';
import { DashboardSetEditBtn } from 'features/dashboard-view';
import { useAccess } from 'entities/company';
import { usePages } from 'shared/lib/hooks';



interface Props {
  light?  : boolean
  isMini? : boolean
}

/** Кнопки Navbar меню после авторизации */
export const MenuBtns: FC<Props> = ({ light, isMini = false }) => {
  const { isDashboardPage } = usePages();
  const { isDashboardAccess } = useAccess();


  return (
    <MDBox sx={(theme: CustomTheme) => sxNavbarRow(theme, isMini)}>
      <MDBox display='flex' alignItems='center' color={light ? 'white' : 'inherit'}>
        {
          isDashboardPage && isDashboardAccess && (
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
