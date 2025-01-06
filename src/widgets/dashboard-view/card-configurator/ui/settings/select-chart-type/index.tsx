import { FC, memo, useEffect, useState } from 'react';
import { CardItem, CardItemSettingsField } from 'entities/dashboard-view';
import { SelectValue } from '../../../../../../shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { arrChartType, ChartType } from 'entities/charts';
import { updateChartsItem } from '../libs';



interface Props {
  index    : number // Index charts in settings.charts
  item     : CardItem
  onChange : (field: CardItemSettingsField, value: any) => void
}

/** Выбор типа графика */
export const SelectChartType: FC<Props> = memo(({ index, item, onChange }) => {

  const [selectedValue, setSelectedValue] = useState<ChartType>(item.settings?.charts?.[index]?.chartType || 'line');

  useEffect(() => {
    setSelectedValue(item.settings?.charts?.[index]?.chartType || 'line');
  }, [item.settings?.charts?.[index]?.chartType]);


  const handleSelectedValue = (selected: string) => {
    setSelectedValue(selected as ChartType);
    onChange('charts', updateChartsItem(item, 'chartType', index, selected));
  };


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
