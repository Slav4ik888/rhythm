import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { ChangeStyleTextfieldNumberItem } from '../../indents/textfield-number-item';



interface Props {
  cardItemId : CardItemId
  // defaultValue : number | string | undefined
  onChange   : (field: ItemStylesField, value: number | string) => void
}


/** border-radius */
export const BorderRadius: FC<Props> = memo(({ cardItemId, onChange }) => {
  
  const handleSubmit = (field: ItemStylesField, value: number | string) => onChange('borderRadius', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border-radius' toolTitle='border-radius' bold />

      <Box sx={{ ...f('-c') }}>
        <ChangeStyleTextfieldNumberItem
          field        = 'borderRadius'
          cardItemId   = {cardItemId}
          onCallback   = {handleSubmit}
          onSubmit     = {handleSubmit}
        />
        {/* <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {defaultValue}
          width        = '40px'
          onCallback   = {handleSubmit}
          onSubmit     = {handleSubmit}
        /> */}
        <Typography ml={1}>px</Typography>
      </Box>
    </RowWrapper>
  )
});
