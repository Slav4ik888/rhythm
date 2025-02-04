import { FC, memo } from 'react';
import { RowInputByScheme } from '../../../base-features-components';



/** Set fontSize */
export const FontSizeRow: FC = memo(() => {
  return (
    <RowInputByScheme
      scheme    = 'styles.fontSize'
      type      = 'number'
      title     = 'font-size'
      toolTitle = 'font-size'
      width     = '5rem'
    />
  )
});
