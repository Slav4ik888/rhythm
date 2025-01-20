import { FC, memo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { CardItemChartSettingsConfigurator } from './settings-chart';
import { CardItemChipSettingsConfigurator } from './settings-chip';
import { CardItemGrowthIconSettingsConfigurator } from './settings-growth-icon';



export const CardItemConfiguratorSettings: FC = memo(() => {
  const { selectedItem } = useDashboardView();

       if (selectedItem?.type === 'chart')      return <CardItemChartSettingsConfigurator />
  else if (selectedItem?.type === 'chip')       return <CardItemChipSettingsConfigurator />
  else if (selectedItem?.type === 'growthIcon') return <CardItemGrowthIconSettingsConfigurator />

  else return (<></>)
});
