import { CustomTheme, getTypography, rgba } from 'app/providers/theme';
import { UIConfiguratorProviderState } from 'app/providers/theme/model/types';



export const sxNavbarIconButton = (theme: CustomTheme) => {
  const { breakpoints } = theme;

  return {
    px: 1,

    "& .material-icons, .material-icons-round": {
      fontSize: `${getTypography(theme).size.xl} !important`,
    },

    "& .MuiTypography-root": {
      display: "none",

      [breakpoints.up("sm")]: {
        display    : "inline-block",
        lineHeight : 1.2,
        ml         : 0.5,
      },
    },
  }
};


/** Styles for the navbar icons */
export const sxNavbarIconsStyle = (
  theme             : CustomTheme,
  navbarTransparent : boolean,
  light             : boolean | undefined
) => {
  const { palette: { dark, white, text, mode } } = theme;
  const darkMode = mode === 'dark';

  return {
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (navbarTransparent && ! light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  }
};
