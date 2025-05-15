import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { RowFlagByScheme } from '../../../base-features-components/row-flag-by-scheme';



interface Props {
  selectedItem: ViewItem | undefined
}

/** При отсутствии изменений в результатах красить чёрным цветом */
export const UnchangedBlack: FC<Props> = memo(({ selectedItem }) => {
  return (
    <RowFlagByScheme
      scheme       = 'settings.unchangedBlack'
      title        = 'UnchangedBlack'
      toolTitle    = 'При отсутствии изменений в результатах красить чёрным цветом'     
      selectedItem = {selectedItem} 
    />
  )
});
