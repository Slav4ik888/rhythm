import { FC, memo, MouseEvent } from 'react';
import { SxCard } from 'shared/styles';
import { TextField } from 'shared/ui/containers';
import { Tooltip } from 'shared/ui/tooltip';



const useStyles = (sx?: SxCard, width?: string) => ({
  textfield: {
    bg: {
      ...sx?.bg,
    },
    field: {
      width: width ? width : '80px',
      ...sx?.field,
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
  toolTitle?   : string
  disabled?    : boolean
  autoFocus?   : boolean
  width?       : string
  sx?          : SxCard
  onCallback?  : (e: MouseEvent, value: number | string) => void // Если нужно чтобы каждое изменение отображалось на экране
  onSubmit     : (e: MouseEvent, value: number | string) => void
}


export const ConfiguratorTextfieldItem: FC<Props> = memo(({ defaultValue = '', toolTitle, sx: style, type, disabled, autoFocus, width, onCallback, onSubmit }) => {
  const sx = useStyles(style, width);

  return (
    <Tooltip title={toolTitle} sxSpan={{ width: '100%' }}>
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
    </Tooltip>
  )
});
