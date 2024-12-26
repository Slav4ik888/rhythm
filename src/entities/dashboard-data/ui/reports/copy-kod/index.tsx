import { FC } from 'react';
import { pxToRem } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { Box } from '@mui/material';
import { useUI } from 'entities/ui';



const useStyles = () => ({
  kod: {
    width  : pxToRem(8),
    height : '100%',
  },
  tooltip: {
    width  : pxToRem(8),
    height : '100%',
  },
});


export interface Props {
  kod: string
}


/** Для копирования кода в буфер обмена */
export const CopyToClipboard: FC<Props> = (props) => {
  const sx = useStyles();
  const { setSuccessMessage } = useUI();
  const { kod } = props;

  // Копируем текст в буфер обмена
  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigator.clipboard.writeText(kod);
    setSuccessMessage('Код статистики скопирован');
  };


  return (
    <Tooltip
      title          = {`Код статистики: ${kod}. Нажмите, чтобы скопировать.`}
      enterDelay     = {0}
      enterNextDelay = {0}
      sxSpan         = {sx.tooltip}
    >
      <Box sx={sx.kod} onClick={handleCopy} />
    </Tooltip>
  );
}
