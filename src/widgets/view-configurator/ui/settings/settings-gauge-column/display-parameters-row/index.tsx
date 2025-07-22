import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { RowFlagByScheme } from '../../../base-features-components';



interface Props {
  selectedItem: ViewItem | undefined
}

export const DisplayParametersRow: FC<Props> = memo(({ selectedItem }) => (
  <RowFlagByScheme
    selectedItem = {selectedItem}
    scheme       = 'settings.displayParameters'
    title        = 'Display parameters'
    toolTitle    = 'Показтать метки с выбранными параметрами'
  />
));
