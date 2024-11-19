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
import SidebarRoot from "./styled";
import { useUIConfiguratorController, ColorName, setSidebarMini, setIsSidebar, useTheme } from "app/providers/theme";
// import { SidebarDivider } from 'shared/ui/sidebar-divider';
import { SidebarLogoLabel } from '../logo-label';
import { SidebarUpgradeButton } from '../upgrade-button';
import { renderRoutes } from '../render-routes';
import { routesList_css_1d3r8 } from 'entities/dashboard';



interface Props {
  onMouseEnter: () => void
  onMouseLeave: () => void
}


export const SidebarContainer: FC<Props> = ({ ...rest }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidebarMini, sidebarWidth, mode, isSidebar } = configuratorState;
  const darkMode = mode === "dark";
  const theme = useTheme();
  const { breakpoints: { values: { xl, sm } } } = theme;
  const location = useLocation();
  const activeName = location.pathname.replace("/", ""); // dashboard/css_1d3r8

  const textColor: ColorName = useMemo(() => {
    if (! darkMode) return "dark";
    else if (darkMode) return "inherit";
    else return "white" as ColorName
  }, [darkMode]);

  // TODO: вставлять routesList в функцию по companyId
  const routes = useMemo(() => renderRoutes(routesList_css_1d3r8, activeName, textColor), [routesList_css_1d3r8, activeName, textColor]);
  

  useEffect(() => {
    // A function that sets the mini state of the sidebar.
    function handleSidebarChanges() {
      setSidebarMini(dispatch, window.innerWidth < xl || sidebarMini); // Если изначально мини, то нужно его оставить если экран > 1200
      setIsSidebar(dispatch, window.innerWidth > sm || isSidebar);
    }

    // The event listener that's calling the handleSidebarMini function when resizing the window.
    window.addEventListener("resize", handleSidebarChanges);

    // Call the handleSidebarMini function to set the state with the initial value.
    handleSidebarChanges();

    return () => window.removeEventListener("resize", handleSidebarChanges);
  }, [dispatch, location]);


  return (
    // @ts-ignore
    <SidebarRoot
      {...rest}
      variant="permanent"
      ownerState={{ sidebarMini, sidebarWidth, isSidebar }}
    >
      <SidebarLogoLabel />
      <List>
        {/* <MDBox display="flex flex-col" alignItems="center">
          <MDTypography color={textColor} variant="body2" fontWeight="medium" pl="1.5rem" mb="1rem">
            { sidebarMini ? "Exam" : "Examples" }
          </MDTypography>
          {exampleRoutes}
        </MDBox> */}

        {routes}
      </List>

      <SidebarUpgradeButton />
    </SidebarRoot>
  );
}
