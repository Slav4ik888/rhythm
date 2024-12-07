import { memo, useMemo } from 'react';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, SxSmallContainer, checkInvertData, useDashboard, createConfig
} from 'entities/dashboard';
import { deepPurple } from '@mui/material/colors';
import { formatDate, SUB } from 'shared/helpers/dates';



const useStyles = (): SxSmallContainer => ({
  root: {
    width : '100%',
    mb    : 2,
  },
  header: {
    background: deepPurple[200]
  },
  content: {
    background: deepPurple[50],
  },
  growthResult: {
    root: {
      ml: 2,
    },
    growthChange: {
      size: 0.9,
    },
    measurementIcon: {
      size : 0.9,
      mr   : 0.5,
    },
    growthIcon: {
      scale : 1.2,
      pt    : 0.8,
    },
  },
});



/** Кол-во проданных основных продуктов (Нед) */
export const SmallReport_2_6_9 = memo(() => {
  const sx = useStyles();
  const { activeEntities, activeDates } = useDashboard();

  const itemData  = useMemo(() => activeEntities['2-6-9'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);

  
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
        fractionDigits : 1,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
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
          max: 10,
          min: 0,
        }
      }
    }
  });


  return (
    <ReportContainer_Small
      chartType     = 'bar'
      title         = 'Кол-во проданных основных продуктов'
      companyType   = {itemData?.companyType}
      // productType   = {productType}
      statisticType = {itemData?.statisticType}
      // condition     = {condition}
      itemData      = {itemData}
      reportConfig  = {reportConfig}
      chartData     = {chartData}
      sx            = {sx}
    />
  );
});
