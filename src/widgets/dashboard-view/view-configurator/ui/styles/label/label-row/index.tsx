import { FC, memo } from 'react';
import { pxToRem } from 'shared/styles';
import { RowInputByScheme } from '../../../base-features-components';



export const LabelRow: FC = memo(() => {
  return (
    <RowInputByScheme
      scheme    = 'label'
      title     = 'Заголовок'
      toolTitle = 'Заголовок'
      width     = '100%'
      sx={{
        input: {
          fontSize : `${pxToRem(18)} !important`,
          height   : pxToRem(40),
        }
      }}
    />
  )
});
