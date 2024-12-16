import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'app/styles';
import { ChangeStyleTextfieldNumberItem as NumberItem } from '../textfield-number-item';
import { StyleItemWrapper } from '../style-item-wrapper';



const useStyles = (bold?: boolean) => ({
  root: {
    ...f('c'),
    mb : 1,
    py : 0.5,
  },
  row: {
    ...f('-fs-sb'),
  },
  title: {
    fontWeight: bold ? 'bold' : 'normal',
    textShadow: bold ? '1px 1px 8px #9e9e9e' : 'none',
  },
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
  const sx = useStyles(bold);


  return (
    <Box sx={sx.root}>
      <Box sx={sx.row}>
        <StyleItemWrapper>
          <Tooltip title={toolTitle} sxRoot={{ cursor: 'default' }}>
            <Typography sx={sx.title}>{title}</Typography>
          </Tooltip>
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
