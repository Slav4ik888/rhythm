import { FC, memo } from 'react';
import { RowInputByScheme } from '../../../base-features-components';



/** border-radius */
export const BorderRadiusRow: FC = memo(() => (
  <RowInputByScheme
    scheme    = 'styles.borderRadius'
    type      = 'number'
    title     = 'Border-radius' 
    toolTitle = 'Border-radius' 
    width     = '3rem'
  />
));
