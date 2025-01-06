import { FC, memo, useEffect, useState } from 'react';
import { CardItemSettingsField } from 'entities/dashboard-view';
import { SelectValue } from '../../../../../../shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';



interface Props {
  value    : string | undefined
  onChange : (field: CardItemSettingsField, value: string) => void
}

/** Выбор кода */
export const SelectKod: FC<Props> = memo(({ value = '', onChange }) => {
  const { kods } = useDashboardData();
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);


  const handleSelectedValue = (selected: string) => {
    setSelectedValue(selected);
    onChange('kod', selected);
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
