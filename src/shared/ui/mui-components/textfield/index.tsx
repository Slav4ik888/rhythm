import { FC, ChangeEvent, forwardRef, MutableRefObject } from 'react';
import { Errors } from 'shared/lib/validators';
import StyledTextField from './styled'
import { getErrorFieldByScheme } from '../../containers';



interface Props {
  defaultValue? : string // If not ref present
  scheme        : string
  ref?          : MutableRefObject<null>
  fullWidth?    : boolean
  disabled?     : boolean
  label?        : string
  name?         : string
  size?         : 'small' | 'medium'
  tabIndex?     : number
  errors?       : Errors
  sx?           : any
  onCancel?     : () => void
  onChange?     : (e: ChangeEvent<HTMLInputElement>, scheme: string) => void
  onSubmit?     : () => void
}

// Define props without 'ref' for forwardRef compatibility
type TextFieldItemProps = Omit<Props, 'ref'>;


const TextFieldItem = forwardRef<null, TextFieldItemProps>((props, ref) => {
  const {
    disabled,
    scheme,
    errors,
    fullWidth = true,
    onCancel,
    onChange,
    onSubmit,
    ...rest
  } = props;

  return (
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
          onChange && onChange(e, scheme);
        }
      }}
      // onClick         = {onClick}
      // onBlur          = {handlerBlur}
      slotProps       = {{ inputLabel: { shrink: true } }}
      onChange   = {(e: any) => onChange && onChange(e, scheme)}
      error      = {errors?.[getErrorFieldByScheme(scheme)] ? true : false}
      helperText = {errors?.[getErrorFieldByScheme(scheme)]}
    />
  )
});

export default TextFieldItem;
