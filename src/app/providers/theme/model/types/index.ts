import { Theme } from '@mui/material';
import { themeData } from '../mui-themes/theme';
import colors from '../mui-themes/theme/base/palette';

export type Colors = typeof colors;


export type Offset = [number?, number?]; // x, y
export type Radius = [number?, number?]; // blur, spread

export type CustomMUITheme = Theme & typeof themeData;

export type RadiusName = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'section'

export type GreyColor = "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900"
export type GradientsBgColorName = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark' |
  "department_7" | "department_6" | "department_5" | "department_4" | "department_3" | "department_2" | "department_1";
  
export type ColorName = "inherit" | "text" | "transparent" | "white" | "grey" |
  "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" |
  "department_7" | "department_6" | "department_5" | "department_4" | "department_3" | "department_2" | "department_1";
