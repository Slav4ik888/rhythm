/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { FC, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import List from "@mui/material/List";
import MDBox from "shared/ui/mui-design-components/md-box";
import MDTypography from "shared/ui/mui-design-components/md-typography";
import SidenavRoot from "./root-drawer";
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  ColorName,
  MaterialUIControllerProviderState,
} from "app/providers/theme";
import { SidenavDivider } from './sidenav-items/sidenav-divider';
import { SidenavLogoLabel } from './logo-label';
import { SidenavUpgradeButton } from './upgrade-button';
import { renderExampleRoutes } from './render-example-routes';
import { renderRoutes } from './render-routes';



interface Props {
  onMouseEnter: () => void
  onMouseLeave: () => void
}


export const Sidenav: FC<Props> = ({ ...rest }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller as MaterialUIControllerProviderState;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  const textColor: ColorName = useMemo(() => {
    if (transparentSidenav || (whiteSidenav && !darkMode)) return "dark";
    else if (whiteSidenav && darkMode) return "inherit";
    else return "white" as ColorName
  }, [transparentSidenav, whiteSidenav, darkMode, whiteSidenav]);

  const exampleRoutes = useMemo(() => renderExampleRoutes(collapseName), [collapseName]);
  const routes = useMemo(() => renderRoutes(collapseName, textColor), [collapseName, textColor]);
  

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    // The event listener that's calling the handleMiniSidenav function when resizing the window.
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);


  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      // @ts-ignore
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <SidenavLogoLabel textColor={textColor} />
      <SidenavDivider />
      <List>
        <MDBox display="flex flex-col" alignItems="center">
          <MDTypography color={textColor} variant="body2" fontWeight="medium" pl="1.5rem">
            { miniSidenav ? "Exam" : "Examples" }
          </MDTypography>
          {exampleRoutes}
        </MDBox>

        <SidenavDivider />
        {routes}
      </List>

      <SidenavUpgradeButton />
    </SidenavRoot>
  );
}
