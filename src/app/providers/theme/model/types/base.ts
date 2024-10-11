import { theme } from '../../../theme/model/themes/standart-light';

export type CustomTheme = typeof theme;

export enum ColorMode {
  LIGHT = 'light',
  DARK  = 'dark'
}

export type ThemeName = 'base' | 'orange'
