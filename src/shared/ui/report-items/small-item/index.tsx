import { FC } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme, GradientColorName, pxToRem } from 'app/providers/theme';
import { f_c_c } from 'app/styles';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  type       : 'simple' | 'ratio'
  width      : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  color      : GradientColorName
  title      : string
  value      : number
  ratio?     : number
  toolTitle? : string
}


const useStyles = (theme: CustomTheme, props: Props) => {
  const { color, width } = props;
  const sxWidth = {
    'xs'  : pxToRem(40),
    'sm'  : pxToRem(60),
    'md'  : pxToRem(80),
    'lg'  : pxToRem(100),
    'xl'  : pxToRem(120),
    'xxl' : pxToRem(140),
  };
  
  return {
    root: {
      border     : `1px solid ${theme.palette.gradients[color].state}`,
      width      : sxWidth[width],
      cursor     : 'default',
      mb         : 1,
    },
    header: {
      ...f_c_c,
      background : `${theme.palette.gradients[color].state}`,
      py         : pxToRem(4),
    },
    title: {
      fontSize   : pxToRem(10),
      fontWeight : 'regular',
      textAlign  : 'center',
      color      : theme.palette.comparisonIndicators_1.main,
    },
    content: {
      ...f_c_c,
      background : `${theme.palette.gradients[color].main}`,
    },
    value: {
      fontSize   : pxToRem(30),
      // fontWeight : 'bold',
      color      : theme.palette.comparisonIndicators_1.main,
    },
    divider: {
      fontSize   : pxToRem(20),
      color      : theme.palette.dark.main,
      mx         : 1,
    }
  }
};


export const ReportSmallItemBox: FC<Props> = (props) => {
  const sx = useStyles(useTheme(), props);
  const { type, color, title, value, ratio, toolTitle } = props;

  return (
    <MDBox
      borderRadius  = 'xs'
      sx = {sx.root}
    >
      <Tooltip
        title     = {toolTitle}
        placement = 'top'
      >
        <MDBox sx={sx.header}>
          <MDTypography sx={sx.title}>{title}</MDTypography>
        </MDBox>

        <MDBox sx={sx.content}>
          <MDTypography sx={sx.value}>{value}</MDTypography>
          {
            type === 'ratio' && <>
              <MDTypography sx={sx.divider}>/</MDTypography>
              <MDTypography sx={sx.value}>{ratio}</MDTypography>
            </>
          }
        </MDBox>
      </Tooltip>
    </MDBox>
  );
}
