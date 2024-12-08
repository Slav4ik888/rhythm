import { memo, useMemo } from 'react';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, checkInvertData, useDashboard, createConfig
} from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { useSmallStyles } from '../small-styles';



/** Кол-во проданных основных продуктов (Мес) */
export const SmallReport_2_0_3_and_2_6_9 = memo(() => {
  const sx = useSmallStyles();
  const { activeEntities, activeDates } = useDashboard();

  const itemData_2_0_3 = useMemo(() => activeEntities['2-0-3'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates_2_0_3    = useMemo(() => activeDates[itemData_2_0_3?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData_2_0_3]);

  const itemData_2_6_9 = useMemo(() => activeEntities['2-6-9'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates_2_6_9    = useMemo(() => activeDates[itemData_2_6_9?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData_2_6_9]);

  const reportConfig: ReportsResultChangesConfig = {
    // inverted : true, // При отсутствии изменений в результатах красить чёрным цветом
    unchangedBlack: true, // При отсутствии изменений в результатах красить чёрным цветом

    // header: {
    //   minHeight: string // Минимальная высота "шапки", напр. если заголовок на 2 строки, то нужно выравнить у всех в ряду
    // }

    resultChanges: {
      // Список значений: последний результат и предыдущие 
      comparisonIndicators : {
        valuesCount    : 1,  // Сколько значений показывать
        fractionDigits : 0,  // Количество знаков после запятой
        addZero        : false // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
      },
      // Результат прироста/падения, % | шт, и иконка треуголькин
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
          fractionDigits : 0,     // Количество знаков после запятой
          addZero        : false, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
        },
      },
    },
  };


  const chartData_2_0_3 = createConfig({
    labels: dates_2_0_3,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData_2_0_3),
      pointBackgroundColor : 'rgb(141 97 183)',
      backgroundColor      : 'rgb(141 97 183 / 70%)',
      borderWidth          : 0,
    }],
    options: {
      scales: {
        y: {
          max: 30,
          min: 0,
        }
      }
    }
  });


  const chartData_2_6_9 = createConfig({
    labels: dates_2_6_9,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData_2_6_9),
      pointBackgroundColor : 'rgb(141 97 183)',
      backgroundColor      : 'rgb(141 97 183 / 70%)',
      borderWidth          : 0,
    }],
    options: {
      scales: {
        y: {
          max: 10,
          min: 0,
        }
      }
    }
  });


  return (
    <ReportContainer_Small
      title         = 'Кол-во проданных основных продуктов'
      itemData      = {itemData_2_0_3}
      reportConfig  = {reportConfig}
      chartData     = {chartData_2_0_3}

      itemData2      = {itemData_2_6_9}
      reportConfig2  = {reportConfig}
      chartData2     = {chartData_2_6_9}

      // companyType   = {itemData?.companyType}
      // productType   = {productType}
      statisticType = {itemData_2_0_3?.statisticType}
      // condition     = {condition}
      sx            = {sx}
    />
  );
});
