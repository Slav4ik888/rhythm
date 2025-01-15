import { FC, memo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { CardItemChartSettingsConfigurator } from './settings-chart';
import { CardItemChipSettingsConfigurator } from './setting-chip';



export const CardItemConfiguratorSettings: FC = memo(() => {
  const { selectedItem } = useDashboardView();

  if (selectedItem?.type === 'chart') return <CardItemChartSettingsConfigurator />
  if (selectedItem?.type === 'chip') return <CardItemChipSettingsConfigurator />

  else return (<></>)
});
