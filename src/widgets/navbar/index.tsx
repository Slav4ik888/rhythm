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

import { useState, useEffect, FC, memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { sxNavbar, sxNavbarContainer } from './styles';
import { CustomTheme, isSystemDarkMode, useTheme, useUIConfiguratorController } from 'app/providers/theme';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { NavbarControlBox } from './control-box';
import { NavbarSetupBox } from './setup-box';
import { useLocation } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';
import { isDashboardPage } from 'pages/dashboard';
import { NavbarLinksBox } from './links-box';



export interface SxNavbarIcon {
  button: any
  icon: any
}

const useStyles = (
  theme             : CustomTheme,
  navbarTransparent : boolean,
  light             : boolean | undefined
) => ({
  button : sxNavbarIconButton(theme),
  icon   : sxNavbarIconsStyle(theme, navbarTransparent, light)
});


interface Props {
  absolute? : boolean
  light?    : boolean
  isMini?   : boolean
}


export const Navbar: FC<Props> = memo(({ absolute = false, light = false, isMini = false }) => {
  const [navbarType, setNavbarType] = useState<'sticky' | 'static'>();
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { navbarTransparent, navbarFixed, mode } = configuratorState;
  const darkMode = mode === 'dark' || (mode === 'system' && isSystemDarkMode());
  const sx = useStyles(useTheme(), navbarTransparent, light);
  const location = useLocation();
  const isDashboard = isDashboardPage(location);

  useEffect(() => {
    // Setting the navbar type
    if (navbarFixed) {
      setNavbarType('sticky');
    } else {
      setNavbarType('static');
    }

  //   // A function that sets the transparent state of the navbar.
  //   function handlenavbarTransparent() {
  //     setnavbarTransparent(dispatch, (navbarFixed && window.scrollY === 0) || !navbarFixed);
  //   }

  //   /**
  //    The event listener that's calling the handlenavbarTransparent function when
  //    scrolling the window.
  //   */
  //   window.addEventListener('scroll', handlenavbarTransparent);

  //   // Call the handlenavbarTransparent function to set the state with the initial value.
  //   handlenavbarTransparent();

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener('scroll', handlenavbarTransparent);
  }, [dispatch, navbarFixed]);


  if (location.pathname === RoutePath.SIGNUP || location.pathname === RoutePath.LOGIN) return null


  return (
    <SidebarRegulatorWrapper>
      <AppBar
        position = {absolute ? 'absolute' : navbarType}
        color    = 'inherit'
        sx       = {(theme) => sxNavbar(theme as CustomTheme, { navbarTransparent, absolute, light, darkMode })}
      >
        <Toolbar sx={(theme) => sxNavbarContainer(theme as CustomTheme)}>
          {
            isDashboard
              ? <NavbarControlBox isMini={isMini} sx={sx} />
              : <NavbarLinksBox isMini={isMini} />
          }
          <NavbarSetupBox   sx={sx} isMini={isMini} />
        </Toolbar>
      </AppBar>
    </SidebarRegulatorWrapper>
  );
})
