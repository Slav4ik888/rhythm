import { FC, memo } from 'react';
import { RowInputByScheme } from '../../../base-features-components';



/** Set line-height */
export const LineHeightRow: FC = memo(() => {
  return (
    <RowInputByScheme
      scheme    = 'styles.lineHeight'
      type      = 'number'
      title     = 'line-height'
      toolTitle = 'line-height'
      width     = '5rem'
    />
  )
});
