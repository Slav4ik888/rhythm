import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItem } from 'entities/dashboard-view';
import { SelectKodRow } from '../base-components';
import { GaugeColumnParameters } from './parameters';
import { SelectDirectionRow } from './select-direction-row';
import { DisplayParametersRow } from './display-parameters-row';
import { ColorParametersRow } from './color-parameters-row';
// import { DisplayResultRow } from './display-result-row';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings for GaugeColumn */
export const ViewItemGaugeColumnSettingsConfigurator: FC<Props> = memo(({ selectedItem }) => (
  <>
    <SubHeader title='Базовые настройки'>
      <SelectKodRow         selectedItem={selectedItem} />
      <SelectDirectionRow   selectedItem={selectedItem} />
    </SubHeader>

    <SubHeader title='Настройки параметров'>
      <GaugeColumnParameters selectedItem = {selectedItem} />
    </SubHeader>

    <SubHeader title='Отображение меток'>
      <DisplayParametersRow selectedItem={selectedItem} />
      <ColorParametersRow   selectedItem={selectedItem} />
      {/* <DisplayResultRow     selectedItem={selectedItem} /> */}
    </SubHeader>
  </>
));
