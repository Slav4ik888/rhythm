import { memo, useMemo } from 'react';
import { ChartConfig, ChartConfigDatasets } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { invertData, ReportsLineChart, ReportsLineChartConfig, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(80 141 222 / 100%)",
    backgroundColor      : "rgb(80 141 222 / 30%)",
    borderColor          : "rgb(80 141 222 / 100%)",
  };

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer7_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["7-1"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["7-1-C"]?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    inverted: true,

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
      // label : "Сумма кредиторской задолженности",
      data: reportConfig.inverted ? invertData(itemData.data as number[]) : itemData.data as number[]
    }]
  };

  

  return (
    <DashboardReportContainer>
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        condition   = {condition} // DashboardConditionType
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
