import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { DashboardReportContainer, useDashboard, ReportsLineChartConfig, ReportsLineChart, checkInvertData, DashboardStatisticItem } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Ценность сотрудников */
export const DashboardReportContainer5_0_1 = memo(() => {
  const { activeEntities, activeDates } = useDashboard();

  const itemData  = useMemo(() => activeEntities['5-0-1'] as DashboardStatisticItem<number>, [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities['5-0-1-C']?.data), [activeEntities]);
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


  const chartData: ChartConfig = {
    labels: dates,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData),
      pointBackgroundColor : 'rgb(132 132 132)',
      backgroundColor      : 'rgb(132 132 132 / 30%)',
      borderColor          : 'rgb(132 132 132)',
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
    <DashboardReportContainer title={itemData.title}>
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        condition   = {condition}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
