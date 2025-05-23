import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { checkInvertData, DashboardReportContainer, DashboardStatisticItem, ReportsLineChart, ReportsLineChartConfig, useDashboardData } from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';
import { pxToRem } from 'shared/styles';



/** Кол-во растущих статистик (с 1 по 6 отд-е) */
export const DashboardReportContainer1_0_1 = memo(() => {
  const { activeEntities, activeDates } = useDashboardData();

  const itemData  = useMemo(() => activeEntities['1-0-1'] as DashboardStatisticItem<number>, [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities['1-0-1-C']?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    chips: {
      periodType    : true,
      companyType   : true,
      conditionType : true,
    },
    resultChanges: {
      growthResult: {
        // Для процентов
        persent: {
          display        : true,
          fractionDigits : 1,    // Количество знаков после запятой
          addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
        },

        // Для чисел
        value: {
          display        : true,
          reduce         : true,  // Убрать разряды: 12 500 700 => 12.5 млн
          fractionDigits : 1,     // Количество знаков после запятой
          addZero        : false, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
        },
      },
    },
  };


  const chartData: ChartConfig = {
    labels: dates,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData?.data),
      pointBackgroundColor : 'rgb(209 148 58)',
      backgroundColor      : 'rgb(209 148 58 / 30%)',
      borderColor          : 'rgb(209 148 58)',
      pointRadius          : fixPointRadius(dates),
    }],
    options: {
      scales: {
        y: {
          suggestedMax: 40 // Добавление  макс значения оси Y
        }
      }
    }
  };


  return (
    <DashboardReportContainer
      title  = {itemData.title}
      kod    = {itemData.kod}
      config = {{ header: { minHeight: pxToRem(64) } }}
    >
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        condition   = {condition}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
