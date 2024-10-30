import { FC, memo } from "react";
import { useLocation } from "react-router-dom";
import { MDBox } from "shared/ui/mui-design-components";
import { sxNavbarRow } from "./styles";
import { DashboardDatebar } from 'widgets/dashboard/dashboard-datebar';
import { MiniSidebarToggleBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';
import { isDashboardPage } from 'shared/lib/is-dashboard-page';



interface Props {
  light?    : boolean
  isMini?   : boolean
}


export const NavbarControlBox: FC<Props> = memo(({ light = false, isMini = false }) => {
  const location = useLocation();


  return (
    <MDBox
      color = "inherit"
      mb    = {{ xs: 1, md: 0 }}
      sx    = {(theme: CustomTheme) => sxNavbarRow(theme, isMini)}
    >
      <MiniSidebarToggleBtn light={light} />

      {/* <Breadcrumbs
        title={route[route.length - 1]}
        route={route}
        light={light}
      /> */}

      {
        isDashboardPage(location) && <DashboardDatebar />
      }
    </MDBox>
  );
})
