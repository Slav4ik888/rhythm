import { FC, ReactNode } from 'react';
import { useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { Card, Box, Typography } from '@mui/material';
import { SxSmallContainer } from '../model/types';
import { useStyles } from './styles';
import { CopyToClipboard } from '../../copy-kod';



export interface Props {
  title      : string
  toolTitle? : string
  kod        : string
  sx         : SxSmallContainer
  children   : ReactNode
}


/** Контейнер с header */
export const ReportSmallContainerWrapper: FC<Props> = (props) => {
  const sx = useStyles(useTheme(), props);
  const { children, title, toolTitle, kod } = props;


  return (
    <Card sx={sx.root}>
      <Box sx={sx.header}>
        <Tooltip
          title  = {toolTitle}
          sxSpan = {sx.tooltipTitle}
        >
          <Typography sx={sx.title}>{title}</Typography>
        </Tooltip>
        <CopyToClipboard kod={kod} />
      </Box>

      <Box sx={sx.content}>
        {
          children
        }
      </Box>
    </Card>
  );
}
