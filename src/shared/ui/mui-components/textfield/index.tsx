import { FC, ChangeEvent, forwardRef } from 'react';
import { Errors } from 'shared/lib/validators';
import StyledTextField from './styled'
import { getErrorFieldByScheme } from '../../containers';



interface Props {
  defaultValue : string
  scheme       : string
  fullWidth?   : boolean
  disabled?    : boolean
  label?       : string
  name?        : string
  size?        : 'small' | 'medium'
  tabIndex?    : number
  errors?      : Errors
  sx?          : any
  onCancel?    : () => void
  onChange     : (e: ChangeEvent<HTMLInputElement>, scheme: string) => void
  onSubmit?    : () => void
}


const TextFieldItem: FC<Props> = forwardRef(({ disabled, scheme, errors, fullWidth = true,
  onCancel, onChange, onSubmit, ...rest }, ref
) => (
  // @ts-ignore
  <StyledTextField
    {...rest}
    // @ts-ignore
    inputRef        = {ref}
    fullWidth       = {fullWidth}
    disabled        = {disabled}
    InputLabelProps = {{ shrink: true }}
    ownerState      = {{ disabled }}
    onKeyUp         = {(e: any) => {
      if (e.key === 'Enter') {
        // Prevent's default 'Enter' behavior.
        e.defaultMuiPrevented = true;
        onChange(e, scheme);
      }
    }}
    // onClick         = {onClick}
    // onBlur          = {handlerBlur}
    slotProps       = {{ inputLabel: { shrink: true } }}
    onChange   = {(e: any) => onChange(e, scheme)}
    error      = {errors?.[getErrorFieldByScheme(scheme)] ? true : false}
    helperText = {errors?.[getErrorFieldByScheme(scheme)]}
  />
));

export default TextFieldItem;
