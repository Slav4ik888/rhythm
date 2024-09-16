import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer5_1 } from './5-1';



export const DashboardGroupDepartment5 = memo(() => {
  


  return (
    <DashboardBlockContainer
      title      = 'Качество'
      titleColor = 'department_5_title'
      bgColor    = 'department_5'
      my={5} p={3} pr={0}
    >
      <DashboardReportContainer5_1 />
    </DashboardBlockContainer>
  );
});
