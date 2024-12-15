import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ItemStyles, ItemStylesField } from 'entities/card-item';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'app/styles';
import { ChangeStyleTextfieldNumberItem as NumberItem } from '../textfield-number-item';



const useStyles = (bold?: boolean) => ({
  root: {
    ...f('c'),
    mb : 1,
    py : 0.5,
  },
  row: {
    ...f('-c-sb'),
  },
  item: {
    ...f('c-c-c'),
  },
  title: {
    fontWeight: bold ? 'bold' : 'normal',
  },
});


interface Props {
  title      : string
  bold?      : boolean
  toolTitle  : string
  baseField  : 'p' | 'm'
  styles     : ItemStyles
  onChange   : (field: ItemStylesField, value: number) => void
}

/** Отступы */
export const ChangeStyleItemIndents: FC<Props> = memo(({ baseField, bold, toolTitle, title, styles, onChange }) => {
  const sx = useStyles(bold);


  return (
    <Box sx={sx.root}>
      <Box sx={sx.row}>
        <Box sx={sx.item}>
          <Tooltip title={toolTitle} sxRoot={{ cursor: 'default' }}>
            <Typography sx={sx.title}>{title}</Typography>
          </Tooltip>
        </Box>

        <NumberItem
          title        = 'Сверху'
          field        = {baseField + 't' as ItemStylesField}
          defaultValue = {styles[baseField + 't' as ItemStylesField]}
          onSubmit     = {onChange}
        />
        <NumberItem
          title        = 'Общие'
          field        = {baseField}
          defaultValue = {styles[baseField]}
          onSubmit     = {onChange}
        />
        <NumberItem
          title        = 'Верх/низ'
          field        = {baseField + 'y' as ItemStylesField}
          defaultValue = {styles[baseField + 'y' as ItemStylesField]}
          onSubmit     = {onChange}
        />
      </Box>

      <Box sx={sx.row}>
        <NumberItem
          title        = 'Слева'
          field        = {baseField + 'l' as ItemStylesField}
          defaultValue = {styles[baseField + 'l' as ItemStylesField]}
          onSubmit     = {onChange}
        />
        <NumberItem
          title        = 'Снизу'
          field        = {baseField + 'b' as ItemStylesField}
          defaultValue = {styles[baseField + 'b' as ItemStylesField]}
          onSubmit     = {onChange}
        />
        <NumberItem
          title        = 'Справа'
          field        = {baseField + 'r' as ItemStylesField}
          defaultValue = {styles[baseField + 'r' as ItemStylesField]}
          onSubmit     = {onChange}
        />
        <NumberItem
          title        = 'Прав/лев'
          field        = {baseField + 'x' as ItemStylesField}
          defaultValue = {styles[baseField + 'x' as ItemStylesField]}
          onSubmit     = {onChange}
        />
      </Box>
    </Box>
  )
});
