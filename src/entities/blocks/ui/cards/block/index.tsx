import { FC, memo } from 'react';
import { Card } from '@mui/material';
import { GradientsBgColorName, CustomMUITheme, linearGradient, useTheme, pxToRem } from 'app/providers/theme';
import { isStr } from 'shared/lib/validators';



interface StyleConfig {
  bgColor?   : GradientsBgColorName
  width?     : number | string
}


const useStyles = (theme: CustomMUITheme, config: StyleConfig) => {
  const { bgColor = 'info', width, ...rest } = config;

  return {
    sxRoot: {
      display: 'flex',
      flexDirection: 'row',
      width: ! width ? '100%' : isStr(width) ? width : pxToRem(width as number),
      background: linearGradient(theme.palette.gradients[bgColor].main, theme.palette.gradients[bgColor].state),
      ...rest
    }
  }
};



interface Props  {
  bgColor?   : GradientsBgColorName
  width?     : number | string
  my?        : number
  p?         : number
  pr?        : number
  children   : React.ReactNode
}

/**
 * Пространство для ограничения (группировки) графиков по одному отделению (отделу, подразделению)
 */
export const DashboardBlockContainer: FC<Props> = memo(({ children, ...rest }) => {
  const { sxRoot } = useStyles(useTheme(), { ...rest })

  return (
    <Card sx={sxRoot}>
      {children}
    </Card>
  );
});
