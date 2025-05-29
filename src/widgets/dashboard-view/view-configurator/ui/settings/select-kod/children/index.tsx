import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ViewItem } from 'entities/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import { FlagByScheme } from '../../../base-features-components/by-scheme/flag-by-scheme';
import { GetFromGlobalKod } from '../../../base-features-components/get-from-global-kod';
import { ChipBySelectedItem } from 'entities/statistic-type';
import { Tooltip } from 'shared/ui/tooltip';
import { FlagFromGlobalKod } from './flag-from-global-kod';



interface Props {
  selectedItem : ViewItem | undefined
  disabled     : boolean
}

/** Вставка для RowSelectByField */
export const RowSelectKodChildren: FC<Props> = memo(({ selectedItem, disabled }) => {

  return (
    <>
      {
        selectedItem?.type === 'box' && <>
          <Typography sx={{ fontSize: pxToRem(12) }}>isGlobalKod</Typography>
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
          <FlagFromGlobalKod
            scheme       = 'settings.fromGlobalKod'
            selectedItem = {selectedItem} 
          />
          <ChipBySelectedItem />
          {
            disabled && <Tooltip title={disabled ? 'Чтобы выбрать другой код, снимите галку с "fromGlobalKod".' : ''}>
              <GetFromGlobalKod type={selectedItem?.settings?.chipType} />
            </Tooltip>
          }
        </Box>)
      }
    </>
  )
});
