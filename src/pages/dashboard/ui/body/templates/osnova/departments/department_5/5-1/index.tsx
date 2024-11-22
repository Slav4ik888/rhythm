import { memo, useMemo } from 'react';
import { ChartConfigDatasets } from 'entities/charts';
import { ReportsLineChart2 } from 'shared/ui/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { ReportsLineChartConfig, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(132 132 132)",
    backgroundColor      : "rgb(132 132 132 / 30%)",
    borderColor          : "rgb(132 132 132)",
  }

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer5_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData = useMemo(() => activeEntities["5-1"], [activeEntities]);
  const dates = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    inverted: true,

    resultChanges: {
      growthResult: {
        fractionDigits: 1,
      },
    }
  };
  
  const datasetConfig = getDatasetConfig(dates);

  const chartData = {
    labels: dates,
    datasets: {
      ...datasetConfig,
      // label : "Ценность сотрудников",
      data: itemData.data as number[]
    }
  };


  return (
    <DashboardReportContainer>
      <ReportsLineChart2
        bgColor     = "grey-300" // "department_1"
        item        = {itemData}
        description = {<>(<strong>+15%</strong>) increase in today sales.</>}
        date        = "updated 4 min ago"
        chart       = {chartData}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
