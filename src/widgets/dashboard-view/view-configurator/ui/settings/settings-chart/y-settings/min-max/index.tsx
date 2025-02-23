import { FC, memo } from 'react';
import { ConfiguratorTitle } from 'shared/ui/configurators-components';
import { RowInputByScheme } from '../../../../base-features-components';



/** Настройки Min | max - на оси Y */
export const ViewItemChartScaleYMinMax: FC = memo(() => {
  return (
    <>
      <ConfiguratorTitle title='Min | max' type='title2' />
      <RowInputByScheme
        scheme    = 'settings.chartOptions.scales.y.min'
        type      = 'number'
        title     = 'min'
        toolTitle = 'Изменить min'
        width     = '7rem'
        clear     = {null}
      />
      <RowInputByScheme
        scheme    = 'settings.chartOptions.scales.y.max'
        type      = 'number'
        title     = 'max'
        toolTitle = 'Изменить max'
        width     = '7rem'
        clear     = {null}
      />
      <RowInputByScheme
        scheme    = 'settings.chartOptions.scales.y.suggestedMin'
        type      = 'number'
        title     = 'suggestedMin'
        toolTitle = 'Изменить suggestedMin'
        width     = '7rem'
        clear     = {null}
      />
      <RowInputByScheme
        scheme    = 'settings.chartOptions.scales.y.suggestedMax'
        type      = 'number'
        title     = 'suggestedMax'
        toolTitle = 'Изменить suggestedMax'
        width     = '7rem'
        clear     = {null}
      />
    </>
  )
});
