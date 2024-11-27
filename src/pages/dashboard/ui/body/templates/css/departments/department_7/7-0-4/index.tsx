import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DashboardReportContainer } from 'entities/blocks';
import { invertData, selectActiveDates, selectActiveEntities, ReportsLineChart, ReportsLineChartConfig } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius, ChartConfigDatasets, ChartConfig } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(80 141 222 / 100%)",
    backgroundColor      : "rgb(80 141 222 / 30%)",
    borderColor          : "rgb(80 141 222 / 100%)"
  };

  fixPointRadius(config, dates);

  return config;
}


/** Счёт организации (все средства в наличии - все текущие обязательства) */
export const DashboardReportContainer7_0_4 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["7-0-4"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["7-0-4-C"]?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    chips: {
      statisticType : true,
      companyType   : true,
      conditionType : true,
    },
    resultChanges: {
      comparisonIndicators: {
        reduce         : true, // Убрать разряды: 12 500 700 => 12.5007 млн
        fractionDigits : 2,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
      },
      growthResult: {
        fractionDigits : 1,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
      },
    }
  };

  const chartData: ChartConfig = {
    labels: dates,
    datasets: [{
      ...getDatasetConfig(dates),
      data: reportConfig.inverted ? invertData(itemData.data as number[]) : itemData.data as number[]
    }]
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
