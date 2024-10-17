import { Theme } from '@mui/material';
import { borders } from '../themes/base/borders';
import { breakpoints } from '../themes/base/breakpoints';
import { customPalette } from '../themes/light-custom-palette';
import { gradients } from '../themes/light-gradients';
import { NavbarColorName } from './navbar';
import { SidenavColorName } from './sidenav';


export interface ThemeColorItem {
  light        : string
  main         : string
  dark         : string
  focus        : string
  contrastText : string
}


export type CustomPalette = typeof customPalette;
export type Borders       = typeof borders;
export type Breakpoints   = typeof breakpoints;
export type Gradients     = typeof gradients;


export type CustomTheme =
  & Theme
  & { palette     : CustomPalette & { gradients: Gradients } }
  & { borders     : Borders }
  & { breakpoints : Breakpoints }
  // & { navbar      : NavbarColors };


export type ThemeName = 'base' | 'orange'

export type Offset = [number?, number?]; // x, y
export type Radius = [number?, number?]; // blur, spread
export type RadiusName = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'section'
export type Shadows = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inset';

export type GreyColor = 'grey-100' | 'grey-200' | 'grey-300' | 'grey-400' | 'grey-500' | 'grey-600' | 'grey-700' | 'grey-800' | 'grey-900'

export type BaseColorName =
  | 'inherit'
  | 'text' | 'transparent' | 'white' | 'black'
  | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark'
  | 'growth'  | 'fall' | 'unchanged'
  // | 'department_7'       | 'department_6'       | 'department_5'       | 'department_4'       | 'department_3'       | 'department_2'       | 'department_1'
  | 'department_7_title' | 'department_6_title' | 'department_5_title' | 'department_4_title' | 'department_3_title' | 'department_2_title' | 'department_1_title';


/** Только те которые есть в Palette */
export type ColorName = BaseColorName | SidenavColorName | NavbarColorName

export type GradientColorName =
  | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark'
  | 'department_7' | 'department_6' | 'department_5' | 'department_4' | 'department_3' | 'department_2' | 'department_1';

export type ColoredShadowsName =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark'

// type NavbarColorName = 'navbar_white' | 'navbar_green' | 'navbar_grey'
// type ColorName = 'text' | 'transparent' | 'white' | 'black'
