import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { checkInvertData, DashboardReportContainer, DashboardStatisticItem, ReportsLineChart, ReportsLineChartConfig, useDashboard } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Кол-во исходящих по известности */
export const DashboardReportContainer6_1 = memo(() => {
  const { activeEntities, activeDates } = useDashboard();

  const itemData = useMemo(() => activeEntities['6-1'] as DashboardStatisticItem<number>, [activeEntities]);
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
      pointBackgroundColor : 'rgb(194 201 35)',
      backgroundColor      : 'rgb(194 201 35 / 30%)',
      borderColor          : 'rgb(194 201 35)',
      pointRadius          : fixPointRadius(dates),
    }]
  };


  return (
    <DashboardReportContainer title={itemData.title}>
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
