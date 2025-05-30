import { memo } from 'react';
import { DashboardGroupDepartment4 } from '../departments/department_4';
import { DashboardGroupDepartment3 } from '../departments/department_3';
import { DashboardGroupDepartment5 } from '../departments/department_5';
import { DashboardGroupDepartment6 } from '../departments/department_6';



export const DashboardBodyMain = memo(() => {
  console.log('CSS DashboardBody Main');

  return (
    <>
      <DashboardGroupDepartment3 />
      <DashboardGroupDepartment4 />
      <DashboardGroupDepartment5 />
      <DashboardGroupDepartment6 />
    </>
  );
});
