import { FC, memo } from 'react';
import { SelectKod } from './chart-settings/select-kod';
import { SelectChartType } from './chart-settings/select-chart-type';
import { ChartLegends } from './chart-legends';
import { ChartLabel } from './chart-settings/chart-label';
import { ConfiguratorSubBoxWrapper } from 'shared/ui/configurators-components';
import { InvertedData } from './Inverted-data';
import { ChartPointRadius } from './chart-settings/point-radius';
import { ChartPointBackgroundColor } from './chart-settings/point-background-color';
import { ChartBorderColor } from './chart-settings/border-сolor';
import { ChartBackgroundColor } from './chart-settings/background-сolor';
import { ChartBorderWidth } from './chart-settings/border-width';
import { ConfiguratorSubTitle } from 'shared/ui/configurators-components/sub-title';
import { ChartGridDisplay } from './scales/grid/display';
import { ChartFlagByScheme } from './flag-by-scheme';
import { ChartSetColorByScheme } from './set-сolor';
import { ChartNumberByScheme } from './number-by-scheme';



/** Вкладка Settings для графиков */
export const CardItemChartSettingsConfigurator: FC = memo(() => {
  return (
    <>
      {/* Global settings */}
      <InvertedData />
      <ChartLegends />
      {/*   - Настройки осей */}

      {/* Individual charts settings */}
      {/* TODO: возможность добавлять графики */}
      <ConfiguratorSubBoxWrapper title='График 1'>
        <SelectKod index={0} />
        {/* Выбрать период дат: общий или уникальный */}

        {/* Настройки графика */}
        <SelectChartType                 index={0} />
        <ChartLabel                      index={0} />
        {/* Круглешки */}
        <ChartPointRadius                index={0} />
        <ChartPointBackgroundColor index={0} />
        {/* Линия графика */}
        <ChartBorderWidth                index={0} />
        <ChartBorderColor                index={0} />
        <ChartBackgroundColor            index={0} />
      </ConfiguratorSubBoxWrapper>

      {/* НАСТРОЙКИ ОСИ Y */}
      <ConfiguratorSubTitle title='Ось Y' type='title' />

      {/* Min | max */}
      <ConfiguratorSubTitle title='Min | max' type='subtitle' />
      <ChartNumberByScheme
        scheme    = 'settings.chartOptions.scales.y.min'
        title     = 'min'
        toolTitle = 'Изменить min'
      />
      <ChartNumberByScheme
        scheme    = 'settings.chartOptions.scales.y.max'
        title     = 'max'
        toolTitle = 'Изменить max'
      />
      <ChartNumberByScheme
        scheme    = 'settings.chartOptions.scales.y.suggestedMin'
        title     = 'suggestedMin'
        toolTitle = 'Изменить suggestedMin'
      />
      <ChartNumberByScheme
        scheme    = 'settings.chartOptions.scales.y.suggestedMax'
        title     = 'suggestedMax'
        toolTitle = 'Изменить suggestedMax'
      />

      {/* Grid */}
      <ConfiguratorSubTitle title='Grid' type='subtitle' />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.y.grid.display'
        title     = 'display'
        toolTitle = 'Показать/скрыть ось Y'
      />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.y.grid.drawBorder'
        title     = 'drawBorder'
        toolTitle = 'Показать/скрыть'
      />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.y.grid.drawOnChartArea'
        title     = 'drawOnChartArea'
        toolTitle = 'Показать/скрыть'
      />
      <ChartFlagByScheme
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
      <ConfiguratorSubTitle title='Ticks' type='subtitle' />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.y.ticks.display'
        title     = 'display'
        toolTitle = 'Показать/скрыть'
      />
      <ChartSetColorByScheme
        scheme    = 'settings.chartOptions.scales.y.ticks.color'
        title     = 'color'
        toolTitle = 'Настроить цвет'
      />


      {/* НАСТРОЙКИ ОСИ X */}
      <ConfiguratorSubTitle title='Ось X' type='title' />

      {/* Grid */}
      <ConfiguratorSubTitle title='Grid' type='subtitle' />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.x.grid.display'
        title     = 'display'
        toolTitle = 'Показать/скрыть ось X'
      />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.x.grid.drawBorder'
        title     = 'drawBorder'
        toolTitle = 'Показать/скрыть'
      />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.x.grid.drawOnChartArea'
        title     = 'drawOnChartArea'
        toolTitle = 'Показать/скрыть'
      />
      <ChartFlagByScheme
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
      <ConfiguratorSubTitle title='Ticks' type='subtitle' />
      <ChartFlagByScheme
        scheme    = 'settings.chartOptions.scales.x.ticks.display'
        title     = 'display'
        toolTitle = 'Показать/скрыть'
      />
      <ChartSetColorByScheme
        scheme    = 'settings.chartOptions.scales.x.ticks.color'
        title     = 'color'
        toolTitle = 'Настроить цвет'
      />
    </>
  )
});
