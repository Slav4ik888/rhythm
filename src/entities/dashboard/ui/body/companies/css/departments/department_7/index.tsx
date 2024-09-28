import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer7_0_3 } from './7-0-3';
import { DashboardReportContainer7_0_4 } from './7-0-4';



export const DashboardGroupDepartment7 = memo(() => {
  console.log('DashboardBlock ');
  

  // TODO: Настройку выбора до скольки знаков после запятой округлить значения
  

  return (
    <DashboardBoxContainer
      title      = 'Управление'
      titleColor = 'department_7_title'
      bgColor    = 'department_7'
    >
      <DashboardReportContainer7_0_3 />
      <DashboardReportContainer7_0_4 />
    </DashboardBoxContainer>
  );
});
