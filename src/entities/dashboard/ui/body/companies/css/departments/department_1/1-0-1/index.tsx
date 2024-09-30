import { memo, useMemo } from 'react';
import { ChartConfigDataSets } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { invertData, ReportsLineChart, ReportsLineChartConfig, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDataSets => {

  const config: ChartConfigDataSets = {
    pointBackgroundColor : "rgb(209 148 58)",
    backgroundColor      : "rgb(209 148 58 / 30%)",
    borderColor          : "rgb(209 148 58)",
  }

  fixPointRadius(config, dates);    

  return config;
}


/** Кол-во растущих статистик (с 1 по 6 отд-е) */
export const DashboardReportContainer1_0_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["1-0-1"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["1-0-1-C"]?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    chips: {
      statisticType : true,
      companyType   : true,
      conditionType : true,
    },
    resultChanges: {
      growthResult: {
        fractionDigits : 1,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
      },
    },
  };


  const datasetConfig = getDatasetConfig(dates);

  const chartData = {
    labels: dates,
    datasets: {
      ...datasetConfig,
      data: reportConfig.inverted ? invertData(itemData.data as number[]) : itemData.data as number[]
    },
    config: {
      scales: {
        y: {
          suggestedMax: 40 // Добавление  макс значения оси Y
        }
      }
    }
  };


  return (
    <DashboardReportContainer>
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        condition   = {condition}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
