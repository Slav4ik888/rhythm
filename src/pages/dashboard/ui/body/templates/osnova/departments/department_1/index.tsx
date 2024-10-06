import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer1_1 } from './1-1';



export const DashboardGroupDepartment1 = memo(() => {
  

  return (
    <DashboardBoxContainer
      title      = 'Персонал'
      titleColor = 'department_1_title'
      bgColor    = 'department_1'
    >
      <DashboardReportContainer1_1 />
    </DashboardBoxContainer>
  );
});
