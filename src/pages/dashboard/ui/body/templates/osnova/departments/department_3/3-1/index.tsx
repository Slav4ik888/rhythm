import { memo, useMemo } from 'react';
import { ChartConfigDatasets } from 'entities/charts';
import { ReportsLineChart2 } from 'shared/ui/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveDates, selectActiveEntities, ReportsLineChartConfig } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(235 129 129)",
    backgroundColor      : "rgb(235 129 129 / 30%)",
    borderColor          : "rgb(235 129 129)",
  };

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer3_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData = useMemo(() => activeEntities["3-1"], [activeEntities]);
  const dates = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    inverted: false,

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
      // label : "Общая сумма поступлений",
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
