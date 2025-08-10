import { FC, memo } from 'react';
import { useDashboardViewState } from 'entities/dashboard-view';
import { RowInputByScheme } from '../../../base-features-components';



export const ToolTitleRow: FC = memo(() => {
  const { selectedItem } = useDashboardViewState();

  return (
    <RowInputByScheme
      scheme       = 'settings.toolTitle'
      title        = 'ToolTitle'
      toolTitle    = 'Всплывающая подсказка (пояснение)'
      width        = '100%'
      selectedItem = {selectedItem}
      onChange     = {() => { }} // Чтобы при вводе текста не происходило обновления
    />
  )
});
