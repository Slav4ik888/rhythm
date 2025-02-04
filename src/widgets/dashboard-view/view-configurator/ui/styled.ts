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
import { getBoxShadows, pxToRem } from 'shared/styles';



interface OwnerState {
  editMode: boolean
}

// @ts-ignore
export default styled(Drawer)(({ theme, ownerState }: { theme: CustomTheme, ownerState: OwnerState }) => {
  const { transitions, borders: { borderRadius } } = theme;
  const { editMode } = ownerState;

  const configuratorWidth = 460;

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
    right : pxToRem(-450),
    transition: transitions.create('all', {
      easing   : transitions.easing.sharp,
      duration : transitions.duration.short,
    }),
  });


  return {
    '& .MuiDrawer-paper': {
      height        : 'calc(100vh - 2rem)',
      left          : 'initial',
      margin        : '1rem 1rem 1rem 0 !important',
      background    : '#e1e1e1',
      padding       : `0 ${pxToRem(24)}`,
      paddingBottom : pxToRem(60),
      borderRadius  : borderRadius.xl,
      boxShadow     : getBoxShadows(theme as CustomTheme).lg,
      overflowY     : 'auto',
      transform     : editMode ? 'translateX(0)' : `translateX(${pxToRem(450)})`,

      ...(editMode ? drawerOpenStyles() : drawerCloseStyles()),
    }
  };
});
