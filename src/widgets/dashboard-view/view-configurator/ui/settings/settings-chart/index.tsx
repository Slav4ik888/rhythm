import { FC, memo } from 'react';
import { SelectKod } from './chart-settings/select-kod';
import { SelectChartType } from './chart-settings/select-chart-type';
import { ChartLegends } from './chart-legends';
import { ChartLabel } from './chart-settings/chart-label';
import { ConfiguratorSubBoxWrapper, ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { InvertedData } from '../inverted-data';
import { ChartPointRadius } from './chart-settings/point-radius';
import { ChartPointBackgroundColor } from './chart-settings/point-background-color';
import { ChartBorderColor } from './chart-settings/border-сolor';
import { ChartBackgroundColor } from './chart-settings/background-сolor';
import { ChartBorderWidth } from './chart-settings/border-width';
import { ConfiguratorSubTitle } from 'shared/ui/configurators-components/sub-title';
import { ChartSetColorByScheme } from './set-сolor';
import { ChartKodLabel } from './chart-settings/kod-label';
import { RowFlagByScheme } from '../../base-features-components/row-flag-by-scheme';
import { RowInputByScheme } from '../../base-features-components';



/** Вкладка Settings для графиков */
export const ViewItemChartSettingsConfigurator: FC = memo(() => {
  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />
      <ChartLegends />

      {/* Individual charts settings */}
      {/* TODO: возможность добавлять графики */}
      <ConfiguratorSubBoxWrapper title='График 1'>
        <SelectKod     index={0} />
        <ChartKodLabel index={0} />
        {/* Выбрать период дат: общий или уникальный */}

        {/* Настройки графика */}
        <SelectChartType                 index={0} />
        <ChartLabel                      index={0} />
        {/* Круглешки */}
        <ChartPointRadius                index={0} />
        <ChartPointBackgroundColor       index={0} />
        {/* Линия графика */}
        <ChartBorderWidth                index={0} />
        <ChartBorderColor                index={0} />
        <ChartBackgroundColor            index={0} />
      </ConfiguratorSubBoxWrapper>

      {/* НАСТРОЙКИ ОСИ Y */}
      <SubHeader title='Ось Y'>
        {/* Min | max */}
        <ConfiguratorSubTitle title='Min | max' type='title' />
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

        {/* Grid */}
        <ConfiguratorSubTitle title='Grid' type='title' />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.y.grid.display'
          title     = 'display'
          toolTitle = 'Показать/скрыть ось Y'
        />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.y.grid.drawBorder'
          title     = 'drawBorder'
          toolTitle = 'Показать/скрыть'
        />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.y.grid.drawOnChartArea'
          title     = 'drawOnChartArea'
          toolTitle = 'Показать/скрыть'
        />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.y.grid.drawTicks'
          title     = 'drawTicks'
          toolTitle = 'Показать/скрыть'
        />
        <ChartSetColorByScheme
          scheme    = 'settings.chartOptions.scales.y.grid.color'
          title     = 'color'
          toolTitle = 'Настроить цвет'
        />

        {/* Ticks */}
        <ConfiguratorSubTitle title='Ticks' type='title' />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.y.ticks.display'
          title     = 'display'
          toolTitle = 'Показать/скрыть'
        />
        <ChartSetColorByScheme
          scheme    = 'settings.chartOptions.scales.y.ticks.color'
          title     = 'color'
          toolTitle = 'Настроить цвет'
        />
      </SubHeader>


      {/* НАСТРОЙКИ ОСИ X */}
      <SubHeader title='Ось X'>
        {/* Grid */}
        <ConfiguratorSubTitle title='Grid' type='title' />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.x.grid.display'
          title     = 'display'
          toolTitle = 'Показать/скрыть ось X'
        />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.x.grid.drawBorder'
          title     = 'drawBorder'
          toolTitle = 'Показать/скрыть'
        />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.x.grid.drawOnChartArea'
          title     = 'drawOnChartArea'
          toolTitle = 'Показать/скрыть'
        />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.x.grid.drawTicks'
          title     = 'drawTicks'
          toolTitle = 'Показать/скрыть'
        />
        <ChartSetColorByScheme
          scheme    = 'settings.chartOptions.scales.x.grid.color'
          title     = 'color'
          toolTitle = 'Настроить цвет'
        />

        {/* Ticks */}
        <ConfiguratorSubTitle title='Ticks' type='title' />
        <RowFlagByScheme
          scheme    = 'settings.chartOptions.scales.x.ticks.display'
          title     = 'display'
          toolTitle = 'Показать/скрыть'
        />
        <ChartSetColorByScheme
          scheme    = 'settings.chartOptions.scales.x.ticks.color'
          title     = 'color'
          toolTitle = 'Настроить цвет'
        />
      </SubHeader>
    </>
  )
});
