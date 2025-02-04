import { FC, memo } from 'react';
import { RowFlagByScheme } from '../../base-features-components/row-flag-by-scheme';



/** 
 * График перевёрнутый или нет. Пример - если задолженность уменьшается то это рост
 */
export const InvertedData: FC = memo(() => {
  return (
    <RowFlagByScheme
      scheme    = 'settings.inverted'
      title     = 'Inverted'
      toolTitle = 'Перевёрнутый график или нет. Пример - если задолженность уменьшается то это рост'
      sx        = {{ mt: 2 }}
    />
  )
});
