import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { RowInputByScheme } from '../../../base-features-components';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Set fontSize */
export const FontSizeRow: FC<Props> = memo(({ selectedItem }) => {
  return (
    <RowInputByScheme
      scheme       = 'styles.fontSize'
      type         = 'number'
      title        = 'font-size'
      toolTitle    = 'font-size'
      width        = '5rem'
      selectedItem = {selectedItem}
    />
  )
});
