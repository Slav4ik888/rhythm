import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { ViewItemChartSettingsConfigurator as ChartSettings } from './settings-chart';
import { ViewItemChipSettingsConfigurator as ChipSettings } from './settings-chip';
import { ViewItemGrowthIconSettingsConfigurator as GrowthIconSettings } from './settings-growth-icon';
import { ViewItemDigitIndicatorSettingsConfigurator as DigitIndicatorSettings } from './settings-digit-indicator';
import { ViewItemBoxSettingsConfigurator as BoxSettings } from './settings-box';



interface Props {
  selectedItem: ViewItem | undefined
}

export const ViewItemConfiguratorSettings: FC<Props> = memo(({ selectedItem: item }) => {
  if (item?.type === 'box')            return <BoxSettings            selectedItem={item} />
  if (item?.type === 'chart')          return <ChartSettings          selectedItem={item} />
  if (item?.type === 'chip')           return <ChipSettings           selectedItem={item} />
  if (item?.type === 'growthIcon')     return <GrowthIconSettings     selectedItem={item} />
  if (item?.type === 'digitIndicator') return <DigitIndicatorSettings selectedItem={item} />

  return (<></>)
});
