import { FC, memo } from 'react';
import { FlagByScheme } from '../../flag-by-scheme';



/** При отсутствии изменений чёрный треугольник повернуть влево */
export const IsLeft: FC = memo(() => {
  return (
    <FlagByScheme
      scheme    = 'settings.isLeft'
      title     = 'IsLeft'
      toolTitle = 'При отсутствии изменений чёрный треугольник повернуть влево'     
    />
  )
});
