import { FC, memo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { pxToRem } from 'shared/styles';
import { StatisticPeriodTypeChip } from '../statistic-type';
import { useDashboardData } from 'entities/dashboard-data';



/** In ViewItem show chip by kod */
export const StatisticPeriodChipBySelectedItem: FC = memo(() => {
  const { startEntities } = useDashboardData();
  const { fromGlobalKod: kod } = useDashboardView();

  return (
    <StatisticPeriodTypeChip
      type = {startEntities[kod]?.periodType || ''}
      sx   = {{ root: { width: pxToRem(70), maxWidth: pxToRem(70) } }}
    />
  )
});
