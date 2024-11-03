import { FC } from 'react';
import { MDBox } from "shared/ui/mui-design-components";
import { OpenNotificationMenuBtn, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme, useUIConfiguratorController } from 'app/providers/theme';
import { sxNavbarRow } from 'widgets/navbar/styles';
import { ProfilesMenuRoot } from 'widgets/profiles-menu';



interface Props {
  light?  : boolean
  isMini? : boolean
}

/** Кнопки Navbar меню после авторизации */
export const MenuBtns: FC<Props> = ({ light, isMini = false }) => {

  return (
    <MDBox sx={(theme: CustomTheme) => sxNavbarRow(theme, isMini)}>
      <MDBox display="flex" alignItems="center" color={light ? "white" : "inherit"}>
        <OpenNotificationMenuBtn light={light} />
        
        {/* <MDBox>
          <MDButton
            variant="gradient"
            color="info"
            fullWidth
            type="button"
            onClick={handleLogOut}
          >
            Log Out
          </MDButton>
        </MDBox> */}
          
        <OpenUIConfiguratorBtn light={light} />
        <ProfilesMenuRoot />
      </MDBox>
    </MDBox>
  );
};
