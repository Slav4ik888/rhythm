import { FC } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme, pxToRem, ColorName, MUIColors } from 'app/providers/theme';
import { f_c_c } from 'app/styles';
import { Tooltip } from 'shared/ui/tooltip';
import { ReportSmallContainerWrapper } from '../../reports';


type WidthType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const sxWidth: Record<WidthType, string> = {
  'xs'  : pxToRem(40),
  'sm'  : pxToRem(60),
  'md'  : pxToRem(80),
  'lg'  : pxToRem(100),
  'xl'  : pxToRem(120),
  'xxl' : pxToRem(140),
};


const useStyles = (theme: CustomTheme, props: Props) => {
  const { headerBGColor, width } = props;
  
  
  return {
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

interface Props {
  type            : 'simple' | 'ratio'
  width           : WidthType
  height?         : string // in rem
  headerBGColor   : string // from MUIColors
  titleColor?     : ColorName
  title           : string
  contentBGColor? : string // from MUIColors
  value           : number
  ratio?          : number
  toolTitle?      : string
}

export const ReportSmallItemBox: FC<Props> = (props) => {
  const sx = useStyles(useTheme(), props);
  const { type, titleColor, width, title, value, ratio, toolTitle, headerBGColor, contentBGColor, height } = props;


  return (
    <ReportSmallContainerWrapper
      headerBGColor  = {headerBGColor}
      titleColor     = {titleColor}
      title          = {title}
      toolTitle      = {toolTitle}
      width          = {sxWidth[width]}
      height         = {height}
      contentBGColor = {contentBGColor}
    >
      <MDTypography sx={sx.value}>{value}</MDTypography>
      {
        type === 'ratio' && <>
          <MDTypography sx={sx.divider}>/</MDTypography>
          <MDTypography sx={sx.value}>{ratio}</MDTypography>
        </>
      }
    </ReportSmallContainerWrapper>
  );
}
