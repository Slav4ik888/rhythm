import { FC, memo, useEffect, useState } from 'react';
import { CardItem, CardItemSettingsField } from 'entities/dashboard-view';
import { SelectValue } from '../../../../../../shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';



interface Props {
  index    : number // Index charts in settings.charts
  item     : CardItem
  onChange : (field: CardItemSettingsField, value: any) => void
}

/** Выбор кода */
export const SelectKod: FC<Props> = memo(({ index, item, onChange }) => {
  const { kods } = useDashboardData();
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    setSelectedValue(item.settings?.charts?.[index]?.kod || '');
  }, [item.settings?.charts?.[index]?.kod]);


  const handleSelectedValue = (selected: string) => {
    setSelectedValue(selected);
    const oldCharts = item.settings?.charts || [];
    const charts = [...oldCharts.slice(0, index), { ...oldCharts[index], kod: selected }, ...oldCharts.slice(index + 1)];

    onChange('charts', charts);
  };


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Код' toolTitle='Укажите код статистики для графика' />

      <SelectValue
        selectedValue = {selectedValue}
        array         = {kods}
        onSelect      = {handleSelectedValue}
      />
    </RowWrapper>
  )
});
