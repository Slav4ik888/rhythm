import { memo, useMemo } from 'react';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, SxSmallContainer,
  checkInvertData, useDashboard, createConfig
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { orange } from '@mui/material/colors';
import { f } from 'app/styles';
import { formatDate, SUB } from 'shared/helpers/dates';



const useStyles = (): SxSmallContainer => ({
  root: {
    ...f('--sb'),
    width  : '100%',
    height : pxToRem(100),
    mb     : 2,
  },
  header: {
    background: orange[200]
  },
  content: {
    ...f('--sb'),
    background : orange[50],
    px         : 2,
    py         : 0.5,
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



export const SmallReport_1_0_2 = memo(() => {
  const sx = useStyles();
  const { activeEntities, activeDates } = useDashboard();

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
        fractionDigits : 1,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
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
          min: 30,
          max: 40,
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
