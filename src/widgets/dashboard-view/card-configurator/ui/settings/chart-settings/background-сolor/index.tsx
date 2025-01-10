import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  index: number // Index charts in settings.charts
}

/** Цвет фона для графика */
export const ChartBackgroundColor: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    changeOneDatasetsItem({ field: 'backgroundColor', value, index });
  }, [selectedItem, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Background color' toolTitle='Выберите цвет фона для графика' />
      <ColorPicker
        defaultColor = {selectedItem?.settings?.charts?.[index]?.datasets?.backgroundColor as string}
        onChange     = {handleChange}
      />
    </RowWrapper>
  )
});
