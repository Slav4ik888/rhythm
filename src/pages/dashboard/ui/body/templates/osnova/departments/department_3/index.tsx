import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer3_1 } from './3-1';



export const DashboardGroupDepartment3 = memo(() => {
  


  return (
    <DashboardBoxContainer
      title      = 'Финансы'
      titleColor = 'department_3_title'
      bgColor    = 'department_3'
    >
      <DashboardReportContainer3_1 />
    </DashboardBoxContainer>
  );
});
