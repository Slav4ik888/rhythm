import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectChipType } from './select-chip';
import { useDashboardView } from 'entities/dashboard-view';
import { SetupChipsColorsByType } from './setup-chips-colors-by-type';
import { SelectKod } from '../select-kod';



/** Вкладка Settings for Chip */
export const CardItemChipSettingsConfigurator: FC = memo(() => {
  const { selectedItem } = useDashboardView();
  

  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />

      {/* CHIP SETTINGS */}
      <SelectKod />
      <SelectChipType />

      {
        selectedItem.settings?.chipType === 'period'
          ? < SetupChipsColorsByType  type='periodType' />
          : null
      }
      {
        selectedItem.settings?.chipType === 'company'
          ? < SetupChipsColorsByType  type='companyType' />
          : null
      }
      {
        selectedItem.settings?.chipType === 'product'
          ? < SetupChipsColorsByType  type='productType' />
          : null
      }
    </>
  )
});
