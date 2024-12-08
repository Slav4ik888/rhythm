import { FC, memo } from 'react';
import { BarChart, ChartConfig, ChartContainer, LineChart } from 'entities/charts';
import {
  DashboardStatisticItem, ReportSmallContainerWrapper, ReportsResultChangesConfig,
  ComparisonIndicators, GrowthResult, SxSmallContainer
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { f } from 'app/styles';
import { DashboardConditionType } from 'entities/condition-type';
import { DashboardStatisticType } from 'entities/statistic-type';
import { ChipsContainer } from '../../../../ui/items';
import { Box } from '@mui/material';



const useStyles = () => ({
  indicators: {
    ...f('c-fs'),
    width: '100%',
    mr: 1,
  },
  comparison: {
    ...f('-fs-fe'),
    width: '100%',
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
      scale : 1.1,
      pt    : 0.5,
    },
  },
});


interface Props {
  chartType      : 'bar' | 'line'
  condition?     : DashboardConditionType
  statisticType? : DashboardStatisticType
  companyType?   : string
  productType?   : string
  title          : string
  itemData       : DashboardStatisticItem
  reportConfig   : ReportsResultChangesConfig
  chartData      : ChartConfig
  sx             : SxSmallContainer
}


export const ReportContainer_Small: FC<Props> = memo(({
  chartType, condition, itemData, statisticType, companyType, productType, title, chartData, reportConfig, sx: style
}) => {
  const sx = useStyles();
  const sxStyle = {
    ...style,
    content: {
      ...f('--sb'),
      ...style.content,
    },
  };


  
  const component = chartType === 'bar'
    ? <BarChart chart={chartData} />
    : <LineChart chart={chartData} />;


  return (
    <ReportSmallContainerWrapper
      title = {title}
      kod   = {itemData?.kod}
      sx    = {sxStyle}
    >
      <Box sx={sx.indicators}>
        <ChipsContainer
          item      = {itemData}
          condition = {condition}
          config    = {{ chips: {
            statisticType : Boolean(statisticType),
            productType   : Boolean(productType),
            companyType   : Boolean(companyType),
            conditionType : Boolean(condition),
          }}}
        />

        <Box sx={sx.comparison}>
          <ComparisonIndicators
            data   = {itemData?.data as number[] || []}
            config = {reportConfig}
          />
          <GrowthResult
            data   = {itemData?.data as number[] || []}
            config = {reportConfig}
            sx     = {{ growthResult: sx.growthResult }}
          />
        </Box>
      </Box>

      <ChartContainer
        children = {component}
        sx       = {{
          root: {
            width        : pxToRem(220),
            minWidth     : pxToRem(220),
            height       : pxToRem(70),
            background   : 'transparent',
            borderRadius : 'none',
            boxShadow    : 'none',
          }
        }}
      />
    </ReportSmallContainerWrapper>
  );
});
