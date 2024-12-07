import { FC, ReactNode } from 'react';
import { useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { Card, Box, Typography } from '@mui/material';
import { useUI } from 'entities/ui';
import { SxSmallContainer } from '../model/types';
import { useStyles } from './styles';



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
  const { setSuccessMessage } = useUI();
  const { children, title, toolTitle, kod } = props;

  // Копируем текст в буфер обмена
  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigator.clipboard.writeText(kod);
    setSuccessMessage('Код статистики скопирован');
  };


  return (
    <Card sx={sx.root}>
      <Box sx={sx.header}>
        <Tooltip
          title  = {toolTitle}
          sxSpan = {sx.tooltipTitle}
        >
          <Typography sx={sx.title}>{title}</Typography>
        </Tooltip>
        <Tooltip
          title          = {`Код статистики: ${kod}. Нажмите, чтобы скопировать.`}
          enterDelay     = {0}
          enterNextDelay = {0}
          sxSpan         = {sx.tooltipKod}
        >
          <Box sx={sx.kod} onClick={handleCopy} />
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
