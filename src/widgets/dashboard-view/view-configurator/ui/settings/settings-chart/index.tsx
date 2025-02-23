import { FC, memo } from 'react';
import { ChartLegends } from './chart-legends';
import { InvertedData } from '../inverted-data';
import { ViewItemChartSettingsList } from './chart-list';
import { ViewItemChartScaleYSettings } from './y-settings';
import { ViewItemChartScaleXSettings } from './x-settings';



/** Вкладка Settings для графиков */
export const ViewItemChartSettingsConfigurator: FC = memo(() => {
  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />
      <ChartLegends />

      {/* Individual charts settings */}
      <ViewItemChartSettingsList />
      {/* TODO: возможность добавлять графики */}

      <ViewItemChartScaleYSettings />
      <ViewItemChartScaleXSettings />
    </>
  )
});
