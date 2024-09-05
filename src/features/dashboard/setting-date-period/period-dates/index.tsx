import { ChangeEvent, FC, forwardRef, MutableRefObject } from 'react';
import { pxToRem } from 'app/providers/theme';
import { TextField } from '@mui/material';
import { getMsFromRef } from '../utils';
import { CheckIsChanged } from '..';



interface Props {
  type             : 'start' | 'end'
  ref              : MutableRefObject<null>
  onCheckIsChanged : ({ start, end, period }: CheckIsChanged) => void
}

// @ts-ignore
export const PeriodDate: FC<Props> = forwardRef(({ type, onCheckIsChanged }, ref) => {
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onCheckIsChanged({ [type]: getMsFromRef(ref) });


  return (
    <TextField
      inputRef = {ref}
      variant  = "outlined"
      type     = "date"
      size     = "small"
      sx       = {{ width: pxToRem(120), mr: 1 }}
      onChange = {handleChange}
    />
  )
});
