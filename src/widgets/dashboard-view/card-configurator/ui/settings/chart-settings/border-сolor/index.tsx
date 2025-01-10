import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  index: number // Index charts in settings.charts
}

/** Цвет графика */
export const ChartBorderColor: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    changeOneDatasetsItem({ field: 'borderColor', value, index });
  }, [selectedItem, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Border color' toolTitle='Выберите цвет графика' />
      <ColorPicker
        defaultColor = {selectedItem?.settings?.charts?.[index]?.datasets?.borderColor as string}
        onChange     = {handleChange}
      />
    </RowWrapper>
  )
});
