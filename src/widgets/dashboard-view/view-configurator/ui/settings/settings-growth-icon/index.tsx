import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectKod } from '../select-kod';
import { UnchangedBlack } from './unchanged-black';
import { IsLeft } from './is-left';
import { ScaleValue } from './scale-value';



/** Вкладка Settings for GrowthIcon */
export const ViewItemGrowthIconSettingsConfigurator: FC = memo(() => {

  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />

      {/* GROWTH ICON SETTINGS */}
      <SelectKod />
      <UnchangedBlack />
      <IsLeft />
      <ScaleValue />
    </>
  )
});
