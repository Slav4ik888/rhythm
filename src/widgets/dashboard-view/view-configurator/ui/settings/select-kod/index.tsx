import { FC, memo } from 'react';
import { RowSelectByField } from '../../base-features-components';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectKodItem } from './item';
import { ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem: ViewItem | undefined
}

export const SelectKod: FC<Props> = memo(({ selectedItem }) => {
  const { kods } = useDashboardData();

  return (
    <RowSelectByField
      scheme       = 'settings.kod'
      title        = 'Код'
      toolTitle    = 'Укажите код статистики для графика'
      array        = {kods}
      component    = {SelectKodItem}
      selectedItem = {selectedItem}
    />
  )
});
