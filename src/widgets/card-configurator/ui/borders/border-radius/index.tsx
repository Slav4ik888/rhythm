import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { f } from 'app/styles';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { useDashboard } from 'entities/dashboard';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}


/** border-radius */
export const BorderRadius: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboard({ cardItemId, field: 'borderRadius' });
  
  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border-radius' toolTitle='border-radius' bold />

      <Box sx={{ ...f('-c') }}>
        <ChangeStyleItem
          value      = {styleValueByField as number}
          field      = 'borderRadius'
          width      = '3rem'
          onCallback = {onChange}
          onSubmit   = {onChange}
        />
        <Typography ml={1}>px</Typography>
      </Box>
    </RowWrapper>
  )
});
