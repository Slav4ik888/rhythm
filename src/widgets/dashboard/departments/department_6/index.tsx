import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer6_1 } from './6-1';



export const DashboardGroupDepartment6 = memo(() => {
  


  return (
    <DashboardBlockContainer
      title      = 'Расширение'
      titleColor = 'department_6_title'
      bgColor    = 'department_6'
      my={5} p={3} pr={0}
    >
      <DashboardReportContainer6_1 />
    </DashboardBlockContainer>
  );
});
