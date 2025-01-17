import { FC, memo } from 'react';
import { ChartConfig } from 'entities/charts';
import {
  DashboardStatisticItem, ReportSmallContainerWrapper, ReportsResultChangesConfig, SxSmallContainer
} from 'entities/dashboard-data';
import { f, pxToRem } from 'shared/styles';
import { DashboardConditionType } from 'entities/condition-type';
import { StatisticPeriodType } from 'entities/statistic-type';
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
  periodType?    : StatisticPeriodType
  companyType?   : string
  productType?   : string

  sx             : SxSmallContainer
}


export const ReportContainer_Small: FC<Props> = memo(({
  chartType, condition, itemData, itemData2, periodType, companyType, productType, title, chartData,
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

  const isTwo = itemData2 && reportConfig2 && chartData2;
  let height = '100%';
  
  if (isTwo) {
    const getRemValue = (v: string) => Number(v.replace('rem', ''));
    const py          = getRemValue(pxToRem(8 + 8));
    const heightValue = getRemValue(style.content.height);
    const baseHeight  = (heightValue - py) / 2;
    height = baseHeight + 'rem';
  }



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
        periodType    = {periodType}
        productType   = {productType}
        companyType   = {companyType}
        sx            = {{ root: { height }}}
      />
      {
        isTwo && (
          <ReportContainer_SmallItem
            chartType     = {chartType}
            itemData      = {itemData2}
            reportConfig  = {reportConfig2}
            chartData     = {chartData2}
            condition     = {condition}
            periodType    = {periodType}
            productType   = {productType}
            companyType   = {companyType}
            sx            = {{ root: { height }}}
          />
        )
      }
    </ReportSmallContainerWrapper>
  );
});
