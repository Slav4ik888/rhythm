import { FC, ReactNode } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme, pxToRem, ColorName } from 'app/providers/theme';
import { f, fc, f_c_c } from 'app/styles';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  headerBGColor   : string // from MUIColors
  titleColor?     : ColorName
  title           : string
  toolTitle?      : string
  width?          : string // in rem
  height?         : string // in rem
  contentBGColor? : string // from MUIColors
  contentHeight?  : string // in rem
  children        : ReactNode
}


const useStyles = (theme: CustomTheme, props: Props) => {
  const {
    headerBGColor, titleColor, contentBGColor,
    width         = 'max-content',
    height        = 'max-content',
    contentHeight = 'max-content',
  } = props;
  
  return {
    root: {
      ...fc,
      border     : `1px solid ${headerBGColor}`,
      width,
      height,
      maxHeight  : height,
      cursor     : 'default',
      overflow   : 'hidden',
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
      height     : contentHeight,
      maxHeight  : contentHeight,
    }
  }
};


/** Контейнер с header */
export const ReportSmallContainerWrapper: FC<Props> = (props) => {
  const sx = useStyles(useTheme(), props);
  const { children, title, toolTitle } = props;

  return (
    <MDBox sx={sx.root} borderRadius='xs'>
      <MDBox sx={sx.header}>
        <Tooltip title={toolTitle}>
          <MDTypography sx={sx.title}>{title}</MDTypography>
        </Tooltip>
      </MDBox>

      <MDBox sx={sx.content}>
        {
          children
        }
      </MDBox>
    </MDBox>
  );
}
