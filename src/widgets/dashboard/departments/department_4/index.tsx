import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer4_1 } from './4-1';



export const DashboardGroupDepartment4 = memo(() => {
  


  return (
    <DashboardBlockContainer
      title      = 'Производство'
      titleColor = 'department_4_title'
      bgColor    = 'department_4'
    >
      <DashboardReportContainer4_1 />
    </DashboardBlockContainer>
  );
});
