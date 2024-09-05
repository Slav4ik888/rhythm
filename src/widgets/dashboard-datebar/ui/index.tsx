import { FC, memo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { SettingDatePeriod } from 'features/dashboard';
import { DashboardRefresh } from './dashboard-refresh';



interface Props {
}


export const DashboardDatebar: FC<Props> = memo(({  }) => {


  return (
    <MDBox display="flex" alignItems='center'>
      <SettingDatePeriod /> 
      <DashboardRefresh />
    </MDBox>
  )
});
