import { memo, useMemo } from 'react';
import { ChartConfigDataSets } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { invertData, ReportsLineChart, ReportsLineChartConfig, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';
import { pxToRem } from 'app/providers/theme';
import { ReportsDoughnutPersonal } from 'entities/dashboard/ui/reports/reports-doughnut-personal';
import { getLastItem } from 'shared/helpers/arrays';



/** Доп поля в конфиг данных для графика */
// const getDatasetConfig = (dates: any[]): ChartConfigDataSets => {

//   const config: ChartConfigDataSets = {
//     pointBackgroundColor : 'rgb(209 148 58)',
//     backgroundColor      : 'rgb(209 148 58 / 30%)',
//     borderColor          : 'rgb(209 148 58)',
//   }

//   fixPointRadius(config, dates);    

//   return config;
// }


/** Общее кол-во сотрудников */
export const DashboardReportContainer_1_0_2_Details = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  console.log('activeEntities: ', activeEntities);

  const itemData_1_1_2  = useMemo(() => getLastItem(activeEntities['1-1-2']?.data) as number, [activeEntities]);
  console.log('itemData_1_1_2: ', itemData_1_1_2);
  const itemData_1_1_3  = useMemo(() => getLastItem(activeEntities['1-1-3']?.data) as number, [activeEntities]);
  console.log('itemData_1_1_3: ', itemData_1_1_3);
  const itemData_1_1_4  = useMemo(() => getLastItem(activeEntities['1-1-4']?.data) as number, [activeEntities]);
  console.log('itemData_1_1_4: ', itemData_1_1_4);


  if (! itemData_1_1_2 || ! itemData_1_1_3 || ! itemData_1_1_4) return null;


  // const datasetConfig = getDatasetConfig(dates);

  const chartData = {
    labels: [''],
    datasets: {
      // ...datasetConfig,
      data: [itemData_1_1_2, itemData_1_1_3, itemData_1_1_4]
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
