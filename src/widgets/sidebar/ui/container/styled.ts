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
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { CustomTheme, getBoxShadows, linearGradient, pxToRem } from 'app/providers/theme';


interface OwnerState {
  sidebarWidth : number
  sidebarMini  : boolean
  isSidebar    : boolean
}

// @ts-ignore
export default styled(Drawer)(({ theme, ownerState }: { theme: CustomTheme, ownerState: OwnerState }) => {
  const { palette, transitions, breakpoints, borders: { borderRadius } } = theme;
  const { sidebarMini, sidebarWidth, isSidebar } = ownerState;
  const { gradients } = palette;
  const { xxl } = getBoxShadows(theme);

  let backgroundValue = linearGradient(gradients.sidebar.main, gradients.sidebar.state)
    // darkMode
    // ? background.sidebar
    // : linearGradient(gradients.dark.main, gradients.dark.state);

  // styles for the sidebar when sidebarMini={false}
  const drawerFullwidthStyles = () => ({
    [breakpoints.up('xl')]: {
      width: sidebarWidth,
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  // styles for the sidebar when sidebarMini={true}
  const drawerMiniStyles = () => ({
    width: pxToRem(96),

    [breakpoints.down('sm')]: {
      transform: `translateX(${pxToRem(-320)})`,
    },
    
    [breakpoints.up('xl')]: {
      overflowX: 'hidden',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    '& .MuiDrawer-paper': {
      border       : 'none',
      boxShadow    : xxl,
      borderRadius : borderRadius.xl,
      background   : backgroundValue,
      height       : 'calc(100vh - 2rem)',
      margin       : '1rem 0 1rem 1rem !important',
      transform    : isSidebar ? 'translateX(0)' : `translateX(${pxToRem(-320)})`,

      transition   : transitions.create('transform', {
        easing   : transitions.easing.sharp,
        duration : transitions.duration.shorter,
      }),

      [breakpoints.up('xl')]: {
        boxShadow    : xxl,
        marginBottom : 'inherit',
        left         : '0',
        transform    : isSidebar ? 'translateX(0)' : `translateX(${pxToRem(-320)})`,
      },

      ...(sidebarMini ? drawerMiniStyles() : drawerFullwidthStyles()),
    },
  };
});
