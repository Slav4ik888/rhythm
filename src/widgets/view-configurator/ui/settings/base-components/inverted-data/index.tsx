import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { RowFlagByScheme } from '../../../base-features-components/rows/row-flag-by-scheme';



interface Props {
  selectedItem: ViewItem | undefined
}

/**
 * График перевёрнутый или нет. Пример - если задолженность уменьшается то это рост
 */
export const InvertedData: FC<Props> = memo(({ selectedItem }) => (
    <RowFlagByScheme
      scheme       = 'settings.inverted'
      title        = 'Inverted'
      toolTitle    = 'Перевёрнутый график или нет. Пример - если задолженность уменьшается то это рост'
      selectedItem = {selectedItem}
      sx           = {{ mt: 2 }}
    />
  ));
