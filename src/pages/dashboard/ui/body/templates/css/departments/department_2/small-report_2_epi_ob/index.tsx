import { memo, useMemo } from 'react';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, checkInvertData, useDashboardData, createConfig
} from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { useSmallStyles } from '../small-styles';
import { getConditionType } from 'entities/condition-type';



/** Обороты (Епифанова) */
export const SmallReport_2_epi_ob = memo(() => {
  const sx = useSmallStyles();
  const { activeEntities, activeDates } = useDashboardData();

  const itemData  = useMemo(() => activeEntities['2_epi_ob'] as DashboardStatisticItem<number>, [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities['2_epi_ob-C']?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);

  
  const reportConfig: ReportsResultChangesConfig = {
    // inverted : true, // При отсутствии изменений в результатах красить чёрным цветом
    // unchangedBlack: true, // При отсутствии изменений в результатах красить чёрным цветом

    // header: {
    //   minHeight: string // Минимальная высота "шапки", напр. если заголовок на 2 строки, то нужно выравнить у всех в ряду
    // }

    resultChanges: {
      // Список значений: последний результат и предыдущие 
      comparisonIndicators : {
        valuesCount    : 1,    // Сколько значений показывать
        reduce         : true, // Убрать разряды: 12 500 700 => 12.5 млн
        fractionDigits : 1,    // Количество знаков после запятой
        addZero        : true  // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
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
          reduce         : true,  // Убрать разряды: 12 500 700 => 12.5 млн
          fractionDigits : 1,     // Количество знаков после запятой
          addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
        },
      },
    },
  };


  const chartData = createConfig({
    labels: dates,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData?.data),
      pointBackgroundColor : 'rgb(141 97 183)',
      backgroundColor      : 'rgb(141 97 183 / 30%)',
      borderColor          : 'rgb(141 97 183)',
      borderWidth          : 1,
      pointRadius          : 2,
    }],
    options: {
      scales: {
        y: {
          display : false,
          max     : 28500000,
          min     : 8500000,
        },
      }
    }
  });


  return (
    <ReportContainer_Small
      chartType     = 'line'
      title         = 'Обороты (Епифанова)'
      // companyType   = {itemData?.companyType}
      // productType   = {productType}
      periodType    = {itemData?.periodType}
      condition     = {condition}
      itemData      = {itemData}
      reportConfig  = {reportConfig}
      chartData     = {chartData}
      sx            = {sx}
    />
  );
});
