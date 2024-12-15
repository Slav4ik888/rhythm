import { FC, memo, MouseEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { ItemStylesField } from 'entities/card-item';
import { TextField } from 'shared/ui/containers';
import { f } from 'app/styles';



const useStyles = () => ({
  root: {
    ...f('c-c-c'),
  },
  smallTitle: {
    fontSize: '0.9rem',
    fontWeight: 'normal',
  },
  textfield: {
    field: {
      width: '80px',
    },
    input: {
      padding: '2px 4px',
    }
  }
});


interface Props {
  title        : string
  field        : ItemStylesField
  defaultValue : string | number | undefined
  onSubmit     : (field: ItemStylesField, value: number) => void
}


export const ChangeStyleTextfieldNumberItem: FC<Props> = memo(({ title, field, defaultValue, onSubmit }) => {
  const sx = useStyles();
  
  return (
    <Box sx={sx.root}>
      <TextField
        small
        type         = 'number'
        defaultValue = {defaultValue}
        sx           = {sx.textfield}
        onBlur       = {(e: MouseEvent, value: number | string) => onSubmit(field, value as number)}
        onSubmit     = {(e: MouseEvent, value: number | string) => onSubmit(field, value as number)}
      />
      <Typography sx={sx.smallTitle}>{title}</Typography>
    </Box>
  )
});
