import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { RowFlagByScheme } from '../../../base-features-components';



interface Props {
  selectedItem: ViewItem | undefined
}

export const DisplayResultRow: FC<Props> = memo(({ selectedItem }) => (
  <RowFlagByScheme
    selectedItem = {selectedItem}
    scheme       = 'settings.displayResult'
    title        = 'Display result'
    toolTitle    = 'Показтать метки с выбранными параметрами'
  />
));
