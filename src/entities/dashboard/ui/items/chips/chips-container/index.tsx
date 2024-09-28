import { FC, memo } from "react";
import { MDBox } from "shared/ui/mui-design-components";
import { DashboardStatisticItem, ProductTypeChip } from 'entities/dashboard';
import { ReportsLineChartConfig } from '../../../reports/reports-line-chart/config-type';
import { ConditionTypeChip, DashboardConditionType } from 'entities/condition-type';
import { StatisticTypeChip } from 'entities/statistic-type';



interface Props {
  item        : DashboardStatisticItem
  condition?  : DashboardConditionType
  config      : ReportsLineChartConfig
}


export const ChipsContainer: FC<Props> = memo(({ item, config, condition }) => {
  const { companyType, productType, statisticType } = item;


  return (
    <MDBox display="flex" flexDirection="column">
      <StatisticTypeChip
        type   = {statisticType}
        config = {config}
      />
      {/* <CompanyTypeChip
        type   = {companyType}
        config = {config}
      /> */}
      <ProductTypeChip
        type   = {productType}
        config = {config}
      />
      <ConditionTypeChip
        type   = {condition}
        config = {config}
      />
    </MDBox>
  );
});
