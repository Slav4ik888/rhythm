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

// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { CustomTheme, getBoxShadows, linearGradient, pxToRem } from 'app/providers/theme';


interface OwnerState {
  sidenavMini: boolean
  darkMode: boolean
}

// @ts-ignore
export default styled(Drawer)(({ theme, ownerState }: { theme: CustomTheme, ownerState: OwnerState }) => {
  const { palette, transitions, breakpoints } = theme;
  const { sidenavMini, darkMode } = ownerState;

  const sidebarWidth = 250;
  const { gradients, background } = palette;
  const { xxl } = getBoxShadows(theme);

  let backgroundValue = darkMode
    ? background.sidenav
    : linearGradient(gradients.dark.main, gradients.dark.state);

  // styles for the sidenav when sidenavMini={false}
  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: xxl,
      marginBottom: "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  // styles for the sidenav when sidenavMini={true}
  const drawerCloseStyles = () => ({
    background: backgroundValue,
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: xxl,
      marginBottom: "inherit",
      left: "0",
      width: pxToRem(96),
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",

      ...(sidenavMini ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
