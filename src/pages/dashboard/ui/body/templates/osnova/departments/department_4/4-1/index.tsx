import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { DashboardReportContainer, ReportsLineChartConfig, ReportsLineChart, useDashboard, checkInvertData, DashboardStatisticItem } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Общая стоимость предоставленных услуг */
export const DashboardReportContainer4_1 = memo(() => {
  const { activeEntities, activeDates } = useDashboard();

  const itemData = useMemo(() => activeEntities['4-1'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


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
      data                 : checkInvertData(reportConfig, itemData),
      pointBackgroundColor : 'rgb(63 122 53)',
      backgroundColor      : 'rgb(63 122 53 / 30%)',
      borderColor          : 'rgb(63 122 53)',
      pointRadius          : fixPointRadius(dates),
    }]
  };


  return (
    <DashboardReportContainer title={itemData.title}>
      <ReportsLineChart
        bgColor     = 'grey-300' // 'department_1'
        item        = {itemData}
        chart       = {chartData}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
