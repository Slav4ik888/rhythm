import { FC, memo, MouseEvent } from 'react';
import { TextField } from 'shared/ui/containers';



const useStyles = (width?: string) => ({
  textfield: {
    field: {
      width: width ? width : '80px',
    },
    input: {
      textAlign : 'center',
      padding   : '2px 4px',
    }
  }
});


interface Props {
  type         : 'text' | 'number'
  defaultValue : number | string | undefined
  disabled?    : boolean
  autoFocus?   : boolean
  width?       : string
  onCallback?  : (e: MouseEvent, value: number | string) => void // Если нужно чтобы каждое изменение отображалось на экране
  onSubmit     : (e: MouseEvent, value: number | string) => void
}


export const ConfiguratorTextfieldItem: FC<Props> = memo(({ defaultValue = '', type, disabled, autoFocus, width, onCallback, onSubmit }) => {
  const sx = useStyles(width);

  return (
    <TextField
      small
      type         = {type}
      defaultValue = {defaultValue}
      autoFocus    = {autoFocus}
      disabled     = {disabled}
      sx           = {sx.textfield}
      onCallback   = {onCallback}
      onBlur       = {onSubmit}
      onSubmit     = {onSubmit}
    />
  )
});
