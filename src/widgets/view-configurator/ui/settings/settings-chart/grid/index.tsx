import { FC, memo } from 'react';
import { ConfiguratorTitle } from 'shared/ui/configurators-components';
import { ChartSetColorByScheme } from '../set-сolor';
import { RowFlagByScheme } from '../../../base-features-components/rows/row-flag-by-scheme';
import { ViewItem } from 'entities/dashboard-view';



interface Props {
  scale        : 'x' | 'y'
  selectedItem : ViewItem | undefined
}

/** Настройки на осях - Grid */
export const ViewItemChartScaleGrid: FC<Props> = memo(({ selectedItem, scale }) => (
    <>
      <ConfiguratorTitle title='Grid' type='title2' />
      <RowFlagByScheme
        scheme       = {`settings.chartOptions.scales.${scale}.grid.display`}
        title        = 'display'
        toolTitle    = 'Показать/скрыть ось Y'
        selectedItem = {selectedItem}
      />
      <RowFlagByScheme
        scheme       = {`settings.chartOptions.scales.${scale}.grid.drawBorder`}
        title        = 'drawBorder'
        toolTitle    = 'Показать/скрыть'
        selectedItem = {selectedItem}
      />
      <RowFlagByScheme
        scheme       = {`settings.chartOptions.scales.${scale}.grid.drawOnChartArea`}
        title        = 'drawOnChartArea'
        toolTitle    = 'Показать/скрыть'
        selectedItem = {selectedItem}
      />
      <RowFlagByScheme
        scheme       = {`settings.chartOptions.scales.${scale}.grid.drawTicks`}
        title        = 'drawTicks'
        toolTitle    = 'Показать/скрыть'
        selectedItem = {selectedItem}
      />
      <ChartSetColorByScheme
        scheme       = {`settings.chartOptions.scales.${scale}.grid.color`}
        title        = 'color'
        toolTitle    = 'Настроить цвет'
        selectedItem = {selectedItem}
      />
    </>
  ));
