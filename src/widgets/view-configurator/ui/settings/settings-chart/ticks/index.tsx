import { FC, memo } from 'react';
import { ConfiguratorTitle } from 'shared/ui/configurators-components';
import { ChartSetColorByScheme } from '../set-сolor';
import { RowFlagByScheme } from '../../../base-features-components/rows/row-flag-by-scheme';
import { ViewItem } from 'entities/dashboard-view';



interface Props {
  scale        : 'x' | 'y'
  selectedItem : ViewItem | undefined
}

/** Настройки на осях - Ticks */
export const ViewItemChartScaleTicks: FC<Props> = memo(({ scale, selectedItem }) => (
  <>
    <ConfiguratorTitle title='Ticks' type='title2' />
    <RowFlagByScheme
      scheme       = {`settings.chartOptions.scales.${scale}.ticks.display`}
      title        = 'display'
      toolTitle    = 'Показать/скрыть'
      selectedItem = {selectedItem}
    />
    <ChartSetColorByScheme
      scheme       = {`settings.chartOptions.scales.${scale}.ticks.color`}
      title        = 'color'
      toolTitle    = 'Настроить цвет'
      selectedItem = {selectedItem}
    />
  </>
));
