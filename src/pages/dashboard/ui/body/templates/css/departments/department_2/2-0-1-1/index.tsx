import { memo, useMemo } from 'react';
import { ChartConfigDataSets } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveDates, selectActiveEntities, ReportsLineChartConfig, invertData, ReportsLineChart } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDataSets => {

  const config: ChartConfigDataSets = {
    pointBackgroundColor : "rgb(141 97 183)",
    backgroundColor      : "rgb(141 97 183 / 30%)",
    borderColor          : "rgb(141 97 183)",
  }

  fixPointRadius(config, dates);

  return config;
}


/** Да-Теле - Сумма поступлений */
export const DashboardReportContainer2_0_1_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["2-0-1-1"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["2-0-1-1-C"]?.data), [activeEntities]);
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
      // scales: {
      //   y: {
      //     suggestedMax: 40 // Добавление  макс значения оси Y
      //   }
      // }
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
