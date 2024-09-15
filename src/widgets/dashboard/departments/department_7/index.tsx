import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer7_1 } from './7-1';
import { DashboardReportContainer7_2 } from './7-2';



export const DashboardGroupDepartment7 = memo(() => {
  console.log('DashboardBlock ');
  

  // TODO: Настройку выбора до скольки знаков после запятой округлить значения
  

  return (
    <DashboardBlockContainer width="max-content" bgColor='department_7' my={5} p={3} pt={6} pr={0}>
      <DashboardReportContainer7_1 />
      <DashboardReportContainer7_2 />
    </DashboardBlockContainer>
  );
});
