import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { RowSelectKodChildren } from '../children';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { SelectKod } from '../select-kod';



interface Props {
  selectedItem : ViewItem | undefined
}

/**  */
export const SelectKodRow: FC<Props> = memo(({ selectedItem }) => {
  const disabled = Boolean(selectedItem?.settings?.fromGlobalKod);

  return (
    <RowWrapperTitle title='Код' toolTitle='Укажите код статистики для элемента'>
      <Box sx={f('-c')}>
        <RowSelectKodChildren
          selectedItem = {selectedItem}
          disabled     = {disabled}
        />
        <SelectKod
          scheme       = 'settings.kod'
          selectedItem = {selectedItem}
        />
      </Box>
    </RowWrapperTitle>
  )
});
