import { memo, useMemo } from 'react';
import { checkInvertData, useDashboard, ReportsLineChartConfig, DashboardReportContainer, ReportsLineChart, DashboardStatisticItem } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius, ChartConfig } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';



/** Стоимость Чебурашки */
export const DashboardReportContainer7_0_3 = memo(() => {
  const { activeEntities, activeDates } = useDashboard();

  const itemData  = useMemo(() => activeEntities['7-0-3'] as DashboardStatisticItem<number>, [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities['7-0-3-C']?.data), [activeEntities]);
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
    datasets: [
      {
        data                 : checkInvertData(reportConfig, itemData),
        pointBackgroundColor : 'rgb(80 141 222 / 100%)',
        backgroundColor      : 'rgb(80 141 222 / 30%)',
        borderColor          : 'rgb(80 141 222 / 100%)',
        pointRadius          : fixPointRadius(dates),
      }
    ]
  };


  return (
    <DashboardReportContainer
      title = {itemData.title}
      kod   = {itemData.kod}
    >
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        condition   = {condition} // DashboardConditionType
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
