import { FC, memo, MouseEvent, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ItemStylesField } from 'entities/card-item';
import { TextField } from 'shared/ui/containers';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'app/styles';
import { isStr } from 'shared/lib/validators';
import { SelectValue } from './select';



const useStyles = () => ({
  root: {
    ...f('--sb'),
    my : 1,
    p  : 1,
  },
});


interface Props {
  title        : string
  toolTitle    : string
  field        : ItemStylesField
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}


export const ChangeStyleItem: FC<Props> = memo(({ field, toolTitle, title, defaultValue = 0, onChange }) => {
  const sx = useStyles();
  const [selectedValue, setSelectedValue] = useState(isStr(defaultValue) ? defaultValue as string : 'in px');

  const handleSubmit = (e: MouseEvent, value: number | string) => {
    onChange(field, value);
  };


  const handleSelectedValue = (value: string) => {
    setSelectedValue(value);
  };


  return (
    <Box sx={sx.root}>
      <Tooltip title={toolTitle}>
        <Typography>{title}</Typography>
      </Tooltip>

      {/* In px */}
      <TextField
        small
        type         = 'number'
        defaultValue = {defaultValue}
        onBlur       = {handleSubmit}
        onSubmit     = {handleSubmit}
      />
      <Typography>px</Typography>

      {/* In text */}
      <SelectValue
        selectedValue = {selectedValue}
        array         = {['in px', '100%', 'auto', 'max-content', 'min-content']}
        onSelect      = {handleSelectedValue}
      />

    </Box>
  )
});
