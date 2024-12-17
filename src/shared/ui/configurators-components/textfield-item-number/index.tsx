import { FC, memo, MouseEvent } from 'react';
import { TextField } from 'shared/ui/containers';



const useStyles = (width?: string) => ({
  textfield: {
    field: {
      width: width ? width : '80px',
    },
    input: {
      padding: '2px 4px',
    }
  }
});


interface Props {
  defaultValue : number | string | undefined
  disabled?    : boolean
  autoFocus?   : boolean
  width?       : string
  onSubmit     : (e: MouseEvent, value: number | string) => void
}


export const TextfieldItemNumber: FC<Props> = memo(({ defaultValue = '', disabled, autoFocus, width, onSubmit }) => {
  const sx = useStyles(width);

  return (
    <TextField
      small
      type         = 'number'
      defaultValue = {defaultValue}
      autoFocus    = {autoFocus}
      disabled     = {disabled}
      sx           = {sx.textfield}
      onBlur       = {onSubmit}
      onSubmit     = {onSubmit}
    />
  )
});
