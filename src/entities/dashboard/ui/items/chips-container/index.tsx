import { FC, memo } from "react";
import { MDBox } from "shared/ui/mui-design-components";
import { DashboardStatisticItem } from 'entities/dashboard';
import { ReportsLineChartConfig } from '../../reports/reports-line-chart/config-type';
import { ConditionTypeChip, DashboardConditionType } from 'entities/condition-type';
import { StatisticTypeChip } from 'entities/statistic-type';
import { ProductTypeChip } from 'entities/product-type';
import { useSelector } from 'react-redux';
import { selectCompanyId } from 'entities/company';
import { CompanyTypeChip } from 'entities/company-type';



interface Props {
  item        : DashboardStatisticItem
  condition?  : DashboardConditionType
  config      : ReportsLineChartConfig
}


export const ChipsContainer: FC<Props> = memo(({ item, config, condition }) => {
  const { companyType, productType, statisticType } = item;
  const companyId = useSelector(selectCompanyId);

  return (
    <MDBox display="flex" flexDirection="column">
      <StatisticTypeChip
        type   = {statisticType}
        config = {config}
      />
      <CompanyTypeChip
        type      = {companyType}
        companyId = {companyId}
        config    = {config}
      />
      <ProductTypeChip
        type      = {productType}
        companyId = {companyId}
        config    = {config}
      />
      <ConditionTypeChip
        type   = {condition}
        config = {config}
      />
    </MDBox>
  );
});
