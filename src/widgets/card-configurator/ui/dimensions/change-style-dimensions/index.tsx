import { FC, memo, MouseEvent, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ItemStylesField } from 'entities/card-item';
import { TextField } from 'shared/ui/containers';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'app/styles';
import { isNum, isStr, isUndefined } from 'shared/lib/validators';
import { SelectValue } from './select';



const useStyles = (bold?: boolean) => ({
  root: {
    ...f('-c-sb'),
    py : 0.5,
  },
  title: {
    fontWeight: bold ? 'bold' : 'normal',
  },
  inPx: {
    ...f('-c'),
  },
  textfield: {
    field: {
      width: '100px',
    },
    input: {
      padding: '2px 4px',
    }
  }
});


interface Props {
  title        : string
  bold?        : boolean
  toolTitle    : string
  field        : ItemStylesField
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}

/** Размеры */
export const ChangeStyleItemDimensions: FC<Props> = memo(({ field, bold, toolTitle, title, defaultValue = '', onChange }) => {
  const sx = useStyles(bold);
  const [selectedValue, setSelectedValue] = useState(isStr(defaultValue)
    ? defaultValue !== ''
      ? defaultValue as string // Если строка и она не пуста
      : '-'
    : 'in px'); // Если не строка или она пуста то это число
  
  const [isValueNumber, setIsValuerNumber] = useState(isNum(defaultValue) || isUndefined(defaultValue));


  const handleSubmit = (e: MouseEvent, value: number | string) => {
    onChange(field, value);
  };


  const handleSelectedValue = (selected: string) => {
    setSelectedValue(selected);

    if (selected !== 'in px') return onChange(field, selected);

    setIsValuerNumber(true);
  };


  return (
    <Box sx={sx.root}>
      <Tooltip title={toolTitle} sxRoot={{ cursor: 'default' }}>
        <Typography sx={sx.title}>{title}</Typography>
      </Tooltip>

      <Box sx={sx.inPx}>
        {/* In px */}
        <TextField
          small
          type         = 'number'
          defaultValue = {defaultValue}
          disabled     = {! isValueNumber}
          sx           = {sx.textfield}
          onBlur       = {handleSubmit}
          onSubmit     = {handleSubmit}
        />

        {/* In text */}
        <SelectValue
          selectedValue = {selectedValue}
          array         = {['-', 'in px', '100%', 'auto', 'max-content', 'min-content']}
          onSelect      = {handleSelectedValue}
        />
      </Box>
    </Box>
  )
});
