import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField, CardItemId } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';
import { ChangeStyleTextfieldNumberItem } from '../../indents/textfield-number-item';
import { BorderStyle } from './border-style';



interface Props {
  cardItemId  : CardItemId
  borderColor : string | undefined
  onChange    : (field: ItemStylesField, value: number | string) => void
}

/** border: width style color */
export const Border: FC<Props> = memo(({ cardItemId, borderColor = 'none', onChange }) => {

  const handleSubmitWidth = (field: ItemStylesField, value: number | string) => onChange('borderWidth', value);
  const handleSubmitColor = (value: string) => onChange('borderColor', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border' toolTitle='border' bold />

      <Box sx={{ ...f('-c-fe') }}>
        <Box sx={{ ...f('-c-fe') }}>
          <ChangeStyleTextfieldNumberItem
            field        = 'borderWidth'
            cardItemId   = {cardItemId}
            onCallback   = {handleSubmitWidth}
            onSubmit     = {handleSubmitWidth}
          />
          <Typography ml={1}>px</Typography>
        </Box>
        
        <BorderStyle
          cardItemId = {cardItemId}
          onChange   = {onChange}
        />

        <ColorPicker
          defaultColor = {borderColor}
          onChange     = {handleSubmitColor}
        />
      </Box>
    </RowWrapper>
  )
});
