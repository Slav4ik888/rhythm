import { FC, memo } from 'react';
import { BarChart, ChartConfig, ChartConfigDatasets, ChartContainer, DoughnutChart, fixPointRadius } from 'entities/charts';
import { DashboardItemData, invertData } from 'entities/dashboard';
import { Stack } from '@mui/material';
import { pxToRem } from 'app/providers/theme';
import { f } from 'app/styles';
import { ReportSmallContainerWrapper } from 'entities/dashboard/ui/reports';
import { orange } from '@mui/material/colors';
import { ReportsBaseConfig } from 'entities/dashboard/ui/reports/reports-line-chart/types';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(209 148 58)",
    backgroundColor      : "rgb(209 148 58 / 30%)",
    borderColor          : "rgb(209 148 58)",
  }

  fixPointRadius(config, dates);    

  return config;
}


interface Props {
  dates          : string[]
  data           : DashboardItemData
  itemData_1_1_2 : number
  itemData_1_1_3 : number
  itemData_1_1_4 : number
}

/** Левая колонка по сотрудникам */
export const DashboardReportContainer_1_0_2_Details_LeftStack: FC<Props> = memo(({ 
  data, dates, itemData_1_1_2, itemData_1_1_3, itemData_1_1_4 }) => {
  // BAR
  const reportConfig: ReportsBaseConfig = {
    // inverted : true, // При отсутствии изменений в результатах красить чёрным цветом
  };

  const barChartData: ChartConfig = {
    labels: dates,
    datasets: [{
      ...getDatasetConfig(dates),
      data: reportConfig.inverted ? invertData(data as number[]) : data as number[]
    }],
    options: {
      scales: {
        y: {
          suggestedMax: 40, // Добавление  макс значения оси Y
          suggestedMin: 30,
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
    }
  };


  // DOUGHNUT
  const doughnutChartData: ChartConfig = {
    labels   : ['В продажах', 'На производстве', 'Прочие'],
    datasets : [{
      data            : [itemData_1_1_2, itemData_1_1_3, itemData_1_1_4],
      backgroundColor : ['rgb(141 97 183)', 'rgb(63 122 53)', 'rgb(209 148 58)'],
    }],
    options: {
      plugins: {
        legend: {
          // display: false,
          position : 'bottom',
          align    : 'start',
        }
      },
    }
  };



  return (
    <Stack width={'80%'}>
      <ReportSmallContainerWrapper
        headerBGColor = {orange[200]}
        title         = 'Всего сотрудников'
        width         = '100%'
        height        = {pxToRem(100)}
      >
        <ChartContainer
          width    = {pxToRem(200)}
          height   = {pxToRem(77)}
          children = {<BarChart chart={barChartData} />}
        />
      </ReportSmallContainerWrapper>

      <ChartContainer
        sx={{
          root: {
            ...f,
            width: pxToRem(280),
            mt: 2,
          }
        }}
        children={<DoughnutChart chart={doughnutChartData} />}
      />
    </Stack>
  );
});
