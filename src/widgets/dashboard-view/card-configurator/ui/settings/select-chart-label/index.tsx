import { FC, memo, MouseEvent, useCallback } from 'react';
import { CardItem, CardItemSettingsField } from 'entities/dashboard-view';
import { ConfiguratorTextfieldItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { updateChartsItem } from '../libs';
import { pxToRem } from 'app/providers/theme';



interface Props {
  index    : number // Index charts in settings.charts
  item     : CardItem
  onChange : (field: CardItemSettingsField, value: any) => void
}

/** Выбор Label графика */
export const SelectChartLabel: FC<Props> = memo(({ index, item, onChange }) => {

  const handleChange = useCallback((e: MouseEvent, value: string | number) => {
    const datasets = item.settings?.charts?.[index]?.datasets || {};
    datasets.label = value as string;
    onChange('charts', updateChartsItem(item, 'datasets', index, datasets));
  }, [item]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Chart label' toolTitle='Выберите метку для графика' />
      {/* TODO: сделать изменяющееся поле, при нажатии переходит в Textfield */}
      <ConfiguratorTextfieldItem
        type         = 'text'
        defaultValue = {item.settings?.charts?.[index]?.datasets?.label}
        toolTitle    = 'Label графика'
        width        = '100%'
        sx           = {{ field: { height: pxToRem(40)}}}
        onSubmit     = {handleChange}
      />
    </RowWrapper>
  )
});
