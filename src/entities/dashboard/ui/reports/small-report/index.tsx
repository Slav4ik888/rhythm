import { FC, memo } from 'react';
import { BarChart, ChartConfig, ChartContainer, LineChart } from 'entities/charts';
import {
  DashboardStatisticItem, ReportSmallContainerWrapper, ReportsResultChangesConfig,
  ComparisonIndicators, GrowthResult, SxSmallContainer
} from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { orange } from '@mui/material/colors';
import { MDBox } from 'shared/ui/mui-design-components';
import { f } from 'app/styles';
import { ConditionTypeChip, DashboardConditionType } from 'entities/condition-type';
import { DashboardStatisticType, StatisticTypeChip } from 'entities/statistic-type';
import { CompanyTypeChip } from 'entities/company-type';
import { ProductTypeChip } from 'entities/product-type';



const useStyles = () => ({
  indicators: {
    ...f('c-c'),
  },
  comparison: {
    ...f('-fs-c'),
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
  
  const component = chartType === 'bar'
    ? <BarChart chart={chartData} />
    : <LineChart chart={chartData} />;


  return (
    <ReportSmallContainerWrapper
      title = {title}
      sx    = {style}
    >
      <MDBox sx={sx.indicators}>
        {
          statisticType && <StatisticTypeChip type={statisticType} />
        }
        {
          companyType && <CompanyTypeChip type={companyType} />
        }
        {
          productType && <ProductTypeChip type={productType} />
        }
        {
          condition && <ConditionTypeChip condition={condition} />
        }

        <MDBox sx={sx.comparison}>
          <ComparisonIndicators
            data   = {itemData.data as number[]}
            config = {reportConfig}
          />
          <GrowthResult
            data   = {itemData.data as number[]}
            config = {reportConfig}
            sx     = {style}
          />
        </MDBox>
      </MDBox>

      <ChartContainer
        width    = {pxToRem(200)}
        height   = {pxToRem(70)}
        children = {component}
      />
    </ReportSmallContainerWrapper>
  );
});
