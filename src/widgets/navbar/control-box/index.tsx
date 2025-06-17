import { FC, memo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { sxNavbarRow } from '../styles';
import { DashboardDatebar } from 'widgets/dashboard-data';
import { MiniSidebarToggleBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';



interface Props {
  isMini: boolean
}


/** For Dashboard page */
export const NavbarControlBox: FC<Props> = memo(({ isMini = false }) => (
  <MDBox
    color = 'inherit'
    mb    = {{ xs: 1, md: 0 }}
    sx    = {(theme: CustomTheme) => sxNavbarRow(theme, isMini)}
  >
    <MiniSidebarToggleBtn />
    <DashboardDatebar />
  </MDBox>
))
