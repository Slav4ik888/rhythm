import { FC, memo, useCallback, useEffect, useState } from 'react';
import { ChipContainer, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectKodItem } from '../../../../../select-kod/item';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { Box } from '@mui/material';
import { f } from 'shared/styles';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Выбор кода */
export const SelectKod: FC<Props> = memo(({ index, selectedItem }) => {
  const { kods, startEntities } = useDashboardData();
  const { changeOneChartsItem } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    setSelectedValue(selectedItem?.settings?.charts?.[index]?.kod || '');
  }, [selectedItem?.settings?.charts?.[index]?.kod]);


  const handleSelectedValue = useCallback((value: string) => {
    setSelectedValue(value);
    changeOneChartsItem({ field: 'kod', value, index });
  }, [selectedItem, changeOneChartsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Код' toolTitle='Укажите код статистики для графика' />

      <Box sx={f('-c-c')}>
        <StatisticPeriodTypeChip type={startEntities[selectedItem?.settings?.charts?.[index]?.kod || '']?.periodType} />

        <SelectValue
          selectedValue = {selectedValue}
          array         = {kods}
          component     = {SelectKodItem}
          onSelect      = {handleSelectedValue}
        />
      </Box>
    </RowWrapper>
  )
});
