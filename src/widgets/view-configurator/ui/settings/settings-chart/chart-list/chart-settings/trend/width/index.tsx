import { FC, memo, useCallback, MouseEvent } from 'react';
import { ViewItemChart, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { InputByScheme } from '../../../../../../base-features-components';
import { ChartConfigTrendDatasets } from 'entities/charts';
import { cloneObj } from 'shared/helpers/objects';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Толщина линии тренда */
export const ChartTrendWidth: FC<Props> = memo(({ index, selectedItem }) => {
  const { changeOneChartsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    const trendDataSets = cloneObj(selectedItem?.settings?.charts?.[index]?.trendDataSets) || {} as ChartConfigTrendDatasets;
    trendDataSets.borderWidth = value as number;

    changeOneChartsItem({ field: 'trendDataSets', value: { ...trendDataSets }, index });
  }, [selectedItem, index, changeOneChartsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Trend width' toolTitle='Выберите толщину линии тренда' />
      <InputByScheme
        type         = 'number'
        selectedItem = {selectedItem}
        scheme       = 'settings.charts'
        width        = '3rem'
        transform    = {(v) => (v as unknown as ViewItemChart[] | undefined)?.[index]?.trendDataSets?.borderWidth as number}
        onChange     = {(e: MouseEvent, v: string | number) => handleChange(v)}
        onBlur       = {(e: MouseEvent, v: string | number) => handleChange(v)}
        onSubmit     = {(e: MouseEvent, v: string | number) => handleChange(v)}
      />
    </RowWrapper>
  )
});
