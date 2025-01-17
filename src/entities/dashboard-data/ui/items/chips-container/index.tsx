import { FC, memo } from 'react';
import { DashboardStatisticItem } from 'entities/dashboard-data';
import { ReportsLineChartConfig } from '../../reports/reports-line-chart/types';
import { ConditionTypeChip, DashboardConditionType } from 'entities/condition-type';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { ProductTypeChip } from 'entities/product-type';
import { CompanyTypeChip } from 'entities/company-type';
import { Stack } from '@mui/material';



interface Props {
  item        : DashboardStatisticItem
  condition?  : DashboardConditionType
  config      : ReportsLineChartConfig
}


export const ChipsContainer: FC<Props> = memo(({ item = {}, config, condition }) => {
  const { companyType, productType, periodType } = item;


  return (
    <Stack>
      {
        config?.chips?.companyType && <CompanyTypeChip type={companyType} />
      }
      {
        config?.chips?.productType && <ProductTypeChip type={productType} />
      }
      {
        config?.chips?.periodType && <StatisticPeriodTypeChip type={periodType} />
      }
      {
        config?.chips?.conditionType && <ConditionTypeChip condition={condition} />
      }
    </Stack>
  );
});
