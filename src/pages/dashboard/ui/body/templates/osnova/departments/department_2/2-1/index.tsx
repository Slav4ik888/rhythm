import { memo, useMemo } from 'react';
import { ChartConfig, ChartConfigDatasets } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveDates, selectActiveEntities, ReportsLineChartConfig, ReportsLineChart } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(141 97 183)",
    backgroundColor      : "rgb(141 97 183 / 30%)",
    borderColor          : "rgb(141 97 183)",
  }

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer2_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData = useMemo(() => activeEntities["2-1"], [activeEntities]);
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


  const chartData: ChartConfig = {
    labels: dates,
    datasets: [{
      ...getDatasetConfig(dates),
      // label : "Сумма продаж",
      data: itemData.data as number[]
    }]
  };


  return (
    <DashboardReportContainer>
      <ReportsLineChart
        bgColor     = "grey-300" // "department_1"
        item        = {itemData}
        chart       = {chartData}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
