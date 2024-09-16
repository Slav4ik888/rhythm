import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer3_1 } from './3-1';



export const DashboardGroupDepartment3 = memo(() => {
  


  return (
    <DashboardBlockContainer
      title      = 'Финансы'
      titleColor = 'department_3_title'
      bgColor    = 'department_3'
      my={5} p={3} pr={0}
    >
      <DashboardReportContainer3_1 />
    </DashboardBlockContainer>
  );
});
