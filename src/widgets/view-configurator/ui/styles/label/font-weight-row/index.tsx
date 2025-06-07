import { FC, memo } from 'react';
import { arrayFontWeights, ViewItem } from 'entities/dashboard-view';
import { RowSelectByField } from '../../../base-features-components';



interface Props {
  scheme       : string
  selectedItem : ViewItem | undefined
}

/** Set fontWeight */
export const FontWeightRow: FC<Props> = memo(({ selectedItem, scheme }) => {
  return (
    <RowSelectByField
      scheme       = {scheme}
      title        = 'font-weight'
      toolTitle    = 'font-weight'
      array        = {arrayFontWeights}
      selectedItem = {selectedItem}
    />
  )
});
