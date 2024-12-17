import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { f } from 'app/styles';
import { ChangeStyleTextfieldNumberItem as NumberItem } from '../textfield-number-item';
import { StyleItemWrapper } from '../style-item-wrapper';
import { ConfiguratorTextTitle } from 'shared/ui/configurators-components';



const useStyles = () => ({
  root: {
    ...f('c'),
    mb : 1,
    py : 0.5,
  },
  row: {
    ...f('-fs-sb'),
  }
});


interface Props {
  title      : string
  bold?      : boolean
  toolTitle  : string
  baseField  : 'p' | 'm'
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number) => void
}

/** Отступы */
export const ChangeStyleItemIndents: FC<Props> = memo(({ baseField, bold, toolTitle, title, cardItemId, onChange }) => {
  const sx = useStyles();


  return (
    <Box sx={sx.root}>
      <Box sx={sx.row}>
        <StyleItemWrapper>
          <ConfiguratorTextTitle title={title} toolTitle={toolTitle} bold={bold} />
        </StyleItemWrapper>

        <NumberItem
          title      = 'Сверху'
          field      = {baseField + 't' as ItemStylesField}
          cardItemId = {cardItemId}
          onSubmit   = {onChange}
        />
        <NumberItem
          title      = 'Общие'
          field      = {baseField}
          cardItemId = {cardItemId}
          onSubmit   = {onChange}
        />
        <NumberItem
          title      = 'Верх/низ'
          field      = {baseField + 'y' as ItemStylesField}
          cardItemId = {cardItemId}
          onSubmit   = {onChange}
        />
      </Box>

      <Box sx={sx.row}>
        <NumberItem
          title      = 'Слева'
          field      = {baseField + 'l' as ItemStylesField}
          cardItemId = {cardItemId}
          onSubmit   = {onChange}
        />
        <NumberItem
          title      = 'Снизу'
          field      = {baseField + 'b' as ItemStylesField}
          cardItemId = {cardItemId}
          onSubmit   = {onChange}
        />
        <NumberItem
          title      = 'Справа'
          field      = {baseField + 'r' as ItemStylesField}
          cardItemId = {cardItemId}
          onSubmit   = {onChange}
        />
        <NumberItem
          title      = 'Прав/лев'
          field      = {baseField + 'x' as ItemStylesField}
          cardItemId = {cardItemId}
          onSubmit   = {onChange}
        />
      </Box>
    </Box>
  )
});
