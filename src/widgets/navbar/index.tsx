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

import { useState, useEffect, FC, memo } from "react";
import { useLocation, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MDBox } from "shared/ui/mui-design-components";
// import AuthService from "services/auth-service";
// import { AuthContext } from "context";
import { sxNavbar, sxNavbarContainer, sxNavbarRow } from "./styles";
import { DashboardDatebar } from 'widgets/dashboard/dashboard-datebar';
import { MiniSidebarToggleBtn, OpenNotificationMenuBtn, OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme, useUIConfiguratorController } from 'app/providers/theme';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';



interface Props {
  absolute? : boolean
  light?    : boolean
  isMini?   : boolean
}


export const Navbar: FC<Props> = memo(({ absolute = false, light = false, isMini = false }) => {
  const [navbarType, setNavbarType] = useState<"sticky" | "static">();
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { navbarTransparent, navbarFixed, mode } = configuratorState;
  const darkMode = mode === 'dark';
  const route = useLocation().pathname.split("/").slice(1);


  useEffect(() => {
    // Setting the navbar type
    if (navbarFixed) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

  //   // A function that sets the transparent state of the navbar.
  //   function handlenavbarTransparent() {
  //     setnavbarTransparent(dispatch, (navbarFixed && window.scrollY === 0) || !navbarFixed);
  //   }

  //   /** 
  //    The event listener that's calling the handlenavbarTransparent function when 
  //    scrolling the window.
  //   */
  //   window.addEventListener("scroll", handlenavbarTransparent);

  //   // Call the handlenavbarTransparent function to set the state with the initial value.
  //   handlenavbarTransparent();

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener("scroll", handlenavbarTransparent);
  }, [dispatch, navbarFixed]);



  const handleLogOut = async () => {
    // const response = await AuthService.logout();
    // authContext.logout();
  };


  return (
    <SidebarRegulatorWrapper>
      <AppBar
        position={absolute ? "absolute" : navbarType}
        color="inherit"
        sx={(theme) => sxNavbar(theme as CustomTheme, { navbarTransparent, absolute, light, darkMode })}
      >
        <Toolbar sx={(theme) => sxNavbarContainer(theme as CustomTheme)}>
          <MDBox
            color="inherit"
            mb={{ xs: 1, md: 0 }}
            sx={(theme: CustomTheme) => sxNavbarRow(theme, isMini)}
          >
            <MiniSidebarToggleBtn light={light} />

            {/* <Breadcrumbs
              title={route[route.length - 1]}
              route={route}
              light={light}
            /> */}

            {/* <IconButton
              color="inherit"
              onClick={handleMiniSidebar}
            >
              {
                // @ts-ignore
                miniSidebar ? <FormatIndentIncreaseIcon sx={sxNavbarIconsStyle} fontSize="small" /> : <MenuIcon sx={sxNavbarIconsStyle} fontSize="small" />
              }
            </IconButton> */}

            <DashboardDatebar />
          </MDBox>

          {
            isMini
              ? null
              : (
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
          )}
        </Toolbar>
      </AppBar>
    </SidebarRegulatorWrapper>
  );
})
