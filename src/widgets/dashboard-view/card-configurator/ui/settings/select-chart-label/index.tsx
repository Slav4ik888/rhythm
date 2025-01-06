import { FC, memo, useCallback } from 'react';
import { CardItem, CardItemSettingsField, ItemStylesField } from 'entities/dashboard-view';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { updateChartsItem } from '../libs';
import { pxToRem } from 'app/providers/theme';
import { cloneObj } from 'shared/helpers/objects';



interface Props {
  index    : number // Index charts in settings.charts
  item     : CardItem
  onChange : (field: CardItemSettingsField, value: any) => void
}

/** Выбор Label графика */
export const SelectChartLabel: FC<Props> = memo(({ index, item, onChange }) => {

  const handleChange = useCallback((field: ItemStylesField, value: string | number) => {
    const datasets = cloneObj(item.settings?.charts?.[index]?.datasets || {});
    datasets.label = value as string;
    onChange('charts', updateChartsItem(item, 'datasets', index, datasets));
  }, [item]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Chart label' toolTitle='Выберите метку для графика' />
      <ChangeStyleItem
        type       = 'text'
        toolTitle  = 'Label графика'
        value      = {item.settings?.charts?.[index]?.datasets?.label as string}
        width      = '100%'
        sx         = {{ field: { height: pxToRem(40)}}}
        onSubmit   = {handleChange}
      />
    </RowWrapper>
  )
});
