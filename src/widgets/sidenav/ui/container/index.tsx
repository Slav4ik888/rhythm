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
import SidenavRoot from "../root-drawer";
import { useUIConfiguratorController, ColorName, setSidenavMini } from "app/providers/theme";
import { SidenavDivider } from '../../../../shared/ui/sidenav-divider';
import { SidenavLogoLabel } from '../logo-label';
import { SidenavUpgradeButton } from '../upgrade-button';
import { renderRoutes } from '../render-routes';
import { routesList_css_1d3r8 } from 'entities/dashboard';



interface Props {
  onMouseEnter: () => void
  onMouseLeave: () => void
}


export const SidenavContainer: FC<Props> = ({ ...rest }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidenavMini, sidebarWidth, mode } = configuratorState;
  const darkMode = mode === "dark";
  const location = useLocation();
  const activeName = location.pathname.replace("/", ""); // dashboard/css_1d3r8

  const textColor: ColorName = useMemo(() => {
    if (! darkMode) return "dark";
    else if (darkMode) return "inherit";
    else return "white" as ColorName
  }, [darkMode]);

  const routes = useMemo(() => renderRoutes(routesList_css_1d3r8, activeName, textColor), [routesList_css_1d3r8, activeName, textColor]);
  

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleSidenavMini() {
      setSidenavMini(dispatch, window.innerWidth < 1200 || sidenavMini); // Если изначально мини, то нужно его оставить если экран > 1200
    }

    // The event listener that's calling the handleSidenavMini function when resizing the window.
    window.addEventListener("resize", handleSidenavMini);

    // Call the handleSidenavMini function to set the state with the initial value.
    handleSidenavMini();

    return () => window.removeEventListener("resize", handleSidenavMini);
  }, [dispatch, location]);


  return (
    // @ts-ignore
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ sidenavMini, sidebarWidth }}
    >
      <SidenavLogoLabel />
      <List>
        {/* <MDBox display="flex flex-col" alignItems="center">
          <MDTypography color={textColor} variant="body2" fontWeight="medium" pl="1.5rem" mb="1rem">
            { sidenavMini ? "Exam" : "Examples" }
          </MDTypography>
          {exampleRoutes}
        </MDBox> */}

        {routes}
      </List>

      <SidenavUpgradeButton />
    </SidenavRoot>
  );
}
