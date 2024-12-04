import { FC, memo } from 'react';
import { ChartConfig } from 'entities/charts';
import {
  DashboardStatisticItem, ReportsResultChangesConfig, ReportContainer_Small, SxSmallContainer, checkInvertData
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { orange } from '@mui/material/colors';
import { f } from 'app/styles';
import { DashboardConditionType } from 'entities/condition-type';
import { DashboardStatisticType } from 'entities/statistic-type';



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



interface Props {
  dates          : string[]
  itemData       : DashboardStatisticItem<number>
  condition?     : DashboardConditionType
  statisticType? : DashboardStatisticType
  companyType?   : string
  productType?   : string
}


export const DashboardReportContainer_1_0_2_Details_SmallReport: FC<Props> = memo(({
  itemData, dates, condition, statisticType, companyType, productType
}) => {
  const sx = useStyles();
  
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


  const chartData: ChartConfig = {
    labels: dates,
    datasets: [{
      data                 : checkInvertData(reportConfig, itemData),
      pointBackgroundColor : 'rgb(209 148 58)',
      backgroundColor      : 'rgb(209 148 58 / 30%)',
      borderColor          : 'rgb(209 148 58)',
      borderWidth          : 1,
      pointRadius          : 1, // fixPointRadius(dates)
      fill                 : true,
    }],
    options: {
      scales: {
        y: {
          min: 30,
          max: 40,
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
