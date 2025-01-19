import { FC, memo, useMemo } from 'react';
import { useDashboardData } from 'entities/dashboard-data';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { SetPeriodColorsItem } from './item';



/** chipType = 'period' */
export const SetPeriodColors: FC = memo(() => {
  const { startEntities } = useDashboardData();
  const periods = useMemo(() => {
    const result = new Set<string>();

    Object.values(startEntities).forEach(item => {
      if (item.periodType) result.add(item.periodType)
    });
    
    return Array.from(result) || [];
  }, [startEntities]);

  console.log('periods', periods);


  return (
    <SubHeader title='Настройка цветов'>
      {
        periods.map(period => <SetPeriodColorsItem key={period} period={period} />)
      }
    </SubHeader>
  )
});
