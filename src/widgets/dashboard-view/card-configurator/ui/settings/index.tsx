import { FC, memo, useCallback } from 'react';
import { useDashboardView, CardItemSettingsField } from 'entities/dashboard-view';
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
import { ChartYGridDisplay } from './scales/y-grid-display';



/** Вкладка Settings для графиков */
export const CardItemChartSettingsConfigurator: FC = memo(() => {
  // const { selectedId, selectedItem, entities, changeOneSettingsField } = useDashboardView();

  /** Сохраняем изменения settings элементов в store */
  // const handleChange = useCallback((field: CardItemSettingsField, value: any) => {
  //   changeOneSettingsField({ field, value });
  // }, [selectedId, entities, changeOneSettingsField]);


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

      {/* Настройки Оси Y */}
      <ChartYGridDisplay />
    </>
  )
});
