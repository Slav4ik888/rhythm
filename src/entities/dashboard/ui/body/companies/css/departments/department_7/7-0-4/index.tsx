import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DashboardReportContainer } from 'entities/blocks';
import { invertData, selectActiveDates, selectActiveEntities, ReportsLineChart, ReportsLineChartConfig } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius, ChartConfigDataSets } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDataSets => {

  const config: ChartConfigDataSets = {
    pointBackgroundColor : "rgb(80 141 222 / 100%)",
    backgroundColor      : "rgb(80 141 222 / 30%)",
    borderColor          : "rgb(80 141 222 / 100%)"
  };

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer7_0_4 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["7-0-4"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["7-0-4-C"]?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    inverted: false,

    chips: {
      statisticType : true,
      companyType   : true,
      conditionType : true,
    },
    resultChanges: {
      comparisonIndicators: {
        reduce         : true,
        fractionDigits : 2,
        addZero        : true,
      },
      growthResult: {
        fractionDigits : 1,
        addZero        : true,
      },
    }
  };

  const datasetConfig = getDatasetConfig(dates);

  const chartData = {
    labels: dates,
    datasets: {
      ...datasetConfig,
      // label : "Счёт организации (все средства в наличии - все текущие обязательства)",
      data: reportConfig.inverted ? invertData(itemData.data as number[]) : itemData.data as number[]
    }
  };


  return (
    <DashboardReportContainer>
      <ReportsLineChart
        item      = {itemData}
        chart     = {chartData}
        condition = {condition}
        config    = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
