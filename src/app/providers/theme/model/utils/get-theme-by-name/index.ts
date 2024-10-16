import { customPalette as customPaletteLight } from '../../themes/light-custom-palette';
import { customPalette as customPaletteDark } from '../../themes/dark-custom-palette';
import { UIConfiguratorProviderState, CustomTheme } from '../../types';
import { gradients as gradientsLight } from '../../themes/light-gradients';
import { gradients as gradientsDark } from '../../themes/dark-gradients';
import { navbarColors as navbarColorsLight } from '../../themes/light-navbar';
import { navbarColors as navbarColorsDark } from '../../themes/dark-navbar';
import { sidenavColors as sidenavColorsLight } from '../../themes/light-sidenav';
import { sidenavColors as sidenavColorsDark } from '../../themes/dark-sidenav';
import { borders } from '../../themes/base/borders';
import { breakpoints } from '../../themes/base/breakpoints';
import { Palette, Theme } from '@mui/material';



export const getThemeByName = (muiTheme: Theme, controller: UIConfiguratorProviderState): CustomTheme => {
  const { mode, navbarColor, sidenavColor } = controller;
  let theme = {
    ...muiTheme,
    ...borders,
    ...breakpoints,
  } as unknown as CustomTheme;
  
  if (mode === 'light') {
    theme.palette = {
      ...muiTheme.palette,
      ...customPaletteLight,
      ...sidenavColorsLight[sidenavColor],
      ...navbarColorsLight[navbarColor],
      gradients: gradientsLight,
    };
  }
  else {
    theme.palette = {
      ...muiTheme.palette,
      ...customPaletteDark,
      ...sidenavColorsDark[sidenavColor],
      ...navbarColorsDark[navbarColor],
      gradients: gradientsDark,
    };
  }

  return theme // as CustomTheme;
}
