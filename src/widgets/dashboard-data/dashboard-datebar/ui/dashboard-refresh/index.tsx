import { FC, memo } from 'react';
import { DashboardRefreshButton } from 'features/dashboard-data';
import { MDBox } from 'shared/ui/mui-design-components';
import { DashboardLastUpdatedText } from './last-updated-text';
import { SxNavbarIcon } from 'widgets/navbar';
import { useDashboardData } from 'entities/dashboard-data';
import { PageLoader } from 'widgets/page-loader';



interface Props {
  sx: SxNavbarIcon
}

export const DashboardRefresh: FC<Props> = memo(({ sx }) => {
  const { loading } = useDashboardData();

  return (
    <>
      <MDBox ml={1} display='flex' alignItems='center'>
        <DashboardRefreshButton sx={sx} />
        <DashboardLastUpdatedText />
      </MDBox>

      <PageLoader loading={loading} />
    </>
  )
});
