import { themeData } from '../mui-themes/theme';
import colors from '../mui-themes/theme/base/colors';

export type Colors = typeof colors;


export type Offset = [number?, number?]; // x, y
export type Radius = [number?, number?]; // blur, spread

export type CustomMUITheme = typeof themeData;

export type GradientsBgColorName = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
export type RadiusName = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'section'
