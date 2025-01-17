import { memo, useMemo } from 'react';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, checkInvertData, useDashboardData, createConfig
} from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { useSmallStyles } from '../small-styles';



/** Кол-во активных станций (ЮЛ) (Нед) */
export const SmallReport_2_6_4_2 = memo(() => {
  const sx = useSmallStyles();
  const { activeEntities, activeDates } = useDashboardData();

  const itemData  = useMemo(() => activeEntities['2-6-4-2'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);

  
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


  const chartData = createConfig({
    labels: dates,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData),
      pointBackgroundColor : 'rgb(141 97 183)',
      backgroundColor      : 'rgb(141 97 183 / 70%)',
      borderWidth          : 0,
    }],
    options: {
      scales: {
        y: {
          max: 110,
          min: 80,
        }
      }
    }
  });


  return (
    <ReportContainer_Small
      chartType     = 'bar'
      title         = 'Кол-во активных станций (ЮЛ)'
      // companyType   = {itemData?.companyType}
      // productType   = {productType}
      periodType    = {itemData?.periodType}
      // condition     = {condition}
      itemData      = {itemData}
      reportConfig  = {reportConfig}
      chartData     = {chartData}
      sx            = {sx}
    />
  );
});
