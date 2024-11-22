import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveEntities } from 'entities/dashboard';
import { ReportsDoughnutPersonal } from 'entities/dashboard/ui/reports/reports-doughnut-personal';
import { getLastItem } from 'shared/helpers/arrays';



/** Общее кол-во сотрудников */
export const DashboardReportContainer_1_0_2_Details = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);

  const itemData_1_1_2  = useMemo(() => getLastItem(activeEntities['1-1-2']?.data) as number, [activeEntities]);
  const itemData_1_1_3  = useMemo(() => getLastItem(activeEntities['1-1-3']?.data) as number, [activeEntities]);
  const itemData_1_1_4  = useMemo(() => getLastItem(activeEntities['1-1-4']?.data) as number, [activeEntities]);


  if (! itemData_1_1_2 || ! itemData_1_1_3 || ! itemData_1_1_4) return null;

  const chartData: ChartConfig = {
    labels: ['В продажах', 'На производстве', 'Прочие'],
    datasets: {
      data            : [itemData_1_1_2, itemData_1_1_3, itemData_1_1_4],
      backgroundColor : ['rgb(141 97 183)', 'rgb(63 122 53)', 'rgb(209 148 58)'],
    },
  };


  return (
    <DashboardReportContainer>
      <ReportsDoughnutPersonal
        chart = {chartData}
      />
    </DashboardReportContainer>
  );
});
