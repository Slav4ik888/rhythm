import { FC, memo } from 'react';
import { DashboardStatisticItem } from 'entities/dashboard';
import { ReportsLineChartConfig } from '../../reports/reports-line-chart/types';
import { ConditionTypeChip, DashboardConditionType } from 'entities/condition-type';
import { StatisticTypeChip } from 'entities/statistic-type';
import { ProductTypeChip } from 'entities/product-type';
import { CompanyTypeChip } from 'entities/company-type';
import { Stack } from '@mui/material';



interface Props {
  item        : DashboardStatisticItem
  condition?  : DashboardConditionType
  config      : ReportsLineChartConfig
}


export const ChipsContainer: FC<Props> = memo(({ item = {}, config, condition }) => {
  const { companyType, productType, statisticType } = item;


  return (
    <Stack>
      {
        config?.chips?.companyType && <CompanyTypeChip type={companyType} />
      }
      {
        config?.chips?.productType && <ProductTypeChip type={productType} />
      }
      {
        config?.chips?.statisticType && <StatisticTypeChip type={statisticType} />
      }
      {
        config?.chips?.conditionType && <ConditionTypeChip condition={condition} />
      }
    </Stack>
  );
});
