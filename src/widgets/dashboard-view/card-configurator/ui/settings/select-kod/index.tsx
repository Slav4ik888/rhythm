import { FC, memo } from 'react';
import { SelectByField } from '../select-by-field';
import { useDashboardData } from 'entities/dashboard-data';



/**  */
export const SelectKod: FC = memo(() => {
  const { kods } = useDashboardData();

  return (
    <SelectByField
      field     = 'kod'
      title     = 'Код'
      toolTitle = 'Укажите код статистики для графика'
      array     = {kods}
    />
  )
});
