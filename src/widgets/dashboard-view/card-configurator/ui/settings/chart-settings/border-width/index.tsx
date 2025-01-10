import { FC, memo, useCallback } from 'react';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';



interface Props {
  index: number // Index charts in settings.charts
}

/** Толщина линии графика */
export const ChartBorderWidth: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((_: ItemStylesField, value: string | number) => {
    changeOneDatasetsItem({ field: 'borderWidth', value, index });
  }, [selectedItem, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Border width' toolTitle='Выберите толщину линии графика' />
      <ChangeStyleItem
        type       = 'number'
        value      = {selectedItem.settings?.charts?.[index]?.datasets?.borderWidth as number}
        width      = '3rem'
        onCallback = {handleChange}
        onSubmit   = {handleChange}
      />
    </RowWrapper>
  )
});
