import { memo, useMemo } from 'react';
import { ChartConfig, ChartConfigDatasets } from 'entities/charts';
import { useSelector } from 'react-redux';
import { DashboardReportContainer, selectActiveDates, selectActiveEntities, ReportsLineChartConfig, ReportsLineChart } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(209 148 58)",
    backgroundColor      : "rgb(209 148 58 / 30%)",
    borderColor          : "rgb(209 148 58)",
  }

  fixPointRadius(config, dates);    

  return config;
}



export const DashboardReportContainer1_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["1-1"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["1-1-C"]?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


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
      // label : "Общее кол-во персонала",
      data: itemData.data as number[]
    }],
    options: {
      scales: {
        y: {
          suggestedMax: 5 // Добавление  макс значения оси Y
        }
      }
    }
  };


  return (
    <DashboardReportContainer title={itemData.title}>
      <ReportsLineChart
        bgColor     = "grey-300" // "department_1"
        item        = {itemData}
        chart       = {chartData}
        condition   = {condition}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
