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
  sidebarWidth : number
  sidenavMini  : boolean
  // darkMode     : boolean
}

// @ts-ignore
export default styled(Drawer)(({ theme, ownerState }: { theme: CustomTheme, ownerState: OwnerState }) => {
  const { palette, transitions, breakpoints, borders: { borderRadius } } = theme;
  const { sidenavMini, sidebarWidth } = ownerState;

  const { gradients } = palette;
  const { xxl } = getBoxShadows(theme);

  let backgroundValue = linearGradient(gradients.sidenav.main, gradients.sidenav.state)
    // darkMode
    // ? background.sidenav
    // : linearGradient(gradients.dark.main, gradients.dark.state);

  // styles for the sidenav when sidenavMini={false}
  const drawerOpenStyles = () => ({
    transform: "translateX(0)",

    [breakpoints.up("xl")]: {
      width: sidebarWidth,
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  // styles for the sidenav when sidenavMini={true}
  const drawerCloseStyles = () => ({
    transform: `translateX(${pxToRem(-320)})`,
    
    [breakpoints.up("xl")]: {
      width: pxToRem(96),
      overflowX: "hidden",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    "& .MuiDrawer-paper": {
      border       : "none",
      boxShadow    : xxl,
      borderRadius : borderRadius.xl,
      background   : backgroundValue,
      height       : 'calc(100vh - 2rem)',
      margin       : '1rem 0 1rem 1rem !important',
      transition   : transitions.create("transform", {
        easing   : transitions.easing.sharp,
        duration : transitions.duration.shorter,
      }),

      [breakpoints.up("xl")]: {
        boxShadow    : xxl,
        marginBottom : "inherit",
        left         : "0",
        transform    : "translateX(0)",
      },
      ...(sidenavMini ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
