import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectKod } from './select-kod';
import { ChartKodLabel } from './kod-label';



interface Props {
  index: number // Index charts in settings.charts
}

/** Выбор кода */
export const ChartKods: FC<Props> = memo(({ index }) => {
  const { kods } = useDashboardData();
  const { selectedItem, changeOneChartsItem } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState<string>('');


  useEffect(() => {
    setSelectedValue(selectedItem.settings?.charts?.[index]?.kod || '');
  }, [selectedItem.settings?.charts?.[index]?.kod]);


  const handleSelectedValue = useCallback((value: string) => {
    setSelectedValue(value);
    changeOneChartsItem({ field: 'kod', value, index });
  }, [selectedItem, changeOneChartsItem]);


  return (
    <>
      <SelectKod     index={index} />
      <ChartKodLabel index={index} />
    </>
  )
});
