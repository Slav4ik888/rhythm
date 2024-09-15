import { memo } from 'react';
import { DashboardBlockContainer } from 'entities/blocks';
import { DashboardReportContainer1_1 } from './1-1';



export const DashboardGroupDepartment1 = memo(() => {
  

  // TODO: Настройку выбора до скольки знаков после запятой округлить значения
  

  return (
    <DashboardBlockContainer bgColor='department_1'my={5} p={3} pt={6} pr={0}>
      <DashboardReportContainer1_1 />
    </DashboardBlockContainer>
  );
});
