import { memo, useMemo } from 'react';
import { ChartConfig, ChartConfigDatasets } from 'entities/charts';
import { useSelector } from 'react-redux';
import { DashboardReportContainer, ReportsLineChart, ReportsLineChartConfig, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(194 201 35)",
    backgroundColor      : "rgb(194 201 35 / 30%)",
    borderColor          : "rgb(194 201 35)",
  }

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer6_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData = useMemo(() => activeEntities["6-1"], [activeEntities]);
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
      // label : "Ценность сотрудников",
      data: itemData.data as number[]
    }]
  };


  return (
    <DashboardReportContainer title={itemData.title}>
      <ReportsLineChart
        bgColor     = "grey-300" // "department_1"
        item        = {itemData}
        chart       = {chartData}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
