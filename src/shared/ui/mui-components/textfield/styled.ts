import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { CustomTheme } from 'app/providers/theme';
import { pxToRem, rgbaFromHex } from 'shared/styles';



interface OwnerState {
  error?: boolean
  success?: boolean
  disabled?: boolean
}

export default styled(TextField)(({ theme, ownerState }: { theme: CustomTheme, ownerState: OwnerState }) => {
  const { palette } = theme;
  const { error, success, disabled } = ownerState;
  const { background: { card }, text, transparent, error: colorError, success: colorSuccess, mode } = palette;
  const isDark = mode === 'dark';

  return {
    // MuiInputBase
    '& .MuiInputBase-root': {
      // margin     : `${pxToRem(8)} auto`,
      background : rgbaFromHex(card, 0.8)
    },
    '& .MuiInputBase-input': {
      padding  : `${pxToRem(8)} ${pxToRem(16)}`,
      fontSize : pxToRem(18),
      color    : text.main,
    },
    // MuiInputLabel
    '& .MuiInputLabel-root': {
      color: text.main
    },
    '& .MuiInputLabel-root.Mui-disabled': {
      color: text.light
    },
    // MuiOutlinedInput-input
    '& .MuiOutlinedInput-input:focus': {
      color: text.contrastText,
    },
    '& .MuiOutlinedInput-input:-webkit-autofill': {
      WebkitBoxShadow     : `0 0 0 100px ${isDark ? '#292929' : '#fff'} inset`,
      WebkitTextFillColor : text.main,
      caretColor          : text.main,
      borderRadius        : 'inherit',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: text.light // isDark ? '#4f4f4f' : '#a6a6a6' // 'text.light'
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: text.light
    },
    // MuiFormHelperText
    '& .MuiFormHelperText-root': {
      color: text.main
    },

  }
})
