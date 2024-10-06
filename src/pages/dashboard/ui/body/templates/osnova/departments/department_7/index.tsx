import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer7_1 } from './7-1';
import { DashboardReportContainer7_2 } from './7-2';



export const DashboardGroupDepartment7 = memo(() => {
  console.log('DashboardBlock ');
  

  // TODO: Настройку выбора до скольки знаков после запятой округлить значения
  

  return (
    <DashboardBoxContainer
      title      = 'Управление'
      titleColor = 'department_7_title'
      bgColor    = 'department_7'
    >
      <DashboardReportContainer7_1 />
      <DashboardReportContainer7_2 />
    </DashboardBoxContainer>
  );
});
