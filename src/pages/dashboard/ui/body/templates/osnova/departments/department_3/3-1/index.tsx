import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { DashboardReportContainer, ReportsLineChartConfig, ReportsLineChart, useDashboardData, checkInvertData, DashboardStatisticItem } from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Общая сумма поступлений */
export const DashboardReportContainer3_1 = memo(() => {
  const { activeEntities, activeDates } = useDashboardData();

  const itemData = useMemo(() => activeEntities['3-1'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates = useMemo(() => activeDates[itemData?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    inverted: false,

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
    }
  };


  const chartData: ChartConfig = {
    labels: dates,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData),
      pointBackgroundColor : 'rgb(235 129 129)',
      backgroundColor      : 'rgb(235 129 129 / 30%)',
      borderColor          : 'rgb(235 129 129)',
      pointRadius          : fixPointRadius(dates),
    }]
  };


  return (
    <DashboardReportContainer
      title = {itemData.title}
      kod   = {itemData.kod}
    >
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
