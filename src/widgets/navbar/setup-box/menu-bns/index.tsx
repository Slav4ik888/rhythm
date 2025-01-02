import { FC } from 'react';
import { MDBox } from "shared/ui/mui-design-components";
import { OpenNotificationMenuBtn, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';
import { sxNavbarRow } from 'widgets/navbar/styles';
import { ProfilesMenuRoot } from 'widgets/profiles-menu';
import { DashboardSetEditBtn } from 'features/dashboard-view';



interface Props {
  light?  : boolean
  isMini? : boolean
}

/** Кнопки Navbar меню после авторизации */
export const MenuBtns: FC<Props> = ({ light, isMini = false }) => {

  return (
    <MDBox sx={(theme: CustomTheme) => sxNavbarRow(theme, isMini)}>
      <MDBox display="flex" alignItems="center" color={light ? "white" : "inherit"}>
        <DashboardSetEditBtn light={light} />
        <OpenNotificationMenuBtn light={light} />
        <OpenUIConfiguratorBtn light={light} />
        <ProfilesMenuRoot />
      </MDBox>
    </MDBox>
  );
};
