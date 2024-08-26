import { FC, memo, useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import { GridWrap } from '../../grid-wrap';
import { BoxWrap } from '../../box-wrap';
import { Tooltip } from 'shared/ui/tooltip';
import { getStrNumber, toNumber } from '../../../../helpers/numbers';
import { useValue } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { GridStyle } from '../../grid-wrap';
import { SxCard } from 'app/styles/types';




const useStyles = (sx: SxCard | undefined) => ({
  textField: {
    backgroundColor: '#ffffff',
    ...sx?.bg,

    '& .MuiInputBase-root': {
      backgroundColor: '#ffffff',
      ...sx?.field
    },
    '& .MuiInputLabel-root': {
      top: '7px'
    }
  }
});


type Props = {
  grid?         : GridStyle;
  box?          : boolean;
  // Tooltip
  toolTitle?    : string;
  // TextField
  label         : string;
  fullWidth?    : boolean;
  small?        : boolean;
  shrink?       : boolean;
  defaultValue? : number | string;
  disabled?     : boolean;
  errorField?   : string;
  sx?           : SxCard;
  autoFocus?    : boolean;
  changesValue? : number; // If value can be changes in any place, but not here
  // Control
  errors?       : Errors;
  onClick?      : () => void;
  onBlur?       : (v: number) => void;
  onCallback?   : () => void;
};

/**
 * v.2023-06-02
 * Поле number, отображается как текст, но отдаёт значение number
 */
export const TextFieldCheckNumber: FC<Props> = memo((props) => {
  const
    {
      box, autoFocus, toolTitle, label, small, shrink, defaultValue, changesValue, errors, disabled, fullWidth,
      sx: styles,
      errorField = '',
      onBlur, onClick, onCallback
    } = props,
    sx       = useStyles(styles),
    focusRef = useRef(null),
    S        = useValue(getStrNumber(String(defaultValue) || `0`)),
    Wrap     = box ? BoxWrap : GridWrap;

  // @ts-ignore
  useEffect(() => { autoFocus && focusRef?.current && focusRef.current.focus(); }, []);
  useEffect(() => { changesValue !== undefined && S.setValue(String(changesValue)); }, [changesValue]);


  const handleChange = (e: any) => {
    if (disabled) return null;
    S.setValue(getStrNumber(e.target.value));

    onCallback && onCallback();
    if (e.keyCode === 13 || e.keyCode === 27) {
      onBlur && onBlur(toNumber(S.value as string | number));
    }
  };


  const handleBlur = () => {
    onCallback && onCallback();
    onBlur && onBlur(toNumber(S.value as string | number));
  };


  return (
    <Wrap {...props}>
      <Tooltip title={toolTitle || ''}>
        <>
          <TextField
            label           = {label}
            type            = "text"
            fullWidth       = {fullWidth}
            size            = {small ? "small" : "medium"}  
            sx              = {{ ...sx.textField }}
            disabled        = {disabled}
            value           = {S.value}
            onChange        = {handleChange}
            onClick         = {onClick}
            onBlur          = {handleBlur}
            InputLabelProps = {{ shrink }}
            error           = {errors?.[errorField] ? true : false}
            helperText      = {errors?.[errorField]}
          />
        </>
      </Tooltip>
    </Wrap>
  )
});
