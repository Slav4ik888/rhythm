import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { pxToRem } from 'shared/styles';
import { RowInputByScheme } from '../../../base-features-components';



interface Props {
  selectedItem: ViewItem | undefined
}

export const LabelRow: FC<Props> = memo(({ selectedItem }) => {
  return (
    <RowInputByScheme
      scheme       = 'label'
      title        = 'Заголовок'
      toolTitle    = 'Заголовок'
      width        = '100%'
      selectedItem = { selectedItem }
      sx={{
        input: {
          fontSize : `${pxToRem(18)} !important`,
          height   : pxToRem(40),
        }
      }}
      onChange={() => { }} // Чтобы при вводе текста не происходило обновления
    />
  )
});
