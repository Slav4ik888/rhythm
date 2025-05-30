import { memo } from 'react';
import { DashboardGroupDepartment5 } from '../departments/department_5';
import { DashboardGroupDepartment6 } from '../departments/department_6';



export const DashboardBodyMain = memo(() => {
  console.log('CSS DashboardBody Main');

  return (
    <>
      <DashboardGroupDepartment5 />
      <DashboardGroupDepartment6 />
    </>
  );
});
