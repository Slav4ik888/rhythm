import { FC, memo } from 'react';
import { SelectKodRow } from '../select-kod';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings for Box */
export const ViewItemBoxSettingsConfigurator: FC<Props> = memo(({ selectedItem }) => {
  return (
    <>
      <SubHeader title='Общие настройки'>
        <SelectKodRow selectedItem={selectedItem} />
      </SubHeader>
    </>
  )
});
