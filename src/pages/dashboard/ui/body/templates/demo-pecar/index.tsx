import { memo } from 'react';
import { DashboardBodyWrapper } from '../../wrapper';
import { DashboardGroupDepartment1 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_1';



export const DashboardBody_demo_pecar = memo(() => {
  console.log('Pecar DashboardBody ');

  return (
    <DashboardBodyWrapper>
      <DashboardGroupDepartment1 />
    </DashboardBodyWrapper>
  );
});
