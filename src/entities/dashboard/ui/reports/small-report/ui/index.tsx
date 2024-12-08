import { FC, memo } from 'react';
import { ChartConfig } from 'entities/charts';
import {
  DashboardStatisticItem, ReportSmallContainerWrapper, ReportsResultChangesConfig, SxSmallContainer
} from 'entities/dashboard';
import { f } from 'app/styles';
import { DashboardConditionType } from 'entities/condition-type';
import { DashboardStatisticType } from 'entities/statistic-type';
import { ReportContainer_SmallItem } from './item-component';



export type ChartType = 'bar' | 'line'


interface Props {
  title          : string
  chartType?     : ChartType
  itemData       : DashboardStatisticItem
  reportConfig   : ReportsResultChangesConfig
  chartData      : ChartConfig

  chartType2?    : ChartType
  itemData2?     : DashboardStatisticItem
  reportConfig2? : ReportsResultChangesConfig
  chartData2?    : ChartConfig

  condition?     : DashboardConditionType
  statisticType? : DashboardStatisticType
  companyType?   : string
  productType?   : string

  sx             : SxSmallContainer
}


export const ReportContainer_Small: FC<Props> = memo(({
  chartType, condition, itemData, itemData2, statisticType, companyType, productType, title, chartData,
  reportConfig, reportConfig2, sx: style, chartData2
}) => {
  const sx = {
    ...style,
    content: {
      // ...f('--sb'),
      ...f('c'),
      ...style.content,
    },
  };



  return (
    <ReportSmallContainerWrapper
      title = {title}
      kod   = {itemData?.kod}
      sx    = {sx}
    >
      <ReportContainer_SmallItem
        chartType     = {chartType}
        itemData      = {itemData}
        reportConfig  = {reportConfig}
        chartData     = {chartData}
        condition     = {condition}
        statisticType = {statisticType}
        productType   = {productType}
        companyType   = {companyType}
      />
      {
        itemData2 &&
        reportConfig2 &&
        chartData2 && (
          <ReportContainer_SmallItem
            chartType     = {chartType}
            itemData      = {itemData2}
            reportConfig  = {reportConfig2}
            chartData     = {chartData2}
            condition     = {condition}
            statisticType = {statisticType}
            productType   = {productType}
            companyType   = {companyType}
          />
        )
      }
    </ReportSmallContainerWrapper>
  );
});
