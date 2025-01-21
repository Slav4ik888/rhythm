import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectKod } from '../select-kod';
import { UnchangedBlack } from './unchanged-black';
import { IsLeft } from './is-left';



/** Вкладка Settings for GrowthIcon */
export const CardItemGrowthIconSettingsConfigurator: FC = memo(() => {

  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />

      {/* GROWTH ICON SETTINGS */}
      <SelectKod />
      <UnchangedBlack />
      <IsLeft />
      {/* scaleValue      : number  | undefined */}
    </>
  )
});
