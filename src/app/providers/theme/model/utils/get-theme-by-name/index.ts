import { theme as themeStandartLight } from '../../themes/standart-light';
import { theme as themeStandartDark } from '../../themes/standart-dark';
import { ColorMode, UIConfigProviderState, CustomTheme } from '../../types';



export const getThemeByName = (controller: UIConfigProviderState): CustomTheme => {
  const { mode, navbarBackgroundTheme } = controller;
  let theme;
  
  if (mode === ColorMode.LIGHT) {
    theme = { ...themeStandartLight };
  }
  else {
    theme = { ...themeStandartDark };
  }

  return theme;
}
