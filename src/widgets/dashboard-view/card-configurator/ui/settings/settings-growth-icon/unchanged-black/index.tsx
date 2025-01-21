import { FC, memo } from 'react';
import { FlagByScheme } from '../../flag-by-scheme';



/** При отсутствии изменений в результатах красить чёрным цветом */
export const UnchangedBlack: FC = memo(() => {
  return (
    <FlagByScheme
      scheme    = 'settings.unchangedBlack'
      title     = 'UnchangedBlack'
      toolTitle = 'При отсутствии изменений в результатах красить чёрным цветом'     
    />
  )
});
