import { FC, memo } from 'react';
import { BarChart, ChartConfig, ChartContainer, LineChart } from 'entities/charts';
import {
  DashboardStatisticItem, ReportSmallContainerWrapper, ReportsResultChangesConfig,
  ComparisonIndicators, GrowthResult, SxSmallContainer
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { orange } from '@mui/material/colors';
import { MDBox } from 'shared/ui/mui-design-components';
import { f_fs_c } from 'app/styles';



const useStyles = () => ({
  indicators: {
    ...f_fs_c,
  }
});


interface Props {
  chartType    : 'bar' | 'line'
  title        : string
  itemData     : DashboardStatisticItem
  reportConfig : ReportsResultChangesConfig
  chartData    : ChartConfig
  sx           : SxSmallContainer
}


export const ReportContainer_Small: FC<Props> = memo(({ chartType, itemData, title, chartData, reportConfig, sx: style }) => {
  const sx = useStyles();
  
  const component = chartType === 'bar'
    ? <BarChart chart={chartData} />
    : <LineChart chart={chartData} />;

  return (
    <ReportSmallContainerWrapper
      title = {title}
      sx    = {style}
    >
      <MDBox sx={sx.indicators}>
        <ComparisonIndicators
          data   = {itemData.data as number[]}
          config = {reportConfig}
        />
        <GrowthResult
          data       = {itemData.data as number[]}
          config     = {reportConfig}
          sx         = {style}
        />
      </MDBox>

      <ChartContainer
        width    = {pxToRem(200)}
        height   = {pxToRem(70)}
        children = {component}
      />
    </ReportSmallContainerWrapper>
  );
});
