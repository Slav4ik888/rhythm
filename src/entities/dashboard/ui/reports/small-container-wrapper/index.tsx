import { FC, ReactNode } from 'react';
import { CustomTheme, useTheme, pxToRem, ColorName } from 'app/providers/theme';
import { f } from 'app/styles';
import { Tooltip } from 'shared/ui/tooltip';
import { Card, Box, Typography } from '@mui/material';



export interface SxSmallContainer {
  root?: {
    width?  : string // in rem
    height? : string // in rem
  } | any,
  header: {
    color?     : ColorName
    background : string // from MUIColors
  } | any,
  content?: {
    background? : string // from MUIColors
    height?     : string // in rem
  } | any

  growthResult?: {
    root?: any
    growthChange?: {
      size?: number // 0.7 | 0.8 | 0.9 | 1 | 1.25 | 1.5 in rem
    } | any
    measurementIcon?: {
      size?: number // 0.7 | 0.8 | 0.9 | 1 | 1.25 | 1.5 in rem
    } | any
    growthIcon?: {
      scale?: number
    } | any
  }
}

interface Props {
  title      : string
  toolTitle? : string
  sx         : SxSmallContainer
  children   : ReactNode
}


const useStyles = (theme: CustomTheme, { sx }: Props) => {
  const { header, root, content } = sx;


  return {
    root: {
      ...f('c'),
      // border     : `1px solid ${header.background}`,
      width      : root?.width  || 'max-content',
      height     : root?.height || 'max-content',
      maxHeight  : root?.height || 'max-content',
      cursor     : 'default',
      overflow   : 'hidden',
      mb         : 1,
      ...root
    },
    header: {
      ...f('-c-c'),
      py         : pxToRem(4),
      ...header
    },
    title: {
      fontSize   : pxToRem(10),
      fontWeight : 'regular',
      textAlign  : 'center',
      color      : header.color ? header.color : theme.palette.comparisonIndicators_1.main,
    },
    content: {
      ...f('-c-c'),
      background : content?.background || 'transparent',
      px         : 2,
      pt         : 1,
      ...content
    }
  }
};


/** Контейнер с header */
export const ReportSmallContainerWrapper: FC<Props> = (props) => {
  const sx = useStyles(useTheme(), props);
  const { children, title, toolTitle } = props;

  return (
    <Card sx={sx.root}>
      <Box sx={sx.header}>
        <Tooltip title={toolTitle}>
          <Typography sx={sx.title}>{title}</Typography>
        </Tooltip>
      </Box>

      <Box sx={sx.content}>
        {
          children
        }
      </Box>
    </Card>
  );
}
