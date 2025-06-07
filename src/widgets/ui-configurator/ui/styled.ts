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
import { CustomTheme } from 'app/providers/theme';
import { getBoxShadows, linearGradient, pxToRem } from 'shared/styles';



// @ts-ignore
export default styled(Drawer)(({ theme, ownerState }) => {
  const { transitions, palette: { configurator } } = theme as CustomTheme;
  const { isOpenConfigurator } = ownerState;

  const configuratorWidth = 360;

  // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width : configuratorWidth,
    right : 0,
    transition: transitions.create('right', {
      easing   : transitions.easing.sharp,
      duration : transitions.duration.short,
    }),
  });

  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    right : pxToRem(-350),
    transition: transitions.create('all', {
      easing   : transitions.easing.sharp,
      duration : transitions.duration.short,
    }),
  });


  return {
    '& .MuiDrawer-paper': {
      height       : '100%', // 'max-content', // '100vh',
      left         : 'initial',
      background    : linearGradient(configurator.gradients.main, configurator.gradients.state),
      margin       : 0,
      padding      : `0 ${pxToRem(24)}`,
      borderRadius : 0,
      boxShadow    : getBoxShadows(theme as CustomTheme).lg,
      overflowY    : 'auto',
      ...(isOpenConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
