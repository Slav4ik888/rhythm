import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { DashboardReportContainer, useDashboardData, ReportsLineChartConfig, ReportsLineChart, checkInvertData, DashboardStatisticItem } from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Стоимость оказанных услуг */
export const DashboardReportContainer4_0_2 = memo(() => {
  const { activeEntities, activeDates } = useDashboardData();

  const itemData  = useMemo(() => activeEntities['4-0-2'] as DashboardStatisticItem<number>, [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities['4-0-2-C']?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;
  
  const reportConfig: ReportsLineChartConfig = {
    chips: {
      periodType    : true,
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
      pointBackgroundColor : 'rgb(63 122 53)',
      backgroundColor      : 'rgb(63 122 53 / 30%)',
      borderColor          : 'rgb(63 122 53)',
      pointRadius          : fixPointRadius(dates),
    }],
    options: {
      // scales: {
      //   y: {
      //     suggestedMax: 40 // Добавление  макс значения оси Y
      //   }
      // }
    }
  };
    


  return (
    <DashboardReportContainer
      title = {itemData.title}
      kod   = {itemData.kod}
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
