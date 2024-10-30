import { FC, FocusEventHandler, memo, MouseEvent, useEffect, useRef } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { GridWrap } from '../../grid-wrap';
import { BoxWrap } from '../../box-wrap';
import { Tooltip } from '../../../tooltip';
import { useValue } from 'shared/lib/hooks';
import { Errors, isNotUndefined } from 'shared/lib/validators';
import { GridStyle } from '../../grid-wrap';



const useStyles = (sx: any | undefined) => ({
  textField: {
    // backgroundColor: '#ffffff',
    ...sx?.bg,

    '& .MuiInputBase-root': {
      // backgroundColor: '#ffffff',
      ...sx?.field
    },
    '& .MuiInputLabel-root': {
      // top: '7px'
    }
  }
});


interface Props {
  grid?         : GridStyle
  sx?           : any
  toolTitle?    : string
  label?        : string // The label content
  type?         : 'text' | 'number' | 'password' | 'email'
  name?         : string
  small?        : boolean
  shrink?       : boolean
  fullWidth?    : boolean
  defaultValue? : string | number
  changesValue? : string | number // If value can be changes in any place, but not here
  disabled?     : boolean
  isChange?     : boolean // Нужно ли делать setIsChange(true) при handlerBlur
  placeholder?  : string
  errorField?   : string
  errors?       : Errors
  autoFocus?    : boolean
  tabIndex?     : number
  onTransform?  : <T, V>(v: T) => V // Transform default value
  onPrepeare?   : (v: string | number) => void // Transform input value before save
  onClick?      : () => void
  onBlur?       : (e: MouseEvent, v: string | number) => void
  onCallback?   : () => void // Calls in handlerChange
  onSubmit?     : (e: MouseEvent, v: string | number) => void
}

/**
 * v.2023-11-24
 * @param onPrepeare - обрабатывать введённое значение ДО сохранения в onPrepeare
 */
export const TextField: FC<Props> = memo((props) => {
  const
    {
      grid, toolTitle, label, errors, name, defaultValue, tabIndex, changesValue, autoFocus, small, placeholder, shrink, disabled,
      type       = 'text',
      errorField = '',
      fullWidth  = true,
      sx: sxTextfield,
      onPrepeare, onClick, onBlur, onCallback, onSubmit, onTransform
    } = props,

    sx       = useStyles(sxTextfield),
    Wrap     = grid ? GridWrap : BoxWrap,
    focusRef = useRef(null),
    typeNum  = type === 'number',
    S        = useValue(defaultValue as string | number || (typeNum ? 0 : ''));
    
  
  useEffect(() => {
    // @ts-ignore
    autoFocus && focusRef.current && focusRef.current.focus();

    if (onTransform) { // If need transform default value
      const value = onTransform<string | number, string | number>(S.value);
      S.setValue(value);
    }
  }, []);


  useEffect(() => {
    if (isNotUndefined(changesValue) && ! onTransform) {
      S.setValue(changesValue as string | number);
    }
  }, [changesValue]);


  const handlerChange = (e: any) => {
    if (disabled) return null;

    const value = onPrepeare ? onPrepeare(e.target.value) : e.target.value;
    S.setValue(typeNum ? Number(value) : value);

    onCallback && onCallback();
    if (e.keyCode === 13) {
      onSubmit && onSubmit(e, S.value);
    }
    else if (e.keyCode === 27) {
      onBlur && onBlur(e, S.value);
      // @ts-ignore
      // focusRef.current && focusRef.current.blur();
    }
  };
  

  const handlerBlur = (e: any) => {
    onCallback && onCallback();
    onBlur && onBlur(e, S.value);
  };

  
  return (
    <Wrap {...props}>
      <Tooltip title={toolTitle || ""}>
        <MuiTextField
          label           = {label}
          type            = {type}
          name            = {name}
          fullWidth       = {fullWidth}
          size            = {small ? "small" : "medium"}  
          sx              = {sx.textField}
          disabled        = {disabled}
          placeholder     = {placeholder}
          value           = {S.value} 
          inputRef        = {focusRef}
          autoFocus       = {autoFocus}
          tabIndex        = {tabIndex}
          onChange        = {handlerChange}
          onKeyUp         = {(event: any) => {
                              if (event.key === 'Enter') {
                                // Prevent's default 'Enter' behavior.
                                event.defaultMuiPrevented = true;
                                handlerChange(event)
                              }
                            }}
          onClick         = {onClick}
          onBlur          = {handlerBlur}
          InputLabelProps = {{ shrink }}
          error           = {errors?.[errorField] ? true : false}
          helperText      = {errors?.[errorField]}
        />
      </Tooltip>
    </Wrap>
  )
});
