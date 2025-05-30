import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectKodRow } from '../select-kod';
import { UnchangedBlack } from './unchanged-black';
import { IsLeft } from './is-left';
import { ScaleValue } from './scale-value';
import { ViewItem } from 'entities/dashboard-view';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings for GrowthIcon */
export const ViewItemGrowthIconSettingsConfigurator: FC<Props> = memo(({ selectedItem }) => {

  return (
    <>
      {/* GLOBAL SETTINGS */}
      <SubHeader title='Базовые настройки'>
        <SelectKodRow selectedItem={selectedItem} />
      </SubHeader>

      {/* GROWTH ICON SETTINGS */}
      <SubHeader title='Особые настройки'>
        <InvertedData   selectedItem={selectedItem} />
        <UnchangedBlack selectedItem={selectedItem} />
        <IsLeft         selectedItem={selectedItem} />
        <ScaleValue     selectedItem={selectedItem} />
      </SubHeader>
    </>
  )
});
