import { FC, memo } from 'react';
import { ConfiguratorTitle } from 'shared/ui/configurators-components';
import { ChartSetColorByScheme } from '../set-сolor';
import { RowFlagByScheme } from '../../../base-features-components/row-flag-by-scheme';



interface Props {
  scale: 'x' | 'y'
}

/** Настройки на осях - Ticks */
export const ViewItemChartScaleTicks: FC<Props> = memo(({ scale }) => {
  return (
    <>
      <ConfiguratorTitle title='Ticks' type='title2' />
      <RowFlagByScheme
        scheme    = {`settings.chartOptions.scales.${scale}.ticks.display`}
        title     = 'display'
        toolTitle = 'Показать/скрыть'
      />
      <ChartSetColorByScheme
        scheme    = {`settings.chartOptions.scales.${scale}.ticks.color`}
        title     = 'color'
        toolTitle = 'Настроить цвет'
      />
    </>
  )
});
