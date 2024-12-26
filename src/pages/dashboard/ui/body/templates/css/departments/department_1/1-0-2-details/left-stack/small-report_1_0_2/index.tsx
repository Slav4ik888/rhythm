import { memo, useMemo } from 'react';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, SxSmallContainer,
  checkInvertData, useDashboardData, createConfig
} from 'entities/dashboard-data';
import { orange } from '@mui/material/colors';
import { formatDate, SUB } from 'shared/helpers/dates';
import { pxToRem } from 'app/providers/theme';



const useSmallStyles = (): SxSmallContainer => {
  const baseRootHeight   = 102; // px
  const baseHeaderHeight = 24; // px

  return {
    root: {
      width: '100%',
      height: pxToRem(baseRootHeight),
    },
    header: {
      background: orange[200],
      height: pxToRem(baseHeaderHeight),
    },
    content: {
      background : orange[50],
      height     : pxToRem(baseRootHeight - baseHeaderHeight),
      px         : 2,
      py         : 0.5,
    },
  }
};


export const SmallReport_1_0_2 = memo(() => {
  const sx = useSmallStyles();
  const { activeEntities, activeDates } = useDashboardData();

  const itemData  = useMemo(() => activeEntities['1-0-2'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);

  
  const reportConfig: ReportsResultChangesConfig = {
    // inverted : true, // При отсутствии изменений в результатах красить чёрным цветом
    unchangedBlack: true, // При отсутствии изменений в результатах красить чёрным цветом

    resultChanges: {
      // Список значений: последний результат и предыдущие 
      comparisonIndicators : {
        valuesCount    : 2,  // Сколько значений показывать
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
      pointBackgroundColor : 'rgb(209 148 58)',
      backgroundColor      : 'rgb(209 148 58 / 70%)',
      borderWidth          : 0,
      pointRadius          : 1, // fixPointRadius(dates)
    }],
    options: {
      scales: {
        y: {
          max: 40,
          min: 30,
        }
      }
    }
  });


  return (
    <ReportContainer_Small
      chartType     = 'bar'
      title         = 'Всего сотрудников'
      // condition     = {condition}
      // statisticType = {statisticType}
      // companyType   = {companyType}
      // productType   = {productType}
      itemData      = {itemData}
      reportConfig  = {reportConfig}
      chartData     = {chartData}
      sx            = {sx}
    />
  );
});
