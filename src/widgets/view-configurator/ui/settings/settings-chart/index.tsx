import { FC, memo } from 'react';
import { ChartLegends } from './chart-legends';
import { ViewItemChartSettingsList } from './chart-list';
import { ViewItemChartScaleYSettings } from './y-settings';
import { ViewItemChartScaleXSettings } from './x-settings';
import { ChartCutout } from './cutout';
import { ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings для графиков */
export const ViewItemChartSettingsConfigurator: FC<Props> = memo(({ selectedItem }) => (
  <>
    {/* GLOBAL SETTINGS */}
    {/* <InvertedData selectedItem={selectedItem} /> */}
    <ChartLegends selectedItem={selectedItem} />
    <ChartCutout  selectedItem={selectedItem} />

    {/* Individual charts settings */}
    <ViewItemChartSettingsList selectedItem={selectedItem} />
    {/* TODO: возможность добавлять графики */}

    <ViewItemChartScaleYSettings selectedItem={selectedItem} />
    <ViewItemChartScaleXSettings selectedItem={selectedItem} />
  </>
));
