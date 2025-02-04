import { FC, memo } from 'react';
import { RowSelectByField } from '../../base-features-components';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectKodItem } from './item';



export const SelectKod: FC = memo(() => {
  const { kods } = useDashboardData();

  return (
    <RowSelectByField
      scheme    = 'settings.kod'
      title     = 'Код'
      toolTitle = 'Укажите код статистики для графика'
      array     = {kods}
      component = {SelectKodItem}
    />
  )
});
