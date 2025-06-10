import { customPalette as customPaletteLight } from '../../themes/light-custom-palette';
import { customPalette as customPaletteDark } from '../../themes/dark-custom-palette';
import { UIConfiguratorProviderState, CustomTheme } from '../../types';
import { gradients as gradientsLight } from '../../themes/light-gradients';
import { gradients as gradientsDark } from '../../themes/dark-gradients';
import { navbarThemes as navbarThemesLight } from '../../themes/light-navbar';
import { navbarThemes as navbarThemesDark } from '../../themes/dark-navbar';
import { sidebarThemes as sidebarThemesLight } from '../../themes/light-sidebar';
import { sidebarThemes as sidebarThemesDark } from '../../themes/dark-sidebar';
import { borders } from '../../themes/base/borders';
import { breakpoints } from '../../themes/base/breakpoints';
import { Theme } from '@mui/material/styles';


export const getThemeByName = (muiTheme: Theme, controller: UIConfiguratorProviderState): CustomTheme => {
  const { mode, navbarColor, sidebarColor } = controller;

  const theme = {
    ...muiTheme,
    borders: { ...borders },
    breakpoints: { ...breakpoints },
  } as unknown as CustomTheme;

  if (mode === 'light') {
    theme.palette = {
      ...muiTheme.palette,
      ...customPaletteLight,
      ...sidebarThemesLight[sidebarColor],
      ...navbarThemesLight[navbarColor],
      gradients: gradientsLight,
    };
  }
  else {
    theme.palette = {
      ...muiTheme.palette,
      ...customPaletteDark,
      ...sidebarThemesDark[sidebarColor],
      ...navbarThemesDark[navbarColor],
      gradients: gradientsDark,
    };
  }

  return theme // as CustomTheme;
}
