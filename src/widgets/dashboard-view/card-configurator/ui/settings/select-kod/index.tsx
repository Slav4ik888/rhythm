import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { SelectValue } from '../../../../../../shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { updateChartsItem } from '../libs';



interface Props {
  index: number // Index charts in settings.charts
}

/** Выбор кода */
export const SelectKod: FC<Props> = memo(({ index }) => {
  const { kods } = useDashboardData();
  const { selectedItem, changeOneSettingsField } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState<string>('');


  useEffect(() => {
    setSelectedValue(selectedItem.settings?.charts?.[index]?.kod || '');
  }, [selectedItem.settings?.charts?.[index]?.kod]);


  const handleSelectedValue = useCallback((selected: string) => {
    setSelectedValue(selected);
    changeOneSettingsField({
      field: 'charts',
      value: updateChartsItem(selectedItem, 'kod', index, selected)
    });
  }, [selectedItem, changeOneSettingsField]);


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
