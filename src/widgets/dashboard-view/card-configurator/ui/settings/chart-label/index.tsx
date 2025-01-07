import { FC, memo, useCallback } from 'react';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { updateChartsItem } from '../libs';
import { cloneObj } from 'shared/helpers/objects';
import { pxToRem } from 'shared/styles';



interface Props {
  index: number // Index charts in settings.charts
}

/** Выбор legend label графика */
export const ChartLabel: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();

  const handleChange = useCallback((field: ItemStylesField, value: string | number) => {
    const datasets = cloneObj(selectedItem.settings?.charts?.[index]?.datasets || {});
    datasets.label = value as string;

    changeOneSettingsField({
      field: 'charts',
      value: updateChartsItem(selectedItem, 'datasets', index, datasets)
    });
  }, [selectedItem, changeOneSettingsField]);

  
  if (! Boolean(selectedItem.settings?.chartOptions?.plugins?.legend?.display)) return null

  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Chart label' toolTitle='Выберите метку для графика' />
      <ChangeStyleItem
        type       = 'text'
        toolTitle  = 'Label графика'
        value      = {selectedItem.settings?.charts?.[index]?.datasets?.label as string}
        width      = '100%'
        sx         = {{ field: { height: pxToRem(40)}}}
        onSubmit   = {handleChange}
      />
    </RowWrapper>
  )
});
