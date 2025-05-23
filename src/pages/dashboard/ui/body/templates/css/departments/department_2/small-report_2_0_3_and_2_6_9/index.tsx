import { memo, useMemo } from 'react';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, checkInvertData,
  useDashboardData, createConfig, SxSmallContainer
} from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { useSmallStyles } from '../small-styles';
import { pxToRem } from 'shared/styles';



export const useStyles = (): SxSmallContainer => {
  const sx = useSmallStyles();
  const baseRootHeight   = 224; // px
  const baseHeaderHeight = 24; // px

  sx.root.height = pxToRem(baseRootHeight);
  sx.content.height = pxToRem(baseRootHeight - baseHeaderHeight);

  return sx
};


/** Кол-во проданных основных продуктов (Мес) */
export const SmallReport_2_0_3_and_2_6_9 = memo(() => {
  const sx = useStyles();
  const { activeEntities, activeDates } = useDashboardData();

  const itemData_2_0_3 = useMemo(() => activeEntities['2-0-3'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates_2_0_3    = useMemo(() => activeDates[itemData_2_0_3?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData_2_0_3]);

  const itemData_2_6_9 = useMemo(() => activeEntities['2-6-9'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates_2_6_9    = useMemo(() => activeDates[itemData_2_6_9?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData_2_6_9]);

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
      data                 : checkInvertData(reportConfig, itemData_2_0_3?.data),
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
      data                 : checkInvertData(reportConfig, itemData_2_6_9?.data),
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
      periodType = {itemData_2_0_3?.periodType}
      // condition     = {condition}
      sx            = {sx}
    />
  );
});
