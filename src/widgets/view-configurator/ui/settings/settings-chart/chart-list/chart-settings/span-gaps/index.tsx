import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { RowFlagByScheme } from '../../../../../base-features-components';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Разрыв линии при отсутствии данных */
export const ChartSpanGaps: FC<Props> = memo(({ index, selectedItem }) => (
  <RowFlagByScheme
    selectedItem = {selectedItem}
    scheme       = {`settings.charts.[${index}].datasets.spanGaps`}
    title        = 'SpanGaps'
    toolTitle    = 'Разрыв линии при отсутствии данных'
  />
  // <RowWrapper>
  //   <ConfiguratorTextTitle bold title='SpanGaps' toolTitle='Разрыв линии при отсутствии данных' />
  //   <Checkbox
  //     size       = 'small'
  //     checked    = {checked}
  //     inputProps = {{ 'aria-label': 'spanGaps' }}
  //     onChange   = {handleToggle}
  //   />
  // </RowWrapper>
));
