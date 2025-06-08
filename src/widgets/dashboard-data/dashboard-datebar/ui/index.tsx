import { FC, memo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { SettingDatePeriod } from './setting-date-period';
import { DashboardRefresh } from './dashboard-refresh';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

export const DashboardDatebar: FC<Props> = memo(({ sx }) => (
  <MDBox display='flex' alignItems='center'>
    <SettingDatePeriod />
    <DashboardRefresh sx={sx} />
  </MDBox>
));
