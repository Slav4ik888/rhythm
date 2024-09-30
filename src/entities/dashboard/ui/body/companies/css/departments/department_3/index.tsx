import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer3_7_1 } from './3-7-1';



export const DashboardGroupDepartment3 = memo(() => {
  


  return (
    <DashboardBoxContainer
      title      = 'Финансы'
      titleColor = 'department_3_title'
      bgColor    = 'department_3'
    >
      <DashboardReportContainer3_7_1 />
    </DashboardBoxContainer>
  );
});
