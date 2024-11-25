import { FC, ReactNode } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme, pxToRem, ColorName } from 'app/providers/theme';
import { f_c_c } from 'app/styles';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  // type        : 'simple' | 'ratio'
  // width       : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  headerBGColor   : ColorName
  titleBGColor?   : ColorName
  title           : string
  toolTitle?      : string
  width           : string // in rem
  height          : string // in rem
  contentBGColor? : ColorName
  children        : ReactNode
}


const useStyles = (theme: CustomTheme, props: Props) => {
  const { headerBGColor, titleBGColor, contentBGColor, width, height } = props;
  
  return {
    root: {
      border     : `1px solid ${theme.palette[headerBGColor].main}`,
      width,
      height,
      cursor     : 'default',
      mb         : 1,
    },
    header: {
      ...f_c_c,
      background : `${theme.palette[headerBGColor].main}`,
      py         : pxToRem(4),
    },
    title: {
      fontSize   : pxToRem(10),
      fontWeight : 'regular',
      textAlign  : 'center',
      color      : titleBGColor ? theme.palette[titleBGColor].main : theme.palette.comparisonIndicators_1.main,
    },
    content: {
      ...f_c_c,
      background : contentBGColor ? `${theme.palette[contentBGColor].main}` : 'transparent',
    }
  }
};


/** Контейнер с header */
export const ReportSmallContainerWrapper: FC<Props> = (props) => {
  const sx = useStyles(useTheme(), props);
  const { children, title, toolTitle } = props;

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
          {
            children
          }
        </MDBox>
      </Tooltip>
    </MDBox>
  );
}
