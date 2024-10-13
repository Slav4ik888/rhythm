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
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { MDBox } from "shared/ui/mui-design-components";
import Breadcrumbs from 'shared/ui/breadcrumbs';
import NotificationItem from "shared/ui/items/notification-item";
// import AuthService from "services/auth-service";
// import { AuthContext } from "context";
import { navbar, navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu } from "./styles";
import { DashboardDatebar } from 'widgets/dashboard/dashboard-datebar';
import { OpenUIConfiguratorBtn } from 'features/ui';
import { CustomTheme, rgba } from 'app/providers/theme';



interface Props {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
}

export const DashboardNavbar: FC<Props> = memo(({ absolute = false, light = false, isMini = false }) => {
  const [navbarType, setNavbarType] = useState<"sticky" | "static">();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState<Element | null>(null);
  const route = useLocation().pathname.split("/").slice(1);


  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

  //   // A function that sets the transparent state of the navbar.
  //   function handleTransparentNavbar() {
  //     setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
  //   }

  //   /** 
  //    The event listener that's calling the handleTransparentNavbar function when 
  //    scrolling the window.
  //   */
  //   window.addEventListener("scroll", handleTransparentNavbar);

  //   // Call the handleTransparentNavbar function to set the state with the initial value.
  //   handleTransparentNavbar();

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);


  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      // anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text } }: CustomTheme) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  const handleLogOut = async () => {
    // const response = await AuthService.logout();
    // authContext.logout();
  };


  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme as CustomTheme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme as CustomTheme)}>
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme: CustomTheme) => navbarRow(theme, isMini)}
        >
          {/* <Breadcrumbs
            title={route[route.length - 1]}
            route={route}
            light={light}
          /> */}

          {/* <IconButton
            color="inherit"
            onClick={handleMiniSidenav}
          >
            {
              // @ts-ignore
              miniSidenav ? <FormatIndentIncreaseIcon sx={iconsStyle} fontSize="small" /> : <MenuIcon sx={iconsStyle} fontSize="small" />
            }
          </IconButton> */}

          <DashboardDatebar />
        </MDBox>

        {
          isMini
            ? null
            : (
                <MDBox sx={(theme: CustomTheme) => navbarRow(theme, isMini)}>
                  <MDBox display="flex" alignItems="center" color={light ? "white" : "inherit"}>
                    <IconButton
                      disableRipple
                      color="inherit"
                      sx={(theme) => navbarMobileMenu(theme as CustomTheme)}
                      onClick={handleMiniSidenav}
                    >
                      <MenuIcon sx={(theme) => iconsStyle(theme as CustomTheme)} fontSize="small" />
                    </IconButton>
                    
                    <IconButton
                      disableRipple
                      color="inherit"
                      aria-controls="notification-menu"
                      aria-haspopup="true"
                      variant="contained"
                      /* @ts-ignore */
                      sx={navbarIconButton}
                      onClick={handleOpenMenu}
                    >
                      {/* @ts-ignore */}
                      <NotificationsIcon sx={iconsStyle} fontSize="small" />
                    </IconButton>
                    {renderMenu()}
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
                    
                    <OpenUIConfiguratorBtn />
                    <Link to="/authentication/sign-in/basic">
                      {/* @ts-ignore */}
                      <IconButton sx={navbarIconButton} disableRipple>
                        {/* @ts-ignore */}
                        <AccountCircleIcon sx={iconsStyle} fontSize='small' />
                      </IconButton>
                    </Link>
                  </MDBox>
                </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
})
