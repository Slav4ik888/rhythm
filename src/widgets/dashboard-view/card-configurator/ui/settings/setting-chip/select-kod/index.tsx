import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';



/** Выбор кода */
export const SelectKod: FC = memo(() => {
  const { kods } = useDashboardData();
  const { selectedItem, changeOneChartsItem } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState<string>('');


  // useEffect(() => {
  //   setSelectedValue(selectedItem.settings?.charts?.[index]?.kod || '');
  // }, [selectedItem.settings?.charts?.[index]?.kod]);


  // const handleSelectedValue = useCallback((value: string) => {
  //   setSelectedValue(value);
  //   changeOneChartsItem({ field: 'kod', value, index });
  // }, [selectedItem, changeOneChartsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Код' toolTitle='Укажите код статистики для графика' />

      {/* <SelectValue
        selectedValue = {selectedValue}
        array         = {kods}
        onSelect      = {handleSelectedValue}
      /> */}
    </RowWrapper>
  )
});
