import { CustomTheme } from 'app/providers/theme';

/** Styles for Signup & Login pages */
export const useStylesAuth = (theme: CustomTheme) => ({
  gridItem: {
    '&.MuiGrid-root.MuiGrid-item': {
      pl: 0
    },
    width: '100%'
  },
  textField: {
    '& .MuiInputLabel-root': {
      color: 'text.main'
    },
    '& .MuiOutlinedInput-input:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.mode === 'dark' ? '#292929' : '#fff'} inset`,
      WebkitTextFillColor: 'text.main',
      caretColor: 'text.main',
      borderRadius: 'inherit',
    },
    // backgroundColor: theme.palette.background.card,
    my: 1,
    mx: 'auto'
  }
});
