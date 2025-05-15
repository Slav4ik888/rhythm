import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { RowInputByScheme } from '../../../base-features-components/row-input-by-scheme';



interface Props {
  selectedItem: ViewItem | undefined
}

/** ScaleValue */
export const ScaleValue: FC<Props> = memo(({ selectedItem }) => {
  return (
    <RowInputByScheme
      scheme       = 'settings.scale'
      type         = 'number'
      title        = 'ScaleValue'
      toolTitle    = 'Увеличить размер треугольника'
      width        = '3rem'
      selectedItem = {selectedItem} 
    />
  )
});
