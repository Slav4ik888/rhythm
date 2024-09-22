import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer2_1 } from './2-1';



export const DashboardGroupDepartment2 = memo(() => {
  


  return (
    <DashboardBlockContainer
      title      = 'Продажи и распространение'
      titleColor = 'department_2_title'
      bgColor    = 'department_2'
    >
      <DashboardReportContainer2_1 />
    </DashboardBlockContainer>
  );
});
