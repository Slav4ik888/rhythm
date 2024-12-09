import { FC, memo } from 'react';
import { BarChart, ChartConfig, ChartContainer, LineChart } from 'entities/charts';
import {
  DashboardStatisticItem, ReportsResultChangesConfig,
  ComparisonIndicators, GrowthResult
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { f } from 'app/styles';
import { DashboardConditionType } from 'entities/condition-type';
import { DashboardStatisticType } from 'entities/statistic-type';
import { ChipsContainer } from '../../../items';
import { Box } from '@mui/material';
import { ChartType } from '.';



const useStyles = () => ({
  root: {
    ...f('--sb'),
    width: '100%',
  },
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
  chartType?     : ChartType
  condition?     : DashboardConditionType
  statisticType? : DashboardStatisticType
  companyType?   : string
  productType?   : string
  itemData       : DashboardStatisticItem
  reportConfig   : ReportsResultChangesConfig
  chartData      : ChartConfig
}


export const ReportContainer_SmallItem: FC<Props> = memo(({
  chartType = 'bar', condition, itemData, statisticType, companyType, productType, chartData, reportConfig
}) => {
  const sx = useStyles();

  
  const component = chartType === 'bar'
    ? <BarChart chart={chartData} />
    : <LineChart chart={chartData} />;


  return (
    <Box sx={sx.root}>
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
            height       : '100%', // pxToRem(70),
            background   : 'transparent',
            borderRadius : 'none',
            boxShadow    : 'none',
          }
        }}
      />
    </Box>
  );
});
