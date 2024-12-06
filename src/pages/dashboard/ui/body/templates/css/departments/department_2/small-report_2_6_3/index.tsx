import { memo, useMemo } from 'react';
import { ChartConfig } from 'entities/charts';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, SxSmallContainer, checkInvertData, useDashboard
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { deepPurple } from '@mui/material/colors';
import { f } from 'app/styles';
import { formatDate, SUB } from 'shared/helpers/dates';



const useStyles = (): SxSmallContainer => ({
  root: {
    ...f('--sb'),
    width  : '100%',
    // height : pxToRem(100),
    mb     : 2,
  },
  header: {
    background: deepPurple[200]
  },
  content: {
    ...f(),
    background : deepPurple[50],
    px         : 2,
    py         : 1,
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



/** Кол-во активных станций */
export const SmallReport_2_6_3 = memo(() => {
  const sx = useStyles();
  const { activeEntities, activeDates } = useDashboard();

  const itemData  = useMemo(() => activeEntities['2-6-3'] as DashboardStatisticItem<number>, [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);

  
  const reportConfig: ReportsResultChangesConfig = {
    // inverted : true, // При отсутствии изменений в результатах красить чёрным цветом
    unchangedBlack: true, // При отсутствии изменений в результатах красить чёрным цветом

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


  const chartData: ChartConfig = {
    labels: dates,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData),
      pointBackgroundColor : 'rgb(141 97 183)',
      backgroundColor      : 'rgb(141 97 183 / 70%)',
      // borderColor          : 'rgb(141 97 183)',
      borderWidth          : 0,
      pointRadius          : 1, // fixPointRadius(dates)
      // fill                 : true,
    }],
    options: {
      scales: {
        y: {
          // suggestedMin: 265,
          // suggestedMax: 290,
          min: 250,
          max: 290,
        },
        x: {
          display: false,
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      },
      aspectRatio: 1, // или другое значение, которое вам подходит
      maintainAspectRatio: false // важно отключить это свойство, если хотите изменить размер диаграммы
    }
  };


  return (
    <ReportContainer_Small
      chartType     = 'bar'
      title         = 'Кол-во активных станций'
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
