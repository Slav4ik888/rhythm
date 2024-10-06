import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer5_1 } from './5-1';



export const DashboardGroupDepartment5 = memo(() => {
  


  return (
    <DashboardBoxContainer
      title      = 'Качество'
      titleColor = 'department_5_title'
      bgColor    = 'department_5'
    >
      <DashboardReportContainer5_1 />
    </DashboardBoxContainer>
  );
});
