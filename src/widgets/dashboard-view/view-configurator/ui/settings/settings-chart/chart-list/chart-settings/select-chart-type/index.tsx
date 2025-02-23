import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { SelectValue } from '../../../../../../../../../shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { arrChartType, ChartType } from 'entities/charts';



interface Props {
  index: number // Index charts in settings.charts
}

/** Выбор типа графика */
export const SelectChartType: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneChartsItem } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState<ChartType>(selectedItem.settings?.charts?.[index]?.chartType || 'line');

  useEffect(() => {
    setSelectedValue(selectedItem.settings?.charts?.[index]?.chartType || 'line');
  }, [selectedItem.settings?.charts?.[index]?.chartType]);


  const handleSelectedValue = useCallback((value: string) => {
    setSelectedValue(value as ChartType);
    changeOneChartsItem({ field: 'chartType', value, index });
  }, [selectedItem, changeOneChartsItem, setSelectedValue]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='ChartType' toolTitle='Выберите тип графика' />

      <SelectValue
        selectedValue = {selectedValue}
        array         = {arrChartType}
        onSelect      = {handleSelectedValue}
      />
    </RowWrapper>
  )
});
