import { memo, useMemo } from 'react';
import { BarChart, ChartConfig, ChartConfigDatasets, DoughnutChart, fixPointRadius } from 'entities/charts';
import { useSelector } from 'react-redux';
import { invertData, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { getLastItem } from 'shared/helpers/arrays';
import { ReportSmallItemBox } from 'shared/ui/report-items';
import { Stack } from '@mui/material';
import { MDBox } from 'shared/ui/mui-design-components';
import { pxToRem } from 'app/providers/theme';
import { f__sb } from 'app/styles';
import { ReportSmallContainerWrapper } from 'entities/dashboard/ui/reports';
import { getConditionType } from 'entities/condition-type';
import { formatDate, SUB } from 'shared/helpers/dates';
import {
  amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey,
  indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow,
} from '@mui/material/colors';
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


/** Общее кол-во сотрудников */
export const DashboardReportContainer_1_0_2_Details = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["1-0-2"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["1-0-2-C"]?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);

  const itemData_1_1_2  = useMemo(() => getLastItem(activeEntities['1-1-2']?.data) as number, [activeEntities]);
  const itemData_1_1_3  = useMemo(() => getLastItem(activeEntities['1-1-3']?.data) as number, [activeEntities]);
  const itemData_1_1_4  = useMemo(() => getLastItem(activeEntities['1-1-4']?.data) as number, [activeEntities]);


  if (! itemData || ! itemData_1_1_2 || ! itemData_1_1_3 || ! itemData_1_1_4) return null;

  // BAR
  const reportConfig: ReportsBaseConfig = {
    inverted : true, // При отсутствии изменений в результатах красить чёрным цветом

    header: {
      minHeight: pxToRem(64),
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
          suggestedMax: 40, // Добавление  макс значения оси Y
          suggestedMin: 30
        }
      }
    }
  };


  // DOUGHNUT
  const doughnutChartData: ChartConfig = {
    labels   : ['В продажах', 'На производстве', 'Прочие'],
    datasets : [{
      data            : [itemData_1_1_2, itemData_1_1_3, itemData_1_1_4],
      backgroundColor : ['rgb(141 97 183)', 'rgb(63 122 53)', 'rgb(209 148 58)'],
    }],
  };

  const width = 'lg';


  return (
    <>
      {/* <DashboardReportContainer> */}
      {/* <DoughnutChartContainer bgColor='grey-200' chart={chartData} /> */}
      <Stack>
        <ReportSmallContainerWrapper
          headerBGColor = {amber[300]}
          title         = 'Всего сотрудников'
          width         = {pxToRem(300)}        
          height        = {pxToRem(100)}        
        >
          <BarChart chart={barChartData} />
        </ReportSmallContainerWrapper>

        <MDBox
          bgColor       = 'grey-200'
          borderRadius  = 'lg'
          coloredShadow = 'secondary'
          sx={{
            ...f__sb,
            width : '100%',
            py    : 2,
            px    : 1,
            mt    : 1,
          }}
        >
          <MDBox width={pxToRem(280)} mr={1}>
            <DoughnutChart chart={doughnutChartData} />
          </MDBox>
        </MDBox>
          
      </Stack>

      <Stack>
        <ReportSmallItemBox
          type           = 'simple'
          width          = {width}
          headerBGColor  = {amber[300]}
          contentBGColor = {amber[100]}
          title          = 'Всего'
          value          = {35}
        />
        <ReportSmallItemBox
          type           = 'simple'
          width          = {width}
          headerBGColor  = {deepPurple[400]}
          contentBGColor = {deepPurple[200]}
          title          = 'В продаж'
          value          = {5}
        />
        <ReportSmallItemBox
          type           = 'simple'
          width          = {width}
          headerBGColor  = {green[500]}
          contentBGColor = {green[300]}
          title          = 'На производстве'
          value          = {26}
        />
        <ReportSmallItemBox
          type           = 'simple'
          width          = {width}
          headerBGColor  = {amber[300]}
          contentBGColor = {amber[100]}
          title          = 'Прочие'
          value          = {4}
        />
        <ReportSmallItemBox
          type           = 'ratio'
          width          = {width}
          headerBGColor  = {green[500]}
          contentBGColor = {green[300]}
          title          = 'Соотношение'
          toolTitle      = 'Соотношение производства ко всем остальным'
          value          = {2.9}
          ratio          = {1}
        />
      </Stack>
    </>
  );
});
