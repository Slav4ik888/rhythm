import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer2_0_1 } from './2-0-1';
import { DashboardReportContainer2_0_1_1 } from './2-0-1-1';
import { DashboardReportContainer2_0_4 } from './2-0-4';
import { DashboardReportContainer2_0_4_1 } from './2-0-4-1';



export const DashboardGroupDepartment2 = memo(() => {
  


  return (
    <DashboardBoxContainer
      title      = 'Продажи и распространение'
      titleColor = 'department_2_title'
      bgColor    = 'department_2'
    >
      <DashboardReportContainer2_0_1 />
      <DashboardReportContainer2_0_1_1 />
      <DashboardReportContainer2_0_4 />
      <DashboardReportContainer2_0_4_1 />
    </DashboardBoxContainer>
  );
});
