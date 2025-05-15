import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectKod } from '../select-kod';
import { UnchangedBlack } from './unchanged-black';
import { IsLeft } from './is-left';
import { ScaleValue } from './scale-value';
import { ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings for GrowthIcon */
export const ViewItemGrowthIconSettingsConfigurator: FC<Props> = memo(({ selectedItem }) => {

  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData selectedItem={selectedItem} />

      {/* GROWTH ICON SETTINGS */}
      <SelectKod      selectedItem={selectedItem} />
      <UnchangedBlack selectedItem={selectedItem} />
      <IsLeft         selectedItem={selectedItem} />
      <ScaleValue     selectedItem={selectedItem} />
    </>
  )
});
