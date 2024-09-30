import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer6_0_1 } from './6-0-1';
import { DashboardReportContainer6_17_3 } from './6-17-3';
import { DashboardReportContainer6_17_6 } from './6-17-6';
import { DashboardReportContainer6_17_2 } from './6-17-2';
import { DashboardReportContainer6_17_7 } from './6-17-7';



export const DashboardGroupDepartment6 = memo(() => {

  return (
    <DashboardBoxContainer
      title      = 'Расширение'
      titleColor = 'department_6_title'
      bgColor    = 'department_6'
    >
      <DashboardReportContainer6_0_1 />
      <DashboardReportContainer6_17_3 />
      <DashboardReportContainer6_17_6 />

      <DashboardReportContainer6_17_2 />
      <DashboardReportContainer6_17_7 />
    </DashboardBoxContainer>
  );
});
