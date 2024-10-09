import { CustomTheme } from 'app/providers/theme-old';

/** Styles for Signup & Login pages */
export const useStylesAuth = (theme: CustomTheme) => ({
  gridItem: {
    '&.MuiGrid-root.MuiGrid-item': {
      pl: 0
    },
    width: '100%'
  },
  textField: {
    backgroundColor: theme.body.background,
    my: 1,
    mx: 'auto'
  }
});
