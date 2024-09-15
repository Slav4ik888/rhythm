import { FC, memo } from 'react';
import { Card } from '@mui/material';
import { GradientsBgColorName, CustomMUITheme, linearGradient, useTheme, pxToRem } from 'app/providers/theme';
import { isStr } from 'shared/lib/validators';



interface StyleConfig {
  bgColor?   : GradientsBgColorName
  fullWidth? : boolean
  // minWidth?  : string
  width?     : number | string
}


const useStyles = (theme: CustomMUITheme, config: StyleConfig) => {
  const { bgColor = 'info', width, fullWidth, ...rest } = config;

  const style = {
    display       : 'flex',
    flexDirection : 'row',
    width         : ! width ? 'max-content' : isStr(width) ? width : pxToRem(width as number),
    background    : linearGradient(theme.palette.gradients[bgColor].main, theme.palette.gradients[bgColor].state),
    ...rest
  };

  if (fullWidth) {
    // @ts-ignore
    style.minWidth = '100%';
    style.width = '100%';
  }

  return style
};



interface Props  {
  bgColor?   : GradientsBgColorName
  fullWidth? : boolean
  // minWidth?  : string
  width?     : number | string
  my?        : number
  mt?        : number
  p?         : number
  pr?        : number
  pt?        : number
  children   : React.ReactNode
}

/**
 * Пространство для ограничения (группировки) графиков по одному отделению (отделу, подразделению)
 */
export const DashboardBlockContainer: FC<Props> = memo(({ children, ...rest }) => {
  const sx = useStyles(useTheme(), { ...rest })

  return (
    <Card sx={sx}>
      {children}
    </Card>
  );
});
