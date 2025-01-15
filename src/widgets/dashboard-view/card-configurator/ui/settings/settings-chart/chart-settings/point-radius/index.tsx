import { FC, memo, useCallback } from 'react';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { pxToRem } from 'shared/styles';



interface Props {
  index: number // Index charts in settings.charts
}

/** Толщина точки (круглешков) */
export const ChartPointRadius: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((_: ItemStylesField, value: string | number) => {
    changeOneDatasetsItem({ field: 'pointRadius', value, index });
  }, [selectedItem, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Point radius' toolTitle='Выберите толщину точки графика' />
      <ChangeStyleItem
        type       = 'number'
        value      = {selectedItem.settings?.charts?.[index]?.datasets?.pointRadius as number}
        width      = '3rem'
        onCallback = {handleChange}
        onSubmit   = {handleChange}
      />
    </RowWrapper>
  )
});
