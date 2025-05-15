import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { ViewItemChartSettingsConfigurator } from './settings-chart';
import { ViewItemChipSettingsConfigurator } from './settings-chip';
import { ViewItemGrowthIconSettingsConfigurator } from './settings-growth-icon';
import { ViewItemDigitIndicatorSettingsConfigurator } from './settings-digit-indicator';



interface Props {
  selectedItem: ViewItem | undefined
}

export const ViewItemConfiguratorSettings: FC<Props> = memo(({ selectedItem }) => {

       if (selectedItem?.type === 'chart')          return <ViewItemChartSettingsConfigurator          selectedItem={selectedItem} />
  else if (selectedItem?.type === 'chip')           return <ViewItemChipSettingsConfigurator           selectedItem={selectedItem} />
  else if (selectedItem?.type === 'growthIcon')     return <ViewItemGrowthIconSettingsConfigurator     selectedItem={selectedItem} />
  else if (selectedItem?.type === 'digitIndicator') return <ViewItemDigitIndicatorSettingsConfigurator selectedItem={selectedItem} />

  else return (<></>)
});
