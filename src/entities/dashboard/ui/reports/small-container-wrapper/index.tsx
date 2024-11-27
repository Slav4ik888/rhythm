import { FC, ReactNode } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme, pxToRem, ColorName } from 'app/providers/theme';
import { f_c_c } from 'app/styles';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  headerBGColor   : string // from MUIColors
  titleColor?     : ColorName
  title           : string
  toolTitle?      : string
  width           : string // in rem
  height?         : string // in rem
  contentBGColor? : string // from MUIColors
  children        : ReactNode
}


const useStyles = (theme: CustomTheme, props: Props) => {
  const {
    headerBGColor, titleColor, contentBGColor,
    width  = 'max-content',
    height = 'max-content',
  } = props;
  
  return {
    root: {
      border     : `1px solid ${headerBGColor}`,
      width,
      height,
      cursor     : 'default',
      mb         : 1,
    },
    header: {
      ...f_c_c,
      background : `${headerBGColor}`,
      py         : pxToRem(4),
    },
    title: {
      fontSize   : pxToRem(10),
      fontWeight : 'regular',
      textAlign  : 'center',
      color      : titleColor ? titleColor : theme.palette.comparisonIndicators_1.main,
    },
    content: {
      ...f_c_c,
      background : contentBGColor ? `${contentBGColor}` : 'transparent',
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
