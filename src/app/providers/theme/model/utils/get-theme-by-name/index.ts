import { baseColors as baseColorsLight } from '../../themes/light-base';
import { baseColors as baseColorsDark } from '../../themes/dark-base';
import { UIConfiguratorProviderState, CustomTheme } from '../../types';
import { navbarColors as navbarColorsLight } from '../../themes/light-navbar';
import { navbarColors as navbarColorsDark } from '../../themes/dark-navbar';



export const getThemeByName = (controller: UIConfiguratorProviderState): CustomTheme => {
  const { mode, navbarBackgroundTheme } = controller;
  let theme;
  
  if (mode === 'light') {
    theme = {
      ...baseColorsLight,
      navbar: {
        ...navbarColorsLight[navbarBackgroundTheme]
      },
    };
  }
  else {
    theme = {
      ...baseColorsDark,
      navbar: {
        ...navbarColorsDark[navbarBackgroundTheme]
      },
    };
  }

  return theme;
}
