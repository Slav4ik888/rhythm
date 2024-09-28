import { FC, memo } from 'react';
import { Box, Card } from '@mui/material';
import { GradientsBgColorName, CustomMUITheme, linearGradient, useTheme, pxToRem, ColorName } from 'app/providers/theme';
import { isStr } from 'shared/lib/validators';
import { MDTypography } from 'shared/ui/mui-design-components';



interface StyleConfig {
  bgColor?   : GradientsBgColorName
  fullWidth? : boolean
  // minWidth?  : string
  width?     : number | string
}


const useStyles = (theme: CustomMUITheme, config: StyleConfig) => {
  const { bgColor = 'info', width, fullWidth, ...rest } = config;

  const rootStyle = {
    display       : 'flex',
    flexDirection : 'column',
    width         : ! width ? 'max-content' : isStr(width) ? width : pxToRem(width as number),
    minWidth      : pxToRem(900),
    minHeight     : pxToRem(400),
    background    : linearGradient(theme.palette.gradients[bgColor].main, theme.palette.gradients[bgColor].state),
    my            : 5,
    p             : 3,
    pr            : 0,
    ...rest
  };

  if (fullWidth) {
    // @ts-ignore
    rootStyle.minWidth = '100%';
    rootStyle.width = '100%';
  }

  return {
    root: { ...rootStyle },
    content: {
      display       : 'flex',
      flexDirection : 'row',
      width         : '100%'
    },
    title: {
      mb : 2,
      pr : 4
    }
  }
};



interface Props  {
  title?      : string
  titleColor? : ColorName
  bgColor?    : GradientsBgColorName
  fullWidth?  : boolean
  // minWidth?  : string
  width?      : number | string
  my?         : number
  mt?         : number
  p?          : number
  pr?         : number
  pt?         : number
  children    : React.ReactNode
}

/**
 * Пространство для ограничения (группировки) графиков по одному отделению (отделу, подразделению)
 */
export const DashboardBoxContainer: FC<Props> = memo(({ title, titleColor, children, ...rest }) => {
  const sx = useStyles(useTheme(), { ...rest })

  return (
    <Card sx={sx.root}>
      {
        title && <Box sx={sx.title}>
          <MDTypography color={titleColor} variant="h3" textTransform="none">
            {title}
          </MDTypography>
        </Box>
      }
      <Box sx={sx.content}>
        {children}
      </Box>
    </Card>
  );
});
