import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { BorderRow } from './border';
import { BorderRadiusRow } from './border-radius';
import { BoxShadowRow } from './box-shadow';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** Рамки */
export const Borders: FC<Props> = memo(({ selectedItem, onChange }) => {

  return (
    <SubHeader title='Рамка'>
      <BorderRow
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
      <BorderRadiusRow
        selectedItem = {selectedItem}
      />
      <BoxShadowRow
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
    </SubHeader>
  )
});
