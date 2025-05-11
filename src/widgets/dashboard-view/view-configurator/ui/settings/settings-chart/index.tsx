import { FC, memo } from 'react';
import { ChartLegends } from './chart-legends';
import { InvertedData } from '../inverted-data';
import { ViewItemChartSettingsList } from './chart-list';
import { ViewItemChartScaleYSettings } from './y-settings';
import { ViewItemChartScaleXSettings } from './x-settings';
import { ChartCutout } from './cutout';



/** Вкладка Settings для графиков */
export const ViewItemChartSettingsConfigurator: FC = memo(() => {
  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />
      <ChartLegends />
      <ChartCutout />

      {/* Individual charts settings */}
      <ViewItemChartSettingsList />
      {/* TODO: возможность добавлять графики */}

      <ViewItemChartScaleYSettings />
      <ViewItemChartScaleXSettings />
    </>
  )
});
