import { FC, memo } from 'react';
import { BarChart, ChartConfig, ChartConfigDatasets, ChartContainer, fixPointRadius } from 'entities/charts';
import {
  DashboardStatisticItem, invertData, ReportSmallContainerWrapper, ReportsResultChangesConfig,
  ComparisonIndicators, GrowthResult, ReportContainer_Small, SxSmallContainer
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { orange } from '@mui/material/colors';
import { MDBox } from 'shared/ui/mui-design-components';
import { f } from 'app/styles';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(209 148 58)",
    backgroundColor      : "rgb(209 148 58 / 30%)",
    borderColor          : "rgb(209 148 58)",
  }

  fixPointRadius(config, dates);    

  return config;
};


const useStyles = (): SxSmallContainer => ({
  root: {
    ...f('--sb'),
    width  : '100%',
    height : pxToRem(100),
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
  dates    : string[]
  itemData : DashboardStatisticItem
}


export const DashboardReportContainer_1_0_2_Details_SmallReport: FC<Props> = memo(({ itemData, dates }) => {
  const sx = useStyles();
  
  const reportConfig: ReportsResultChangesConfig = {
    // inverted : true, // При отсутствии изменений в результатах красить чёрным цветом
    unchangedBlack: true, // При отсутствии изменений в результатах красить чёрным цветом

    resultChanges: {
      // Список значений: последний результат и предыдущие 
      comparisonIndicators : {
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

  const barChartData: ChartConfig = {
    labels: dates,
    datasets: [{
      ...getDatasetConfig(dates),
      data: reportConfig.inverted ? invertData(itemData.data as number[]) : itemData.data as number[]
    }],
    options: {
      scales: {
        y: {
          // suggestedMax: 40, // Добавление  макс значения оси Y
          // suggestedMin: 30,
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
      chartType    = 'bar'
      title        = 'Всего сотрудников'
      itemData     = {itemData}
      reportConfig = {reportConfig}
      chartData    = {barChartData}
      sx           = {sx}
    />
  );
});
