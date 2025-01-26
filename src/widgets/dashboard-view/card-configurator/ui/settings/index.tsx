import { FC, memo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { CardItemChartSettingsConfigurator } from './settings-chart';
import { CardItemChipSettingsConfigurator } from './settings-chip';
import { CardItemGrowthIconSettingsConfigurator } from './settings-growth-icon';
import { CardItemDigitIndicatorSettingsConfigurator } from './settings-digit-indicator';



export const CardItemConfiguratorSettings: FC = memo(() => {
  const { selectedItem } = useDashboardView();

       if (selectedItem?.type === 'chart')          return <CardItemChartSettingsConfigurator />
  else if (selectedItem?.type === 'chip')           return <CardItemChipSettingsConfigurator />
  else if (selectedItem?.type === 'growthIcon')     return <CardItemGrowthIconSettingsConfigurator />
  else if (selectedItem?.type === 'digitIndicator') return <CardItemDigitIndicatorSettingsConfigurator />

  else return (<></>)
});
