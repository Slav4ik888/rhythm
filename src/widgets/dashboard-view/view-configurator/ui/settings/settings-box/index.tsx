import { FC, memo } from 'react';
import { RowFlagByScheme } from '../../base-features-components';
import { SelectKod } from '../select-kod';
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
        <SelectKod selectedItem={selectedItem} />
      </SubHeader>
    </>
  )
});
