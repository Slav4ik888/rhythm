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

import { FC, ReactNode } from 'react';
import { useUIConfiguratorController, CustomTheme } from 'app/providers/theme';
import MDBox from '../../mui-design-components/md-box';
import { pxToRem } from 'shared/styles';
import { usePages } from 'shared/lib/hooks';



interface Props {
  body?    : boolean // для него добавляем minHeight
  children : ReactNode
}

/**
 * Регулирует, на сколько нужно отодвинуть элемент от левого края (Sidebar)
 */
export const SidebarRegulatorWrapper: FC<Props> = ({ children, body }) => {
  const [configuratorState] = useUIConfiguratorController();
  const { isSidebar, sidebarMini, sidebarWidth } = configuratorState;
  const { isDashboardPage } = usePages();

  const isBody   = body;
  const isNavbar = ! isBody;
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   setLayout(dispatch, 'dashboard');
  // }, [pathname]);


  return (
    <MDBox
      sx={({ breakpoints, transitions }: CustomTheme) => ({
        position   : 'relative',
        overflowX  : 'scroll',
        minHeight  : isBody
          ? 'calc(100vh - 200px)'
          : 0,

        marginLeft: ! isDashboardPage
          ? 0
          : isSidebar
            ? sidebarMini
              ? pxToRem(104)
              : pxToRem(sidebarWidth + 8)
            : 0,

        px: 3,
        pt: isNavbar
          ? 'calc(1rem + 2px)'
          : '',

        [breakpoints.down('sm')]: {
          marginLeft: ! isDashboardPage
            ? 0
            : isSidebar
              ? sidebarMini ? 0 : pxToRem(sidebarWidth)
              : 0,
        },
        [breakpoints.up('xl')]: {
          transition: transitions.create(['margin-left', 'margin-right'], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </MDBox>
  );
}
