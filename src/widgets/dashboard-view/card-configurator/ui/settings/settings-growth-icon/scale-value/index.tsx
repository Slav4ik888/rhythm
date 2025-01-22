import { FC, memo } from 'react';
import { RowInputByScheme } from '../../../base-features-components/row-input-by-scheme';



/** ScaleValue */
export const ScaleValue: FC = memo(() => {
  return (
    <RowInputByScheme
      scheme    = 'settings.scale'
      type      = 'number'
      title     = 'ScaleValue'
      toolTitle = 'Увеличить размер треугольника'
      width     = '3rem'
    />
  )
});
