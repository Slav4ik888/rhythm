import { FC, memo } from 'react';
import { Card } from '@mui/material';
import { GradientsBgColorName, CustomMUITheme, linearGradient, useTheme, pxToRem } from 'app/providers/theme';
import { isStr } from 'shared/lib/validators';



interface StyleConfig {
  bgColor?   : GradientsBgColorName
  width?     : number | string
  fullWidth? : boolean
}


const useStyles = (theme: CustomMUITheme, config: StyleConfig) => {
  const { bgColor = 'info', width, fullWidth, ...rest } = config;

  return {
    sxRoot: {
      width: fullWidth ? '100%' : isStr(width) ? width : pxToRem(width as number),
      background: linearGradient(theme.palette.gradients[bgColor].main, theme.palette.gradients[bgColor].state),
      ...rest
    }
  }
};



interface Props {
  bgColor?   : GradientsBgColorName
  width?     : number | string
  my?        : number
  p?         : number
  fullWidth? : boolean
  children   : React.ReactNode
}

/**
 * Пространство для ограничения (группировки) графиков по одному отделению (отделу, подразделению)
 */
export const DashboardBlock: FC<Props> = memo(({ children, ...rest }) => {
  const { sxRoot } = useStyles(useTheme(), { ...rest })

  return (
    <Card sx={sxRoot}>
      {children}
    </Card>
  );
});
