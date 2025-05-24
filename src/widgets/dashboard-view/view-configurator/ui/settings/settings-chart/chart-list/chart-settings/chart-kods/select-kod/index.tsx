import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectKodItem } from '../../../../../select-kod/item';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { Box, Checkbox } from '@mui/material';
import { f } from 'shared/styles';
import { Tooltip } from 'shared/ui/tooltip';
import { GetFromGlobalKod } from '../../../../../../base-features-components';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Выбор кода */
export const SelectKod: FC<Props> = memo(({ index, selectedItem }) => {
  const { kods, startEntities } = useDashboardData();
  const { fromGlobalKod: kod, changeOneChartsItem } = useDashboardView();

  const [checked, setChecked] = useState(() => Boolean(selectedItem?.settings?.charts?.[index]?.fromGlobalKod));

  useEffect(() => {
    setChecked(Boolean(selectedItem?.settings?.charts?.[index]?.fromGlobalKod));
  }, [selectedItem]);

  const handleToggle = useCallback(() => {
    changeOneChartsItem({
      field : 'fromGlobalKod',
      value : ! Boolean(selectedItem?.settings?.charts?.[index]?.fromGlobalKod),
      index
    });
  }, [selectedItem, changeOneChartsItem]);


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
        fromGlobalKod
        <Tooltip title = 'Если true, то kod будет автоматически подтягиваться от ближайшего parent у которых стоит галка (isGlobalKod)'>
          <Checkbox
            size       = 'small'
            checked    = {checked}
            inputProps = {{ 'aria-label': 'fromGlobalKod' }}
            onChange   = {handleToggle}
          />
        </Tooltip>
        <GetFromGlobalKod index={index} />

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
