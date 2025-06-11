import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { RowFlagByScheme } from '../../../base-features-components/rows/row-flag-by-scheme';



interface Props {
  selectedItem: ViewItem | undefined
}

/** При отсутствии изменений чёрный треугольник повернуть влево */
export const IsLeft: FC<Props> = memo(({ selectedItem }) => (
  <RowFlagByScheme
    scheme       = 'settings.isLeft'
    title        = 'IsLeft'
    toolTitle    = 'При отсутствии изменений чёрный треугольник повернуть влево'
    selectedItem = {selectedItem}
  />
));
