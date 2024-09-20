import { memo } from 'react';
import { DashboardBodyWrapper } from '../../body-wrapper';
import { DashboardGroupDepartment1 } from 'widgets/dashboard/departments/department_1';



export const DashboardBody_demo_pecar = memo(() => {
  console.log('Pecar DashboardBody ');

  return (
    <DashboardBodyWrapper>
      <DashboardGroupDepartment1 />
    </DashboardBodyWrapper>
  );
});
