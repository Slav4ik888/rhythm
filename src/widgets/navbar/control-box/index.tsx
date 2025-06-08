import { FC, memo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { sxNavbarRow } from '../styles';
import { DashboardDatebar } from 'widgets/dashboard-data';
import { MiniSidebarToggleBtn } from 'features/ui';
import { CustomTheme } from 'app/providers/theme';
import { SxNavbarIcon } from '..';



interface Props {
  isMini : boolean
  sx     : SxNavbarIcon
}


/** For Dashboard page */
export const NavbarControlBox: FC<Props> = memo(({ isMini = false, sx }) => (
    <MDBox
      color = 'inherit'
      mb    = {{ xs: 1, md: 0 }}
      sx    = {(theme: CustomTheme) => sxNavbarRow(theme, isMini)}
    >
      <MiniSidebarToggleBtn sx={sx} />
      <DashboardDatebar sx={sx} />
    </MDBox>
  ))
