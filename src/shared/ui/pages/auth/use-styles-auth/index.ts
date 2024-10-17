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
    backgroundColor: theme.palette.background.card,
    my: 1,
    mx: 'auto'
  }
});
