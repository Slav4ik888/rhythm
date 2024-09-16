import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer1_1 } from './1-1';



export const DashboardGroupDepartment1 = memo(() => {
  

  return (
    <DashboardBlockContainer
      title      = 'Персонал'
      titleColor = 'department_1_title'
      bgColor    = 'department_1'
      my={5} p={3} pr={0}
    >
      <DashboardReportContainer1_1 />
    </DashboardBlockContainer>
  );
});
