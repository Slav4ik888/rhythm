import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import { DashboardReportContainer, ReportsLineChartConfig, ReportsLineChart, useDashboard, checkInvertData, DashboardStatisticItem } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



export const DashboardReportContainer1_1 = memo(() => {
  const { activeEntities, activeDates } = useDashboard();

  const itemData  = useMemo(() => activeEntities['1-1'] as DashboardStatisticItem<number>, [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities['1-1-C']?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


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
      pointBackgroundColor : 'rgb(209 148 58)',
      backgroundColor      : 'rgb(209 148 58 / 30%)',
      borderColor          : 'rgb(209 148 58)',
      pointRadius          : fixPointRadius(dates),
    }],
    options: {
      scales: {
        y: {
          suggestedMax: 5 // Добавление  макс значения оси Y
        }
      }
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
