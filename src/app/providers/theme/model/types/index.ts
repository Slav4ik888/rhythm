import { Theme } from '@mui/material';
import { themeData } from '../mui-themes/theme';
import colors from '../mui-themes/theme/base/colors';

export type Colors = typeof colors;


export type Offset = [number?, number?]; // x, y
export type Radius = [number?, number?]; // blur, spread

export type CustomMUITheme = Theme & typeof themeData;

export type RadiusName = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'section'

export type GradientsBgColorName = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark' |
  "department_7" | "department_6" | "department_5" | "department_4" | "department_3" | "department_2" | "department_1";
  
export type ColorName = "inherit" | "text" | "transparent" | "white" | "grey" |
  "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" |
  "department_7" | "department_6" | "department_5" | "department_4" | "department_3" | "department_2" | "department_1";
