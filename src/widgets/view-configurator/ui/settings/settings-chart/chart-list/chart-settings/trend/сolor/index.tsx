import { FC, memo, useCallback } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ColorPicker } from 'shared/lib/colors-picker';
import { ChartConfigTrendDatasets } from 'entities/charts';
import { cloneObj } from 'shared/helpers/objects';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Цвет линии тренда */
export const ChartTrendColor: FC<Props> = memo(({ index, selectedItem }) => {
  const { changeOneChartsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    const trendDataSets = cloneObj(selectedItem?.settings?.charts?.[index]?.trendDataSets) || {} as ChartConfigTrendDatasets;
    trendDataSets.borderColor = value as string;

    changeOneChartsItem({ field: 'trendDataSets', value: { ...trendDataSets }, index });
  }, [selectedItem, index, changeOneChartsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Trend color' toolTitle='Выберите цвет линии тренда' />
      <ColorPicker
        defaultColor = {selectedItem?.settings?.charts?.[index]?.trendDataSets?.borderColor as string}
        onChange     = {handleChange}
      />
    </RowWrapper>
  )
});
