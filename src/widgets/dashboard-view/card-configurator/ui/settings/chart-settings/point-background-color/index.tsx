import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  index: number // Index charts in settings.charts
}

/** Цвет точки (круглешков) */
export const ChartPointBackgroundColor: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    changeOneDatasetsItem({ field: 'pointBackgroundColor', value, index });
  }, [selectedItem, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Point radius background' toolTitle='Выберите цвет точки графика' />
      <ColorPicker
        defaultColor = {selectedItem?.settings?.charts?.[index]?.datasets?.pointBackgroundColor as string}
        onChange     = {handleChange}
      />
    </RowWrapper>
  )
});
