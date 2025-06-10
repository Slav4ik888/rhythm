import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { RowFlagByScheme } from '../../../../../../base-features-components';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Отображение линии тренда */
export const ChartTrendCheckbox: FC<Props> = memo(({ index, selectedItem }) => (
  <RowFlagByScheme
    selectedItem = {selectedItem}
    scheme       = {`settings.charts.[${index}].isTrend`}
    title        = 'Is trend'
    toolTitle    = 'Отображение линии тренда'
  />
));
