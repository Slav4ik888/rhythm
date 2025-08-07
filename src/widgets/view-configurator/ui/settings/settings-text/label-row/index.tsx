import { FC, memo } from 'react';
import { useDashboardViewState } from 'entities/dashboard-view';
import { pxToRem } from 'shared/styles';
import { RowInputByScheme } from '../../../base-features-components';



export const LabelRow: FC = memo(() => {
  const { selectedItem } = useDashboardViewState();

  return (
    <RowInputByScheme
      scheme       = 'label'
      title        = 'Заголовок'
      toolTitle    = 'Заголовок'
      width        = '100%'
      selectedItem = {selectedItem}
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
