import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItem } from 'entities/dashboard-view';
import { SelectKodRow } from '../base-components';
import { GaugeColumnParameters } from './parameters';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings for GaugeColumn */
export const ViewItemGaugeColumnSettingsConfigurator: FC<Props> = memo(({ selectedItem }) => (
  <>
    <SubHeader title='Базовые настройки'>
      <SelectKodRow   selectedItem={selectedItem} />
    </SubHeader>

    <SubHeader title='Особые настройки'>
      <GaugeColumnParameters selectedItem = {selectedItem} />
    </SubHeader>
  </>
));
