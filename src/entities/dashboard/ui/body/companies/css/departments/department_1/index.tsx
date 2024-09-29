import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer1_0_1 } from './1-0-1';
import { DashboardReportContainer1_0_2 } from './1-0-2';



export const DashboardGroupDepartment1 = memo(() => {
  

  return (
    <DashboardBoxContainer
      title      = 'Персонал'
      titleColor = 'department_1_title'
      bgColor    = 'department_1'
    >
      <DashboardReportContainer1_0_1 />
      <DashboardReportContainer1_0_2 />
    </DashboardBoxContainer>
  );
});
