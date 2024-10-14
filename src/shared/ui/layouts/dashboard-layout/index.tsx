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

import { FC } from "react";
// import { useLocation } from "react-router-dom";
import { useUIConfiguratorController } from 'app/providers/theme';
import MDBox from 'shared/ui/mui-design-components/md-box';
import { CustomTheme, pxToRem } from 'app/providers/theme';



interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: FC<Props> = ({ children }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidenavMini } = configuratorState;
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   setLayout(dispatch, "dashboard");
  // }, [pathname]);

  return (
    <MDBox
      sx={({ breakpoints, transitions }: CustomTheme) => ({
        p: 3,
        position: "relative",
        overflowX: "scroll",

        [breakpoints.up("xl")]: {
          marginLeft: sidenavMini ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
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
