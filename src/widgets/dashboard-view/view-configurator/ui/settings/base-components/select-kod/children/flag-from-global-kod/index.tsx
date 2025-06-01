import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ViewItem } from 'entities/dashboard-view';
import { FlagByScheme } from '../../../../../base-features-components/by-scheme/flag-by-scheme';
import { f, pxToRem } from 'shared/styles';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
}

export const FlagFromGlobalKod: FC<Props> = memo(({ selectedItem, scheme }) => {
  return (
    <Box sx={{ ...f('-c')}}>
      <Typography sx={{ fontSize: pxToRem(12) }}>fromGlobalKod</Typography>
      
      <FlagByScheme
        scheme       = {scheme}
        title        = 'fromGlobalKod'
        toolTitle    = 'Если true, то kod будет автоматически подтягиваться от ближайшего parent у которых стоит галка (isGlobalKod)'
        selectedItem = {selectedItem} 
      />
    </Box>
  )
});
