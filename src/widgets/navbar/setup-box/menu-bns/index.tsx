import { FC } from 'react';
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MDBox } from "shared/ui/mui-design-components";
import { OpenNotificationMenuBtn, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme, useUIConfiguratorController } from 'app/providers/theme';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';
import { sxNavbarRow } from 'widgets/navbar/styles';



interface Props {
  light?  : boolean
  isMini? : boolean
}

/** Кнопки Navbar меню после авторизации */
export const MenuBtns: FC<Props> = ({ light, isMini = false }) => {
  const [configuratorState] = useUIConfiguratorController();

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
        
        <Link to="/authentication/sign-in/basic">
          <IconButton sx={(theme) => sxNavbarIconButton(theme as CustomTheme)} disableRipple>
            <AccountCircleIcon
              fontSize='small'
              sx={(theme) => sxNavbarIconsStyle(theme as CustomTheme, configuratorState.navbarTransparent, light)}
            />
          </IconButton>
        </Link>
      </MDBox>
    </MDBox>
  );
};
