import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { SelectValue } from '../../../../../../shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { arrChartType, ChartType } from 'entities/charts';
import { updateChartsItem } from 'widgets/dashboard-view/card-configurator/ui/settings/libs';



interface Props {
  index: number // Index charts in settings.charts
}

/** Выбор типа графика */
export const SelectChartType: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState<ChartType>(selectedItem.settings?.charts?.[index]?.chartType || 'line');

  useEffect(() => {
    setSelectedValue(selectedItem.settings?.charts?.[index]?.chartType || 'line');
  }, [selectedItem.settings?.charts?.[index]?.chartType]);


  const handleSelectedValue = useCallback((selected: string) => {
    setSelectedValue(selected as ChartType);
    changeOneSettingsField({
      field: 'charts',
      value: updateChartsItem(selectedItem, 'chartType', index, selected)
    });
  }, [selectedItem, changeOneSettingsField, setSelectedValue]);


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
