import { FC, memo } from 'react';
import { DashboardRefreshButton } from 'features/dashboard-data';
import { MDBox } from 'shared/ui/mui-design-components';
import { DashboardLastUpdatedText } from './last-updated-text';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

export const DashboardRefresh: FC<Props> = memo(({ sx }) => (
  <MDBox ml={1} display='flex' alignItems='center'>
    <DashboardRefreshButton sx={sx} />
    <DashboardLastUpdatedText />
  </MDBox>
));
