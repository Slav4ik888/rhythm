import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, arrayChipLabel, chipOptions, ViewItem } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Выбор ChipType */
export const SelectChipType: FC<Props> = memo(({ selectedItem }) => {
  const { changeOneSettingsField } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState(() => chipOptions[selectedItem?.settings?.chipType || 'condition'].label);

  useEffect(() => {
    setSelectedValue(chipOptions[selectedItem?.settings?.chipType || 'condition'].label);
  }, [selectedItem?.settings?.chipType]);


  const handleSelectedValue = useCallback((label: string) => {
    const value = Object.values(chipOptions).find(item => item.label === label)?.value || '';
    setSelectedValue(value);
    changeOneSettingsField({ field: 'chipType', value });
  }, [selectedItem, changeOneSettingsField]);
        

  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='ChipType' toolTitle='Выберите тип чипа' />

      <SelectValue
        selectedValue = {selectedValue}
        array         = {arrayChipLabel}
        onSelect      = {handleSelectedValue}
      />
    </RowWrapper>
  )
});
