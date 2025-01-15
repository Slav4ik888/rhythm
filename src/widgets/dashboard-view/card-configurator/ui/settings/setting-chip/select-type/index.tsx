import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, arrayChipType, ChipType } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';



/** Выбор chipType */
export const SelectChipType: FC = memo(() => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState<ChipType>('custom');

  useEffect(() => {
    setSelectedValue(selectedItem.settings?.chipType || 'custom');
  }, [selectedItem.settings?.chipType]);


  const handleSelectedValue = useCallback((value: string) => {
    setSelectedValue(value as ChipType);
    changeOneSettingsField({ field: 'chipType', value });
  }, [selectedItem, changeOneSettingsField]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='ChipType' toolTitle='Выберите тип чипа' />

      <SelectValue
        selectedValue = {selectedValue}
        array         = {arrayChipType}
        onSelect      = {handleSelectedValue}
      />
    </RowWrapper>
  )
});
