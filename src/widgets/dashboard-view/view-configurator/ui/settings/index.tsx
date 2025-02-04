import { FC, memo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ViewItemChartSettingsConfigurator } from './settings-chart';
import { ViewItemChipSettingsConfigurator } from './settings-chip';
import { ViewItemGrowthIconSettingsConfigurator } from './settings-growth-icon';
import { ViewItemDigitIndicatorSettingsConfigurator } from './settings-digit-indicator';



export const ViewItemConfiguratorSettings: FC = memo(() => {
  const { selectedItem } = useDashboardView();

       if (selectedItem?.type === 'chart')          return <ViewItemChartSettingsConfigurator />
  else if (selectedItem?.type === 'chip')           return <ViewItemChipSettingsConfigurator />
  else if (selectedItem?.type === 'growthIcon')     return <ViewItemGrowthIconSettingsConfigurator />
  else if (selectedItem?.type === 'digitIndicator') return <ViewItemDigitIndicatorSettingsConfigurator />

  else return (<></>)
});
