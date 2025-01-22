import { FC, memo } from 'react';
import { RowFlagByScheme } from '../../../base-features-components/row-flag-by-scheme';



/** При отсутствии изменений в результатах красить чёрным цветом */
export const UnchangedBlack: FC = memo(() => {
  return (
    <RowFlagByScheme
      scheme    = 'settings.unchangedBlack'
      title     = 'UnchangedBlack'
      toolTitle = 'При отсутствии изменений в результатах красить чёрным цветом'     
    />
  )
});
