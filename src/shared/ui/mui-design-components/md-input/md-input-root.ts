/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { CustomTheme } from 'app/providers/theme';
import { pxToRem } from 'shared/styles';



interface OwnerState {
  error?    : boolean
  success?  : boolean
  disabled? : boolean
}

// @ts-ignore
export default styled(TextField)(({ theme, ownerState }: { theme: CustomTheme, ownerState: OwnerState }) => {
  const { palette } = theme;
  const { error, success, disabled } = ownerState;
  const { grey, text, transparent, error: colorError, success: colorSuccess, mode } = palette;

  const darkMode = mode === 'dark';

  // styles for the input with error={true}
  const errorStyles = () => ({
    // eslint-disable-next-line max-len
    backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline, &:after': {
        borderColor: colorError.main,
      },
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: colorError.main,
    },
  });

  // styles for the input with success={true}
  const successStyles = () => ({
    // eslint-disable-next-line max-len
    backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%234CAF50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline, &:after': {
        borderColor: colorSuccess.main,
      },
    },
    '& .Mui-disabled': {
      backgroundColor:  darkMode ? 'inherit' : `${grey[200]} !important`,
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: colorSuccess.main,
    },
  });

  return {
    // backgroundColor: disabled ? `${grey[200]} !important` : transparent.main,
    backgroundColor: transparent.main,
    pointerEvents: disabled ? 'none' : 'auto',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: text.light,
    },
    ...(error && errorStyles()),
    ...(success && successStyles()),
  };
});
