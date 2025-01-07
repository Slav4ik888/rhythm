import { FC } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ReportSmallContainerWrapper, SxSmallContainer } from '../../reports';
import { pxToRem } from 'shared/styles';



type WidthType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const sxWidth: Record<WidthType, string> = {
  'xs'  : pxToRem(40),
  'sm'  : pxToRem(60),
  'md'  : pxToRem(80),
  'lg'  : pxToRem(100),
  'xl'  : pxToRem(120),
  'xxl' : pxToRem(140),
};


const useStyles = (theme: CustomTheme) => {
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
  type       : 'simple' | 'ratio'
  title      : string
  toolTitle? : string
  kod        : string
  value      : number
  ratio?     : number
  sx         : SxSmallContainer
}

export const ReportSmallItemBox: FC<Props> = (props) => {
  const sx = useStyles(useTheme());
  const { type, title, value, ratio, toolTitle, kod } = props;


  return (
    <ReportSmallContainerWrapper
      title     = {title}
      toolTitle = {toolTitle}
      kod       = {kod}
      sx        = {props.sx}
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
