import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { RowInputByScheme } from '../../../base-features-components';



interface Props {
  selectedItem: ViewItem | undefined
}

/** border-radius */
export const BorderRadiusRow: FC<Props> = memo(({ selectedItem }) => (
  <RowInputByScheme
    scheme       = 'styles.borderRadius'
    type         = 'number'
    title        = 'Border-radius' 
    toolTitle    = 'Border-radius' 
    width        = '3rem'
    selectedItem = {selectedItem}
  />
));
