import { FC, memo } from 'react';
import { InvertedData, SelectKodRow } from '../base-components';
import { SelectChipType } from './select-chip';
import { ViewItem } from 'entities/dashboard-view';
import { SetupChipsColorsByType } from './setup-chips-colors-by-type';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings for Chip */
export const ViewItemChipSettingsConfigurator: FC<Props> = memo(({ selectedItem }) => {
  return (
    <>
      <SubHeader title='Базовые настройки'>
        <InvertedData   selectedItem={selectedItem} />
        <SelectKodRow   selectedItem={selectedItem} />
        <SelectChipType selectedItem={selectedItem} />
      </SubHeader>

      {
        selectedItem?.settings?.chipType === 'period'
          ? < SetupChipsColorsByType  type='periodType' />
          : null
      }
      {
        selectedItem?.settings?.chipType === 'company'
          ? < SetupChipsColorsByType  type='companyType' />
          : null
      }
      {
        selectedItem?.settings?.chipType === 'product'
          ? < SetupChipsColorsByType  type='productType' />
          : null
      }
    </>
  )
});
