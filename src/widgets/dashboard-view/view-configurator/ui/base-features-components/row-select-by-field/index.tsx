import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { ViewItem } from 'entities/dashboard-view';
import { f } from 'shared/styles';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { FlagByScheme } from '../flag-by-scheme';
import { SelectByField } from '../select-by-field';
import { GetFromGlobalKod } from '../get-from-global-kod';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
  title        : string
  toolTitle    : string
  array        : string[] | any[] // any if component present
  component?   : FC<any> // Если нужен не стандартный компонент вместо item
}

export const RowSelectByField: FC<Props> = memo(({ selectedItem, scheme, title, toolTitle, array, component }) => {
  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      <Box sx={f('-c')}>
        {
          selectedItem?.type === 'box' && <>
            isGlobalKod
            <FlagByScheme
              scheme       = 'settings.isGlobalKod'
              title        = 'isGlobalKod'
              toolTitle    = 'Если true, то это kod, будет автоматически подтягиваться всем children у которых стоит галка (fromGlobalKod)'
              selectedItem = {selectedItem} 
              sx           = {{ root: { my: 2 } }}
            />
          </>
        }
        {
          ( selectedItem?.type === 'chip' ||
            selectedItem?.type === 'digitIndicator' ||
            selectedItem?.type === 'growthIcon') && (<Box sx={{ ...f('-c'), gap: 2, my: 2 }}>
            fromGlobalKod
            <FlagByScheme
              scheme       = 'settings.fromGlobalKod'
              title        = 'fromGlobalKod'
              toolTitle    = 'Если true, то kod будет автоматически подтягиваться от ближайшего parent у которых стоит галка (isGlobalKod)'
              selectedItem = {selectedItem} 
              // sx           = {{ root: {  } }}
            />
            <GetFromGlobalKod />
          </Box>)
        }
        <SelectByField
          scheme       = {scheme}
          disabled     = {selectedItem?.settings?.fromGlobalKod}
          array        = {array}
          component    = {component}
          selectedItem = {selectedItem}
        />
      </Box>
    </RowWrapper>
  )
});
