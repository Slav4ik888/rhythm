import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { getKod, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectKodItem } from '../../../../../select-kod/select-kod-item';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { Tooltip } from 'shared/ui/tooltip';
import { GetFromGlobalKod } from '../../../../../../base-features-components';
import { FlagFromGlobalKod } from '../../../../../../settings/select-kod';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Выбор кода */
export const SelectKod: FC<Props> = memo(({ index, selectedItem }) => {
  const { kods, startEntities } = useDashboardData();
  const { entities, changeOneChartsItem } = useDashboardView();

  const kod = useMemo(() => getKod(entities, selectedItem, selectedItem?.settings?.charts?.[index])
    , [entities, index, selectedItem]);
  
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    setSelectedValue(kod);
  }, [kod]);

  const handleSelectedValue = useCallback((value: string) => {
    setSelectedValue(value);
    changeOneChartsItem({ field: 'kod', value, index });
  }, [selectedItem, changeOneChartsItem]);

  const disabled = selectedItem?.settings?.charts?.[index]?.fromGlobalKod;

  return (
    <RowWrapperTitle title='Код' toolTitle='Укажите код статистики для графика'>
      <Box sx={{ ...f('-c-c'), gap: 1 }}>
        <FlagFromGlobalKod
          scheme       = {`settings.charts.[${index}].fromGlobalKod`}
          selectedItem = {selectedItem} 
        />

        <StatisticPeriodTypeChip type={startEntities[kod]?.periodType} />

        {
          disabled
            ?
            <Tooltip title='Чтобы выбрать другой код, снимите галку с "fromGlobalKod".'>
              <GetFromGlobalKod />
            </Tooltip>
            :
            <SelectValue
              selectedValue = {selectedValue}
              array         = {kods}
              component     = {SelectKodItem}
              onSelect      = {handleSelectedValue}
            />
        }
      </Box>
    </RowWrapperTitle>
  )
});
