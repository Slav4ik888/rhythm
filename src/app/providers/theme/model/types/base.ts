import { Theme } from '@mui/material';
import { borders, breakpoints } from '../themes/base';
import { baseColors } from '../themes/light-base';
import { NavbarColors } from './navbar';


export type BaseColors  = typeof baseColors;
export type Borders     = typeof borders;
export type Breakpoints = typeof breakpoints;


export type CustomTheme =
  & Theme
  & BaseColors
  & { borders: Borders }
  & { breakpoints: Breakpoints }
  & { navbar: NavbarColors };


export type ThemeName = 'base' | 'orange'

export type Offset = [number?, number?]; // x, y
export type Radius = [number?, number?]; // blur, spread
